# Build a Competitive Intelligence System That Updates Itself

> **⚠️ The Problem**
> Most PMs do competitive research the same way: open a browser, manually check 5 competitor pages, copy-paste into a doc, try to remember what changed from last month. It's time-consuming, inconsistent, and completely reactive. By the time you notice a competitor's pricing change or a surge in negative reviews, the window to respond has already passed.

**Tools used:** `Apify` · `Notion` · `Claude API` · `Slack` · `n8n / Zapier`

> **⏱ At a glance**
> **Build time:** 4–6 hrs (first time) · **Weekly maintenance:** ~0 hrs · **Weekly cost:** $0.05–$0.15

I spent about a weekend building a lightweight system that now runs every Monday morning and drops a clean summary into our team's Slack channel, automatically. It tracks pricing page changes, scrapes new G2/Capterra reviews, monitors app store ratings, and uses Claude to synthesize everything into actionable signals.

Here's exactly how to build it, step by step.

---

## This Isn't Theoretical, People Are Already Building It

<div style="display:flex;flex-direction:column;gap:10px;margin:28px 0;">

  <a href="https://use-apify.com/blog/ai-competitive-intelligence-dashboard" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;border-radius:14px;overflow:hidden;border:1px solid #fecaca;background:#ffffff;box-shadow:0 2px 12px rgba(239,68,68,0.08);cursor:pointer;transition:box-shadow 0.2s,transform 0.2s;" onmouseover="this.style.boxShadow='0 8px 28px rgba(239,68,68,0.18)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 2px 12px rgba(239,68,68,0.08)';this.style.transform='none'">
    <div style="padding:18px 20px 18px 0;display:flex;align-items:center;gap:0;">
      <div style="width:5px;align-self:stretch;background:#ef4444;border-radius:0 4px 4px 0;flex-shrink:0;margin-right:18px;"></div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
          <span style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#ef4444;">Closest Match</span>
          <span style="width:3px;height:3px;border-radius:50%;background:#cbd5e1;display:inline-block;"></span>
          <span style="font-size:11px;color:#94a3b8;font-weight:500;">use-apify.com</span>
        </div>
        <div style="font-size:14px;font-weight:700;color:#0f172a;line-height:1.5;padding-right:12px;">Build an AI-Powered Competitive Intelligence Dashboard (Claude + Apify + n8n)</div>
      </div>
      <div style="flex-shrink:0;width:32px;height:32px;border-radius:8px;background:#fff1f2;border:1px solid #fecaca;display:flex;align-items:center;justify-content:center;margin-right:16px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    </div>
  </a>

  <a href="https://www.learnwithmeai.com/p/claude-managed-agents-competitor-spy" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;border-radius:14px;overflow:hidden;border:1px solid #ddd6fe;background:#ffffff;box-shadow:0 2px 12px rgba(147,51,234,0.08);cursor:pointer;transition:box-shadow 0.2s,transform 0.2s;" onmouseover="this.style.boxShadow='0 8px 28px rgba(147,51,234,0.18)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 2px 12px rgba(147,51,234,0.08)';this.style.transform='none'">
    <div style="padding:18px 20px 18px 0;display:flex;align-items:center;gap:0;">
      <div style="width:5px;align-self:stretch;background:#9333ea;border-radius:0 4px 4px 0;flex-shrink:0;margin-right:18px;"></div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
          <span style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#9333ea;">No-Code Version</span>
          <span style="width:3px;height:3px;border-radius:50%;background:#cbd5e1;display:inline-block;"></span>
          <span style="font-size:11px;color:#94a3b8;font-weight:500;">learnwithmeai.com</span>
        </div>
        <div style="font-size:14px;font-weight:700;color:#0f172a;line-height:1.5;padding-right:12px;">Claude Managed Agents: I Built a Spy That Reports Competitors to Slack</div>
      </div>
      <div style="flex-shrink:0;width:32px;height:32px;border-radius:8px;background:#faf5ff;border:1px solid #ddd6fe;display:flex;align-items:center;justify-content:center;margin-right:16px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    </div>
  </a>

  <a href="https://www.withone.ai/blog/apify-meta-ad-library-spy" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;border-radius:14px;overflow:hidden;border:1px solid #bbf7d0;background:#ffffff;box-shadow:0 2px 12px rgba(22,163,74,0.08);cursor:pointer;transition:box-shadow 0.2s,transform 0.2s;" onmouseover="this.style.boxShadow='0 8px 28px rgba(22,163,74,0.18)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 2px 12px rgba(22,163,74,0.08)';this.style.transform='none'">
    <div style="padding:18px 20px 18px 0;display:flex;align-items:center;gap:0;">
      <div style="width:5px;align-self:stretch;background:#16a34a;border-radius:0 4px 4px 0;flex-shrink:0;margin-right:18px;"></div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
          <span style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#16a34a;">Ads Variant</span>
          <span style="width:3px;height:3px;border-radius:50%;background:#cbd5e1;display:inline-block;"></span>
          <span style="font-size:11px;color:#94a3b8;font-weight:500;">withone.ai</span>
        </div>
        <div style="font-size:14px;font-weight:700;color:#0f172a;line-height:1.5;padding-right:12px;">Build a Meta Ad Library Spy Pipeline with Apify, Notion, and Slack</div>
      </div>
      <div style="flex-shrink:0;width:32px;height:32px;border-radius:8px;background:#f0fdf4;border:1px solid #bbf7d0;display:flex;align-items:center;justify-content:center;margin-right:16px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    </div>
  </a>

