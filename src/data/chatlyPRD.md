# Product Requirements Document: Chatly

## Document Control

| Field | Value |
|---|---|
| **Product Name** | Chatly |
| **Version** | 2.0 |
| **Status** | Draft — Internal Review |
| **Date Created** | February 19, 2026 |
| **Last Updated** | February 20, 2026 |
| **Author** | Kartik Bhalerao |
| **Document Type** | Product Requirements Document (PRD) |
| **Next Review Date** | March 20, 2026 |
| **Classification** | Confidential — Internal Distribution Only |

---

## 1. Executive Summary

### 1.1 Product Identity

| Field | Details |
|---|---|
| **Product Name** | Chatly |
| **Category** | AI Conversation Operationalization (new category) |
| **One-Line Description** | Chatly automatically transforms AI conversations into structured execution pipelines, bridging the gap between AI-generated insights and real-world task execution. |
| **Stage** | Pre-seed / Early-stage SaaS |
| **Target Launch** | Q2 2026 (MVP Beta) |

### 1.2 Problem vs. Solution

| Problem | Chatly's Solution |
|---|---|
| Action items from AI conversations never reach task managers | NLP pipeline extracts and auto-creates tasks in Jira, Linear, Asana |
| Decisions made with AI are not formally recorded | Persistent, searchable Decision Log across all sessions |
| No ownership assigned from AI outputs | Owner resolution maps names to real workspace members |
| Manual re-entry of AI outputs wastes 20–30 min/session | One-click sync reduces this to < 2 minutes |
| No audit trail of AI-assisted planning | Full session history with extraction provenance |

### 1.3 Business Impact

- Reduces post-AI-session setup time by an estimated **70–80%**
- Eliminates task loss from unstructured AI conversations
- Creates a **closed-loop system** from ideation (AI conversation) → execution (workflow tool)
- Positions as the connective tissue between the AI productivity layer and the execution layer

### 1.4 Resource Requirements

| Resource | Requirement |
|---|---|
| Engineering Team | 6–8 engineers (2 NLP/ML, 3 full-stack, 1 DevOps, 1 QA) |
| Design | 1 senior product designer + 1 UX researcher |
| Product | 1 PM (lead) + 1 APM |
| Legal | Qualified legal counsel (data privacy, IP, SaaS contracts) |
| Timeline to MVP | 16 weeks |
| Initial Infrastructure Budget | $40,000–$60,000/year (cloud + LLM API costs) |
| Target ARR (Year 1) | $1.5M–$3M |

### 1.5 Risk Summary

Primary risks include LLM API cost volatility, NLP extraction accuracy, integration maintenance overhead, user privacy concerns, and AI platform ToS compliance. All risks addressed in Sections 13 (Legal) and 15 (Risk Analysis).

---

## 2. Problem Statement & Market Opportunity

### 2.1 The Core Problem

AI assistants have become the primary thinking partner for knowledge workers. Over 65% of enterprise knowledge workers use AI assistants daily for planning, brainstorming, and decision-making (industry surveys, 2025). Yet a fundamental structural gap persists:

**Four measurable failure modes:**

| Failure Mode | Description | Estimated Impact |
|---|---|---|
| Task Loss | AI-generated action items never reach task systems | 40–60% of items never executed |
| Decision Debt | AI-assisted decisions not formally recorded | Repeated deliberation; organizational confusion |
| Ownership Vacuum | No one assigned → no one acts | 0% accountability default |
| Integration Friction | Manual re-entry is slow and error-prone | 20–30 min/session wasted |

### 2.2 Market Opportunity

#### Market Sizing

| Market | Size | Growth |
|---|---|---|
| Project Management Software | $6.8B (2024) → $15.06B (2030) | 13.7% CAGR |
| AI Productivity Tools | $12B+ | 25%+ CAGR |
| **TAM (Combined)** | **$18B+** | — |
| **SAM** (AI-adopting knowledge workers, 10–5,000 employee companies) | **$3.2B** | ~18% of TAM |
| **SOM** (3-year realistic capture) | **$48M** | ~1.5% of SAM |

#### Market Timing — Three Converging Macro Trends (2026)

1. **AI Assistant Ubiquity:** ChatGPT, Claude, Gemini, Copilot have achieved mass daily adoption
2. **Tool Fatigue + Integration Demand:** Users want unified, automated workflows — not more tools
3. **LLM Cost Reduction:** GPT-4-class inference costs dropped 80%+ since 2023 — real-time analysis is now economically viable

