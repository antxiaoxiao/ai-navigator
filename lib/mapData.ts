export interface SubNode {
  id: string;
  title: string;
  description: string;
}

export interface Layer {
  id: string;
  label: string;
  name: string;
  coreQuestion: string;
  starred?: boolean;
  subNodes: SubNode[];
}

export const MAP_LAYERS: Layer[] = [
  {
    id: 'L1',
    label: 'L1',
    name: 'AI Foundations',
    coreQuestion: 'What is AI and how does it work?',
    subNodes: [
      {
        id: 'l1-llms',
        title: 'Large Language Models (LLMs)',
        description:
          'The statistical pattern machines that predict the next token — understanding this dispels the "magic" myth and reveals both the power and the limits. They don\'t reason; they interpolate across everything they\'ve seen.',
      },
      {
        id: 'l1-neural-networks',
        title: 'Neural Networks & Deep Learning',
        description:
          'Layers of mathematical transformations that learn representations from data. The foundation beneath every modern AI system. Deep learning\'s power comes from composing simple functions into ones that capture complex structure.',
      },
      {
        id: 'l1-training-inference',
        title: 'Training & Inference',
        description:
          'How models are built (training on massive data) vs. how they\'re used (inference at query time). Knowing this helps you think about cost, speed, and capability limits — and why a model that existed last year may behave very differently today.',
      },
    ],
  },
  {
    id: 'L2',
    label: 'L2',
    name: 'AI Technology Landscape',
    coreQuestion: 'What directions exist, and where am I?',
    subNodes: [
      {
        id: 'l2-generative',
        title: 'Generative AI',
        description:
          'Models that create — text, images, code, audio, video. The category that changed the public understanding of AI overnight. The real skill is learning what generation is good for and where human judgment must stay in the loop.',
      },
      {
        id: 'l2-agents',
        title: 'AI Agents & Automation',
        description:
          'Systems that take sequences of actions, use tools, and pursue goals with minimal human intervention. The next frontier after chat. Agents introduce new failure modes — understanding them is the difference between useful automation and unreliable noise.',
      },
      {
        id: 'l2-multimodal',
        title: 'Multimodal AI',
        description:
          'Models that process and generate across multiple types of data. Vision + language is now standard; audio and video are arriving. For designers, this is the most immediately relevant frontier.',
      },
    ],
  },
  {
    id: 'L3',
    label: 'L3',
    name: 'AI Products & Applications',
    coreQuestion: 'How does AI become real products?',
    subNodes: [
      {
        id: 'l3-ux-principles',
        title: 'AI UX Design Principles',
        description:
          'Designing for probabilistic, non-deterministic systems. Error handling, trust calibration, and transparency are fundamentally different from traditional UX — users need to understand what the AI can and cannot do, without reading a manual.',
      },
      {
        id: 'l3-human-ai',
        title: 'Human-AI Interaction Patterns',
        description:
          'From command (prompt) to conversation to autonomous delegation — each requires different mental models from users. The right pattern depends on the stakes, the user\'s expertise, and how reversible the action is.',
      },
      {
        id: 'l3-product-strategy',
        title: 'Product Strategy with AI',
        description:
          'Where AI adds defensible value vs. where it\'s a commodity feature. This is the judgment call that separates good AI products from expensive demos. The moat is rarely the model — it\'s the data, the workflow, and the trust.',
      },
    ],
  },
  {
    id: 'L4',
    label: 'L4',
    name: 'AI Tools in Practice',
    coreQuestion: 'How can AI make me stronger today?',
    subNodes: [
      {
        id: 'l4-design-tools',
        title: 'Design & Creative Tools',
        description:
          'Figma AI, Midjourney, Adobe Firefly, Galileo. AI is already in your design workflow — the question is how deliberately you use it. The designers winning right now use AI for the 80% and apply judgment to the 20% that matters.',
      },
      {
        id: 'l4-productivity-tools',
        title: 'Productivity & Thinking Tools',
        description:
          'Claude, ChatGPT, Notion AI, Perplexity. The highest leverage is using these as thinking partners, not just writing assistants. The quality of your output depends on the quality of your prompts — and that\'s a learnable craft.',
      },
      {
        id: 'l4-dev-tools',
        title: 'Development Tools',
        description:
          'Claude Code, Cursor, GitHub Copilot. Non-engineers can now build; engineers can move dramatically faster. The skill floor for shipping has dropped — a UX designer who understands code well enough to direct AI can prototype production-quality interfaces.',
      },
    ],
  },
  {
    id: 'L5',
    label: 'L5',
    name: 'AI Industry & Trends',
    coreQuestion: 'Where is the world heading?',
    subNodes: [
      {
        id: 'l5-design-creative',
        title: 'AI in Design & Creative Work',
        description:
          'Automation of production tasks is accelerating. The roles that survive and thrive will be those that own judgment, taste, and strategic direction — the things that require having lived through enough failures to know what good looks like.',
      },
      {
        id: 'l5-economic-impact',
        title: 'Economic Impact & Role Evolution',
        description:
          'AI is not eliminating roles uniformly — it\'s restructuring them. Understanding which tasks are being automated helps you invest in what remains irreplaceable. The question isn\'t "will AI take my job" but "which parts of my job should I let AI take."',
      },
      {
        id: 'l5-frontier-models',
        title: 'Frontier Models & Research',
        description:
          'What\'s coming next from OpenAI, Anthropic, Google DeepMind. Following this layer helps you anticipate what tools you\'ll have in 12-18 months — and decide now which skills are worth investing in versus which to delegate to future models.',
      },
    ],
  },
  {
    id: 'L6',
    label: 'L6',
    name: 'AI & People · Organizations',
    coreQuestion: 'How does AI change how we work together?',
    starred: true,
    subNodes: [
      {
        id: 'l6-team-adoption',
        title: 'Team Adoption of AI Workflows',
        description:
          'Introducing AI to a team is a change management challenge, not a technology challenge. Resistance is usually about trust and control, not capability. The most effective path is showing, not telling — one workflow that saves two hours beats ten presentations.',
      },
      {
        id: 'l6-culture',
        title: 'AI Culture & Psychological Safety',
        description:
          'Teams that experiment with AI openly outperform those that use it secretly. Culture determines whether AI becomes a force multiplier or a source of anxiety. Psychological safety — the freedom to try and fail — is the prerequisite for any of this to work.',
      },
      {
        id: 'l6-cross-functional',
        title: 'Cross-functional AI Integration',
        description:
          'When design, engineering, and product all use AI, the handoff points change. New collaboration patterns are still being invented. The teams figuring this out now are writing the playbooks everyone else will follow in two years.',
      },
    ],
  },
  {
    id: 'L7',
    label: 'L7',
    name: 'AI Entrepreneurship & Business',
    coreQuestion: 'How to create real value with AI?',
    starred: true,
    subNodes: [
      {
        id: 'l7-zero-to-one',
        title: 'AI Product from Zero to One',
        description:
          'The fastest MVP cycles in history are happening now. Claude Code and similar tools mean a designer can ship a working product in days. The bottleneck is no longer building — it\'s knowing what to build and for whom.',
      },
      {
        id: 'l7-business-models',
        title: 'Business Models & Monetization',
        description:
          'AI changes cost structures dramatically (inference costs) and enables new pricing models (per-outcome, not per-seat). Worth understanding before you build — your margin assumptions from two years ago are probably wrong.',
      },
      {
        id: 'l7-market-validation',
        title: 'Market Opportunity & Validation',
        description:
          'The window for AI-native products is open but narrowing. Learning to validate fast — real users, real pain, minimal build — is the critical skill. The graveyard of AI demos is full of products that were technically impressive and commercially irrelevant.',
      },
    ],
  },
  {
    id: 'L8',
    label: 'L8',
    name: 'AI Ethics & Governance',
    coreQuestion: 'How to use AI responsibly?',
    subNodes: [
      {
        id: 'l8-bias-fairness',
        title: 'Bias, Fairness & Transparency',
        description:
          'AI systems inherit the biases of their training data. As a designer or builder, you are responsible for the harm your product can cause. Transparency about what AI can and cannot do is both an ethical obligation and good UX.',
      },
      {
        id: 'l8-privacy',
        title: 'Privacy & Data Rights',
        description:
          'What data trains these models, who owns outputs, and what rights users have — these are live legal and ethical questions without settled answers. The decisions being made now will shape the norms of the next decade.',
      },
      {
        id: 'l8-regulation',
        title: 'Regulation & Policy',
        description:
          'The EU AI Act is law. Other frameworks are coming. Understanding the regulatory landscape is no longer optional for anyone building AI products — compliance is a design constraint, not an afterthought.',
      },
    ],
  },
];