</div>

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#fffbeb 0%,#fefce8 100%);border:1px solid #fde68a;">
  <div style="padding:18px 22px;display:flex;gap:16px;align-items:flex-start;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#fef08a;display:flex;align-items:center;justify-content:center;font-size:18px;margin-top:1px;">💡</div>
    <div>
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#d97706;margin-bottom:5px;">Why This Matters</div>
      <div style="font-size:14px;color:#78350f;line-height:1.65;">All three examples above were built and published in the last 2 weeks, which means the demand for this kind of system is <strong style="color:#92400e;">real and growing fast</strong>. The approach below combines the best patterns from all three.</div>
    </div>
  </div>
</div>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1jDEZGjvXbk?si=uKJgZBHPMyk0iAtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## The Architecture

Before diving into the setup, here's the full flow at a glance:

![System architecture](/lovable-uploads/competitive-intel-architecture.png)

---

## Step 1, Set Up Your Apify Scrapers

Apify has a marketplace of pre-built actors, so you don't need to write scrapers from scratch. For competitive intelligence, I use three:

- **Website Content Crawler**, for competitor pricing and features pages (URL snapshots weekly)
- **G2 Reviews Scraper**, pulls latest reviews, star ratings, and "pros/cons" text for any G2-listed product
- **Google Play / App Store Scraper**, grabs new reviews and monitors rating changes

Configure each actor with your list of competitor URLs and set the schedule to weekly (every Monday at 7am, so the data is ready before your Slack post at 9am). In the actor output settings, enable **Dataset export as JSON**.

![Apify actor marketplace](/lovable-uploads/apify-actor-marketplace.png)

Once an Apify run completes, use the Apify API to fetch the dataset:

```bash
# Fetch latest dataset run from Apify
GET https://api.apify.com/v2/acts/{actorId}/runs/last/dataset/items
    ?token={YOUR_APIFY_TOKEN}
    &format=json
    &limit=50
```

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#f0fdf4 0%,#f7fef9 100%);border:1px solid #bbf7d0;">
  <div style="padding:18px 22px;display:flex;gap:16px;align-items:flex-start;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#dcfce7;display:flex;align-items:center;justify-content:center;font-size:18px;margin-top:1px;">✅</div>
    <div>
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#16a34a;margin-bottom:5px;">Pro Tip</div>
      <div style="font-size:14px;color:#14532d;line-height:1.65;">Don't scrape everything. Pick <strong style="color:#15803d;">3 to 5 direct competitors</strong> and track <strong style="color:#15803d;">2 to 3 signals each</strong>. More data = more noise for Claude to filter. Start focused, expand later.</div>
    </div>
  </div>