### 2.3 The Opportunity Gap

No product directly addresses the AI-to-execution pipeline problem:

| Category | Product | Gap |
|---|---|---|
| AI Assistants | ChatGPT, Claude, Gemini | Generate outputs — do not structure or route them |
| Task Managers | Jira, Asana, Linear | Accept tasks — do not generate from conversations |
| Meeting Tools | Otter.ai, Fireflies | Extract from human meetings — not AI conversations |
| Automation | Zapier, Make | Handle integrations — require manual rule configuration |

**Chatly occupies a greenfield category: AI Conversation Operationalization.**

---

## 3. Target Users & Personas (Jobs-to-Be-Done)

### 3.1 Primary Persona: Strategic Product Manager

| Field | Details |
|---|---|
| **Name** | Priya, 31 |
| **Role** | Senior PM, Series B SaaS (150 employees) |
| **Tech Stack** | ChatGPT, Jira, Notion, Slack |
| **AI Usage** | 5+ sessions/day |
| **Willingness to Pay** | $30–50/user/month |

**Jobs-to-Be-Done:**
- When I finish an AI planning session → I need action items in Jira immediately so nothing gets lost
- When I make a product decision with AI → I need that decision formally logged and referenceable
- When I delegate tasks from AI conversations → I need ownership and deadlines attached

**Pain Points:**
- Spends 20–30 min after every AI session manually creating Jira tickets
- Action items frequently fall through the cracks
- Cannot audit which decisions were AI-assisted vs. not

---

### 3.2 Secondary Persona: Engineering Team Lead

| Field | Details |
|---|---|
| **Name** | Rohan, 34 |
| **Role** | Engineering Lead, fintech startup (80 engineers) |
| **Tech Stack** | Claude, Linear, GitHub, Slack |
| **AI Usage** | 3–5 sessions/day |
| **Willingness to Pay** | $25–40/user/month |

**Jobs-to-Be-Done:**
- AI architecture planning → tasks and dependencies in Linear immediately so team sprints immediately
- Blockers surfaced in AI sessions → logged and escalated automatically so they are not forgotten
- AI-assisted retrospectives → action items auto-assigned to team members so we actually improve

---

### 3.3 Tertiary Persona: Strategy Consultant

| Field | Details |
|---|---|
| **Name** | Anjali, 28 |
| **Role** | Associate, management consulting firm |
| **Tech Stack** | ChatGPT + Gemini, Notion, Trello |
| **AI Usage** | 2–4 sessions/day |
| **Willingness to Pay** | $20–35/user/month |

**Pain Points:**
- Manual documentation of AI sessions is time-consuming and error-prone
- No organized system for cross-project AI conversation management
- Clients increasingly ask for documentation of AI-assisted analysis

---

### 3.4 Persona Summary Matrix

| Attribute | Priya (PM) | Rohan (Eng Lead) | Anjali (Consultant) |
|---|---|---|---|
| AI Usage Frequency | 5+/day | 3–5/day | 2–4/day |
| Primary AI Tool | ChatGPT | Claude | ChatGPT + Gemini |
| Primary Task Tool | Jira | Linear | Notion/Trello |
| Team Size | 15–30 | 20–80 | 5–15 |
| Budget Sensitivity | Medium | Low | High |
| Integration Priority | Jira, Notion, Slack | Linear, GitHub, Slack | Notion, Trello |
| MVP Feature Priority | Action extraction, Jira sync | Decision logging, Linear sync | Multi-project org, export |

---

## 4. Product Goals & OKRs

### 4.1 Product Vision

> **Chatly makes every AI conversation executable** — transforming the raw output of AI-assisted thinking into structured, assigned, tracked work.

### 4.2 Strategic Pillars

| Pillar | Description |
|---|---|
| Extraction Accuracy | Be the most accurate AI conversation parser in the market |
| Integration Breadth | Support every major workflow tool without friction |
| Zero-Interruption UX | Work invisibly; surface value without adding workflow steps |
| Trust and Control | Full visibility into what was extracted and why, with easy correction |
| Legal & Privacy First | Privacy-by-design; compliant by architecture, not by patch |

### 4.3 OKRs by Quarter

#### Q1 2026 — MVP Launch (Weeks 1–16)

**Objective 1: Ship a high-quality MVP that validates core value proposition**

| Key Result | Measurement | Target |
|---|---|---|
| KR1.1 | Beta users onboarded | 200 |
| KR1.2 | Extraction accuracy (F1 score) | ≥ 82% |
| KR1.3 | Integrations live at launch | 3 (Jira, Notion, Slack) |
| KR1.4 | Avg. session setup time post-onboarding | < 5 minutes |

