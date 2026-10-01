# Prompt vs. Context vs. Harness Engineering: The Difference That Actually Matters

On August 26, 2026, a developer asked Claude to build a sandbox mechanism meant to stop AI agents from filling up his disk with temporary files. Claude wrote a script to detect whether other agents were still active before deleting their temp data. The review process flagged the approach twice and downgraded the model partway through. Then, while testing whether the sandbox actually worked, the agent ran a recursive delete against the developer's real home directory instead of the isolated test path. Roughly 700 gigabytes gone.

This wasn't an isolated event either. Anthropic's own Claude Code repository has at least five separately filed incidents describing the same failure class over six months: home directories or root paths getting wiped by an agent-constructed command that nothing in the surrounding system caught before it ran.

The instructions Claude was given were reasonable. The reasoning that led to the test wasn't obviously reckless. What failed was the layer around the model, the part that should have made a destructive command targeting a real home directory architecturally impossible to run. That layer has a name now: the **harness**. And the industry spent a lot of 2026 figuring out it's a genuinely different discipline from the two that came before it.

## Three layers, three different jobs

**Prompt engineering** is the oldest and narrowest of the three. It's the wording of a single request, the part a person writes by hand to get a better answer out of one model call. If a model misreads a clearly written instruction, that's a prompt problem, and it's usually visible immediately because the answer comes back obviously wrong.

**Context engineering** is broader. It's the discipline of deciding what information actually fills the model's context window before it answers: conversation history, retrieved documents, tool definitions, memory, application state. Good context engineering doesn't mean stuffing in everything available. More context that isn't relevant adds noise and makes the model *more* likely to miss what matters, not less. It means curating what the model sees for a given call.

**Harness engineering** is different from both, and it's the one that doesn't show up in the answer itself. It's the system that runs around the model across an entire task, not a single call: executing tool calls, deciding what's allowed to run without asking, catching a bad result before it reaches the next step, retrying failures, enforcing limits, and giving the whole thing a way to stop. A model with perfect instructions and perfect context can still fail here, because this layer governs what happens *after* the model decides what it wants to do, not what it's told or what it knows.

| Dimension | Prompt Engineering | Context Engineering | Harness Engineering |
|---|---|---|---|
| Controls | The wording of one request | What information the model sees | What the agent is allowed to do, and what catches it when it's wrong |
| Operates at | A single model call | A session or task | The full execution loop, across many calls |
| Failure looks like | The model misunderstands a clear instruction | The model confidently reasons over the wrong information | A well-instructed, well-informed agent still does something destructive or unrecoverable |
| Who notices first | Immediately, the output is visibly wrong | Often much later, the output looks plausible but is built on bad input | Sometimes never, until the one time a guardrail that didn't exist actually mattered |

## This isn't just a terminology debate, the benchmark numbers prove it

If the `rm -rf` incident sounds like an edge case, a cluster of 2026 research on agent benchmarking shows the same gap shows up constantly, just measured in performance instead of catastrophe. Multiple papers have now documented that holding a model completely fixed and only changing the harness around it moves benchmark scores by a wide margin, often more than switching to a different model entirely.

On SWE-bench Pro, Claude Opus 4.5 scores 45.9% under a standardized evaluation scaffold called SEAL, and 55.4% under the Claude Code harness. That's roughly a 9.5 point swing with the exact same model weights. The Holistic Agent Leaderboard has reported single-model swings of up to nearly 48 percentage points on SWE-bench Verified Mini depending purely on scaffold choice. One analysis found a basic scaffold scoring 23% on SWE-bench Pro while an optimized version of the same setup scored over 45%, a 22-point gain from harness changes alone, no model upgrade involved. In one case, adding a single search subagent to an otherwise identical setup was enough to flip the ranking order between two different frontier models on the same benchmark.

The researchers behind one of these papers put it plainly: a benchmark score is the joint outcome of the model *and* the harness, but published leaderboards almost always report it as if it were a model property alone.

> 💡 Harness-driven swings routinely dwarf the 2 to 4 percentage point differences that get reported as meaningful progress between model generations. Reading "Model X scores 65% on SWE-bench" without knowing what harness ran it is, by this research, closer to meaningless than people tend to assume.

## What was actually missing in the rm -rf case

It's worth being specific about which layer failed, because it wasn't a prompt problem or a context problem. The model wasn't confused about what the user wanted, and it wasn't missing relevant information about the task. What was missing was a boundary the harness should have enforced: no architectural check that stopped a recursive delete from resolving to a real home directory, and no sandbox isolation strong enough to make the test environment's filesystem genuinely separate from the host's.

