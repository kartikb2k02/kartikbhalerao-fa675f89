# LLM Loops for Product Development: How to Increase AI Efficiency

<style>
.llmc-card{border-radius:16px;padding:22px 24px;}
.llmc-card-blue{border:1px solid #dbeafe;background:#ffffff;}
.llmc-card-blue .llmc-title{color:#0f172a;}
.llmc-card-blue .llmc-body{color:#334155;}
.llmc-badge-num{background:#2563eb;color:#ffffff;}
.llmc-arrow{color:#2563eb;}
.llmc-card-red{border:1.5px solid #fecaca;background:#fef2f2;box-shadow:0 4px 18px rgba(220,38,38,0.06);}
.llmc-card-red .llmc-label{color:#dc2626;}
.llmc-card-red .llmc-body{color:#7f1d1d;}
.llmc-card-red .llmc-row{color:#7f1d1d;border-top:1px solid #fecaca;}
.llmc-card-red .llmc-total{border-top:2px solid #fca5a5;}
.llmc-card-red .llmc-total-label{color:#dc2626;}
.llmc-card-red .llmc-total-value{color:#dc2626;}
.llmc-card-green{border:1.5px solid #bbf7d0;background:#f0fdf4;box-shadow:0 4px 18px rgba(22,163,74,0.06);}
.llmc-card-green .llmc-label{color:#16a34a;}
.llmc-card-green .llmc-body{color:#14532d;}
.llmc-card-green .llmc-row{color:#14532d;border-top:1px solid #bbf7d0;}
.llmc-card-green .llmc-total{border-top:2px solid #86efac;}
.llmc-card-green .llmc-total-label{color:#16a34a;}
.llmc-card-green .llmc-total-value{color:#16a34a;}
.llmc-vs-badge{background:#ffffff;border:2px solid #e2e8f0;color:#64748b;}
.llmc-banner{background:#ffffff;border:1.5px solid #e2e8f0;box-shadow:0 4px 18px rgba(0,0,0,0.05);}
.llmc-banner .llmc-label{color:#64748b;}
.llmc-banner .llmc-value{color:#0f172a;}
.llmc-note{border:1px solid #e2e8f0;background:#f8fafc;color:#475569;}
@media (max-width:640px){.llmc-vs-badge{display:none;}}
@media (prefers-color-scheme: dark){
.llmc-card-blue{border-color:#3730a3;background:#181825;}
.llmc-card-blue .llmc-title{color:#f1f5f9;}
.llmc-card-blue .llmc-body{color:#cbd5e1;}
.llmc-badge-num{background:#7c3aed;}
.llmc-arrow{color:#a78bfa;}
.llmc-card-red{border-color:#7f1d1d;background:#2a1215;box-shadow:none;}
.llmc-card-red .llmc-label{color:#f87171;}
.llmc-card-red .llmc-body{color:#fca5a5;}
.llmc-card-red .llmc-row{color:#fca5a5;border-top-color:#7f1d1d;}
.llmc-card-red .llmc-total{border-top-color:#991b1b;}
.llmc-card-red .llmc-total-label{color:#f87171;}
.llmc-card-red .llmc-total-value{color:#f87171;}
.llmc-card-green{border-color:#166534;background:#0f2419;box-shadow:none;}
.llmc-card-green .llmc-label{color:#4ade80;}
.llmc-card-green .llmc-body{color:#86efac;}
.llmc-card-green .llmc-row{color:#86efac;border-top-color:#166534;}
.llmc-card-green .llmc-total{border-top-color:#15803d;}
.llmc-card-green .llmc-total-label{color:#4ade80;}
.llmc-card-green .llmc-total-value{color:#4ade80;}
.llmc-vs-badge{background:#1e1e2e;border-color:#3f3f52;color:#cbd5e1;}
.llmc-banner{background:#181825;border-color:#3f3f52;box-shadow:none;}
.llmc-banner .llmc-label{color:#94a3b8;}
.llmc-banner .llmc-value{color:#f1f5f9;}
.llmc-note{border-color:#334155;background:#181825;color:#94a3b8;}
}
</style>

## 1. Introduction

Every week there's a new model, and almost all the noise is about which one's smartest. But after building AI products for a while, I keep landing on the same thing: the model rarely makes or breaks the product. The loop around it does. And that loop is where your costs live too.

A single prompt gives you an answer. A loop pulls context, calls a tool, checks its own work, and hands back something you can trust. That's the difference between a demo and a product. But every one of those extra steps moves tokens around, and every token has a price. At a hundred requests you'll never notice. At a million, loop design is your infra bill.

So this post is about one thing: how to build loops that stay cheap and fast without getting dumber. Not the theory of agents. The economics of them.

## 2. What an LLM loop actually is

### What is a token?

Before the loop, one word you need: a *token*. Models don't read words, they read tokens, which are chunks of text roughly three-quarters of a word each. You pay per token, both for what you send in and what the model sends back. That's the whole reason cost enters this conversation at all. Every step in a loop moves tokens around, and every token has a price.

### The LLM loop

Now, the loop itself. Most people picture AI working like this:

<div style="margin:24px 0;padding:20px;border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;">
<svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;max-width:420px;height:auto;margin:0 auto;font-family:'Segoe Print','Bradley Hand','Comic Sans MS',cursive;">
<rect x="15" y="25" width="165" height="60" rx="16" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<text x="97" y="61" text-anchor="middle" font-size="17" fill="#dc2626">Question</text>
<line x1="182" y1="55" x2="292" y2="55" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="292,48 305,55 292,62" fill="#dc2626"/>
<rect x="305" y="25" width="160" height="60" rx="16" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<text x="385" y="61" text-anchor="middle" font-size="17" fill="#16a34a">Answer</text>
</svg>
</div>

Real products look more like this: input comes in, the system understands intent, pulls context, reasons, uses a tool if it needs to, checks the output, and only then returns an answer.

Instead of answering the instant you ask, the system gathers, reasons, and refines before it responds. That cycle is the loop, and pretty much everything good about a production AI product comes from how well that loop is built.

In plain terms: an <a href="https://youtu.be/4biXYSNkn9Y?si=XzKhnlhC6yXji7C" style="color:#3b82f6;font-weight:700;text-decoration:underline;text-underline-offset:2px;">LLM loop</a> is the repeatable cycle a product runs every time it needs to answer something, take the input, gather whatever context or tools are needed, let the model reason, check the result, and only then respond, going around again if the check fails. It's used in pretty much every serious AI product, from a chatbot to a coding agent, because it's what turns a single guess into a checked, grounded answer. Here's the shape to keep in your head. Not every product runs all of these steps, and the good ones skip the steps a given request doesn't need.

<div style="margin:32px 0;">
<svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;font-family:'Segoe Print','Bradley Hand','Comic Sans MS',cursive;">
<defs>
<radialGradient id="llGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#7c3aed" stop-opacity="0.35"/><stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>
<marker id="llArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#a78bfa"/></marker>
<marker id="llArrRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#f87171"/></marker>
<marker id="llArrGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#4ade80"/></marker>
<filter id="dotBlur" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2.2"/></filter>
</defs>
<rect x="10" y="10" width="880" height="480" rx="20" fill="#0b0b14" stroke="#3b2a6b" stroke-width="1.5"/>
<text x="40" y="42" font-size="11" font-weight="700" letter-spacing="2" fill="#a78bfa" font-family="Inter,sans-serif">THE LOOP, ANIMATED</text>
<text x="40" y="60" font-size="10.5" fill="#6b6485" font-family="Inter,sans-serif">Follow the numbers 1 → 4. It repeats until step 2 says stop.</text>
<circle cx="700" cy="160" r="130" fill="url(#llGlow)"/>
<circle cx="110" cy="150" r="16" fill="none" stroke="#a78bfa" stroke-width="2"/>
<line x1="110" y1="166" x2="110" y2="205" stroke="#a78bfa" stroke-width="2"/>
<line x1="82" y1="180" x2="138" y2="180" stroke="#a78bfa" stroke-width="2"/>
<line x1="110" y1="205" x2="90" y2="232" stroke="#a78bfa" stroke-width="2"/>
<line x1="110" y1="205" x2="130" y2="232" stroke="#a78bfa" stroke-width="2"/>
<text x="110" y="255" text-anchor="middle" font-size="13" font-weight="700" fill="#c4b5fd" font-family="Inter,sans-serif">YOU</text>
<text x="110" y="270" text-anchor="middle" font-size="9" fill="#7c66b0" font-family="Inter,sans-serif">(or your app)</text>
<rect x="550" y="90" width="300" height="250" rx="16" fill="#150f24" stroke="#7c3aed" stroke-width="1.6"/>
<text x="700" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#ede9fe">LLM Loop</text>
<text x="826" y="108" text-anchor="middle" font-size="14" fill="#a78bfa"><animateTransform attributeName="transform" type="rotate" from="0 826 104" to="360 826 104" dur="3s" repeatCount="indefinite"/>↻</text>
<path d="M 700,146 L 700,274 Q 830,274 830,210 Q 830,146 700,146" fill="none" stroke="#4c1d95" stroke-width="1" stroke-dasharray="2 4" opacity="0.5"/>
<circle r="8" fill="#7c3aed" opacity="0" filter="url(#dotBlur)"><animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.05;0.9;1" dur="5s" begin="2.5s" repeatCount="indefinite"/><animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" path="M 700,146 L 700,274 Q 830,274 830,210 Q 830,146 700,146"/></circle>
<circle r="3.5" fill="#e9d5ff" opacity="0"><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="5s" begin="2.5s" repeatCount="indefinite"/><animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" path="M 700,146 L 700,274 Q 830,274 830,210 Q 830,146 700,146"/></circle>
<line x1="700" y1="156" x2="700" y2="168" stroke="#a78bfa" stroke-width="1.5" opacity="0.85" marker-end="url(#llArr)"/>
<line x1="700" y1="188" x2="700" y2="200" stroke="#a78bfa" stroke-width="1.5" opacity="0.85" marker-end="url(#llArr)"/>
<line x1="700" y1="220" x2="700" y2="232" stroke="#a78bfa" stroke-width="1.5" opacity="0.85" marker-end="url(#llArr)"/>
<line x1="700" y1="252" x2="700" y2="264" stroke="#a78bfa" stroke-width="1.5" opacity="0.85" marker-end="url(#llArr)"/>
<g font-family="Inter,sans-serif">
<rect x="600" y="136" width="200" height="20" rx="8" fill="#1e1b3a" stroke="#4c1d95" stroke-width="1"><animate attributeName="fill" values="#1e1b3a;#7c3aed;#1e1b3a" keyTimes="0;0.1;1" dur="5s" begin="2.5s" repeatCount="indefinite"/><animate attributeName="stroke" values="#4c1d95;#e9d5ff;#4c1d95" keyTimes="0;0.1;1" dur="5s" begin="2.5s" repeatCount="indefinite"/></rect>
<text x="700" y="150" text-anchor="middle" font-size="10" font-weight="700" fill="#c4b5fd"><animate attributeName="fill" values="#c4b5fd;#ffffff;#c4b5fd" keyTimes="0;0.1;1" dur="5s" begin="2.5s" repeatCount="indefinite"/>Goal</text>
<circle cx="601" cy="137" r="6" fill="#7c3aed" stroke="#0b0b14" stroke-width="1.5"/><text x="601" y="140" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">1</text>
<rect x="600" y="168" width="200" height="20" rx="8" fill="#1e1b3a" stroke="#4c1d95" stroke-width="1"><animate attributeName="fill" values="#1e1b3a;#7c3aed;#1e1b3a" keyTimes="0;0.1;1" dur="5s" begin="3.5s" repeatCount="indefinite"/><animate attributeName="stroke" values="#4c1d95;#e9d5ff;#4c1d95" keyTimes="0;0.1;1" dur="5s" begin="3.5s" repeatCount="indefinite"/></rect>
<text x="700" y="182" text-anchor="middle" font-size="10" font-weight="700" fill="#c4b5fd"><animate attributeName="fill" values="#c4b5fd;#ffffff;#c4b5fd" keyTimes="0;0.1;1" dur="5s" begin="3.5s" repeatCount="indefinite"/>Search</text>
<circle cx="601" cy="169" r="6" fill="#7c3aed" stroke="#0b0b14" stroke-width="1.5"/><text x="601" y="172" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">2</text>
<rect x="600" y="200" width="200" height="20" rx="8" fill="#1e1b3a" stroke="#4c1d95" stroke-width="1"><animate attributeName="fill" values="#1e1b3a;#7c3aed;#1e1b3a" keyTimes="0;0.1;1" dur="5s" begin="4.5s" repeatCount="indefinite"/><animate attributeName="stroke" values="#4c1d95;#e9d5ff;#4c1d95" keyTimes="0;0.1;1" dur="5s" begin="4.5s" repeatCount="indefinite"/></rect>
<text x="700" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="#c4b5fd"><animate attributeName="fill" values="#c4b5fd;#ffffff;#c4b5fd" keyTimes="0;0.1;1" dur="5s" begin="4.5s" repeatCount="indefinite"/>Think</text>
<circle cx="601" cy="201" r="6" fill="#7c3aed" stroke="#0b0b14" stroke-width="1.5"/><text x="601" y="204" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">3</text>
<rect x="600" y="232" width="200" height="20" rx="8" fill="#1e1b3a" stroke="#4c1d95" stroke-width="1"><animate attributeName="fill" values="#1e1b3a;#7c3aed;#1e1b3a" keyTimes="0;0.1;1" dur="5s" begin="5.5s" repeatCount="indefinite"/><animate attributeName="stroke" values="#4c1d95;#e9d5ff;#4c1d95" keyTimes="0;0.1;1" dur="5s" begin="5.5s" repeatCount="indefinite"/></rect>
<text x="700" y="246" text-anchor="middle" font-size="10" font-weight="700" fill="#c4b5fd"><animate attributeName="fill" values="#c4b5fd;#ffffff;#c4b5fd" keyTimes="0;0.1;1" dur="5s" begin="5.5s" repeatCount="indefinite"/>Tools</text>
<circle cx="601" cy="233" r="6" fill="#7c3aed" stroke="#0b0b14" stroke-width="1.5"/><text x="601" y="236" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">4</text>
<rect x="600" y="264" width="200" height="20" rx="8" fill="#1e1b3a" stroke="#4c1d95" stroke-width="1"><animate attributeName="fill" values="#1e1b3a;#7c3aed;#1e1b3a" keyTimes="0;0.1;1" dur="5s" begin="6.5s" repeatCount="indefinite"/><animate attributeName="stroke" values="#4c1d95;#e9d5ff;#4c1d95" keyTimes="0;0.1;1" dur="5s" begin="6.5s" repeatCount="indefinite"/></rect>
<text x="700" y="278" text-anchor="middle" font-size="10" font-weight="700" fill="#c4b5fd"><animate attributeName="fill" values="#c4b5fd;#ffffff;#c4b5fd" keyTimes="0;0.1;1" dur="5s" begin="6.5s" repeatCount="indefinite"/>Check</text>
<circle cx="601" cy="265" r="6" fill="#7c3aed" stroke="#0b0b14" stroke-width="1.5"/><text x="601" y="268" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">5</text>
</g>
<text x="700" y="300" text-anchor="middle" font-size="10" fill="#7c66b0" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.4s" fill="freeze"/>this inner cycle repeats on every request</text>
<text x="700" y="316" text-anchor="middle" font-size="8.5" fill="#8b7fb8" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="3.5s" fill="freeze"/>Search reads: .md, .json, PDFs, DB rows</text>
<line x1="170" y1="130" x2="538" y2="130" stroke="#a78bfa" stroke-width="2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" marker-end="url(#llArr)"><animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.9s" begin="0.2s" fill="freeze"/></line>
<text x="354" y="116" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ddd6fe" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.2s" fill="freeze"/>1 · send request</text>
<line x1="538" y1="230" x2="170" y2="230" stroke="#a78bfa" stroke-width="2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" marker-end="url(#llArr)"><animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.9s" begin="1.3s" fill="freeze"/></line>
<text x="354" y="250" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ddd6fe" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1.3s" fill="freeze"/>2 · check the output</text>
<path d="M 88 250 C 20 320, 20 55, 165 128" fill="none" stroke="#f87171" stroke-width="1.6" stroke-dasharray="6 5" marker-end="url(#llArrRed)" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2.2s" fill="freeze"/><animate attributeName="stroke-dashoffset" values="0;-22" dur="1s" begin="2.4s" repeatCount="indefinite"/></path>
<text x="20" y="280" font-size="11.5" font-weight="700" fill="#f87171" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2.2s" fill="freeze"/>3 · not good enough</text>
<text x="20" y="296" font-size="10.5" fill="#f87171" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2.2s" fill="freeze"/>↻ back to step 1</text>
<line x1="700" y1="342" x2="700" y2="360" stroke="#4ade80" stroke-width="2" marker-end="url(#llArrGreen)" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2.0s" fill="freeze"/></line>
<text x="700" y="375" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4ade80" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.0s" fill="freeze"/>4 · good enough → return answer</text>
<text x="450" y="422" text-anchor="middle" font-size="12.5" font-style="italic" fill="#94a3b8" font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="2.8s" fill="freeze"/>the loop keeps going until the check says stop</text>
<g font-family="Inter,sans-serif" opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="3.0s" fill="freeze"/>
<line x1="60" y1="452" x2="840" y2="452" stroke="#2a2440" stroke-width="1"/>
<circle cx="230" cy="472" r="4" fill="#a78bfa"/><text x="240" y="475.5" font-size="10" fill="#c4b5fd">a step running</text>
<circle cx="400" cy="472" r="4" fill="#f87171"/><text x="410" y="475.5" font-size="10" fill="#f87171">needs another pass</text>
<circle cx="600" cy="472" r="4" fill="#4ade80"/><text x="610" y="475.5" font-size="10" fill="#4ade80">good enough, ship it</text>
</g>
</svg>
</div>

The arrow looping back is the important bit. When the check fails, the system goes around again instead of shipping something wrong. That single feedback edge is what separates a loop from a straight line.

## 3. Every loop is a trade

Don't think of loop patterns as a menu to collect. Each one buys you something, usually accuracy or capability, and pays for it in tokens and time. Here's the quick version, cheapest to most expensive:

- A **think loop** just reasons and answers. Basically free, fine for FAQs and writing help. Most products should start here and a lot should stay here.
- A **retrieval loop (RAG)** searches your data before answering, which kills hallucinations but stuffs everything you retrieve into the prompt, so cost creeps in fast.
- A **tool loop** calls an API instead of guessing. Cheap on tokens and almost always worth it.
- A **reflection loop** has the model review its own draft, which roughly doubles your tokens, so it's worth it for a contract and a waste for "what's your pricing?"
- A **planning loop** breaks a big task into steps, and every step is its own round of calls.
- A **multi-agent loop** hands work between specialized agents and costs more than anything else here, which is why reaching for it early is the most expensive mistake teams make.

The pattern underneath: the fancier the loop, the more it costs. That's not a reason to avoid the fancy ones. It's a reason to only reach for them when the task earns it.

### The types of loops

Here's the same set of trade-offs broken out in full, what each loop does and where it earns its keep.

<div style="margin:28px 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">01</span><span style="font-size:15px;font-weight:800;color:#000000;">Think Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — model reasons, then answers immediately, no retrieval, no tools.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — cheapest and fastest to ship, good for FAQs and brainstorming.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">02</span><span style="font-size:15px;font-weight:800;color:#000000;">Retrieval Loop (RAG)</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — searches a knowledge base before answering.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — fewer hallucinations, but retrieve 3–5 chunks, not twenty.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">03</span><span style="font-size:15px;font-weight:800;color:#000000;">Tool Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — calls an API instead of guessing, books the meeting, updates the CRM.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — cheap on tokens, adds latency and new ways to fail.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">04</span><span style="font-size:15px;font-weight:800;color:#000000;">Reflection Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — model reviews its own draft before shipping it.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — better quality, but roughly doubles your tokens.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">05</span><span style="font-size:15px;font-weight:800;color:#000000;">Planning Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — breaks a big task into steps and works through them one at a time.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — makes multi-step goals possible, but every step is its own call.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">06</span><span style="font-size:15px;font-weight:800;color:#000000;">Multi-Agent Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — several specialized agents hand work off to each other.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — highest ceiling on complex work, and the most expensive.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">07</span><span style="font-size:15px;font-weight:800;color:#000000;">Human-in-the-Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — a person signs off before anything ships.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — buys trust in finance, health, and legal, costs time, not tokens.</div></div></div>
<div style="border:1px solid #dbeafe;border-radius:16px;background:#ffffff;padding:22px 24px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="background:#2563eb;color:#ffffff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:6px;">08</span><span style="font-size:15px;font-weight:800;color:#000000;">Memory Loop</span></div><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:10px;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">What it does</span> — remembers what matters across sessions instead of asking twice.</div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#2563eb;font-weight:700;">→</span><div style="font-size:13.5px;color:#000000;line-height:1.6;"><span style="font-weight:800;color:#000000;">Trade-off</span> — feels personal, gets expensive if you store everything.</div></div></div>
</div>

One more thing worth planning for: **what happens when a step fails.** Tool calls time out. Retrieval comes back with junk. A good loop has a fallback for each step, retry once, fall back to a cheaper path, or hand off to a human, instead of crashing or hallucinating its way forward. If you haven't decided what happens on failure, you haven't finished designing the loop.

## 4. What loops actually cost

Let's put real numbers on it, because "tokens are expensive" means nothing without them.

Here are current per-million-token rates for one popular model family (input / output):

| Model | Input | Output |
|-------|-------|--------|
| Small (fast, cheap) | $1 | $5 |
| Mid (balanced) | $3 | $15 |
| Large (most capable) | $5 | $25 |

Two things to notice. Output costs five times input across the board, so long, chatty responses hurt more than long prompts. And the large model is five times the small one, so reaching for it by default is a choice you're paying for on every single call.

Now the part that matters, the same user request run two ways.

<div style="position:relative;margin:28px 0;">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">
<div class="llmc-card llmc-card-red" style="padding:24px 26px;"><div class="llmc-label" style="font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;">The Naive Loop</div><div class="llmc-body" style="font-size:13px;line-height:1.6;margin-bottom:18px;">Four calls to the large model, each one re-sending the full conversation history. ~8,000 input tokens and 1,000 output tokens per call.</div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>8,000 input</span><span>$0.04</span></div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>1,000 output</span><span>$0.025</span></div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>Per call</span><span>$0.065</span></div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>× 4 calls</span><span></span></div><div class="llmc-total" style="display:flex;justify-content:space-between;align-items:baseline;padding-top:16px;margin-top:6px;"><span class="llmc-total-label" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">Per request</span><span class="llmc-total-value" style="font-size:28px;font-weight:800;">$0.26</span></div></div>
<div class="llmc-card llmc-card-green" style="padding:24px 26px;"><div class="llmc-label" style="font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;">The Optimized Loop</div><div class="llmc-body" style="font-size:13px;line-height:1.6;margin-bottom:18px;">One cheap routing call on a small model, then one call to the large model with trimmed context and the system prompt served from cache.</div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>Routing call (small model)</span><span>$0.001</span></div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>Main call (large, cached)</span><span>$0.029</span></div><div class="llmc-row" style="display:flex;justify-content:space-between;font-size:13px;padding:9px 0;"><span>× 2 calls</span><span></span></div><div class="llmc-total" style="display:flex;justify-content:space-between;align-items:baseline;padding-top:16px;margin-top:6px;"><span class="llmc-total-label" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">Per request</span><span class="llmc-total-value" style="font-size:28px;font-weight:800;">$0.03</span></div></div>
</div>
<div class="llmc-vs-badge" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;letter-spacing:0.04em;box-shadow:0 3px 10px rgba(0,0,0,0.1);z-index:2;">VS</div>
</div>

<div class="llmc-banner" style="margin:8px 0 28px;border-radius:14px;padding:22px 26px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;">
<div><div class="llmc-label" style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px;">Same output</div><div class="llmc-value" style="font-size:22px;font-weight:800;">Roughly 9x cheaper</div></div>
<div style="text-align:right;"><div class="llmc-label" style="font-size:12px;margin-bottom:2px;">At 1M requests/month</div><div class="llmc-value" style="font-size:16px;font-weight:700;">$260,000 <span style="opacity:0.6;font-weight:500;">→</span> $30,000</div></div>
</div>

None of that came from a smarter model or a magic trick. It came from routing the easy part to a cheap model, sending less context, and caching the stuff that never changes.

<div class="llmc-note" style="margin:20px 0;border-radius:12px;padding:16px 20px;font-size:13.5px;line-height:1.6;">Rates above are current as of mid-2026 and are illustrative round numbers. Check your provider's live pricing before you quote figures.</div>

## 5. Loops by company stage

The right architecture depends far less on what's technically possible and far more on where your company is.

**Startups: ship fast.** Your job is to find out if anyone wants this thing. That's it. Start with a think loop and maybe a basic tool loop, and nothing else. No multi-agent system, no elaborate retrieval. Every hour you spend on orchestration is an hour you're not spending learning whether the problem is real. Keep it cheap and keep it simple, because most of what you build now you'll throw away anyway. A support widget that only answers FAQs is a pure think loop, no retrieval needed until users start asking about their own order status.

**Mid-scale: get smarter without getting complicated.** Once people are actually using the product, the cracks show: stale answers get retrieval, shaky output gets a reflection pass, repeated questions get memory. This is the sweet spot for most products.

A concrete example: my competitive intelligence pipeline scrapes competitor activity, runs it through an LLM, and pushes summaries into Notion and Slack via n8n. It's three loops stacked up: a tool loop to scrape, a think loop to summarize, a light reflection pass to flag what matters. No multi-agent, because it doesn't need it.

The first version fed full scraped pages straight into the model and let it wade through the noise. The fix was boring: filter with plain code first, summarize in one pass instead of rewriting, and only run the "is this important" check on items that already cleared a basic bar. Same output, a fraction of the tokens.

**Large-scale: trust and control.** At enterprise volume the requirements flip. Now it's about accuracy, compliance, security, and being able to explain what happened after the fact. The stack gets deeper: authentication, enterprise search, policy checks, tool calls, reflection, human approval on the high-risk stuff, plus monitoring and evaluation running underneath it all. Think claims processing at an insurer: intake, policy lookup, fraud check, and approval are each logged and reviewable, because a regulator will eventually ask for the trail. And because volume is huge, every efficiency lever from the last section pays off enormously here. Enterprise AI is about trust, not raw intelligence.

## 6. How to keep loops efficient

Everything that made the optimized loop cheap comes down to a handful of moves:

- **Match the model to the job.** Small model for routing and classification, big model only where it earns its keep.
- **Cache the stable stuff.** Your system prompt and fixed context are identical on every call.
- **Batch anything non-urgent.** Scheduled work shouldn't pay the realtime premium.
- **Send less, retrieve less.** A running summary beats fifty turns; three sharp chunks beat twenty noisy ones.
- **Skip loops you don't need.** "What's the weather?" is one call, not a planning exercise.
- **Do it in code.** Deterministic steps don't need an LLM.
- **Latency is a cost too.** Every step is time the user waits, so less is also faster.

### Tooling that helps

Most of those moves have a tool category built to help. Treat these as starting points, not endorsements, and check what's current before you commit, because the space moves fast.

- **LLM gateways** sit in front of your providers behind one API and route each call to the right model, with failover and spend tracking built in. This is how you match model to job at scale. Self-hosted: <a href="https://www.litellm.ai/" style="color:#3b82f6;font-weight:700;text-decoration:underline;text-underline-offset:2px;">LiteLLM</a>. Managed: <a href="https://openrouter.ai/" style="color:#3b82f6;font-weight:700;text-decoration:underline;text-underline-offset:2px;">OpenRouter</a>, <a href="https://portkey.ai/" style="color:#3b82f6;font-weight:700;text-decoration:underline;text-underline-offset:2px;">Portkey</a>.
- **Prompt caching** is built into most model providers now. It charges a fraction for the repeated parts of your prompt, so your stable system prompt stops costing full price on every call.
- **Semantic caches** return a stored answer for repeated questions instead of calling the model at all. Redis or a purpose-built layer like GPTCache.
- **Batch APIs**, offered by most providers, run non-urgent work at roughly half price.

## 7. How to know a loop is working

You can't improve what you don't watch. Four numbers tell you almost everything:

- **Cost per request.** Not per call, per finished request. This is the one your title is really about.
- **Latency.** How long the user waits for a full answer.
- **Accuracy.** How often the loop gets it right, however you define right for your product.
- **User satisfaction.** Thumbs, retries, abandonment, whatever signal you can get.

Here's the reframe that ties them together: measure **cost per successful outcome, not per call.** A cheap call that returns a wrong answer and forces the user to try again is more expensive than one good call that costs three times as much. If you only track spend per call, you'll optimize toward a product that's cheap and useless. Track it per resolved request and the incentives line up with quality.

## 8. How to actually see your token usage

Tracking cost sounds abstract until you know where the numbers actually live. There are three levels, cheapest to most thorough, and most products want all three eventually.

1. **Straight from the API response.** Every call returns a usage object with exact token counts. You don't estimate anything, this is ground truth. Log that on every call and you know precisely what each request cost. This is the raw truth.

2. **Your provider's console.** Anthropic, OpenAI, and the rest all have a usage dashboard showing tokens and spend by day and by model. Zero setup, good for "what did last week cost." Useless for "which feature is burning it," because it can't see inside your product. This is the monthly bill.

3. **An observability tool.** This is the one that answers "where is the money going." <a href="https://langfuse.com/" style="color:#3b82f6;font-weight:700;text-decoration:underline;text-underline-offset:2px;">Langfuse</a> or <a href="https://www.helicone.ai/" style="color:#3b82f6;font-weight:700;text-decoration:underline;text-underline-offset:2px;">Helicone</a> sit between your app and the model and log every call with tokens, cost, latency, and which part of your product triggered it. Helicone is the fastest to wire in, you basically change your base URL. Then you can slice cost by user, by endpoint, by loop step. This is the itemized breakdown.

## 9. Which loop should I pick?

If you want one rule to screenshot: **start with the simplest loop that could possibly work, and only add a step when a real problem forces you to.**

In practice that means:

- Just answering? Think loop.
- Answers are wrong or out of date? Add retrieval.
- Need to actually do something in another system? Add a tool.
- Output is high-stakes? Add a reflection pass, but only there.
- Task is genuinely multi-step? Add planning.
- Everything above is maxed out and it's still not enough? Then, and only then, look at multiple agents.

Every arrow points from cheap and simple toward expensive and complex. Walk that path one step at a time, and stop the moment the product is good enough.

## 10. The traps I see most

The same mistakes come up again and again:

- Building a multi-agent system before anyone's validated the use case.
- Passing the entire chat history into every prompt.
- Assuming more calls automatically means better answers.

What ties them together is that each one adds complexity that hurts quality and cost at the same time.

## 11. The takeaway

Models keep getting better, and that was never the bottleneck. How we orchestrate them is.

A great AI product isn't measured only by how smart it is. It's measured by how efficiently it delivers that intelligence. The teams that win are the ones that retrieve the right thing, use tools instead of guessing, add reflection only where it pays off, and keep the loop as lean as the task will allow.

So if you're building something, stop tuning the prompt in isolation. Design the loop. Then design it to be cheap. That's where production-ready AI actually gets built.

If you want a starting point, go pull the usage numbers off your own last hundred requests before you read anything else on this topic. You'll know within five minutes whether your loop is the lean kind or the expensive kind.

---

## Resources

<ol style="line-height:2;color:#374151;font-size:0.95rem;">
  <li><a href="https://code.claude.com/docs/en/agent-sdk/agent-loop" style="color:#2563eb;text-decoration:underline;font-style:italic;">Agent SDK: The Agent Loop.</a> Anthropic Documentation.</li>
  <li>Osmani, Addy. <a href="https://addyosmani.com/blog/loop-engineering/" style="color:#2563eb;text-decoration:underline;font-style:italic;">Loop Engineering.</a> addyosmani.com.</li>
  <li><a href="https://youtu.be/4biXYSNkn9Y?si=XzKhnlhC6yXji7C" style="color:#2563eb;text-decoration:underline;font-style:italic;">Loop Engineering Explained in 8 Minutes.</a> YouTube.</li>
  <li>LangChain. <a href="https://www.langchain.com/blog/the-art-of-loop-engineering" style="color:#2563eb;text-decoration:underline;font-style:italic;">The Art of Loop Engineering.</a> langchain.com.</li>
</ol>