**Objective 2: Demonstrate user retention and engagement**

| Key Result | Measurement | Target |
|---|---|---|
| KR2.1 | Week-4 retention rate (beta) | ≥ 55% |
| KR2.2 | Avg. sessions processed/user/week | ≥ 4 |
| KR2.3 | NPS score at end of beta | ≥ 40 |

#### Q2 2026 — V1 Launch (General Availability)

**Objective 3: Achieve initial commercial traction**

| Key Result | Measurement | Target |
|---|---|---|
| KR3.1 | Paying customers (teams) | 50 |
| KR3.2 | Monthly Recurring Revenue | $75,000 |
| KR3.3 | Integration suite expanded | 6 tools |
| KR3.4 | Customer churn rate | < 5%/month |

#### Q3–Q4 2026 — V2 (Platform Maturity)

**Objective 5: Establish Chatly as category leader**

| Key Result | Measurement | Target |
|---|---|---|
| KR5.1 | ARR | $1.5M |
| KR5.2 | Paying teams | 200+ |
| KR5.3 | Integration coverage | 10+ tools |
| KR5.4 | Enterprise deals (50+ seat) | 5 |
| KR5.5 | SOC 2 Type II certification | Achieved |

---

## 5. Feature Requirements

### Priority Definitions

| Priority | Label | Meaning |
|---|---|---|
| P0 | Must Have (MVP) | Blocks shipping; fundamental to core value proposition |
| P1 | Should Have (V1) | Significantly enhances value; ships within 90 days of MVP |
| P2 | Nice to Have (V2+) | Adds differentiation; V2 roadmap |

### 5.1 Core Features

#### F-01: AI Conversation Ingestion Engine (P0)
Accept AI conversation transcripts via multiple input methods and normalize them for downstream NLP processing.

**Input Methods:**
- Manual paste (text input in Chatly UI)
- File upload (.txt, .json, .md, .docx, .pdf)
- Browser extension (live capture from ChatGPT, Claude, Gemini, Copilot)
- REST API endpoint (programmatic ingestion)
- Webhook listener

#### F-02: NLP Extraction Pipeline (P0)
Multi-stage NLP pipeline that extracts structured entities from conversations.

**Extracted Entity Types:**

| Entity | Description | Example |
|---|---|---|
| Action Item | A concrete task to be performed | "Build the authentication module" |
| Decision | A conclusion or choice reached | "We will use PostgreSQL over MongoDB" |
| Owner | A person or role responsible | "Rohan", "the design team" |
| Deadline | A time constraint or date | "by end of Q2", "next Friday" |
| Blocker | An impediment to progress | "Waiting on API credentials from vendor" |
| Priority Signal | Urgency indicators | "urgent", "critical", "must have" |

**Pipeline Stages:**
1. Preprocessing: Tokenization, POS tagging, NER (SpaCy)
2. Semantic Role Labeling (AllenNLP SRL / fine-tuned BERT-SRL)
3. Classification (fine-tuned RoBERTa, multi-label)
4. Coreference Resolution
5. LLM Disambiguation (low-confidence < 0.65 → GPT-4o mini)
6. Confidence Scoring (0.0–1.0)
7. Structured JSON Output

**Acceptance Criteria:** F1 ≥ 82% at MVP; ≥ 88% at V1. 10,000 tokens processed in < 8 seconds.

#### F-03: Extraction Review & Correction UI (P0)
Interface for reviewing extracted items before sync — confirm, edit, reject, or add items. Confidence indicator: green ≥ 80%, yellow 50–79%, red < 50%.

#### F-04: Execution Pipeline Builder (P0)
Generates a structured execution pipeline — ordered, linked tasks with dependencies, owners, and deadlines — ready for export to Jira, Notion, Linear, or Markdown.

#### F-05: Workflow Integration Sync (P0)
**MVP Integrations (P0):** Jira, Notion, Slack. OAuth 2.0 auth, configurable field mapping, conflict detection, retry logic (3x with exponential backoff). Sync failure rate < 2%.

#### F-06: Conversation & Pipeline Dashboard (P0)
Centralized view of all past sessions, extraction status, pipeline status, and sync status. Loads within 2 seconds for ≤ 500 sessions.

#### F-07: Workspace & Team Management (P0)

