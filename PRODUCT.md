# PRODUCT.md
> This is the single source of truth for this product. All development decisions are made against this document.
> Last updated: March 2026

---

## I. North Star Statement

> "A living map that traces the frontier of human knowledge — and the path you walk through it."

Whenever you're unsure whether to add a feature or how to design an interaction, come back to this sentence.
If a new feature conflicts with it, don't build it.

**The Product Loop:**
> A — Build the foundation (structured knowledge framework) → B — Daily nourishment (news lands on the framework) → C — Trigger action (from understanding to real-world change)
> All three layers are essential. Without A, B is noise. Without C, A and B are just passive consumption.

---

## II. What Is This Product

**In one sentence:**
"The personal growth operating system for the AI era — a living map with editorial judgment, helping you find direction in the information flood."

**Why this is different from the previous version:**
Upgraded from "personal guide" to "knowledge operating system" — not task execution (what Apple does), not a course platform (what Coursera does), but a knowledge system with a standpoint, judgment, and framework.

**It's more like:**
- A living book (structured, deep-readable, grows over time)
- A mentor with taste (gives direction and good questions, not task lists)
- An actionable map (not just for viewing — it tells you where to go next)

**It is not:**
- A habit-tracking or check-in tool
- A chaotic information aggregator
- A one-way content feed — users can ask questions, and the product responds
- An anxiety machine — no "you're falling behind"

**Why this product exists:**
> Claude is smart, but it doesn't know you. This product knows you.

When users ask Claude directly, they get a generic answer — the same for everyone, starting from zero each time, no memory, no sense of direction.

This product knows who you are: your role, your direction, what you've learned, what transitions you're considering.
So the same question here gets not just "how to do it" but "why this matters for your growth path, and what your next step is."

This is the product's real moat — not more features than Claude, but knowing the user better than Claude does.

**Why it won't be replaced by Apple / Microsoft Copilot:**
Apple Intelligence and Copilot operate at the efficiency layer — helping you write emails faster, find files faster, execute tasks faster.
They have no knowledge framework, no growth narrative, no editorial standpoint.
An operating system shouldn't have a standpoint — but this product must.

> Apple makes your tools smarter. This product makes you clearer and more oriented in the AI era.

These are two completely different value layers. There is no direct competition.

**Boundary decision on "cross-tool connection":**
Cross-tool context awareness (connecting Figma, Teams, Email) is a bonus feature — a v2 optional add-on.
It is not the product's core. It is not the moat.
Betting the core on cross-tool connection means losing to big tech. Betting the core on knowledge framework and editorial judgment means big tech can't compete.

---

## II.V. Market Analysis & Competitive Positioning

### Market Landscape (2026)

The AI-powered personalized learning path market reaches $6B in 2026, projected to grow to $16.4B by 2030 at a 28.6% CAGR. This is a real, large market — but existing products fall into three tiers, each distinct from this product's positioning:

**Tier 1: Enterprise LMS (not a competitor)**
Docebo, 360Learning, Cornerstone — targeting enterprise HR/L&D, focused on compliance training, skills assessment, and course management.
Cold products, check-in logic, poor user experience. Their users are corporate HR teams, not individual learners.

**Tier 2: Personal career development platforms (partial overlap, differentiable)**
LinkedIn Learning, Coursera, Pluralsight — rich content but generic.
No personal context, can't tell you "what this means for you." No knowledge framework, no daily news positioning.

**Tier 3: AI personal assistants / AI OS (closest to long-term vision, but different direction)**
Rewind, Dume.ai, Lindy, Apple Intelligence, Microsoft Copilot — cross-tool connection, context awareness, task execution.
These products operate at the efficiency layer, not the growth layer. No knowledge framework, no editorial standpoint, no career direction narrative.

### The Real Market Gap

No existing product simultaneously achieves all four:
1. Systematic AI knowledge framework (helping people understand the big picture)
2. Daily news + framework positioning (giving news coordinates)
3. Personal growth narrative (telling you what this means for you)
4. Editorial judgment over algorithmic recommendation (a standpoint, with taste)

This is a real gap — and the product's moat.

### Key Technology Signal