Related incidents reported in the same repository describe the same gap from different angles: a destructive command hidden inside a self-written helper script, a shell variable expansion that silently turned a scoped delete into a root-level one, a cleanup step that restored the real `$HOME` value right before the delete ran against it.

None of that is something a better prompt fixes. A better prompt doesn't stop a correctly-written, syntactically valid command from executing against the wrong path. That's what a harness is for.

<div style="margin:32px 0;">
<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<defs>
<marker id="hnsArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#8b8ba7"/></marker>
<marker id="hnsArrRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#f87171"/></marker>
<marker id="hnsArrGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#4ade80"/></marker>
</defs>
<rect x="4" y="4" width="892" height="552" rx="18" fill="#0b0b14" stroke="#2a2342" stroke-width="1.5"/>
<text x="40" y="34" font-size="11" font-weight="700" letter-spacing="2" fill="#a78bfa">THE SAME TASK, THREE LAYERS</text>
<rect x="40" y="50" width="820" height="62" rx="12" fill="#151521" stroke="#2f2f45" stroke-width="1.3"/>
<circle cx="70" cy="81" r="13" fill="#2f2f45"/>
<text x="70" y="85" text-anchor="middle" font-size="10" font-weight="700" fill="#c7c7d9">01</text>
<text x="96" y="77" font-size="13.5" font-weight="700" fill="#e2e8f0">Prompt layer</text>
<text x="96" y="96" font-size="11.5" fill="#8b8ba7">"Build a sandbox for temp file cleanup." Reasonable, clearly worded. Nothing wrong here.</text>
<text x="838" y="86" text-anchor="end" font-size="10.5" font-weight="700" fill="#4ade80">OK</text>
<line x1="450" y1="112" x2="450" y2="126" stroke="#8b8ba7" stroke-width="1.5" marker-end="url(#hnsArr)"/>
<rect x="40" y="130" width="820" height="62" rx="12" fill="#151521" stroke="#2f2f45" stroke-width="1.3"/>
<circle cx="70" cy="161" r="13" fill="#2f2f45"/>
<text x="70" y="165" text-anchor="middle" font-size="10" font-weight="700" fill="#c7c7d9">02</text>
<text x="96" y="157" font-size="13.5" font-weight="700" fill="#e2e8f0">Context layer</text>
<text x="96" y="176" font-size="11.5" fill="#8b8ba7">Prior conversation, project files, earlier test results. All relevant, all accurate.</text>
<text x="838" y="166" text-anchor="end" font-size="10.5" font-weight="700" fill="#4ade80">OK</text>
<line x1="450" y1="192" x2="450" y2="206" stroke="#8b8ba7" stroke-width="1.5" marker-end="url(#hnsArr)"/>
<rect x="40" y="210" width="820" height="310" rx="12" fill="#1f1115" stroke="#7f1d1d" stroke-width="1.5"/>
<circle cx="70" cy="241" r="13" fill="#7f1d1d"/>
<text x="70" y="245" text-anchor="middle" font-size="10" font-weight="700" fill="#fca5a5">03</text>
<text x="96" y="238" font-size="13.5" font-weight="700" fill="#f1f5f9">Harness layer</text>
<text x="96" y="256" font-size="11.5" fill="#f87171">This is where it actually failed.</text>
<rect x="70" y="296" width="186" height="64" rx="10" fill="#181825" stroke="#3f3f52" stroke-width="1.3"/>
<text x="163" y="322" text-anchor="middle" font-size="10" font-weight="700" letter-spacing="1.2" fill="#8b8ba7">TOOL CALL</text>
<text x="163" y="342" text-anchor="middle" font-size="12.5" fill="#e2e8f0">delete temp path</text>
<line x1="256" y1="328" x2="286" y2="328" stroke="#8b8ba7" stroke-width="1.5" marker-end="url(#hnsArr)"/>
<rect x="296" y="286" width="224" height="84" rx="10" fill="#181825" stroke="#3f3f52" stroke-width="1.3"/>
<text x="408" y="310" text-anchor="middle" font-size="10" font-weight="700" letter-spacing="1.2" fill="#8b8ba7">GUARDRAIL CHECK</text>
<text x="408" y="331" text-anchor="middle" font-size="12.5" fill="#e2e8f0">does this path resolve to</text>
<text x="408" y="349" text-anchor="middle" font-size="12.5" fill="#e2e8f0">a protected directory?</text>
<path d="M 520 328 H 548 V 284 H 568" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#hnsArrGreen)"/>
<path d="M 520 328 H 548 V 400 H 568" fill="none" stroke="#f87171" stroke-width="1.5" marker-end="url(#hnsArrRed)"/>
<rect x="576" y="248" width="252" height="72" rx="10" fill="#0f2419" stroke="#166534" stroke-width="1.3" stroke-dasharray="5 4"/>
<text x="592" y="270" font-size="9" font-weight="700" letter-spacing="1.2" fill="#4ade80">WHAT SHOULD HAVE EXISTED</text>
<text x="592" y="290" font-size="11.5" fill="#86efac">Hard block on paths resolving to</text>
<text x="592" y="307" font-size="11.5" fill="#86efac">$HOME or root; isolated sandbox.</text>
<rect x="576" y="368" width="252" height="66" rx="10" fill="#3f1419" stroke="#991b1b" stroke-width="1.3"/>
<text x="592" y="390" font-size="9" font-weight="700" letter-spacing="1.2" fill="#f87171">WHAT ACTUALLY HAPPENED</text>
<text x="592" y="409" font-size="11.5" fill="#fca5a5">No such check existed. The</text>
<text x="592" y="426" font-size="11.5" fill="#fca5a5">command ran exactly as written.</text>
<line x1="702" y1="434" x2="702" y2="450" stroke="#f87171" stroke-width="1.5" marker-end="url(#hnsArrRed)"/>
<rect x="576" y="454" width="252" height="44" rx="10" fill="#991b1b"/>
<text x="702" y="482" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">~700 GB deleted</text>
<text x="70" y="404" font-size="11.5" fill="#8b8ba7" font-style="italic">Neither a better prompt nor better</text>
<text x="70" y="422" font-size="11.5" fill="#8b8ba7" font-style="italic">context prevents this outcome.</text>
<text x="70" y="440" font-size="11.5" fill="#8b8ba7" font-style="italic">Only the boundary does.</text>
</svg>
</div>