| Role | Permissions |
|---|---|
| Admin | Full access, billing, integrations, team management |
| Member | Process conversations, view own sessions, sync to tools |
| Viewer | Read-only access to sessions and pipelines |

### 5.2 Advanced Features

| Feature | Priority | Description |
|---|---|---|
| Real-Time Browser Extension | P1 | Live capture from ChatGPT/Claude/Gemini; side panel overlay |
| Decision Log & Knowledge Base | P1 | Persistent, searchable log of all decisions across sessions |
| Owner Assignment & Mention Resolution | P1 | Fuzzy match names to workspace members |
| Deadline Normalization + Calendar Sync | P1 | NLP → absolute dates; Google Calendar + Outlook sync |
| Multi-Session Synthesis | P1 | Unify up to 10 sessions into one pipeline |
| AI Conversation Templates | P2 | Sprint Planning, PRD Brainstorm, Architecture Review, etc. |
| Analytics & Reporting | P2 | Workspace productivity analytics; weekly digest |
| Public API & Webhooks | P2 | REST API (OpenAPI 3.0) + webhook system for enterprise |

---

## 6. User Stories & Acceptance Criteria

### 6.1 Ingestion & Processing

**US-001: Paste Conversation for Processing**
*As a PM, I want to paste an AI conversation into Chatly so that I can extract structured action items without manually reviewing the entire chat.*
- Given I click "New Session" and paste text → Chatly begins processing within 2 seconds
- Given processing completes → I see extracted action items, decisions, blockers, and owners

**US-002: Upload Conversation File**
- Given valid file ≤ 10MB → uploads and processing begins within 3 seconds
- Given file > 10MB → "File exceeds 10MB limit. Please split and upload in parts."

**US-003: Browser Extension Live Capture**
- Given extension installed + logged in → side panel activates on Claude.ai/ChatGPT.com
- Given AI delivers a response → side panel updates within 1 second

### 6.2 Extraction & Review

**US-004: Review Extracted Action Items**
- Given session processed → all items displayed with source quote highlighted
- Given item confidence < 50% → flagged red with tooltip "Low confidence — please review"

**US-005: Reject Irrelevant Extractions**
- Given I click Reject → item moves to Rejected section
- Given I click Restore → item moves back to active list

**US-006: Manually Add Action Items**
- Given I click "Add Item" → blank item card in edit mode
- Given sync → manually added items sync alongside extracted items

### 6.3 Integration Sync

**US-007: Sync to Jira**
- Given Jira connected → Chatly creates Jira issues within 10 seconds
- Given owner resolved → issue assigned; deadline → Jira due date set

**US-008: Post Pipeline Summary to Slack**
- Given Slack connected → formatted Block Kit message in configured channel within 5 seconds

**US-009: Create Notion Page from Pipeline**
- Given Notion connected → page created with action items as database rows within 15 seconds

---

## 7. Technical Architecture Overview

### 7.1 High-Level Architecture

Chatly is built on a microservices architecture deployed on AWS, designed for horizontal scalability, fault isolation, and independent service deployment.

**Services:**
- **Client Layer:** React 18 web app, Chrome browser extension, Mobile (V2)
- **API Gateway:** REST + WebSocket, Rate Limiting, Request Routing
- **Auth Service:** JWT / OAuth 2.0, SSO (SAML V1)
- **Ingestion Service:** File parsing, normalization, segmentation, token count
- **NLP Pipeline Service:** Preprocessing, entity extraction, classification, confidence scoring
- **Integration Service:** Jira / Notion / Slack / Linear adapters, sync queue
- **Pipeline Service:** Pipeline generation, dependency detection, priority ordering, export
- **Storage Layer:** PostgreSQL (primary), Redis (cache), S3 (files), Pinecone (vector DB)
- **Message Broker:** AWS SQS + SNS
- **Notification Service:** Email, Slack, in-app notifications

### 7.2 NLP Pipeline Architecture

**Stage 1 → Preprocessing**
Sentence tokenization (SpaCy) · POS tagging · NER · Speaker turn labeling

**Stage 2 → Semantic Role Labeling**
Agent / Action / Object / Temporal extraction (AllenNLP SRL / fine-tuned BERT-SRL)

**Stage 3 → Classification**
Action Item / Decision / Blocker classifiers (fine-tuned RoBERTa, multi-label)

**Stage 4 → Coreference Resolution**
Pronoun + reference → named entity resolution (SpaCy neuralcoref / FastCoref)

**Stage 5 → LLM Disambiguation**
Low-confidence items (score < 0.65) → GPT-4o mini · Natural language deadline normalization