MCP (Model Context Protocol) is mature — Claude via MCP can already connect to Notion, Gmail, Calendar, and Figma, reading work context and executing cross-tool tasks in a single conversation. This is the technical foundation for the v2 "cross-tool connection" feature. It's ready now, not a future possibility.

### Competitive Boundary Summary

| | Big Tech (Apple / Copilot) | Course Platforms (Coursera) | This Product |
|---|---|---|---|
| Core value | Efficiency | Knowledge acquisition | Direction + growth narrative |
| Editorial standpoint | ❌ | ❌ | ✅ |
| Systematic knowledge framework | ❌ | ❌ | ✅ |
| Personalisation depth | Tool layer | Behavioural data | Truly knows you |
| Risk of being replaced | Will do efficiency better | Will have more content | Soul cannot be copied |

---

## III. Who It's For

**Core User:**

Name/Archetype: Tao (yourself)
Role: UX Designer

**Real Pain Point — A Specific Scene:**
> In a conversation with a UX friend working at an AI startup, I discovered she had shipped a new product feature and run a full usability test using only Claude Code and Conductor. I felt a quiet defeat — not because of a lack of ability, but because I had never encountered these tools, and hadn't realised how dramatically AI could accelerate an entire workflow. I spent the whole weekend catching up. After learning about both tools, I realised I had only glimpsed a small corner of a much larger picture. My understanding of how AI is being applied across the industry remained fragmented and unsystematic. More honestly: I had no daily habit of learning about AI at all.

**Why they open the product every day:**
To consolidate and refresh their understanding — learning fundamentals, staying current with developments, and exploring new skills, tools, and working methods relevant to their role.

**Why they don't open the product:**
It starts to feel like another obligation. They need to carve out dedicated time for it, and the learning feels pressured rather than pleasurable.

**→ The product must resolve this tension:** Opening it should feel like picking up a favourite book — not completing a task.

---

## IV. The Core Experience

**The first screen:**
A philosophically resonant image — connecting AI and humanity — paired with a daily sentence. Different every time. Its purpose is to set a tone for thinking, not to deliver information.

**The three things users most want to do (in order):**
1. Understand what happened in the AI world today, and how it connects to their work
2. Locate it within the knowledge framework, deepening their systemic understanding
3. Identify one small action they can take today to genuinely experience it

**How users should feel when they leave (non-negotiable):**
Wanting more. Thoughtfully provoked. A quiet sense of understanding and control over the present. Hopeful about what's ahead.

---

## V. Knowledge Framework (Content Architecture)

**The framework is alive — this is one of the product's core commitments.**
The AI era changes. Each layer's content will be updated, and new layers will emerge.
The knowledge map is not a static table of contents but a living organism that grows with the times — this is the true meaning of "a living map."

| Level | Name | Core Question | Meaning for UX Designers |
|-------|------|---------------|--------------------------|
| L1 | AI Fundamentals | What is AI, and how does it work? | Understand the logic behind AI tools — demystify the black box |
| L2 | AI Technology Landscape | What directions exist, and where am I? | Identify which AI directions are directly relevant to design work |
| L3 | AI Products & Applications | How does AI become a real product? | Understand the core differences between AI UX and traditional UX |
| L4 | AI Tools in Practice | How can AI make me stronger? | Apply it today — Figma AI, design evaluation, automated user research |
| L5 | AI Industry & Trends | Where is the world heading? | Assess how the UX role will evolve in the AI era |
| L6 | AI & People · Organisations ★New | How is AI changing collaboration and teams? | Drive team adoption of AI workflows, build AI culture, influence organisational change |
| L7 | AI Entrepreneurship & Business ★New | How to create business value with AI? | AI products from 0 to 1, business models, market opportunities, rapid MVP validation |
| L8 | AI Ethics & Governance | How do we use AI responsibly? | Factor AI ethics and user rights into design decisions |

**Two types of framework updates:**
- Node content updates: existing node content changes, node shows "recently updated" tag (v0)
- New nodes or layers: announced via the daily brief or weekly question (v0)

**Framework update notification (v1 feature):**
Once there are enough users, a proactive notification system is needed — "a node you follow has an important update." In v0 with only one user, you know when things are updated. Build the notification system in v1.