</div>

---

## Step 2, Design Your Notion Database

Notion serves as the long-term memory of your system. Each row = one competitor. Each week, the automation updates the row with the latest scraped data, which lets you diff against last week's values.

The database is divided into **3 sections**:

![Notion Competitor Database Schema](/lovable-uploads/notion-db-schema.svg)

In your n8n workflow, after fetching from Apify, use the Notion node to read each competitor's current record, write the existing `Pricing Snapshot` into `Previous Pricing`, then update `Pricing Snapshot` with the new scrape. This gives you a clean before/after pair to send to Claude.

{{notion-db-schema}}

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#f8faff 0%,#f1f5ff 100%);border:1px solid #c7d2fe;">
  <div style="padding:18px 22px;display:flex;gap:16px;align-items:center;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#e0e7ff;display:flex;align-items:center;justify-content:center;font-size:18px;">📦</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#4f46e5;margin-bottom:4px;">Resource: Notion Template</div>
      <div style="font-size:14px;color:#3730a3;line-height:1.55;">Duplicate the exact database used in this build.</div>
    </div>
    <a href="https://use-apify.com/blog/ai-competitive-intelligence-dashboard" target="_blank" rel="noopener noreferrer" style="flex-shrink:0;display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:8px;background:#4f46e5;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;transition:background 0.15s;" onmouseover="this.style.background='#4338ca'" onmouseout="this.style.background='#4f46e5'">Grab Template <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
  </div>
</div>

---

## Step 3, Build the Claude Analysis Layer

This is where the system gets genuinely useful. Instead of dumping raw scraped text into Slack, you send Claude a structured prompt with the before/after data and ask it to identify what actually matters.

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" src="https://www.youtube-nocookie.com/embed/HygN6UXBzqg?si=kuFnVV3ENbD2WRcy" title="Calling Claude API from n8n" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Claude System Prompt

```
You are a competitive intelligence analyst for a B2B SaaS product manager.
You will be given weekly scraped data about a competitor.
Your job is to identify changes that have strategic significance.

Return your analysis in this exact format:
1. SIGNAL LEVEL: [HIGH / MEDIUM / LOW]
2. KEY CHANGES: Bullet list of concrete changes detected (max 4)
3. STRATEGIC IMPLICATION: 2–3 sentences on what this means for our product
4. SUGGESTED ACTION: One specific thing the PM team should do this week

Be concise. Skip anything that didn't change. If nothing meaningful changed, say so clearly.
```

### Claude User Message (populated dynamically)

```
## Competitor: {{competitor_name}}

### Previous Pricing Page (last week):
{{previous_pricing}}

### Current Pricing Page (this week):
{{current_pricing}}

### G2 Rating Change:
{{prev_g2_rating}} → {{current_g2_rating}}

### Recent Customer Reviews:
{{recent_reviews}}
```

### Claude API call from n8n HTTP Request node

```json
{
  "method": "POST",
  "url": "https://api.anthropic.com/v1/messages",
  "headers": {
    "x-api-key": "{{$credentials.claudeApiKey}}",
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
  },
  "body": {
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 600,
    "system": "{{systemPrompt}}",
    "messages": [
      {
        "role": "user",
        "content": "{{userMessage}}"
      }
    ]
  }
}
```

![n8n workflow showing HTTP Request node configured with Claude API call](/lovable-uploads/n8n-workflow.png)

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#fefce8 0%,#fffbeb 100%);border:1px solid #fde68a;">
  <div style="padding:16px 22px;display:flex;gap:16px;align-items:center;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#fef08a;display:flex;align-items:center;justify-content:center;font-size:18px;">💰</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#d97706;margin-bottom:4px;">Cost Note</div>
      <div style="font-size:14px;color:#78350f;line-height:1.6;">Running this for 5 competitors weekly costs roughly <strong style="color:#92400e;">$0.05–$0.15 per week</strong> using Claude Sonnet. Entirely negligible for the value it provides.</div>
    </div>
    <div style="flex-shrink:0;text-align:center;padding:10px 18px;border-radius:10px;background:#fef08a;border:1px solid #fde047;">
      <div style="font-size:18px;font-weight:900;color:#92400e;line-height:1;">~$0.10</div>
      <div style="font-size:10px;color:#a16207;font-weight:600;margin-top:2px;">per week</div>
    </div>
  </div>