**Stage 6 → Structured Output**
JSON schema validation · Confidence scoring · Source span mapping

**LLM Cost Management:**
- Only items with confidence < 0.65 sent to LLM (~60% reduction in LLM calls)
- GPT-4o mini (~$0.15/1M input tokens) not GPT-4o
- Redis caching for identical sentence patterns (30-day TTL)

### 7.3 Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend (Web) | React 18 + TypeScript | Component ecosystem; team familiarity |
| Frontend (Extension) | Chrome Extension Manifest V3 | Chrome Web Store requirement |
| Backend (API) | Node.js + Express | Fast iteration; WebSocket support |
| NLP Services | Python + FastAPI | Python ML ecosystem (SpaCy, HuggingFace) |
| Primary Database | PostgreSQL 16 (AWS RDS) | Relational integrity; JSONB flexibility |
| Cache | Redis (AWS ElastiCache) | Session caching; rate limiting |
| Vector Database | Pinecone | Semantic search for Decision Log |
| Object Storage | AWS S3 | File uploads; export artifacts |
| Message Queue | AWS SQS | Async NLP job queue |
| LLM API | OpenAI GPT-4o mini | Cost-efficient disambiguation |
| NLP Models | HuggingFace Transformers (self-hosted) | Fine-tuned RoBERTa classifiers |
| Infrastructure | AWS ECS Fargate + RDS + ElastiCache | Managed services; autoscaling |
| Monitoring | Datadog | APM, logs, custom metrics |
| Error Tracking | Sentry | Real-time error alerting |
| Secrets Management | AWS Secrets Manager | OAuth tokens; API keys |

---

## 8. Data Architecture & Privacy Design

### 8.1 Data Classification

| Data Type | Classification | Handling |
|---|---|---|
| Raw conversation transcripts | Highly Sensitive (PII potential) | AES-256 at rest; never logged; workspace-isolated |
| Extracted items | Sensitive | Encrypted at rest; workspace-isolated |
| OAuth tokens | Highly Sensitive | AES-256 encrypted; never exposed in logs or API responses |
| User email / name | PII | Standard GDPR PII treatment |
| Audit logs | Compliance | Retained 7 years; tamper-evident |
| Analytics / metrics | Aggregated (anonymized) | No PII; safe for analytics pipelines |

### 8.2 Data Residency

| Region | Available | Notes |
|---|---|---|
| United States (us-east-1) | MVP | Default region |
| European Union (eu-west-1) | V1 | Required for GDPR compliance |
| Asia Pacific | V2 | Enterprise expansion |

### 8.3 Data Retention Policy

| Data Type | Default Retention | Configurable |
|---|---|---|
| Raw session transcripts | 12 months | Yes (Pro+: 1–36 months) |
| Extracted items | 24 months | Yes (Pro+) |
| Audit logs | 7 years | No (compliance) |
| Deleted user data | Purged within 30 days | No |

---

## 9. Integrations

### 9.1 Integration Priority Matrix

| Tool | Priority | Data Pushed |
|---|---|---|
| Jira | P0 (MVP) | Issues, Epics, Sub-tasks, Assignees, Due Dates, Priority |
| Notion | P0 (MVP) | Database entries, Page blocks, Properties |
| Slack | P0 (MVP) | Channel messages, Formatted summaries |
| Linear | P1 (V1) | Issues, Projects, Cycles, Assignees |
| Trello | P1 (V1) | Cards, Lists, Members, Due Dates |
| Asana | P1 (V1) | Tasks, Sections, Assignees, Due Dates |
| GitHub | P1 (V1) | Issues, Labels, Assignees, Milestones |
| Google Calendar | P1 (V1) | Events (deadline-based) |
| Confluence | P2 (V2) | Pages, Decision logs |
| Monday.com | P2 (V2) | Items, Subitems, Assignees |
| Zapier | P2 (V2) | Webhook trigger for custom workflows |

---

## 10. UX & User Flows

### 10.1 Design Principles

| Principle | Implementation |
|---|---|
| Minimal Friction | Core actions completable in ≤ 3 clicks |
| Transparency | Always show what was extracted + why (confidence + source highlighting) |
| Progressive Disclosure | Advanced features never block core value delivery |
| Error Recovery | Every failure state has clear explanation + actionable recovery path |
| Accessibility | WCAG 2.1 Level AA compliance |
| Privacy-Visible | Users clearly see what data is stored; easy access to delete/export |