**This framework can be adapted to other domains in future (history, physics, etc.)**
Tracked via a `domain` field in the architecture. v0 value: `'ai'`.

---

## VI. What v0 Builds (Scope)

### Build

---

#### Opening Screen
A new image and sentence every time the app is opened. Content connects AI and humanity.
Three image categories, rotating: cosmic and natural scale / human creations / the present and future.
Sentence standard: don't explain AI — provoke reflection on what it means to be human.

---

#### Knowledge Map (Vertical Scroll)
A vertical long-scroll format, not a complex interactive graph.
Like the table of contents and body of a book — scan the whole, dive into any section, return to the overview at any time.
Lighter, more book-like, simpler to build, and more inviting to read.

---

#### Daily Brief

**Purpose:** Understand the world. Help users know "what happened in AI today, and where it sits in the broader framework."
Action suggestions are not included here — that is the responsibility of the Actions module.

**Structure: 3 curated items + expandable list**
- 3 items represent editorial judgement: "These are the three things most worth knowing today."
- Expandable list: more items available for users who want to go deeper, hidden by default.

**The 3 item types:**
- 1 **Technology update** (L1–L2): What is developing at the technical level
- 1 **Product/application update** (L3): How AI is being built into real products
- 1 **Industry/trend update** (L5): How AI is shaping industries and roles

**Structure of each news item:**
- Headline + one-sentence summary
- Framework level tag (L1–L6) → **tappable, jumps to the corresponding node in the knowledge map**
- Role-specific insight (two dimensions):
  - **Short-term impact**: What this means for your work this week
  - **Long-term direction**: If this trend continues, how will your role change in 3–6 months?
- Highlighted terms → **tap to trigger inline AI explanation** (within the context of the current article)

**Design principle on "prediction":**
No fortune-telling predictions ("X role will disappear in three years").
Instead: trend judgements backed by evidence — based on current AI development speed and direction, what capability is most worth investing in right now.
Users build their own sense of career direction by reading daily, rather than passively receiving prophecies.

**Design decision on term explanation:**
No static glossary. Instead: AI explains terms on demand.
Rationale: no glossary to maintain; Claude explains any term in the context of the current article — more accurate, more natural, always current.

---

#### Actions (Standalone module, separate from the Daily Brief)

**Purpose:** Change yourself. Help users move from understanding to real changes in how they work.
Kept separate from the Brief — these are two distinct reading states that dilute each other when mixed.

**Core design principle: direction is discovered, not chosen.**
Don't ask users to set a fixed direction at sign-up — most people don't know what they truly want before they start.
The product first shows possibilities, letting users discover "I didn't know AI could help me with this," then continuously observes behavioural signals to calibrate dynamically.

---