</div>

---

## Step 4, Format & Post to Slack

Claude's output gets assembled into a clean Slack message using Block Kit. Here's what the Slack Block Kit payload looks like:

```json
{
  "text": "🔴 Weekly Competitive Brief, 3 signals detected",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "🏢 *Competitor:* Rival SaaS Co.\n📊 *Change:* Dropped Starter plan price by 20% · Added AI Summaries to free tier\n⚡ *Significance:* High\n💡 *Action:* Review our free tier value prop, especially features we gate behind paid that they now offer free"
      }
    }
  ]
}
```

**Example output in #competitive-intel:**

```
CompeteBot [APP]  Monday 9:00 AM
─────────────────────────────────────────────
🔴 Weekly Competitive Brief, 3 signals detected

│ Competitor: Rival SaaS Co.
│ Signal Level: 🔴 HIGH
│ Key Changes: Dropped Starter plan price by 20% · Added "AI Summaries"
│              to free tier · Removed per-seat pricing on Pro
│ Implication: Aggressive move to undercut our entry-level positioning.
│              Free tier expansion likely targeting our trial-to-paid funnel.
│ Suggested Action: Review our free tier value prop this week.
```

In n8n, use the Slack node with a `chat.postMessage` action. Map Claude's `SIGNAL LEVEL` output to an emoji flag (🔴 HIGH, 🟡 MEDIUM, 🟢 LOW) to make it scannable at a glance.