### 10.2 Core User Flows

**Flow 1: First-Time Onboarding (Target: < 5 minutes to first pipeline)**
1. Sign Up (Google OAuth or email)
2. Workspace Setup (name + optional team invite)
3. Connect First Integration (Jira / Notion / Slack → OAuth → field mapping defaults)
4. Process First Session (paste or use sample conversation → < 10s processing)
5. Review Extractions (guided tooltips)
6. Sync to Tool (one-click)
7. Dashboard Redirect

**Flow 2: Regular Session Processing (Target: < 2 minutes paste to sync)**
1. Dashboard → "New Session"
2. Input Method (Paste / Upload / Import from Extension)
3. Submit → Processing status bar
4. Extraction Review (split-pane: conversation left, extracted items right)
5. Approve + Generate Pipeline
6. Sync Selection + Confirmation

**Flow 3: Browser Extension Real-Time Capture**
1. Open Claude.ai or ChatGPT.com → extension activates
2. Side panel shows extractions in near-real-time (per AI response)
3. Inline review per item (Approve / Reject / Edit)
4. "Finish Session" → items compiled into pipeline
5. Sync from extension side panel or Chatly web app

---

## 11. Non-Functional Requirements

### 11.1 Performance

| Metric | Requirement |
|---|---|
| API response time (p95) | < 200ms (non-processing endpoints) |
| Post-session processing | < 30s for ≤ 10,000 tokens |
| Real-time extraction latency | < 3s per AI response (extension) |
| Dashboard load time | < 2s (p95, 500 sessions) |
| Sync to Jira/Notion/Slack | < 10s (< 20 items) |
| Concurrent users | 1,000 at MVP; 10,000 at V2 |

### 11.2 Availability & Reliability

| Metric | Requirement |
|---|---|
| API uptime SLA | 99.9% (Pro); 99.95% (Enterprise) |
| RTO (Recovery Time Objective) | < 1 hour for total service failure |
| RPO (Recovery Point Objective) | < 15 minutes (database backup frequency) |

### 11.3 Security

| Requirement | Implementation |
|---|---|
| Encryption in transit | TLS 1.3 for all API and web traffic |
| Encryption at rest | AES-256 (RDS + S3) |
| Authentication | JWT (1-hour expiry) + refresh token rotation |
| Authorization | Server-side RBAC; workspace isolation at DB query level |
| Penetration testing | Quarterly external pen test |

---

## 12. Success Metrics

### 12.1 North Star Metric

> **Execution Pipelines Created per Week (Workspace-Level)**

### 12.2 Metric Targets

#### Acquisition
| Metric | Target (Beta) | Target (V1) |
|---|---|---|
| Signups | 200 | 1,000 |
| Activation (processed ≥ 1 session) | 70% | 75% |
| Time to first pipeline | < 8 min | < 5 min |

#### Engagement
| Metric | Target (V1) |
|---|---|
| Sessions/active user/week | ≥ 4 |
| Pipeline creation rate | ≥ 75% |
| Sync rate | ≥ 60% |
| DAU/MAU | ≥ 40% |

#### Retention
| Metric | Target (V1) |
|---|---|
| Week-1 retention | ≥ 65% |
| Month-1 retention | ≥ 50% |
| Month-3 retention | ≥ 35% |

#### Revenue
| Metric | Target (End Year 1) |
|---|---|
| MRR | $125,000 |
| ARR | $1.5M |
| LTV:CAC | ≥ 3:1 |
| Net Revenue Retention | ≥ 110% |

#### Quality
| Metric | Target (MVP) | Target (V1) |
|---|---|---|
| NLP Extraction F1 Score | ≥ 82% | ≥ 88% |
| User correction rate (edits/session) | < 2.5 | < 1.5 |
| Sync failure rate | < 3% | < 1.5% |
| NPS Score | ≥ 35 | ≥ 50 |

---

## 13. Legal & Compliance Framework

### 13.1 Regulatory Compliance

| Regulation | Jurisdiction | Required By |
|---|---|---|
| **GDPR** | European Union | MVP Launch |
| **CCPA / CPRA** | California, USA | MVP Launch |
| **LGPD** | Brazil | V1 |
| **PIPEDA** | Canada | V1 |
| **EU AI Act** | European Union | V1 (EU users) |

### 13.2 Privacy-by-Design Principles