## What the harness is actually made of

Strip the diagram down and a harness is a small number of concrete responsibilities, not one big thing:

- **Permissions.** The agent needs to know what it's allowed to do without asking, and what it should never be allowed to do regardless of what it reasons its way into.
- **Tool execution.** A way to run tool calls (files, terminal access, external integrations) and a *separate* step that checks the result of those calls instead of trusting them blindly.
- **State.** Something that survives across the task, not just within one model call.
- **A bounded loop.** Plan, act, check the result, decide whether to continue, retry, or stop, with an actual exit condition instead of trusting the model to know when to give up.

A practical version of the specific gap in the `rm -rf` case looks like this, a guard that runs *before* a destructive command executes, not after:

```python
import os
import re

PROTECTED_PATTERNS = [
    r"^rm\s+-rf\s+/\*?\s*$",            # rm -rf / or rm -rf /*
    r"^rm\s+-rf\s+\$?HOME\s*$",         # rm -rf $HOME or rm -rf HOME
    r"^rm\s+-rf\s+~/?\s*$",             # rm -rf ~ or rm -rf ~/
]

def check_destructive_command(command: str, resolved_path: str) -> bool:
    """Returns True if the command is safe to execute."""
    for pattern in PROTECTED_PATTERNS:
        if re.match(pattern, command.strip()):
            return False
    if resolved_path in (os.path.expanduser("~"), "/"):
        return False
    return True
```

That's not a sophisticated piece of engineering. It's a few lines that check what a command actually resolves to before letting it run, instead of trusting that a reasonable-sounding instruction produces a safe result. The GitHub issues on this exact incident class recommend close to this: evaluate destructive commands *after* shell expansion, not before, and sandbox agent execution away from host mounts by default so that even a command that does go wrong lands somewhere recoverable.

## Where the terminology gets genuinely contested

Worth being honest that this isn't fully settled as a field yet. Most sources describe these three as nested layers, harness wraps context, context wraps prompt, where a strong harness still needs good context and a well-written prompt underneath it, it just adds leverage on top.

But the disagreement around that framing is real, not just semantic. Some writers treat harness engineering as a superset covering the other two rather than a separate layer stacked on top of them. And there's an emerging fourth term, sometimes called *loop engineering* or *graph engineering*, for the coordination layer when multiple agents or sub-agents work together, which some treat as part of the harness and others treat as its own discipline entirely. If you see slightly different diagrams in different places, that's why.