![#competitive-intel Slack message](/lovable-uploads/slack-competitive-intel.png)

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#fff7ed 0%,#fff8f1 100%);border:1px solid #fed7aa;">
  <div style="padding:18px 22px;display:flex;gap:16px;align-items:flex-start;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#ffedd5;display:flex;align-items:center;justify-content:center;font-size:18px;margin-top:1px;">⚠️</div>
    <div>
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#ea580c;margin-bottom:5px;">Watch Out For</div>
      <div style="font-size:14px;color:#7c2d12;line-height:1.65;">Apify sometimes returns stale cached pages for heavily CDN'd sites. If a competitor's pricing page isn't changing when you know it should, try setting the actor's <code style="background:#fed7aa;color:#9a3412;padding:1px 6px;border-radius:4px;font-size:12px;font-weight:600;">requestTimeoutSecs</code> to <strong style="color:#9a3412;">30</strong> and disabling caching in the input schema.</div>
    </div>
  </div>
</div>

---

## The Full n8n Workflow (Node by Node)

1. **Cron Trigger**, Every Monday at 7:00am
2. **HTTP Request (Apify)**, Trigger actor runs for all 3 scraper types
3. **Wait**, 5 minute delay (let scrapes complete)
4. **HTTP Request (Apify)**, Fetch completed dataset JSONs
5. **Notion (Read)**, Pull each competitor's existing row (for previous snapshot)
6. **Code node**, Diff current vs previous, build Claude prompt strings
7. **HTTP Request (Claude API)**, One call per competitor
8. **Notion (Update)**, Write Claude's analysis + new snapshots back to Notion
9. **Slack**, Post formatted message to #competitive-intel

Total build time: about 4–6 hours the first time. Once it's running, it's zero maintenance unless a competitor site changes its HTML structure significantly (which Apify usually handles automatically anyway).

![n8n full workflow canvas with all nodes connected](/lovable-uploads/n8n-full-workflow.png)

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#f8faff 0%,#f1f5ff 100%);border:1px solid #c7d2fe;">
  <div style="padding:18px 22px;display:flex;gap:16px;align-items:center;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#e0e7ff;display:flex;align-items:center;justify-content:center;font-size:18px;">📦</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#4f46e5;margin-bottom:4px;">Resource: n8n Workflow Template</div>
      <div style="font-size:14px;color:#3730a3;line-height:1.55;">Skip the manual build, import the pre-built workflow JSON directly into n8n.</div>
    </div>
    <a href="/downloads/ci-pipeline-n8n-workflow.json" download="ci-pipeline-n8n-workflow.json" style="flex-shrink:0;display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:8px;background:#4f46e5;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;transition:background 0.15s;" onmouseover="this.style.background='#4338ca'" onmouseout="this.style.background='#4f46e5'">Download JSON <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></a>
  </div>
</div>

---

## What You Actually Get

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:28px 0;">

  <div style="border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;padding:20px 20px 18px;box-shadow:0 2px 10px rgba(0,0,0,0.06);">
    <div style="width:38px;height:38px;border-radius:10px;background:#fef3c7;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:14px;">⏱</div>
    <div style="font-size:26px;font-weight:900;color:#0f172a;line-height:1;margin-bottom:6px;">~4 hrs</div>
    <div style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">Time Saved</div>
    <div style="font-size:12px;color:#94a3b8;line-height:1.5;">per week vs. manual competitive review</div>
  </div>

  <div style="border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;padding:20px 20px 18px;box-shadow:0 2px 10px rgba(0,0,0,0.06);">
    <div style="width:38px;height:38px;border-radius:10px;background:#fce7f3;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:14px;">🚀</div>
    <div style="font-size:26px;font-weight:900;color:#0f172a;line-height:1;margin-bottom:6px;">&lt;48 hrs</div>
    <div style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">Lag Reduced</div>
    <div style="font-size:12px;color:#94a3b8;line-height:1.5;">from weeks to under 48 hours</div>
  </div>

  <div style="border-radius:14px;border:1px solid #e2e8f0;background:#ffffff;padding:20px 20px 18px;box-shadow:0 2px 10px rgba(0,0,0,0.06);">
    <div style="width:38px;height:38px;border-radius:10px;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:14px;">📊</div>
    <div style="font-size:26px;font-weight:900;color:#0f172a;line-height:1;margin-bottom:6px;">1 place</div>
    <div style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">Single Source</div>
    <div style="font-size:12px;color:#94a3b8;line-height:1.5;">one Notion database for your entire competitive landscape</div>
  </div>

</div>

More importantly, it changes *how* your team thinks about competition. When intel is delivered to you instead of requiring active effort, strategy conversations stop starting from "I think our competitor did something last month" and start from "here's exactly what changed this week and here's what it means."

---

## Extensions Worth Adding Later

- **LinkedIn job postings scraper**, What a competitor is hiring for tells you what they're building next. Apify has a LinkedIn Jobs actor.
- **Product Hunt / Twitter mentions**, Track when competitors launch something new or get a spike in mentions.
- **Claude memory across weeks**, Pass the last 4 weeks of Claude analyses back into the prompt to detect longer-term trends, not just weekly deltas.
- **Urgency routing**, If Claude returns HIGH signal, trigger a separate Slack DM to the Head of Product, not just the channel post.

<div style="margin:24px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#f0fdf4 0%,#f7fef9 100%);border:1px solid #bbf7d0;">
  <div style="padding:18px 22px;display:flex;gap:16px;align-items:flex-start;">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:#dcfce7;display:flex;align-items:center;justify-content:center;font-size:18px;margin-top:1px;">✅</div>
    <div>
      <div style="font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#16a34a;margin-bottom:5px;">Start Small</div>
      <div style="font-size:14px;color:#14532d;line-height:1.65;">Build this for <strong style="color:#15803d;">one competitor first</strong>. Get the Apify → Notion → Claude → Slack loop working cleanly before scaling to 5 competitors. Each addition is just cloning the workflow with new URLs.</div>
    </div>
  </div>
</div>

---

## Final Thought

The best competitive intelligence systems aren't the most comprehensive ones, they're the ones that actually get read. A crisp, weekly Slack briefing that takes 90 seconds to consume will always beat a 40-page competitive deck that gets opened once a quarter.

Build the system that makes it *easy* to stay informed, and your team's competitive awareness will compound over time without anyone having to make a conscious effort to maintain it.

---