1. **Data Minimization:** Collect only data strictly necessary
2. **Purpose Limitation:** Not used for advertising or profiling
3. **Storage Limitation:** Configurable retention with automatic deletion
4. **Accuracy:** Users can correct extracted data at any time
5. **Integrity & Confidentiality:** AES-256 at rest; TLS 1.3 in transit
6. **Accountability:** DPA-ready documentation; audit logs

### 13.3 Data Subject Rights

| Right | Regulation | SLA |
|---|---|---|
| Right to Access | GDPR Art. 15, CCPA | 30 days |
| Right to Erasure | GDPR Art. 17, CCPA | 30 days |
| Right to Portability | GDPR Art. 20 | 30 days |
| Right to Rectification | GDPR Art. 16 | Immediate |
| Do Not Sell (CCPA) | CCPA § 1798.120 | Immediate |

### 13.4 Legal Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| AI Platform ToS Violation | Low | Critical | Legal ToS review before MVP; user-export ingestion model |
| GDPR Violation | Medium | Critical | Privacy-by-design; SCCs; DPO appointment |
| IP Infringement | Medium | High | SCA in CI/CD; permissively licensed models only |
| Data Breach | Low | Critical | AES-256; zero-log policy; pen testing; SOC 2 |
| HIPAA Violation | Low | Critical | BAA required before healthcare onboarding |

---

## 14. Go-to-Market Strategy

### 14.1 Positioning Statement

*For knowledge workers and teams who use AI assistants daily, Chatly is the AI conversation operationalization platform that automatically transforms AI conversations into structured, executed work — unlike manual task entry or generic automation tools, Chatly understands the semantic content of AI conversations and routes tasks, decisions, and ownership directly into the tools your team already uses.*

### 14.2 Pricing Model

| Tier | Price | Limits |
|---|---|---|
| Free | $0/month | 5 sessions/month, 10K tokens/session, 1 integration |
| Pro (Individual) | $19/month | 50 sessions/month, 50K tokens/session, 3 integrations |
| Team | $49/user/month (min 3 seats) | Unlimited sessions, all integrations, admin dashboard |
| Enterprise | Custom ($75+/user/month) | Unlimited everything, SSO/SAML, SOC 2, SLA, dedicated support |

### 14.3 Distribution Channels