**Phase 1: Show possibilities (user just arrived, don't ask for direction)**

On first entry, present three directions as inspiration — multi-select, maximum two:

- **Daily efficiency**: Use AI to do today's work twice as fast
- **Workflow upgrade**: Use AI to redesign your entire workflow and influence the team
- **Role evolution**: Use AI capabilities to drive a career transition or expand your scope

**Why maximum two:** Choosing all three creates focus loss — the system can't determine what to prioritise today. Two is the right ceiling; "daily efficiency + role evolution" can coexist.

Which ones the user selects, and where they linger longest — these are the first signals, recorded silently.

---

**Phase 2: Continuous behavioural signal calibration (built in v0, validated from day one)**

The system collects natural behavioural signals — no forms, invisible to the user:

| Signal | Inference |
|--------|-----------|
| Long dwell time on a news item | Interested in this direction |
| Content of AI Q&A questions | Current knowledge level |
| Action feedback "too easy" or "just right" | Difficulty preference |
| Opens "transition"-related nodes | Thinking about longer-term direction |
| Only reads L4 tools layer for several days | Hands-on oriented user |

Claude synthesises these signals to generate personalised action recommendations (examples below are content standard illustrations — full six-element content produced in Sprint 3):

- **Daily Figma UX** → With a Design System in place, use Figma AI or Claude to generate a new component draft based on existing component specs — including variants and auto layout structure
- **UX wanting to influence team** → Identify the most time-consuming repetitive task in your team (organising user research notes / writing design specs / competitive analysis), do it with AI and record the time comparison — real data is more persuasive than a demo
- **UX transitioning to PM (PM dimension)** → Without a formal requirements document, use Claude to generate a complete requirements breakdown from user pain points: problem statement, success metrics, edge cases — feel the difference between PM and UX thinking
- **UX transitioning to PM (frontend dimension)** → Use Claude Code or Cursor to generate runnable React code from a simple component you've designed (e.g. a card) — you don't need to write code, but you need to read the output and suggest changes
- **UX already using Claude Code** → Today use Claude Code to generate a React component for your design system, matching your existing token specs

**Technical implementation:** Supabase stores signals → signals are inserted into Claude's context when generating action recommendations → Claude outputs precise recommendations. Not a recommendation algorithm — AI judgement with context.

---

**Content standard — every action recommendation must include six elements:**

```
1. Scenario description  — When to use this
2. Tool(s)               — Specific software (Figma / Claude / Cursor etc.)
3. Steps                 — Step by step, one sentence per step, max 5 steps
4. Template or starting point — A prompt / file / link ready to copy and use
5. Time estimate         — 15 minutes / 1 hour / this week
6. Success marker        — What you should have when you're done
```

These six elements ensure every action recommendation is tangible, not abstract. Missing any one of them means the recommendation is not ready.

**Two time horizons (short-term + long-term coexist):**

**Short-term actions (today or this week):**
- Specific and immediately executable, estimated 15 minutes
- Format: starts with a verb + concrete steps + estimated time

**Long-term actions (directional, 1–3 month horizon):**
- Based on inferred user direction and career goals
- Not a task list — a directional thinking framework

**When users want more:**
Each action item offers an "explore further" option for users who want to go deeper.

---

**Content sourcing strategy — three layers:**

```
Layer 1: Curated external resources (primary source)
         Find real, validated templates and case studies
         Add editorial commentary: "why this template works and when to use it"
         Don't copy in full — summarise or adapt, keep original attribution

Layer 2: Claude personalisation
         Users see a general template, can click "adapt to my situation"
         Claude adjusts based on role and behavioural signals

Layer 3: User's own accumulation (login feature)
         Templates users find valuable can be saved to "My Template Library"
         This is one of the core values of the login feature
```

**Content production timing:**
Examples in PRODUCT.md are content standards and directional references.
Real first-batch content (full six elements, specific steps, usable templates) is produced in Sprint 3, not during the product design phase.

---

#### Search (New — v0 core feature)

**Purpose:** When users encounter an AI-related question during work, their first instinct is to search here — not YouTube or Google.

**Search result structure:**
```
User searches: "Figma AI generate Design System"

1. Direct answer      — How to do it (steps + tools), immediately usable
2. Framework location — Where this skill sits in the 8-layer framework (e.g. L4 Tools in Practice)
3. Personal journey   — Based on the user's background and direction, why this matters for them
                        e.g. "Given your goal of transitioning to PM, mastering this skill
                             has a deeper value — it gives you stronger technical vocabulary
                             when talking to developers. This is a key node on your L4 → L3 path."
4. Related actions    — What your next step is after learning this
5. Related nodes      — Directions to explore further
6. Related recent news — Latest developments in this direction
```

**Why this is better than asking Claude directly:**
Claude starts from zero every time — it doesn't know the user.
Search results here are placed inside the user's personal journey — the same question, tailored to the individual.
This is an experience Google, YouTube, and Claude cannot provide.

**Search as the most precise signal:**
What users search for is more honest than any survey. These searches feed directly into the behavioural signal system to calibrate future action recommendations.

---

#### AI Q&A
While reading any content (brief, knowledge node, action, search results), users can ask questions at any point.
Claude responds within the context of the current content — no page navigation required.
The entry point is lightweight — a natural extension of reading, not a standalone feature module.

---

#### Weekly Curated Question
At sign-up, users choose an exploration direction (career growth / tool efficiency / team impact / career transition).
Claude curates one meaningful question per week, tailored to that direction.
Not algorithmic — editorially judged, with taste.

---

#### Guest Mode — Instant Personalisation
On first visit (no login required), a lightweight single-choice prompt appears: "What are you here to explore today?"
Content for the session is shaped by their answer. No pressure to register. Fine to choose again next time.

---

### Don't Build (v0 hard limits)

- Check-ins, streaks, completion rates
- Forced login
- Assessments, scoring, rankings
- Complex force-directed galaxy graphs (replaced by scroll)
- Admin/manager dashboard
- Multi-domain switching
- Static glossary (replaced by AI inline explanation)

---

### Optional with Login (build, but never a barrier)

- Footprint tracking: highlight visited nodes on the map
- Persistent role and direction settings
- Weekly question direction memory
- Action history
- My Template Library: save useful templates for reuse

---

### Role Options

v0: UX/Designer, Engineer, Product Manager, Manager
v1 additions: Sales, Data Analyst, Marketing, Founder

---

### Navigation Structure (Decided)

**Opening screen:** Appears automatically on each launch. Does not occupy a navigation slot.

**Four bottom navigation entries:**

| Entry | Content | Mental state |
|-------|---------|--------------|
| Map | AI knowledge framework vertical scroll, node details | Overview, deep exploration |
| Brief | 3 curated daily news items + expandable list | Understand the world, observer |
| Actions | Short-term + long-term action recommendations | Change yourself, actor |
| Profile | Footprint, settings, weekly curated question | Reflect, locate yourself |

**Search bar:** Fixed at the top, accessible from any page. Does not occupy bottom navigation.

**Three entries are independent, but content is deeply interconnected:**
- Brief level tags → tap to jump to the corresponding knowledge map node
- Map nodes → related news → jump back to Brief
- Action recommendations → related knowledge nodes → jump to Map
- Brief footer → "This news triggered an action recommendation →" jump to Actions

Users can enter from any point and flow naturally between the three.

---

## VII. Design Principles (Non-Negotiable)

1. **Book logic, not app logic**
   No notification bombardment. No completion rates. No "you're falling behind."

2. **Curation over recommendation**
   An editorial voice with taste — not an algorithm driven by behavioural data.

3. **Good questions over good answers**
   A question worth sitting with is more valuable than a list to complete.

4. **The door is always open**
   Guests can browse any time. Login exists to leave a footprint — never as a barrier.

5. **Restraint as a feature**
   Before adding anything, ask: would this exist in a book?

6. **The complete loop: understanding to action**
   Every session should contain: learn → locate → what can I do? Without the action layer, the product is just a reader.

7. **Depth is the user's choice**
   Default to curated summaries. The option to go deeper is always there. Never force deep reading — never block it either.

---

## VIII. Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Frontend | Next.js 14 | Claude Code-friendly; zero-config Vercel deployment |
| Knowledge map | Vertical scroll + CSS | Lighter than D3; more book-like; interactive layer can be added in v1 |
| Database | Supabase | Integrated BaaS; Auth handles optional login |
| AI layer | Claude API (claude-sonnet-4-6) | Editorial voice, news analysis, inline term explanation, Q&A, weekly questions, action suggestions |
| News ingestion | RSS + Vercel Cron | Auto-triggers daily at UTC 06:00 |
| News archive | Supabase permanent storage | Every news item stored with complete fields from day one (level, role insight, user goal association) — prepares data for v1 history search |
| Dev tooling | Conductor + Claude Code | Parallel agents; you as conductor |
| Styling | Tailwind CSS | Dark theme, EB Garamond, gold accent #C4A882 |

---

## IX. Version Roadmap

```
v0  ← Now
    Opening screen + knowledge scroll + node detail + AI Q&A + search
    + daily brief (3 curated + expand) + actions (short & long term)
    + weekly curated question
    Goal: you want to open it every day, first instinct to search here for AI questions

v1  ← After v0 is validated
    Footprint system + persistent login + news mapped to nodes
    + expanded role options + framework update notifications
    + brief history archive + filter by user goal ("past 6 months of startup-related briefs")
    + founder user path expansion (L7 deep dive: business models, 0 to 1)

v2  ← After real users
    Role-based growth recommendations + multi-user version
    + enterprise dashboard + multi-domain support (history, physics, etc.)
    + cross-tool connection via MCP (Figma, Teams, Email — optional, not core)

v3  ← The long-term vision
    Personal AI Operating System for the AI era
    The product observes your actual work across all tools and surfaces —
    not because you described yourself, but because it sees you work.
    See section below for full v3 vision.
```

---

### V3 Vision: Personal AI Operating System

**What v3 is:**

> The product evolves from "a map you read" into "a collaborator that knows your work."

In v0–v2, the product knows you because you tell it who you are.
In v3, the product knows you because it observes how you actually work.

**The technical foundation — MCP (Model Context Protocol):**
MCP already exists and is production-ready. Claude via MCP can today connect to Notion, Gmail, Calendar, Figma — reading your meeting transcripts, updating tasks, drafting follow-ups, all in one conversation.

This means v3 is not a distant future. It's a deliberate evolution built on the same foundation.

**What v3 looks like in practice:**

```
You finish a design review in Figma at 3pm.
The product sees the session, notices you struggled with a component pattern.
That evening it surfaces: "Based on your Figma session today, here's an L4 action
that directly addresses what you were working on — and it connects to this week's
news about AI-generated design systems."

You attend a team meeting in Teams.
The product reads the transcript (with your permission).
It identifies an AI opportunity in your team's workflow and adds it to your
long-term action queue: "Your team spends ~40 min per sprint writing handoff notes.
Here's how to automate that."
```

**Why this won't be replaced by Apple Intelligence or Copilot:**

Apple and Copilot see your tools. They help you execute tasks faster.
They don't have a knowledge framework. They don't build a growth narrative.
They don't tell you what your work patterns mean for your career trajectory.

v3 of this product sees your tools AND interprets them through the lens of your growth —
connecting daily work observations to the knowledge framework, career direction, and actionable next steps.

**The progressive trust model:**

```
v0: Product knows you because you tell it (role, direction, goals)
v1: Product knows you because it remembers your history (footprint, searches, actions taken)
v2: Product knows you because you show it samples (upload meeting notes, share a Figma file)
v3: Product knows you because it observes continuously (MCP connections, with full consent)
```

Each step deepens the relationship. No step is forced.

**Boundary with big tech — permanently valid:**

Even at v3, the moat is not "we see more of your work than Apple does."
The moat is "we interpret what we see through a knowledge framework and growth narrative that big tech will never build — because operating systems don't have editorial standpoints, and this product does."

**Privacy commitment:**
All tool connections require explicit user consent.
No data is used to train models.
Users can disconnect any tool at any time.
The product never stores raw content — only synthesised insights.

---

### Enterprise Version Planning (v2 Detail)

**Core difference: Personal vs Enterprise**

| | Personal | Enterprise |
|---|---|---|
| Action content | Based on individual interests and direction | Based on company-wide standards |
| Selection | User chooses | Management defines |
| Goal | Personal growth | Team baseline uplift |
| Assessment | Optional, lightweight | Completion records exist, visible to management |

**Content in two layers:**

---

**Layer 1: Mandatory for all (universal — works for any company, any role)**

This layer doesn't depend on a specific role or industry. Any employee at any company can use it immediately.
Structured into three modules:

**Module A: AI Fundamentals (understanding, not technical)**
- What AI is and isn't — explained with an analogy anyone can grasp
- How large language models work — why they sometimes "make things up"
- The boundaries of AI capability — what's worth delegating to AI, what isn't
- Basic principles for using AI at work (accuracy, privacy, copyright)

**Module B: Prompt Basics (core hands-on skill)**
This is the most important part of the mandatory layer — learn to ask well, and you'll use AI well.

*Ready-to-use prompt template library:*

```
1. Summary template
"Please summarise the following into 3 key points, max 2 sentences each: [content]"

2. Rewrite template
"Please rewrite the following to be more [formal / concise / friendly],
keeping the core meaning intact: [content]"

3. Review template
"Please check the following for [grammatical errors / logical gaps /
unclear expressions] and suggest improvements: [content]"

4. Brainstorm template
"I need 5 different approaches to [topic]. Please suggest ideas
from different angles."

5. Explain template
"Please explain [concept] in simple language, assuming I know
nothing about this field."

6. Email template
"Please write a [formal / brief] email about [purpose],
addressed to [role], in a [friendly / professional] tone."

7. Meeting notes template
"Here are some meeting notes. Please organise them into:
1. Main discussion points  2. Decisions made  3. Action items: [content]"

8. Feedback template
"Please give constructive feedback on the following [document / design / proposal],
noting both strengths and areas for improvement: [content]"
```

*Advanced prompt principles:*
- Give AI a role: "You are a [role] with 10 years of experience"
- Specify format: "Please respond in bullet point format"
- Add constraints: "Keep your answer under 100 words"
- Follow up when unsatisfied: "Be more specific" / "Try a different angle"

**Module C: AI efficiency in daily work (immediate, practical value)**
No technical background needed — usable today:

- **Writing**: Use AI to draft a first version, then refine it yourself — 3x faster than starting from scratch
- **Information processing**: Feed long articles, reports, or meeting notes to AI for a summary, then apply your own judgement
- **Review and proofreading**: Ask AI to check an email's logic and tone before sending
- **Quick learning**: When you encounter an unfamiliar concept, ask AI to explain it simply
- **Brainstorming**: When stuck, ask AI for 5 different perspectives to spark your own thinking

*Each scenario includes: which tool to use + specific steps + real example + things to watch out for*

---

**Layer 2: Role electives (individual choice)**
Built on the personal version logic, deepened by role on top of the shared foundation.
Engineers, product managers, designers, and managers each have dedicated advanced content.

**Key design principle — minimise the sense of obligation:**
- Not called "mandatory courses" — called "team toolkit"
- Framed as "how our team has agreed to work," not "tasks you must complete"
- Completion records exist, but invisible to employees — only management sees the data
- Employees experience it as a tool, not an assessment

**The most critical technical decision for enterprise:**
Requires a content management backend so the company's HR or L&D team can define mandatory content themselves.
You don't maintain each company's content — the enterprise manages it.
This requires meaningfully different architecture from the personal version in the content layer.

---

## IX.V. Potential User Expansion (v1 Reference)

v0 focuses on the current user archetypes (UX Designer / Engineer / Product Manager / Manager).
But the product's potential users are more diverse than expected. The following directions can be considered after v0 is validated:

**Transitional founder (e.g. sales transitioning to product manager):**
- Core need: Systematically learn how to build products with Claude Code, understand business models and product strategy
- Relevant layers: L7 AI Entrepreneurship & Business (primary) + L4 AI Tools in Practice (secondary)
- Brief preference: startup, business models, 0-to-1 product content
- Action recommendations: foundational startup curriculum, business validation methods, rapid MVP building
- History brief search: browse all past startup-related briefs — transforms the product from "daily consumable" to "searchable knowledge library"

This user archetype requires no new product architecture. The existing framework covers it entirely — just add an "AI entrepreneurship" exploration direction at sign-up.

---

## X. Open Questions (Honest Record)

1. How does the knowledge scroll transition naturally between "scanning the whole" and "diving deep into a node"? **Needs prototype testing.**
2. The accuracy of the behavioural signal system needs real-world validation — can signals truly infer user direction and level? Are Claude's signal-based action recommendations genuinely precise? This is one of v0's most critical hypotheses to test.
3. How should AI Q&A and inline term explanation entry points be designed so they don't interrupt reading flow? **Needs detailed interaction design.**
4. Can Unsplash API reliably deliver images across all three opening screen categories? Or does this require a manually curated library?
5. How does the guest's exploration direction persist across pages without login? (Session storage should work — needs confirmation.)
6. ~~Do the Brief and Actions appear sequentially on the same page, or as separate navigation destinations?~~ **Decided: separate navigation entries. See Section VI navigation structure.**

---

## XI. A Note to Yourself

We are living through a moment of profound transformation — one driven by AI, and one that will reshape how society works at every level. As someone present at the very beginning of this shift, I want to build a genuine, systemic understanding of AI. And as someone who holds two identities — a working professional and a participant in the broader world — I want to explore what this change makes possible in both dimensions. Not just in the short term, but as a long-term orientation.

Building this product is itself part of that exploration — a way of discovering what it means to work as a product designer.

---

*"A living map that traces the frontier of human knowledge — and the path you walk through it."*