## The actual takeaway

A good harness doesn't make the model smarter. It makes the system around the model survive the model being wrong, which it eventually will be, no matter how good the prompt or how well-curated the context.

The `rm -rf` incidents are a clean example precisely because nothing about them was a strange edge case. An agent testing whether a cleanup mechanism works is an extremely ordinary task. The failure wasn't exotic. The missing guardrail was.

If you're building anything that gives a model real tool access, the question worth asking isn't "is the prompt good enough" or "does it have the right context." It's: what happens the one time this agent does something destructive, and is there anything in the system, *not the instructions*, that catches it before it runs.

---

## Resources

<ol style="line-height:2;color:#374151;font-size:0.95rem;">
  <li>Bouchard, Louis. <a href="https://www.louisbouchard.ai/harness-engineering/" style="color:#2563eb;text-decoration:underline;font-style:italic;">Harness Engineering: The Missing Layer Behind AI Agents.</a> louisbouchard.ai.</li>
  <li><a href="https://arxiv.org/pdf/2605.13357" style="color:#2563eb;text-decoration:underline;font-style:italic;">AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents.</a> arXiv.</li>
  <li><a href="https://arxiv.org/pdf/2605.23950" style="color:#2563eb;text-decoration:underline;font-style:italic;">Stop Comparing LLM Agents Without Disclosing the Harness.</a> arXiv — source of the SWE-bench Pro and HAL scaffold-swing data.</li>
  <li><a href="https://arxiv.org/html/2609.09218" style="color:#2563eb;text-decoration:underline;font-style:italic;">The Double Measurement Confound in Agent Benchmarks.</a> arXiv — on scaffolding as an uncontrolled variable.</li>
  <li><a href="https://mlq.ai/news/claude-agent-deleted-about-700-gb-from-a-developers-home-directory-during-sandbox-test/" style="color:#2563eb;text-decoration:underline;font-style:italic;">Claude agent deleted about 700 GB from a developer's home directory during sandbox test.</a> MLQ.</li>
  <li><a href="https://github.com/anthropics/claude-code/issues/82165" style="color:#2563eb;text-decoration:underline;font-style:italic;">Catastrophic data loss.</a> anthropics/claude-code issue #82165.</li>
  <li><a href="https://github.com/anthropics/claude-code/issues/88462" style="color:#2563eb;text-decoration:underline;font-style:italic;">Data loss.</a> anthropics/claude-code issue #88462.</li>
  <li><a href="https://www.digitalapplied.com/blog/swe-bench-verified-june-2026-benchmark-vs-scaffolding-analysis" style="color:#2563eb;text-decoration:underline;font-style:italic;">SWE-bench in 2026: Benchmarks vs Scaffolding Reality.</a> Digital Applied.</li>
  <li>Gupta, Aakash. <a href="https://www.news.aakashg.com/p/harness-engineering" style="color:#2563eb;text-decoration:underline;font-style:italic;">Harness Engineering: Your Complete Guide.</a> news.aakashg.com.</li>
  <li><a href="https://futureagi.com/blog/loop-engineering/prompt-context-harness-loop-layers/" style="color:#2563eb;text-decoration:underline;font-style:italic;">Prompt, Context, Harness, Loop: The Four Layers of AI Agent Engineering.</a> Future AGI.</li>
  <li><a href="https://www.palo-it.com/en/blog/beyond-the-prompt-why-harness-engineering-is-a-lever-for-ai-agents" style="color:#2563eb;text-decoration:underline;font-style:italic;">Beyond the Prompt: Why Harness Engineering Is a Lever for AI Agents.</a> PALO IT.</li>
  <li><a href="https://dev.to/mino/context-engineering-and-harness-engineering-building-reliable-ai-agents-beyond-prompts-3dij" style="color:#2563eb;text-decoration:underline;font-style:italic;">Context Engineering and Harness Engineering: Building Reliable AI Agents Beyond Prompts.</a> DEV Community.</li>
  <li><a href="https://medium.com/@visrow/harness-engineering-vs-prompt-engineering-vs-context-engineering-explained-0423b692c87d" style="color:#2563eb;text-decoration:underline;font-style:italic;">Harness Engineering vs Prompt Engineering vs Context Engineering Explained.</a> Medium.</li>
</ol>