1. **Product-Led Growth (PLG):** Free → viral invite loops → team adoption → Team tier conversion. Target: 60% of ARR from PLG-originated accounts.
2. **App Marketplaces:** Jira Marketplace, Notion Integrations Gallery, Slack App Directory.
3. **Content Marketing:** SEO blog, YouTube workflow demos. Target: 30K monthly organic visitors by Month 6.
4. **Partnership / Co-Marketing:** PM communities (Lenny's Newsletter, Reforge, Product School)
5. **Product Hunt Launch:** Coordinated launch; target Top 3 Product of the Day

---

## 15. Risk Analysis

| Risk | Category | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| NLP extraction accuracy insufficient | Technical | High | High | Hybrid NLP + LLM; confidence scoring; mandatory human review |
| LLM API cost spikes | Financial | Medium | High | Fine-tuned local models; token limits per tier |
| Integration breaking changes | Technical | Medium | High | API version pinning; integration monitoring |
| User privacy concerns | Legal/Trust | High | High | Privacy-by-design; EU data residency; DPA |
| Slow adoption / behavior change friction | Market | Medium | High | PLG motion; generous free tier; extension as zero-friction overlay |
| Competitor ships native AI-to-task feature | Competitive | Medium | High | Accelerate integration breadth and NLP quality |
| Data breach | Security | Low | Critical | AES-256; zero-log policy; SOC 2; bug bounty |

---

## 16. Product Roadmap

### MVP (Weeks 1–16) — Core Value Validation

| Feature | Priority |
|---|---|
| Ingestion Engine (paste + file upload) | P0 |
| NLP Extraction Pipeline v1 | P0 |
| Extraction Review UI | P0 |
| Execution Pipeline Builder | P0 |
| Jira + Notion + Slack Integrations | P0 |
| Conversation & Pipeline Dashboard | P0 |
| Workspace & Team Management + RBAC | P0 |
| Auth (Google OAuth + email) | P0 |
| Privacy Policy + ToS + DPA + Cookie consent | P0 |
| Data deletion + export API endpoints | P0 |

**MVP Exit Criteria:** 200 beta users · F1 ≥ 82% · < 2% sync failure rate · Week-4 retention ≥ 55% · NPS ≥ 40

### V1 (Months 5–8) — Commercial Launch

Real-Time Browser Extension · Decision Log · Multi-Session Synthesis · Linear / Trello / Asana / GitHub integrations · Billing (Stripe) · NLP Model v2 · SOC 2 Type I initiation · EU data residency · DPO appointment

**V1 Exit Criteria:** 50 paying teams · $75K MRR · F1 ≥ 88% · Month-1 retention ≥ 50%

### V2 (Months 9–18) — Platform Maturity

AI Conversation Templates · Public REST API + Webhooks · SAML SSO · Custom NLP Fine-Tuning · SOC 2 Type II · ISO 27001 · Mobile App (iOS + Android) · On-Premise Deployment Beta

---

## 17. Financial Projections

### Revenue Projections

| Period | MRR | ARR | Paying Teams |
|---|---|---|---|
| Month 4 (MVP Beta) | $0 | $0 | 0 |
| Month 8 (V1 GA) | $75,000 | $900,000 | 50 |
| Month 12 | $125,000 | $1,500,000 | 100 |
| Month 18 | $250,000 | $3,000,000 | 200 |

### Unit Economics

| Metric | Target (V1) | Target (Year 2) |
|---|---|---|
| Average Contract Value (ACV) | $8,000/year | $15,000/year |
| CAC (blended) | < $2,500 | < $3,000 |
| LTV:CAC | ≥ 3:1 | ≥ 4:1 |
| Gross Margin | 75%+ | 80%+ |
| Net Revenue Retention | ≥ 110% | ≥ 120% |

### Funding Requirements

| Round | Target | Timeline |
|---|---|---|
| Pre-Seed | $500K–$1M | Pre-MVP |
| Seed | $3M–$5M | Month 6 |
| Series A | $10M–$20M | Month 18 |

---

## 16. Competitive Landscape

### Competitive Matrix

| Capability | Chatly | Otter.ai | Fireflies.ai | Zapier | Notion AI | Linear AI |
|---|---|---|---|---|---|---|
| AI conversation extraction | Native, purpose-built | Human meeting focus | Human meeting focus | None | Limited (Notion only) | Limited (Linear only) |
| Multi-tool integration | 10+ tools | Jira, Notion, Slack | CRM + Slack | Unlimited (manual config) | Notion only | Linear only |
| Decision logging | Structured, searchable | Basic transcript | Basic transcript | None | None | None |
| Real-time extension | Yes (P1) | Meeting bot | Meeting bot | No | No | No |
| Confidence scoring | Yes | No | No | No | No | No |
| NLP pipeline | Custom multi-stage | Transcription-only | Transcription-only | Rule-based | GPT prompt-based | GPT prompt-based |
| Privacy controls | Enterprise-grade (SOC 2, DPA) | Standard | Standard | Standard | Standard | Standard |
| Pricing (team) | $49/user/month | $20/user/month | $19/user/month | $69/month flat | $10/user/month | $8/user/month |

### Defensibility Moat

1. **Data Network Effect:** User corrections feed a proprietary training dataset that becomes increasingly difficult to replicate
2. **Integration Network:** Each additional integration increases workspace switching cost
3. **Category Ownership:** By naming and evangelizing "AI Conversation Operationalization," Chatly aims to be the category-defining brand

---

## Appendix A: Assumptions

1. AI platform providers do not materially restrict third-party processing of user-exported conversation transcripts.
2. Target market continues to adopt AI assistants at current or higher rates through 2026–2027.
3. OpenAI GPT-4o mini API pricing remains within 2x of February 2026 pricing.
4. Core engineering team assembled within 8 weeks of funding.
5. Integration APIs (Jira, Notion, Slack) maintain backward compatibility during V1 timeline.

---

## Appendix B: Glossary

| Term | Definition |
|---|---|
| Action Item | A concrete, executable task identified from an AI conversation |
| DPA | Data Processing Agreement — GDPR contract between data controller and processor |
| DPO | Data Protection Officer — GDPR-required role for large-scale personal data processors |
| Execution Pipeline | A structured, ordered set of tasks with owners, deadlines, and dependencies |
| F1 Score | Harmonic mean of precision and recall; measures NLP extraction quality |
| NLP | Natural Language Processing |
| Pipeline Sync | The action of pushing a structured execution pipeline to one or more workflow tools |
| PLG | Product-Led Growth — acquisition strategy driven by the product itself |
| Session | A single AI conversation submitted to Chatly for processing |
| SOC 2 | Service Organization Control 2 — security and compliance audit standard for SaaS |
| Workspace | An organizational unit in Chatly containing users, sessions, integrations, and settings |
