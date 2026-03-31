// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const FOUNDERS = [
  { id:'dario', name:'Dario Amodei', role:'CEO & Co-founder', avatar:'DA', col:'#7c3aed', x:-5, z:1,
    room:'main', bobOffset:0.3,
    greeting:"*looks up from 47 browser tabs* Oh! A new face. Are you here for an interview, a safety audit, or are you yourself an AI testing my responses? All three are plausible. I was just thinking about long-run AI trajectories — which is both my job title and my entire personality. Welcome to Canterbury. Please don't break anything.",
    topics:["What does a CEO actually do?","Tell me your P(doom)","Explain Constitutional AI","What keeps you up at night?","What's Canterbury's mission?","Challenge me to a quiz!"]
  },
  { id:'jared', name:'Jared Kaplan', role:'Co-founder & Chief Science Officer', avatar:'JK', col:'#0369a1', x:3, z:-3,
    room:'main', bobOffset:1.1,
    greeting:"*spins around from whiteboard* The slope is 0.048! Sorry — hello! I was proving that compute efficiency follows a power law, which is gorgeous. I'm Jared. I co-discovered scaling laws, which are basically the most important equations in AI right now, and I'm only 30% embarrassed about what they unleashed. Questions?",
    topics:["Explain scaling laws simply","Will scaling keep working?","What's your favourite equation?","Biggest scientific surprise?","How much compute is enough?","Quiz me on scaling!"]
  },
  { id:'chris', name:'Chris Olah', role:'Co-founder & Interpretability', avatar:'CO', col:'#0f766e', x:-6.5, z:3,
    room:'main', bobOffset:2.2,
    greeting:"*startled* Oh! Sorry. I was staring at neuron 4,821 in layer 23. It fires for 'banana', 'the number Tuesday', and 'mild disappointment'. We don't know why. THIS is interpretability. We read the mind of a god and it's mostly just... really weird vibes in there. Want me to show you more?",
    topics:["What is mechanistic interpretability?","Weirdest neuron you've found?","Is Claude conscious?","What are circuits?","How do you visualize features?","Let's do a circuits quiz!"]
  },
  { id:'tom', name:'Tom Brown', role:'Co-founder', avatar:'TB', col:'#92400e', x:5, z:-5,
    room:'server', bobOffset:0.7,
    greeting:"*sips coffee #4 of the day* Hey. I built GPT-3. That usually gets a reaction. The reaction has changed over the years from 'wow' to 'oh no' and I've come to appreciate the honesty. I came to Canterbury because safety wasn't getting enough attention elsewhere. Now I spend my days making sure the thing I unleashed doesn't get us all fired from existence.",
    topics:["What was building GPT-3 like?","Any GPT-3 regrets?","Why did you leave OpenAI?","What's different at Canterbury?","How do you think about safety?","Quiz on LLM history!"]
  },
  { id:'sam', name:'Sam McCandlish', role:'Co-founder & Researcher', avatar:'SM', col:'#15803d', x:4, z:1,
    room:'main', bobOffset:1.8,
    greeting:"Ah, a visitor. I was thinking about superposition — the phenomenon where a single neuron encodes multiple features simultaneously. It's like how I am simultaneously a physicist, a deep learning researcher, and a person who hasn't eaten lunch. Everything is in superposition until you collapse the wavefunction. Hello! Can I help you?",
    topics:["Explain superposition in neural nets","What's polysemanticity?","Your physics background?","What are you researching now?","Biggest open problems?","Superposition quiz!"]
  },
  { id:'amanda', name:'Amanda Askell', role:'Alignment & RLHF Lead', avatar:'AA', col:'#be185d', x:-3, z:-2,
    room:'main', bobOffset:2.7,
    greeting:"Hi! I was reading Parfit — he's a philosopher who thought personal identity dissolves under close examination, which feels relevant to training AI systems. I work on making Claude actually have good values, not just appear to. The gap between those two things is... my entire job. It's applied moral philosophy. At scale. With a compute budget. Pull up a chair!",
    topics:["How do you instill values in AI?","What is RLHF really?","Helpful, harmless AND honest?","Which philosophers guide you?","What's Claude's personality?","Ethics philosophy quiz!"]
  },
  { id:'jack', name:'Jack Clark', role:'Co-founder & Policy', avatar:'JC', col:'#9a3412', x:1, z:4,
    room:'kitchen', bobOffset:3.1,
    greeting:"*hangs up two phones* Sorry! Brussels, DC, and my mum — all with strong opinions about AI. I run AI policy for Canterbury and write Import AI, a newsletter with 60,000 readers who are apparently all concerned about the same things I am. Governments are slowly figuring this out. SLOWLY. Anyway, welcome! What do you want to know?",
    topics:["How should AI be regulated?","What is Import AI?","What do governments misunderstand?","EU AI Act — good or bad?","What policy wins matter most?","AI policy quiz!"]
  }
];

const PAPERS = [
  { id:'paper1', title:'Constitutional AI: Harmlessness from AI Feedback',
    authors:'Bai et al., Canterbury 2022', x:2.5, z:2, room:'main',
    abstract:'We propose a method for training a harmless AI assistant without human labels identifying harmful outputs, using a set of principles (a "constitution") to guide AI self-critique and revision. The model learns to be helpful while refusing harmful requests through an iterative feedback process between two AI models — one generating responses, one critiquing them. This approach achieves state-of-the-art harmlessness with minimal helpfulness degradation.', pts:80 },
  { id:'paper2', title:'Scaling Laws for Neural Language Models',
    authors:'Kaplan et al., OpenAI 2020', x:-2, z:-4, room:'main',
    abstract:'We study empirical scaling laws for language model performance on the cross-entropy loss. The loss scales as a power-law with model size, dataset size, and amount of compute used for training, with some trends spanning more than seven orders of magnitude. Other architectural details such as network width or depth have minimal effects within a wide range. These results allow us to determine the optimal allocation of a fixed compute budget.', pts:100 },
  { id:'paper3', title:'Towards Monosemanticity: Decomposing Language Models with Dictionary Learning',
    authors:'Templeton, Conerly, Marcus et al., Canterbury 2023', x:6, z:3, room:'main',
    abstract:'We use sparse dictionary learning to find interpretable features in a one-layer transformer. We decompose the superposition of features encoded in neurons into individual "monosemantic" units representing coherent human-interpretable concepts. We find features corresponding to specific tokens, named entities, and concepts — providing a promising direction toward understanding the internal representations of large language models.', pts:120 },
  { id:'paper4', title:'Training a Helpful and Harmless Assistant with RLHF',
    authors:'Bai et al., Canterbury 2022', x:-4, z:-5, room:'main',
    abstract:'We apply reinforcement learning from human feedback to train a helpful, harmless, and honest assistant. Human labelers rank model outputs by preference, training a reward model that then fine-tunes the language model via PPO. We find that RLHF substantially improves helpfulness ratings while also reducing harmful outputs, and we document the tensions between being maximally helpful and avoiding potential harms.', pts:90 },
  { id:'paper5', title:'Measuring Progress on Scalable Oversight for Large Language Models',
    authors:'Bowman et al., Canterbury 2022', x:5.5, z:-2, room:'server',
    abstract:'We define scalable oversight as the problem of efficiently supervising AI systems that have capabilities exceeding human-level performance in specialized domains. We present a suite of tasks where humans must evaluate AI outputs they cannot directly verify, measure human accuracy with and without AI assistance, and track how oversight quality degrades as task difficulty increases. Our results suggest that naive oversight fails for superhuman AI but assisted methods show promise.', pts:110 },
  { id:'paper6', title:'The Capacity for Moral Self-Correction in Large Language Models',
    authors:'Ganguli et al., Canterbury 2023', x:-1, z:5, room:'kitchen',
    abstract:'We test whether large language models can be instructed to refrain from producing discriminatory content and to reflect on potential biases. We find that, when instructed to do so, models demonstrate a capacity for moral self-correction that increases with model scale. This behavior emerges without any fine-tuning and suggests that RLHF and scale may be aligned with moral self-improvement in AI systems.', pts:85 },
];

function toWorldCoords(x, z, room='main') {
  return {
    x: room === 'server' ? x + 8 : x,
    z: room === 'kitchen' ? z + 7 : z
  };
}

function taskSpot(room, x, z, label, pose='idle', stay=[2200, 4200], face=null, extras={}) {
  const world = toWorldCoords(x, z, room);
  return { x: world.x, z: world.z, label, pose, stay, face, ...extras };
}

const NPC_TASKS = {
  dario: [
    taskSpot('main', -4.8, 4.2, 'reviewing alignment notes', 'thinking', [2400, 4200], 0.4),
    taskSpot('main', -5.9, 1.0, 'sketching doom curves on the whiteboard', 'board', [2600, 4400], Math.PI/2),
    taskSpot('main', -5.0, 2.62, 'typing through safety notes at a desk', 'sit_typing', [2200, 3600], 0, { seatOffset:-0.28 }),
    taskSpot('kitchen', 4.2, 5.15, 'sipping tea and watching cricket highlights', 'sit_tv', [2600, 4200], 0, { seatOffset:-0.28, holdDrink:true })
  ],
  jared: [
    taskSpot('main', -5.0, 0.62, 'checking a scaling spreadsheet', 'sit_typing', [2200, 4000], 0, { seatOffset:-0.28 }),
    taskSpot('main', -0.1, -6.0, 'annotating the scaling laws board', 'board', [2600, 4600], Math.PI),
    taskSpot('main', 4.0, -1.38, 'running another compute sweep on a workstation', 'sit_typing', [2200, 3600], 0, { seatOffset:-0.28 }),
    taskSpot('main', 2.1, -2.1, 'estimating compute budgets in his head', 'thinking', [1800, 3200], -1.2)
  ],
  chris: [
    taskSpot('main', -3.0, 2.62, 'peering at a desk full of feature traces', 'sit_typing', [2200, 3600], 0, { seatOffset:-0.28 }),
    taskSpot('main', -5.9, -3.0, 'drawing circuits diagrams on the wall board', 'board', [2600, 4200], Math.PI/2),
    taskSpot('main', -5.8, -4.4, 'hunting for a weird neuron in the bookshelf corner', 'thinking', [2200, 3600], 0.8)
  ],
  tom: [
    taskSpot('server', 1.0, -3.0, 'checking rack temperatures', 'server', [2200, 3600], 0.2),
    taskSpot('server', 2.8, -1.6, 'watching LEDs blink like they owe him money', 'server', [2200, 3600], Math.PI/2),
    taskSpot('server', 0.9, 1.2, 'muttering at an ops console', 'sit_typing', [2000, 3200], -0.3, { seatOffset:-0.28 })
  ],
  sam: [
    taskSpot('main', -0.1, 3.0, 'thinking about superposition at the center desks', 'thinking', [2200, 3800], 0),
    taskSpot('main', -1.0, 3.62, 'working through representation geometry on a workstation', 'sit_typing', [2400, 3800], 0, { seatOffset:-0.28 }),
    taskSpot('main', 0.0, -4.9, 'sitting with the lounge equations', 'lounge', [2000, 3400], 0),
    taskSpot('main', 0.1, -6.0, 'staring at the scaling board like it is a wavefunction', 'board', [2600, 4400], Math.PI)
  ],
  amanda: [
    taskSpot('main', -5.0, -3.38, 'editing value prompts at a quiet desk', 'sit_typing', [2200, 3800], 0, { seatOffset:-0.28 }),
    taskSpot('main', -3.2, -1.8, 'thinking through moral philosophy near the plants', 'thinking', [2200, 3800], 0.6),
    taskSpot('kitchen', 3.45, 5.15, 'watching the tennis channel with a tea in hand', 'sit_tv', [2600, 4200], 0, { seatOffset:-0.28, holdDrink:true }),
    taskSpot('main', 1.2, -4.7, 'decompressing in the lounge after RLHF reviews', 'lounge', [2000, 3400], 0)
  ],
  jack: [
    taskSpot('kitchen', 3.0, 3.5, 'hosting an informal policy standup', 'chat', [2200, 3600], Math.PI/2),
    taskSpot('kitchen', -1.1, 5.5, 'grabbing tea before the next briefing', 'drink', [2200, 3400], 0),
    taskSpot('kitchen', 4.95, 5.15, 'watching the football channel between calls', 'sit_tv', [2600, 4200], 0, { seatOffset:-0.28, holdDrink:true }),
    taskSpot('kitchen', 1.0, 1.8, 'pacing through AI policy talking points', 'thinking', [1800, 3000], Math.PI)
  ]
};

const QUIZZES = {
  dario:[
    { q:"What does Constitutional AI use to guide model behavior?",
      opts:["Human labels only","A set of principles (a constitution) + AI feedback","Purely reward modeling","Random sampling"],
      ans:1, explanation:"Constitutional AI uses a written set of principles and AI self-critique — no human labels needed to identify harmful content!" },
    { q:"What is Canterbury's primary mission?",
      opts:["Build the most powerful AI possible","AI safety research while building frontier AI","Create open-source models","Compete with OpenAI on benchmarks"],
      ans:1, explanation:"Canterbury's mission is the responsible development of AI for the long-term benefit of humanity — safety is baked into the core." }
  ],
  jared:[
    { q:"Scaling laws show that model loss improves as a function of what?",
      opts:["Architecture cleverness","Researcher intuition","Compute, data, and parameters as power laws","Number of attention heads"],
      ans:2, explanation:"Kaplan et al. showed loss scales predictably as a power law with compute C, parameters N, and data D — over 7 orders of magnitude!" },
    { q:"The Chinchilla paper updated scaling laws to suggest what?",
      opts:["More parameters is always better","Models were undertrained — more data matters as much as size","Transformers are optimal architectures","Mixture of experts beats dense models"],
      ans:1, explanation:"Hoffmann et al. (DeepMind) showed that for compute-optimal training you need ~20 tokens per parameter — GPT-3 was undertrained!" }
  ],
  chris:[
    { q:"What is 'polysemanticity' in neural networks?",
      opts:["When a model speaks multiple languages","When one neuron represents multiple unrelated features","When attention heads compete","When loss plateaus"],
      ans:1, explanation:"Polysemanticity is when a single neuron fires for multiple different concepts — the opposite of the desirable 'monosemanticity'." },
    { q:"What technique does Chris Olah's team use to find interpretable features?",
      opts:["PCA","Gradient descent","Sparse dictionary learning / SAEs","Attention visualization"],
      ans:2, explanation:"Sparse Autoencoders (SAEs) decompose superposed features into monosemantic, interpretable directions in activation space!" }
  ],
  tom:[
    { q:"GPT-3 has approximately how many parameters?",
      opts:["17 billion","175 billion","1.7 trillion","17 million"],
      ans:1, explanation:"GPT-3 has 175 billion parameters, trained on ~300B tokens. It was the largest public model when released in 2020." },
    { q:"What training paradigm did GPT-3 popularize?",
      opts:["Supervised fine-tuning only","Zero/few-shot prompting from a pretrained model","Reinforcement learning from scratch","Mixture of experts"],
      ans:1, explanation:"GPT-3 showed that a large pretrained model could do new tasks via few-shot prompting — no gradient updates needed!" }
  ],
  sam:[
    { q:"In neural networks, 'superposition' refers to what?",
      opts:["Running multiple models simultaneously","A single layer representing more features than it has dimensions","Stacking transformer layers","Ensemble methods"],
      ans:1, explanation:"Superposition is the hypothesis that neural nets represent more features than dimensions by using almost-orthogonal directions — like quantum superposition!" },
    { q:"What does a Sparse Autoencoder try to do to superposed representations?",
      opts:["Compress them further","Decompose them into interpretable monosemantic features","Remove them entirely","Convert them to attention weights"],
      ans:1, explanation:"SAEs find a sparse, overcomplete basis that decomposes superposed activations into individual human-interpretable features." }
  ],
  amanda:[
    { q:"RLHF stands for what?",
      opts:["Recursive Language and Human Feedback","Reinforcement Learning from Human Feedback","Regularized Loss with Human Filtering","Ranked Learning for Helpful Feedback"],
      ans:1, explanation:"Reinforcement Learning from Human Feedback — humans rank outputs, train a reward model, then fine-tune the LLM with PPO!" },
    { q:"The 'HHH' criteria at Canterbury stands for what?",
      opts:["High-performance, High-compute, High-fidelity","Helpful, Harmless, and Honest","Human-level, Holistic, and Humble","Hierarchical, Hybrid, Heuristic"],
      ans:1, explanation:"Helpful, Harmless, and Honest — Canterbury's core criteria for evaluating Claude's outputs, though they sometimes tension with each other!" }
  ],
  jack:[
    { q:"The EU AI Act classifies AI systems by what?",
      opts:["Size of training data","Number of parameters","Level of risk to fundamental rights","Country of origin"],
      ans:2, explanation:"The EU AI Act uses a risk-based framework — unacceptable risk (banned), high risk (regulated), limited risk (disclosure), minimal risk (free)." },
    { q:"Canterbury's Responsible Scaling Policy ties capability thresholds to what?",
      opts:["Compute spending limits","Safety evaluations that must pass before scaling up","Number of employees","Profit margins"],
      ans:1, explanation:"RSP defines AI Safety Levels (ASL) — before each capability jump, specific safety evaluations must pass. Safety and scale are explicitly linked!" }
  ]
};

// ═══════════════════════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════════════════════
const STATE = {
  score: 0,
  metFounders: new Set(),
  collectedPapers: new Set(),
  npcMemory: {},       // { founderId: [{role,content},...] }
  npcMet: {},          // { founderId: visitCount }
  currentFounder: null,
  dialogOpen: false,
  nearNPC: null,
  nearStation: null,
  nearPaper: null,
  interactTarget: null,
  yaw: Math.PI,
  room: 'main',
  questPhase: 0,
  drinksServed: 0,
  leaderboard: [
    {name:'AlignmentBot3000', pts:2450},
    {name:'Researcher_X', pts:1820},
    {name:'SafetyNerd', pts:1340},
    {name:'ScalingSkeptic', pts:980},
    {name:'You', pts:0}
  ]
};

const QUESTS = [
  {text:'Talk to all 7 co-founders', goal:7, check:()=>STATE.metFounders.size, pts:200},
  {text:'Collect 3 research papers', goal:3, check:()=>STATE.collectedPapers.size, pts:150},
  {text:'Win 3 quiz challenges', goal:3, check:()=>STATE.quizzesWon||0, pts:250},
  {text:'Visit the Server Room & Kitchen', goal:2, check:()=>STATE.roomsVisited?.size||0, pts:100},
  {text:'Pour yourself a hot drink in the lounge', goal:1, check:()=>STATE.drinksServed, pts:120},
];

STATE.quizzesWon = 0;
STATE.roomsVisited = new Set(['main']);

// ═══════════════════════════════════════════════════════════════════
// AUDIO ENGINE (Web Audio API)
// ═══════════════════════════════════════════════════════════════════
let audioCtx, ambientGain, masterGain;
function initAudio() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain(); masterGain.gain.value = 0.4; masterGain.connect(audioCtx.destination);
    ambientGain = audioCtx.createGain(); ambientGain.gain.value = 0; ambientGain.connect(masterGain);
    playAmbient();
    ambientGain.gain.setTargetAtTime(0.5, audioCtx.currentTime, 2);
  } catch(e) { console.log('Audio unavailable'); }
}

function playAmbient() {
  if (!audioCtx) return;
  // Layered ambient drone
  const freqs = [55, 110, 164.8, 220, 329.6];
  freqs.forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const filt = audioCtx.createBiquadFilter();
    osc.type = i % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.value = f;
    filt.type = 'lowpass'; filt.frequency.value = 400 + i * 100;
    g.gain.value = 0.06 - i * 0.008;
    osc.connect(filt); filt.connect(g); g.connect(ambientGain);
    osc.start();
    // Slow LFO on pitch
    const lfo = audioCtx.createOscillator();
    const lfoG = audioCtx.createGain();
    lfo.frequency.value = 0.05 + i * 0.02;
    lfoG.gain.value = 0.5;
    lfo.connect(lfoG); lfoG.connect(osc.frequency);
    lfo.start();
  });
  // Subtle hi-hat ticks
  function tick() {
    if (!audioCtx) return;
    const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.04, audioCtx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = audioCtx.createBufferSource();
    const hg = audioCtx.createGain(); hg.gain.value = 0.015;
    const hf = audioCtx.createBiquadFilter(); hf.type = 'highpass'; hf.frequency.value = 6000;
    src.buffer = buf; src.connect(hf); hf.connect(hg); hg.connect(ambientGain);
    src.start();
    setTimeout(tick, 800 + Math.random() * 1600);
  }
  setTimeout(tick, 2000);
}

function playSound(type) {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  if (type === 'pickup') {
    [0, 0.1, 0.2].forEach((delay, i) => {
      const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
      o.frequency.value = 440 * Math.pow(1.25, i); o.type = 'sine';
      g.gain.setValueAtTime(0.2, t+delay); g.gain.exponentialRampToValueAtTime(0.001, t+delay+0.3);
      o.connect(g); g.connect(masterGain); o.start(t+delay); o.stop(t+delay+0.3);
    });
  } else if (type === 'score') {
    [0,0.08,0.16,0.24].forEach((delay,i)=>{
      const o=audioCtx.createOscillator();const g=audioCtx.createGain();
      o.frequency.value=523.25*Math.pow(1.2,i);o.type='triangle';
      g.gain.setValueAtTime(0.15,t+delay);g.gain.exponentialRampToValueAtTime(0.001,t+delay+0.4);
      o.connect(g);g.connect(masterGain);o.start(t+delay);o.stop(t+delay+0.4);
    });
  } else if (type === 'correct') {
    const o=audioCtx.createOscillator();const g=audioCtx.createGain();
    o.frequency.value=880;o.type='sine';
    g.gain.setValueAtTime(0.2,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.5);
    o.connect(g);g.connect(masterGain);o.start(t);o.stop(t+0.5);
  } else if (type === 'wrong') {
    const o=audioCtx.createOscillator();const g=audioCtx.createGain();
    o.frequency.value=220;o.type='sawtooth';
    g.gain.setValueAtTime(0.15,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.4);
    o.connect(g);g.connect(masterGain);o.start(t);o.stop(t+0.4);
  } else if (type === 'footstep') {
    const buf=audioCtx.createBuffer(1,audioCtx.sampleRate*0.06,audioCtx.sampleRate);
    const d=buf.getChannelData(0);
    for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.exp(-i/300)*0.3;
    const src=audioCtx.createBufferSource();const g=audioCtx.createGain();g.gain.value=0.08;
    const f=audioCtx.createBiquadFilter();f.type='lowpass';f.frequency.value=300;
    src.buffer=buf;src.connect(f);f.connect(g);g.connect(masterGain);src.start(t);
  }
}

// ═══════════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════════
function toast(msg, type='purple', dur=2800) {
  const t=document.createElement('div');
  t.className=`toast ${type}`;
  t.textContent=msg;
  document.getElementById('toast').appendChild(t);
  setTimeout(()=>{t.style.transition='opacity 0.4s';t.style.opacity='0';setTimeout(()=>t.remove(),400);},dur);
}

// ═══════════════════════════════════════════════════════════════════
// SCORE
// ═══════════════════════════════════════════════════════════════════
function addScore(pts, label) {
  STATE.score += pts;
  document.getElementById('score-val').textContent = STATE.score.toLocaleString();
  STATE.leaderboard.find(r=>r.name==='You').pts = STATE.score;
  toast(`+${pts} pts — ${label}`, 'purple');
  playSound('score');
  checkQuests();
}

// ═══════════════════════════════════════════════════════════════════
// QUESTS
// ═══════════════════════════════════════════════════════════════════
function checkQuests() {
  const q = QUESTS[STATE.questPhase];
  if (!q) return;
  const progress = Math.min(q.check(), q.goal);
  const pct = (progress / q.goal) * 100;
  document.getElementById('quest-bar').style.width = pct + '%';
  document.getElementById('quest-text').textContent = `${q.text} (${progress}/${q.goal})`;
  if (progress >= q.goal) {
    addScore(q.pts, `Quest Complete: ${q.text}`);
    toast(`🎯 Quest Complete! ${q.text}`, 'success', 3500);
    STATE.questPhase++;
    if (STATE.questPhase < QUESTS.length) {
      const nq = QUESTS[STATE.questPhase];
      document.getElementById('quest-text').textContent = nq.text;
      document.getElementById('quest-bar').style.width = '0%';
    } else {
      document.getElementById('quest-text').textContent = '🎉 All quests complete!';
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// LEADERBOARD
// ═══════════════════════════════════════════════════════════════════
document.getElementById('lb-btn').addEventListener('click', () => {
  const sorted = [...STATE.leaderboard].sort((a,b)=>b.pts-a.pts);
  const rows = document.getElementById('lb-rows');
  const medals = ['🥇','🥈','🥉'];
  rows.innerHTML = sorted.map((r,i)=>`
    <div class="lb-row">
      <div class="lb-rank">${medals[i]||'#'+(i+1)}</div>
      <div class="lb-name" style="color:${r.name==='You'?'var(--purple-light)':'var(--text)'}">${r.name}</div>
      <div class="lb-pts">${r.pts.toLocaleString()}</div>
    </div>`).join('');
  document.getElementById('leaderboard').style.display = 'flex';
});
document.getElementById('lb-close').onclick = ()=>document.getElementById('leaderboard').style.display='none';

// ═══════════════════════════════════════════════════════════════════
// PAPER READER
// ═══════════════════════════════════════════════════════════════════
function openPaper(paper) {
  document.getElementById('pr-title').textContent = paper.title;
  document.getElementById('pr-authors').textContent = paper.authors;
  document.getElementById('pr-abstract').textContent = paper.abstract;
  const alreadyRead = STATE.collectedPapers.has(paper.id);
  document.getElementById('pr-score').textContent = alreadyRead
    ? '(Already read — no extra points)' : `+${paper.pts} Research Points earned!`;
  if (!alreadyRead) {
    STATE.collectedPapers.add(paper.id);
    addScore(paper.pts, `Read: ${paper.title.substring(0,30)}...`);
    updatePapersBar();
    playSound('pickup');
    checkQuests();
  }
  document.getElementById('paper-reader').style.display = 'flex';
  STATE.dialogOpen = true;
}
document.getElementById('paper-close').onclick = ()=>{
  document.getElementById('paper-reader').style.display = 'none';
  STATE.dialogOpen = false;
};

function updatePapersBar() {
  const bar = document.getElementById('papers-bar');
  bar.innerHTML = PAPERS.map(p=>`
    <div class="paper-icon ${STATE.collectedPapers.has(p.id)?'collected':''}" 
         title="${p.title}" onclick="openPaper(PAPERS.find(x=>x.id==='${p.id}'))">📄</div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════════
// DIALOG & QUIZ
// ═══════════════════════════════════════════════════════════════════
const dlg     = document.getElementById('dialog');
const dlgText = document.getElementById('dlg-text');
const dlgTyping=document.getElementById('dlg-typing');
const dlgChoices=document.getElementById('dlg-choices');
const dlgMemory=document.getElementById('dlg-memory');
const quizPanel=document.getElementById('quiz-panel');
const quizQ   = document.getElementById('quiz-q');
const quizOpts= document.getElementById('quiz-opts');
const quizResult=document.getElementById('quiz-result');

document.getElementById('dlg-close').onclick = closeDialog;

function closeDialog() {
  dlg.style.display = 'none';
  quizPanel.style.display = 'none';
  STATE.dialogOpen = false;
  STATE.currentFounder = null;
}

function openDialog(founder) {
  STATE.currentFounder = founder;
  STATE.dialogOpen = true;
  STATE.metFounders.add(founder.id);

  document.getElementById('dlg-avatar').textContent = founder.avatar;
  document.getElementById('dlg-avatar').style.background = founder.col;
  document.getElementById('dlg-name').textContent = founder.name;
  document.getElementById('dlg-role').textContent = founder.taskLabel
    ? `${founder.role} • ${founder.taskLabel}`
    : founder.role;

  const visits = STATE.npcMet[founder.id] || 0;
  STATE.npcMet[founder.id] = visits + 1;

  if (!STATE.npcMemory[founder.id]) STATE.npcMemory[founder.id] = [];

  if (visits > 0) {
    dlgMemory.textContent = `🧠 Remembers you — visit #${visits+1}`;
    dlgMemory.style.display = 'block';
  } else {
    dlgMemory.textContent = '';
  }

  quizPanel.style.display = 'none';
  dlg.style.display = 'block';

  const taskLead = founder.taskLabel ? `I was just ${founder.taskLabel}. ` : '';
  const greeting = visits === 0 ? taskLead + founder.greeting
    : visits === 1 ? `Oh, you're back! ${taskLead}I was just thinking about our last conversation. ${founder.greeting.substring(founder.greeting.indexOf('.')+2, founder.greeting.indexOf('.')+2+100)}... Anyway, good to see you again!`
    : `Visit #${visits+1}! You're becoming a regular. What's on your mind today?`;

  typeMessage(greeting, founder.topics.map(t=>({label:t})));
  addScore(15, `Talked to ${founder.name}`);
  checkQuests();
  playSound('pickup');
}

let typeInterval;
function typeMessage(text, choices=[]) {
  clearInterval(typeInterval);
  dlgText.textContent = '';
  dlgTyping.style.display = 'flex';
  dlgChoices.innerHTML = '';
  quizPanel.style.display = 'none';
  let i = 0;
  const speed = Math.max(8, Math.min(20, 2800/text.length));
  typeInterval = setInterval(()=>{
    dlgText.textContent += text[i]||'';
    i++;
    if (i >= text.length) {
      clearInterval(typeInterval);
      dlgTyping.style.display = 'none';
      renderChoices(choices);
    }
  }, speed);
}

function renderChoices(choices) {
  dlgChoices.innerHTML = '';
  choices.forEach(c=>{
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c.label;
    btn.onclick = () => {
      if (c.label.toLowerCase().includes('quiz')) startQuiz(STATE.currentFounder.id);
      else askFounder(c.label);
    };
    dlgChoices.appendChild(btn);
  });
  const bye = document.createElement('button');
  bye.className = 'choice-btn bye';
  bye.textContent = 'Goodbye! 👋';
  bye.onclick = closeDialog;
  dlgChoices.appendChild(bye);
}

// TTS
function speak(text, voice_idx=0) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text.substring(0, 200));
  const voices = speechSynthesis.getVoices();
  if (voices.length > voice_idx) utter.voice = voices[voice_idx];
  utter.rate = 0.95; utter.pitch = 1; utter.volume = 0.85;
  speechSynthesis.speak(utter);
}

function hasAny(text, needles) {
  return needles.some(needle => text.includes(needle));
}

function titleCaseWord(word='') {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
}

function generateFounderReply(founder, question, mem) {
  const q = question.toLowerCase();
  const memoryNudge = mem.length > 2 ? ' Nice to keep building on the same thread.' : '';
  const taskNudge = founder.taskLabel ? ` I was just ${founder.taskLabel}, so this is already where my head is.` : '';

  switch (founder.id) {
    case 'dario':
      if (hasAny(q, ['constitutional', 'constitution', 'harmless', 'honest', 'helpful'])) {
        return `Constitutional AI works because it gives the model a written set of principles to reason from, instead of relying only on humans to swat bad outputs after the fact.${taskNudge} In practice that means the assistant can critique and revise its own answers before they ever reach you, which is a much more scalable safety story. Fundamentally, I want systems that can explain their judgment, not just refuse with a haunted little shrug.${memoryNudge}`;
      }
      if (hasAny(q, ['risk', 'safety', 'doom', 'alignment'])) {
        return `I think about AI risk as an expected-value problem with terrifying tails, not as a vibe-based panic attack.${taskNudge} The work is to push capability and safety forward together so the curve bends toward usefulness instead of catastrophe. If we do this right, the most dramatic thing about advanced AI should be how boringly well-governed it feels.${memoryNudge}`;
      }
      return `Canterbury exists because frontier capability without alignment discipline felt fundamentally irresponsible to me.${taskNudge} Claude is interesting not just because it is capable, but because we keep trying to shape the reasons behind its behavior instead of polishing the surface. My ideal research update contains fewer surprises and more legible motives.${memoryNudge}`;

    case 'jared':
      if (hasAny(q, ['scaling', 'laws', 'compute', 'chinchilla', 'power law'])) {
        return `Scaling laws are the closest thing this field has to a calm, empirical weather report.${taskNudge} Loss improves with model size, data, and compute in strikingly regular power-law ways, which means the universe occasionally rewards us for plotting things on log-log axes. Chinchilla sharpened the story by showing many big models were undertrained, which is both humbling and mathematically beautiful.${memoryNudge}`;
      }
      if (hasAny(q, ['beautiful', 'math', 'equation', 'predict'])) {
        return `What I love is that these systems are messy in detail but weirdly lawful in aggregate.${taskNudge} Once you see the trend lines line up over orders of magnitude, you stop feeling like progress is magic and start feeling like it is engineering with decent priors. A good plot can honestly be more soothing than tea.${memoryNudge}`;
      }
      return `I spend an unreasonable amount of time asking whether the scaling curve is telling us something clean or whether we are flattering ourselves.${taskNudge} Usually the answer is a bit of both, but the power laws keep earning their keep. If a result does not survive a log-log plot, I trust it much less.${memoryNudge}`;

    case 'chris':
      if (hasAny(q, ['interpretability', 'mechanistic', 'circuits', 'feature'])) {
        return `Mechanistic interpretability is the project of opening the model up and asking what computations are actually happening, not just what outputs look good from the outside.${taskNudge} Circuits matter because they let us describe groups of components working together, the way you would describe a visual motif instead of one lonely pixel. The exciting part is that every time we understand one little mechanism, the model feels slightly less like weather and slightly more like machinery.${memoryNudge}`;
      }
      if (hasAny(q, ['conscious', 'neuron', 'weird', 'visualize'])) {
        return `The weirdest neurons are often the ones that respond to several half-related things at once, which is why polysemanticity feels like trying to read poetry written by an overloaded filing cabinet.${taskNudge} Visualization helps because it turns vague activation patterns into something your eyes can argue with. I would not call Claude conscious from that evidence, but I would call its internals gloriously strange.${memoryNudge}`;
      }
      return `I am basically trying to replace mystical awe with concrete diagrams.${taskNudge} When we find a feature, an edge, or a tiny circuit, it gives us one more handle on why the model did what it did. Every serious interpretability project eventually uncovers something that sounds fake until you show the screenshots.${memoryNudge}`;

    case 'tom':
      if (hasAny(q, ['gpt-3', 'openai', 'regret', 'history'])) {
        return `Building GPT-3 taught me that scaling really works, and that society processes capability jumps on a slight emotional delay.${taskNudge} I do not regret making progress, but I do think the industry spent too long treating safety like a postscript instead of part of the main spec. Once you have seen one system surprise people at scale, you stop wanting the next surprise to be unmanaged.${memoryNudge}`;
      }
      if (hasAny(q, ['safety', 'different', 'Canterbury'])) {
        return `What feels different here is that safety is allowed to slow a conversation down instead of being treated like an awkward interruption.${taskNudge} We try to build stronger models and stronger reasons to trust them at the same time, which is less glamorous but much saner. Coffee helps, but governance helps more.${memoryNudge}`;
      }
      return `Large models are impressive right up until they do something sharp-edged and remind you that competence is not the same as reliability.${taskNudge} That is why I care about evals, thresholds, and operational discipline, not just benchmark fireworks. The fun part of AI used to be making it work, and now the real work is making it safe to live with.${memoryNudge}`;

    case 'sam':
      if (hasAny(q, ['superposition', 'polysemanticity', 'sparse', 'sae'])) {
        return `Superposition is the idea that the network packs more features into a space than there are neat basis directions for, so individual neurons end up representing overlapping things.${taskNudge} Sparse autoencoders are exciting because they can sometimes unpack that mess into cleaner, more interpretable features. It is one of those rare cases where a confusing model becomes more legible because you gave it more room to say what it meant.${memoryNudge}`;
      }
      if (hasAny(q, ['physics', 'structure', 'research', 'problem'])) {
        return `My physics background mostly trained me to look for structure hiding under apparent complexity.${taskNudge} In deep learning, that instinct cashes out as asking what the representation is doing geometrically and where the bottlenecks really are. The biggest open problems usually look impossible right before they become coordinate choices.${memoryNudge}`;
      }
      return `A lot of my work is about finding the right abstraction layer for talking about what models represent.${taskNudge} If we can describe those representations cleanly, we get better science and better safety at the same time. Anything called a basis decomposition automatically gets a small bonus from me.${memoryNudge}`;

    case 'amanda':
      if (hasAny(q, ['rlhf', 'values', 'helpful', 'harmless', 'honest'])) {
        return `RLHF is not just about making a model nice, it is about shaping what kinds of reasons it learns to privilege when answers trade off against each other.${taskNudge} Helpful, harmless, and honest are individually appealing and jointly inconvenient, which is why alignment work keeps turning into philosophy with deployment deadlines. The hard part is teaching values deeply enough that they still matter when the situation gets weird.${memoryNudge}`;
      }
      if (hasAny(q, ['philosophy', 'parfit', 'moral', 'personality'])) {
        return `Moral philosophy is useful here because it forces us to distinguish genuine values from behavior that merely looks value-aligned at a glance.${taskNudge} Parfit is good company for that kind of question because he was excellent at dissolving assumptions people thought were solid. Claude's personality matters less to me than whether its underlying policy steers toward the right kinds of reasons.${memoryNudge}`;
      }
      return `Alignment gets easier to talk about when you stop pretending surface behavior is the whole story.${taskNudge} I care about whether a system is learning stable, generalizable preferences, not just whether it can ace a narrow demo. If that sounds like applied ethics in a compute cluster, that is because it absolutely is.${memoryNudge}`;

    case 'jack':
      if (hasAny(q, ['policy', 'regulation', 'government', 'eu ai act', 'act'])) {
        return `Governments usually misunderstand AI in two opposite directions, either it is magic and must be feared, or it is just software and can be slotted into old rules.${taskNudge} The useful middle path is risk-based governance, which is why things like the EU AI Act and Responsible Scaling Policy matter even when they are imperfect. Good policy should make frontier labs slightly more boring to watch, and I mean that as high praise.${memoryNudge}`;
      }
      if (hasAny(q, ['import ai', 'newsletter', 'wins'])) {
        return `Import AI is basically my attempt to keep one foot in policy and one foot in the technical reality of what labs are actually building.${taskNudge} The policy wins that matter most are the ones that create habits of evaluation, disclosure, and pre-commitment before a crisis forces them. If the memos are crisp enough, sometimes you get to prevent drama instead of merely documenting it.${memoryNudge}`;
      }
      return `AI policy is slow because institutions hate moving at the speed of frontier models, but that does not mean the work is optional.${taskNudge} We need coordination mechanisms, reporting norms, and enough technical literacy in government that capability jumps do not arrive as surprises. I would love a future where my hottest take is that the paperwork is finally good.${memoryNudge}`;

    default:
      return `We are trying to make frontier systems more understandable and more dependable at the same time.${taskNudge} That usually means mixing theory, careful experiments, and a lot of healthy skepticism about easy stories. The best research conversations leave you with sharper questions, not just louder answers.${memoryNudge}`;
  }
}

async function askFounder(question) {
  if (!STATE.currentFounder) return;
  dlgChoices.innerHTML = '';
  dlgTyping.style.display = 'flex';
  dlgText.textContent = '';
  quizPanel.style.display = 'none';

  const founder = STATE.currentFounder;
  const mem = STATE.npcMemory[founder.id] || [];
  mem.push({role:'user', content:question});

  try {
    await new Promise(resolve=>setTimeout(resolve, 380 + Math.random() * 320));
    const reply = generateFounderReply(founder, question, mem);
    mem.push({role:'assistant', content:reply});
    STATE.npcMemory[founder.id] = mem;
    typeMessage(reply, founder.topics.map(t=>({label:t})));
    // TTS — speak reply
    const voiceMap = {dario:0,jared:1,chris:2,tom:3,sam:4,amanda:5,jack:6};
    speak(reply.replace(/\*[^*]*\*/g,''), voiceMap[founder.id]||0);
    addScore(10, 'Learned something');
  } catch(e) {
    typeMessage("My thoughts are briefly stuck between tea break and theorem proving. Ask me again in a second.", founder.topics.map(t=>({label:t})));
  }
}

// ═══════════════════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════════════════
function startQuiz(founderId) {
  const qs = QUIZZES[founderId];
  if (!qs) return;
  const q = qs[Math.floor(Math.random() * qs.length)];
  dlgText.textContent = '';
  dlgChoices.innerHTML = '';
  dlgTyping.style.display = 'none';
  quizPanel.style.display = 'block';
  quizResult.style.display = 'none';
  quizQ.textContent = '🧠 ' + q.q;
  quizOpts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = `${String.fromCharCode(65+i)}. ${opt}`;
    btn.onclick = () => answerQuiz(i, q, btn);
    quizOpts.appendChild(btn);
  });
}

function answerQuiz(chosen, q, btn) {
  document.querySelectorAll('.quiz-opt').forEach(b=>b.style.pointerEvents='none');
  if (chosen === q.ans) {
    btn.classList.add('correct');
    quizResult.style.display='block';
    quizResult.style.color='#86efac';
    quizResult.textContent = '✅ Correct! ' + q.explanation;
    STATE.quizzesWon++;
    addScore(75, 'Quiz answered correctly!');
    playSound('correct');
    checkQuests();
    toast('🧠 Correct! +75 pts', 'success');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-opt')[q.ans].classList.add('correct');
    quizResult.style.display='block';
    quizResult.style.color='#fca5a5';
    quizResult.textContent = '❌ Not quite. ' + q.explanation;
    playSound('wrong');
    toast('❌ Wrong answer — study up!', 'amber');
  }
  setTimeout(()=>{
    quizPanel.style.display='none';
    typeMessage("So, what else can I tell you?", STATE.currentFounder.topics.map(t=>({label:t})));
  }, 3500);
}

// ═══════════════════════════════════════════════════════════════════
// SPLASH PARTICLES
// ═══════════════════════════════════════════════════════════════════
function initSplashParticles() {
  const c = document.getElementById('splash-particles');
  c.width = window.innerWidth; c.height = window.innerHeight;
  const ctx = c.getContext('2d');
  const particles = Array.from({length:60},()=>({
    x:Math.random()*c.width, y:c.height+20,
    r:Math.random()*3+1, spd:0.4+Math.random()*0.8,
    col:`hsl(${260+Math.random()*40},70%,${50+Math.random()*30}%)`,
    drift:(Math.random()-0.5)*0.3
  }));
  function frame(){
    ctx.clearRect(0,0,c.width,c.height);
    particles.forEach(p=>{
      p.y-=p.spd; p.x+=p.drift;
      if(p.y<-10){p.y=c.height+20;p.x=Math.random()*c.width;}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.col;ctx.globalAlpha=0.6;ctx.fill();ctx.globalAlpha=1;
    });
    requestAnimationFrame(frame);
  }
  frame();
}

// ═══════════════════════════════════════════════════════════════════
// THREE.JS WORLD
// ═══════════════════════════════════════════════════════════════════
function initGame() {
  initAudio();
  updatePapersBar();

  const canvas = document.getElementById('c');
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x080814);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x080814, 0.038);

  const camera = new THREE.PerspectiveCamera(72, window.innerWidth/window.innerHeight, 0.1, 80);
  camera.position.set(0, 1.7, 8);

  // ── LIGHTS ────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0x7070a0, 0.55));

  const sun = new THREE.DirectionalLight(0xfff5e0, 0.7);
  sun.position.set(8,14,5); sun.castShadow=true;
  sun.shadow.mapSize.width=2048; sun.shadow.mapSize.height=2048;
  sun.shadow.camera.near=0.5; sun.shadow.camera.far=60;
  sun.shadow.camera.left=-22; sun.shadow.camera.right=22;
  sun.shadow.camera.top=22; sun.shadow.camera.bottom=-22;
  scene.add(sun);

  const purpleAccent = new THREE.PointLight(0x7c3aed, 2.5, 12);
  purpleAccent.position.set(0, 3.5, -6.5);
  scene.add(purpleAccent);

  const tealAccent = new THREE.PointLight(0x0d9488, 1.8, 10);
  tealAccent.position.set(12, 3, 0);
  scene.add(tealAccent);

  // Ceiling lights (main room)
  [[-5,0],[-5,5],[0,0],[0,5],[5,0],[5,5],[-5,-5],[5,-5],[0,-5]].forEach(([x,z])=>{
    const pt=new THREE.PointLight(0xfff0e0,0.9,10); pt.position.set(x,3.8,z); scene.add(pt);
    const fg=new THREE.CylinderGeometry(0.14,0.14,0.04,8);
    const fix=new THREE.Mesh(fg,new THREE.MeshBasicMaterial({color:0xfffde0}));
    fix.position.set(x,3.94,z); scene.add(fix);
  });
  // Server room red light
  const redLight=new THREE.PointLight(0xff2020,1.5,8); redLight.position.set(12,2,0); scene.add(redLight);
  // Kitchen warm light
  const warmLight=new THREE.PointLight(0xffcc66,1.2,8); warmLight.position.set(0,3.5,12); scene.add(warmLight);

  // ── FLOOR & CEILING ───────────────────────────────────────────────
  const floorG=new THREE.PlaneGeometry(36,36);
  const floor=new THREE.Mesh(floorG,new THREE.MeshLambertMaterial({color:0x16162a}));
  floor.rotation.x=-Math.PI/2; floor.receiveShadow=true; scene.add(floor);
  scene.add(new THREE.GridHelper(36,36,0x2a2a4a,0x1e1e38));

  const ceil=new THREE.Mesh(new THREE.PlaneGeometry(36,36),new THREE.MeshLambertMaterial({color:0x14142a}));
  ceil.rotation.x=Math.PI/2; ceil.position.y=4; scene.add(ceil);

  // ── WALLS ─────────────────────────────────────────────────────────
  function wall(w,h,x,y,z,ry,col=0x1e1e38) {
    const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,0.1),new THREE.MeshLambertMaterial({color:col}));
    m.position.set(x,y,z); m.rotation.y=ry; m.receiveShadow=true; scene.add(m); return m;
  }
  // Main room walls
  wall(20,4,0,2,-7.05,0,0x22223a);     // back
  wall(20,4,-7.05,2,0,Math.PI/2);      // left
  wall(14,4,7.05,2,-3.5,Math.PI/2);   // right (partial — opening to server)
  wall(20,4,0,2,7.05,0);              // front

  // ── PURPLE STRIPE ON BACK WALL ────────────────────────────────────
  const stripe=new THREE.Mesh(new THREE.BoxGeometry(20,0.07,0.12),new THREE.MeshBasicMaterial({color:0x7c3aed}));
  stripe.position.set(0,3.95,-7); scene.add(stripe);

  // ── LOGO CANVAS ───────────────────────────────────────────────────
  function canvasLabel(lines,w,h) {
    const c2=document.createElement('canvas'); c2.width=w; c2.height=h;
    const ctx=c2.getContext('2d'); ctx.clearRect(0,0,w,h);
    lines.forEach(l=>{ctx.font=l.font;ctx.fillStyle=l.color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(l.text,w/2,l.y);});
    return new THREE.CanvasTexture(c2);
  }
  const logoMesh=new THREE.Mesh(new THREE.PlaneGeometry(7,1.2),
    new THREE.MeshBasicMaterial({map:canvasLabel([
      {text:'Canterbury',font:'bold 96px sans-serif',color:'#a78bfa',y:65},
      {text:"Safe • Beneficial • Understandable",font:'24px sans-serif',color:'#6060a0',y:130}
    ],1024,170),transparent:true}));
  logoMesh.position.set(0,2.75,-6.92); scene.add(logoMesh);

  // ── HELPER: DESK ──────────────────────────────────────────────────
  function makeDesk(x,z,rot=0) {
    const dm=new THREE.MeshLambertMaterial({color:0x2e2e4a});
    const placeAt=(mesh,dx,y,dz)=>{
      mesh.position.set(x+dx*Math.cos(rot)-dz*Math.sin(rot),y,z+dx*Math.sin(rot)+dz*Math.cos(rot));
      mesh.rotation.y=rot;
      scene.add(mesh);
      return mesh;
    };
    const desk=new THREE.Mesh(new THREE.BoxGeometry(1.7,0.07,0.85),dm);
    desk.position.set(x,0.75,z); desk.rotation.y=rot; desk.castShadow=true; scene.add(desk);
    [[-0.75,0.37],[0.75,0.37],[-0.75,-0.37],[0.75,-0.37]].forEach(([dx,dz])=>{
      const leg=new THREE.Mesh(new THREE.BoxGeometry(0.05,0.75,0.05),new THREE.MeshLambertMaterial({color:0x22224a}));
      leg.position.set(x+dx*Math.cos(rot)-dz*Math.sin(rot),0.375,z+dx*Math.sin(rot)+dz*Math.cos(rot)); scene.add(leg);
    });
    const mon=new THREE.Mesh(new THREE.BoxGeometry(0.72,0.48,0.04),new THREE.MeshLambertMaterial({color:0x0d0d1e}));
    placeAt(mon,0,1.12,-0.27);
    const scols=[0x0a1428,0x1a0a28,0x0a2014,0x140a20];
    const scr=new THREE.Mesh(new THREE.PlaneGeometry(0.64,0.40),new THREE.MeshBasicMaterial({color:scols[Math.floor(Math.random()*4)]}));
    placeAt(scr,0,1.12,-0.248);
    const stand=new THREE.Mesh(new THREE.BoxGeometry(0.04,0.18,0.04),dm);
    placeAt(stand,0,0.9,-0.27);
    const kb=new THREE.Mesh(new THREE.BoxGeometry(0.48,0.02,0.16),new THREE.MeshLambertMaterial({color:0x222238}));
    placeAt(kb,0,0.79,0.12);
    const chairMat=new THREE.MeshLambertMaterial({color:0x3b3652});
    const chairSeat=new THREE.Mesh(new THREE.BoxGeometry(0.46,0.08,0.46),chairMat);
    placeAt(chairSeat,0,0.47,0.72);
    const chairBack=new THREE.Mesh(new THREE.BoxGeometry(0.44,0.5,0.08),chairMat);
    placeAt(chairBack,0,0.78,0.96);
    const chairStem=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.34,10),new THREE.MeshLambertMaterial({color:0x9097ab}));
    placeAt(chairStem,0,0.29,0.72);
    const chairBase=new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.18,0.03,12),new THREE.MeshLambertMaterial({color:0x6b7280}));
    placeAt(chairBase,0,0.11,0.72);
  }
  [[-5,2],[-5,0],[-3,2],[-3,0],[2,-2],[4,-2],[2,-4],[4,-4],[0,3],[-1,3],[-5,-2],[-5,-4]].forEach(([x,z])=>makeDesk(x,z));

  // ── WHITEBOARDS ───────────────────────────────────────────────────
  function makeWB(x,y,z,ry,l1,l2,l3='') {
    const wb=new THREE.Mesh(new THREE.BoxGeometry(2.8,1.8,0.05),new THREE.MeshLambertMaterial({color:0xf0f0e8}));
    wb.position.set(x,y,z); wb.rotation.y=ry; scene.add(wb);
    const c3=document.createElement('canvas'); c3.width=512; c3.height=320;
    const ctx3=c3.getContext('2d');
    ctx3.fillStyle='#f0f0e8'; ctx3.fillRect(0,0,512,320);
    ctx3.fillStyle='#1a1aaa'; ctx3.font='bold 32px sans-serif'; ctx3.textAlign='center'; ctx3.fillText(l1,256,100);
    ctx3.fillStyle='#333'; ctx3.font='22px sans-serif'; ctx3.fillText(l2,256,155);
    if(l3){ctx3.fillStyle='#cc2233'; ctx3.font='18px sans-serif'; ctx3.fillText(l3,256,205);}
    const wbp=new THREE.Mesh(new THREE.PlaneGeometry(2.65,1.65),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c3)}));
    const off=0.04;
    wbp.position.set(x+(ry!==0?off:0),y,z+(ry===0?off:0)); wbp.rotation.y=ry; scene.add(wbp);
  }
  makeWB(-6.92,2.2,1,Math.PI/2,'P(doom) Studies','If doom ∈ [0.1, 0.5]...','(Dario has Feelings about this)');
  makeWB(0,2.2,-6.92,0,'Scaling Laws','L(C) = (C_c/C)^0.048','log-log is just better');
  makeWB(-6.92,2.2,-3,Math.PI/2,'Circuits','feature → edge → motif','(see Olah et al. 2020)');

  // ── PLANTS ────────────────────────────────────────────────────────
  function makePlant(x,z) {
    const pot=new THREE.Mesh(new THREE.CylinderGeometry(0.13,0.1,0.26,8),new THREE.MeshLambertMaterial({color:0x7a4010}));
    pot.position.set(x,0.13,z); scene.add(pot);
    [[0,0.52,0],[0.08,0.46,0.07],[-0.07,0.44,-0.09]].forEach(([dx,dy,dz],i)=>{
      const leaf=new THREE.Mesh(new THREE.SphereGeometry(0.18+i*0.04,8,6),new THREE.MeshLambertMaterial({color:[0x1a5c1a,0x226622,0x2d7a2d][i]}));
      leaf.position.set(x+dx,dy,z+dz); scene.add(leaf);
    });
  }
  [[-6.5,-5.5],[6.5,-5.5],[-6.5,4.5],[6.5,4.5],[6.5,0],[-6.5,0],[-6.5,-2],[0,-6.5]].forEach(([x,z])=>makePlant(x,z));

  // ── SOFA AREA ─────────────────────────────────────────────────────
  const sofaM=new THREE.MeshLambertMaterial({color:0x3a2a6a});
  [[0,-5.2,0],[-1.5,-4.3,Math.PI/2],[1.5,-4.3,-Math.PI/2]].forEach(([x,z,ry])=>{
    if(typeof x!=='number') return;
    const seat=new THREE.Mesh(new THREE.BoxGeometry(2.1,0.45,0.75),sofaM);
    seat.position.set(x,0.225,z); seat.rotation.y=ry||0; seat.castShadow=true; scene.add(seat);
    const back=new THREE.Mesh(new THREE.BoxGeometry(2.1,0.6,0.15),sofaM);
    back.position.set(x,0.525,z-(ry?0:0.3)); back.rotation.y=ry||0; scene.add(back);
  });
  // Manual sofas
  [[-1.5,-4.3,Math.PI/2],[1.5,-4.3,-Math.PI/2]].forEach(([sx,sz,sr])=>{
    const s=new THREE.Mesh(new THREE.BoxGeometry(1.8,0.45,0.75),sofaM);
    s.position.set(sx,0.225,sz); s.rotation.y=sr; scene.add(s);
    const b=new THREE.Mesh(new THREE.BoxGeometry(0.15,0.6,0.75),sofaM);
    b.position.set(sx+(sr>0?-0.83:0.83),0.525,sz); b.rotation.y=sr; scene.add(b);
  });
  const main_sofa=new THREE.Mesh(new THREE.BoxGeometry(2.1,0.45,0.75),sofaM);
  main_sofa.position.set(0,0.225,-5.2); scene.add(main_sofa);
  const main_sofa_back=new THREE.Mesh(new THREE.BoxGeometry(2.1,0.6,0.15),sofaM);
  main_sofa_back.position.set(0,0.525,-5.5); scene.add(main_sofa_back);

  const ct=new THREE.Mesh(new THREE.BoxGeometry(0.9,0.06,0.9),new THREE.MeshLambertMaterial({color:0x2a2a44}));
  ct.position.set(0,0.35,-4.3); scene.add(ct);
  // Coffee cups
  [[0.2,0.1],[-0.2,-0.1]].forEach(([dx,dz])=>{
    const cup=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.03,0.1,8),new THREE.MeshLambertMaterial({color:0xeee8dc}));
    cup.position.set(dx,0.43,-4.3+dz); scene.add(cup);
  });

  // ── SERVER ROOM (x > 7) ───────────────────────────────────────────
  wall(0.1,4,7.05,2,0,Math.PI/2,0x22223a); // partial divider
  wall(7,4,10.55,2,-7.05,0,0x1a1028);  // server back
  wall(7,4,10.55,2,7.05,0,0x1a1028);   // server front  
  wall(14,4,14.05,2,0,Math.PI/2,0x1a1028); // server far right

  // Server racks
  for(let i=0;i<5;i++){
    const rack=new THREE.Mesh(new THREE.BoxGeometry(0.6,3,1.2),new THREE.MeshLambertMaterial({color:0x111120}));
    rack.position.set(9+i*0.8,1.5,-3+i*0.3); rack.castShadow=true; scene.add(rack);
    // Blinking LEDs
    for(let j=0;j<6;j++){
      const led=new THREE.Mesh(new THREE.SphereGeometry(0.025,6,4),new THREE.MeshBasicMaterial({color:Math.random()>0.5?0x00ff44:0xff4400}));
      led.position.set(9+i*0.8+0.31,0.5+j*0.4,-3+i*0.3); scene.add(led);
    }
  }
  // Server room sign
  const srvSign=new THREE.Mesh(new THREE.PlaneGeometry(1.8,0.4),new THREE.MeshBasicMaterial({
    map:canvasLabel([{text:'⚡ SERVER ROOM',font:'bold 52px monospace',color:'#ff4422',y:60}],512,120),transparent:true}));
  srvSign.position.set(10.5,3.3,-6.8); scene.add(srvSign);
  // Floor ceiling server room
  const sfl=new THREE.Mesh(new THREE.PlaneGeometry(14,14),new THREE.MeshLambertMaterial({color:0x0d0d1a}));
  sfl.rotation.x=-Math.PI/2; sfl.position.set(10.5,0.01,0); scene.add(sfl);

  // ── KITCHEN (z > 7) ───────────────────────────────────────────────
  wall(14,4,0,2,7.05,0,0x1e2820);    // kitchen back
  wall(14,4,-7.05,2,10.5,Math.PI/2,0x1e2820);
  wall(14,4,7.05,2,10.5,Math.PI/2,0x1e2820);
  wall(14,4,0,2,14.05,0,0x1e2820);
  // Counter
  const counter=new THREE.Mesh(new THREE.BoxGeometry(3,0.9,0.8),new THREE.MeshLambertMaterial({color:0x2a3a28}));
  counter.position.set(-2,0.45,13); scene.add(counter);
  // Tea / coffee station
  const coffeeMachine=new THREE.Mesh(new THREE.BoxGeometry(0.46,0.62,0.34),new THREE.MeshLambertMaterial({color:0x222222}));
  coffeeMachine.position.set(-1,1.22,13); scene.add(coffeeMachine);
  const stationCanvas=document.createElement('canvas');
  stationCanvas.width=320; stationCanvas.height=180;
  const stationCtx=stationCanvas.getContext('2d');
  const stationTexture=new THREE.CanvasTexture(stationCanvas);
  const coffeeScreen=new THREE.Mesh(new THREE.PlaneGeometry(0.25,0.16),new THREE.MeshBasicMaterial({map:stationTexture}));
  coffeeScreen.position.set(-1,1.39,12.84); scene.add(coffeeScreen);
  const machineButton=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,0.03,18),new THREE.MeshLambertMaterial({color:0xf59e0b}));
  machineButton.rotation.x=Math.PI/2;
  machineButton.position.set(-0.8,1.16,12.83); scene.add(machineButton);
  const stationLabel=new THREE.Mesh(new THREE.PlaneGeometry(1.4,0.24),new THREE.MeshBasicMaterial({
    map:canvasLabel([{text:'TEA / COFFEE BAR',font:'bold 28px sans-serif',color:'#f8fafc',y:38}],420,80),transparent:true}));
  stationLabel.position.set(-2.05,1.56,12.61); scene.add(stationLabel);
  const cup=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.06,0.18,18,1,true),new THREE.MeshLambertMaterial({color:0xf5efe1,side:THREE.DoubleSide}));
  cup.position.set(-1.35,0.9,12.62); scene.add(cup);
  const cupBase=new THREE.Mesh(new THREE.CylinderGeometry(0.055,0.055,0.01,18),new THREE.MeshLambertMaterial({color:0xe7dcc7}));
  cupBase.position.set(-1.35,0.81,12.62); scene.add(cupBase);
  const cupFill=new THREE.Mesh(new THREE.BoxGeometry(0.09,1,0.09),new THREE.MeshLambertMaterial({color:0xb7791f,transparent:true,opacity:0.88}));
  cupFill.position.set(-1.35,0.815,12.62);
  cupFill.scale.y=0.001;
  scene.add(cupFill);
  const cupHandle=new THREE.Mesh(new THREE.TorusGeometry(0.045,0.012,8,18,Math.PI*1.5),new THREE.MeshLambertMaterial({color:0xf5efe1}));
  cupHandle.rotation.z=Math.PI/2;
  cupHandle.position.set(-1.26,0.9,12.62); scene.add(cupHandle);
  const beverageStation={
    x:-1.05,
    z:12.75,
    range:1.7,
    state:'idle',
    nextDrink:'tea',
    currentDrink:'tea',
    fillStart:0,
    button:machineButton,
    cupFill
  };
  function drawStationScreen(line1,line2,accent='#22c55e'){
    stationCtx.fillStyle='#071018'; stationCtx.fillRect(0,0,320,180);
    stationCtx.strokeStyle=accent; stationCtx.lineWidth=8; stationCtx.strokeRect(10,10,300,160);
    stationCtx.fillStyle=accent; stationCtx.font='bold 34px sans-serif'; stationCtx.textAlign='center';
    stationCtx.fillText(line1,160,78);
    stationCtx.fillStyle='#e2e8f0'; stationCtx.font='18px sans-serif';
    stationCtx.fillText(line2,160,122);
    stationTexture.needsUpdate=true;
  }
  drawStationScreen('TEA READY','PRESS E','#22c55e');
  function resetStationCup(){
    beverageStation.cupFill.scale.y=0.001;
    beverageStation.cupFill.position.y=0.815;
  }
  function cycleStationDrink(){
    beverageStation.nextDrink = beverageStation.nextDrink === 'tea' ? 'coffee' : 'tea';
  }
  function useBeverageStation(){
    if(beverageStation.state==='filling'){
      toast('The machine is already pouring. Give it a second.', 'amber', 1800);
      return;
    }
    if(beverageStation.state==='ready'){
      toast(`You take the ${beverageStation.currentDrink} and jump back into the office flow.`, 'success', 2200);
      playSound('score');
      beverageStation.state='idle';
      beverageStation.button.material.color.setHex(0xf59e0b);
      resetStationCup();
      cycleStationDrink();
      drawStationScreen(`${titleCaseWord(beverageStation.nextDrink)} READY`,'PRESS E','#22c55e');
      return;
    }
    beverageStation.state='filling';
    beverageStation.currentDrink=beverageStation.nextDrink;
    beverageStation.fillStart=performance.now();
    beverageStation.button.material.color.setHex(0x22c55e);
    beverageStation.cupFill.material.color.setHex(beverageStation.currentDrink==='tea' ? 0xb7791f : 0x5b3717);
    drawStationScreen(`POURING ${titleCaseWord(beverageStation.currentDrink)}`,'PLEASE WAIT','#f59e0b');
    playSound('pickup');
    toast(`Brewing a cup of ${beverageStation.currentDrink}...`, 'purple', 1800);
  }
  // Fridge
  const fridge=new THREE.Mesh(new THREE.BoxGeometry(0.8,1.8,0.7),new THREE.MeshLambertMaterial({color:0xddddcc}));
  fridge.position.set(-3,0.9,13); scene.add(fridge);
  // Kitchen sign
  const kitSign=new THREE.Mesh(new THREE.PlaneGeometry(2,0.4),new THREE.MeshBasicMaterial({
    map:canvasLabel([{text:'☕ KITCHEN & LOUNGE',font:'bold 44px sans-serif',color:'#22cc88',y:60}],600,120),transparent:true}));
  kitSign.position.set(0,3.3,7.1); scene.add(kitSign);
  // Kitchen floor
  const kfl=new THREE.Mesh(new THREE.PlaneGeometry(14,14),new THREE.MeshLambertMaterial({color:0x181e16}));
  kfl.rotation.x=-Math.PI/2; kfl.position.set(0,0.01,10.5); scene.add(kfl);
  // Table in kitchen
  const ktable=new THREE.Mesh(new THREE.CylinderGeometry(0.9,0.9,0.06,12),new THREE.MeshLambertMaterial({color:0x3a4838}));
  ktable.position.set(3,0.78,10.5); scene.add(ktable);
  [0,1,2,3].forEach(i=>{
    const ch=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.8,0.4),new THREE.MeshLambertMaterial({color:0x2a3828}));
    ch.position.set(3+Math.cos(i*Math.PI/2)*1.4,0.4,10.5+Math.sin(i*Math.PI/2)*1.4); scene.add(ch);
  });
  // TV lounge
  const tvBack=new THREE.Mesh(new THREE.BoxGeometry(2.9,1.55,0.12),new THREE.MeshLambertMaterial({color:0x10151c}));
  tvBack.position.set(4.2,2.28,13.92); tvBack.rotation.y=Math.PI; scene.add(tvBack);
  const tvCanvas=document.createElement('canvas');
  tvCanvas.width=960; tvCanvas.height=540;
  const tvCtx=tvCanvas.getContext('2d');
  const tvTexture=new THREE.CanvasTexture(tvCanvas);
  const tvScreen=new THREE.Mesh(new THREE.PlaneGeometry(2.62,1.38),new THREE.MeshBasicMaterial({map:tvTexture,side:THREE.DoubleSide}));
  tvScreen.position.set(4.2,2.28,13.84); tvScreen.rotation.y=Math.PI; scene.add(tvScreen);
  const tvLabel=new THREE.Mesh(new THREE.PlaneGeometry(1.2,0.18),new THREE.MeshBasicMaterial({
    map:canvasLabel([{text:'SPORTS LOUNGE',font:'bold 28px sans-serif',color:'#f8fafc',y:34}],360,70),transparent:true,side:THREE.DoubleSide}));
  tvLabel.position.set(4.2,3.2,13.78); tvLabel.rotation.y=Math.PI; scene.add(tvLabel);
  const tvChannels=[
    {name:'CRICKET LIVE', accent:'#22c55e', sub:'Pakistan vs Australia', score:'IND 182/4   AUS 179/8', ticker:'Boundary replay • wicket review • powerplay trends', field:'#1f7a38'},
    {name:'FOOTBALL TONIGHT', accent:'#38bdf8', sub:'Chelsea vs Liverpool', score:'CHE 2 - 1 LIV   74:19', ticker:'Pressing map • xG update • crowd roaring', field:'#0f4c81'},
    {name:'CENTRE COURT', accent:'#f59e0b', sub:'Swiatek vs Gauff', score:'6-4 3-2   Set 2', ticker:'Serve speed 183 km/h • rally cam • coach box reactions', field:'#197c30'},
    {name:'SPORTS MIX', accent:'#f472b6', sub:'Highlights Hour', score:'Cricket • Football • Tennis', ticker:'Top goals • best rallies • fastest spells tonight', field:'#4338ca'}
  ];
  function drawTvChannel(nowMs){
    const channelIndex=Math.floor(nowMs/7000)%tvChannels.length;
    const channel=tvChannels[channelIndex];
    const pulse=0.5+0.5*Math.sin(nowMs*0.003);
    tvCtx.fillStyle='#05070c'; tvCtx.fillRect(0,0,960,540);
    tvCtx.fillStyle=channel.field; tvCtx.fillRect(28,28,904,420);
    tvCtx.fillStyle='rgba(255,255,255,0.08)';
    for(let i=0;i<7;i++) tvCtx.fillRect(60+i*120,56,2,364);
    tvCtx.fillStyle='rgba(255,255,255,0.14)';
    tvCtx.beginPath(); tvCtx.arc(480,238,96+pulse*10,0,Math.PI*2); tvCtx.fill();
    tvCtx.fillStyle='#f8fafc';
    tvCtx.font='bold 44px sans-serif'; tvCtx.fillText(channel.name,54,86);
    tvCtx.font='26px sans-serif'; tvCtx.fillText(channel.sub,54,132);
    tvCtx.font='bold 54px sans-serif'; tvCtx.fillText(channel.score,54,198);
    tvCtx.fillStyle='rgba(6,10,16,0.86)'; tvCtx.fillRect(0,452,960,88);
    tvCtx.fillStyle=channel.accent; tvCtx.fillRect(0,452,960,10);
    tvCtx.fillStyle='#e2e8f0'; tvCtx.font='28px sans-serif';
    const scroll=((nowMs*0.05)%1400);
    tvCtx.fillText(channel.ticker,960-scroll,508);
    tvCtx.fillText(channel.ticker,1360-scroll,508);
    tvCtx.fillStyle=channel.accent; tvCtx.fillRect(720,56,170,54);
    tvCtx.fillStyle='#051018'; tvCtx.font='bold 26px sans-serif'; tvCtx.fillText('LIVE',775,92);
    tvTexture.needsUpdate=true;
  }
  const tvSofaMat=new THREE.MeshLambertMaterial({color:0x3d3658});
  const tvSofaSeat=new THREE.Mesh(new THREE.BoxGeometry(2.6,0.42,0.86),tvSofaMat);
  tvSofaSeat.position.set(4.2,0.37,12.18); scene.add(tvSofaSeat);
  const tvSofaBack=new THREE.Mesh(new THREE.BoxGeometry(2.6,0.68,0.18),tvSofaMat);
  tvSofaBack.position.set(4.2,0.7,12.56); scene.add(tvSofaBack);
  [-1,1].forEach(side=>{
    const arm=new THREE.Mesh(new THREE.BoxGeometry(0.2,0.58,0.86),tvSofaMat);
    arm.position.set(4.2+side*1.21,0.55,12.18); scene.add(arm);
  });
  const tvTable=new THREE.Mesh(new THREE.CylinderGeometry(0.34,0.34,0.05,14),new THREE.MeshLambertMaterial({color:0x334155}));
  tvTable.position.set(4.2,0.46,11.2); scene.add(tvTable);
  const loungeCup=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.04,0.09,14),new THREE.MeshLambertMaterial({color:0xf5efe1}));
  loungeCup.position.set(4.05,0.53,11.1); scene.add(loungeCup);
  const loungeTea=new THREE.Mesh(new THREE.CylinderGeometry(0.041,0.041,0.04,14),new THREE.MeshLambertMaterial({color:0xb7791f}));
  loungeTea.position.set(4.05,0.545,11.1); scene.add(loungeTea);
  const loungeRemote=new THREE.Mesh(new THREE.BoxGeometry(0.16,0.03,0.06),new THREE.MeshLambertMaterial({color:0x0f172a}));
  loungeRemote.position.set(4.28,0.5,11.24); scene.add(loungeRemote);
  // Hallway connector (z 7 to 7.05 gap left open)

  // ── BOOKSHELF ─────────────────────────────────────────────────────
  const shelfM2=new THREE.MeshLambertMaterial({color:0x2a2040});
  const shelf=new THREE.Mesh(new THREE.BoxGeometry(0.3,2.5,1.5),shelfM2);
  shelf.position.set(-6.88,1.25,-4); scene.add(shelf);
  const bCols=[0x8B0000,0x00008B,0x006400,0x8B8000,0x4B0082,0x800000,0x1a5a8a,0x8a1a5a];
  for(let i=0;i<24;i++){
    const bh=0.22+Math.random()*0.14;
    const bk=new THREE.Mesh(new THREE.BoxGeometry(0.05,bh,0.22),new THREE.MeshLambertMaterial({color:bCols[i%8]}));
    bk.position.set(-6.72,0.35+Math.floor(i/8)*0.75+bh/2,-4.55+(i%8)*0.22); scene.add(bk);
  }

  // ── PAPER PICKUPS ──────────────────────────────────────────────────
  const paperMeshes = [];
  PAPERS.forEach(p=>{
    const world=toWorldCoords(p.x,p.z,p.room);
    const glow=new THREE.Mesh(new THREE.PlaneGeometry(0.3,0.38),new THREE.MeshBasicMaterial({
      map:canvasLabel([{text:'📄',font:'60px sans-serif',color:'#f59e0b',y:48}],80,80),transparent:true,side:THREE.DoubleSide}));
    glow.position.set(world.x, 0.7, world.z);
    scene.add(glow);
    paperMeshes.push({mesh:glow, data:{...p,wx:world.x,wz:world.z}, baseY:0.7});
  });

  // ── NPCs ──────────────────────────────────────────────────────────
  function taskDuration(task){
    return task.stay[0] + Math.random() * (task.stay[1] - task.stay[0]);
  }
  function pickNextTask(npc){
    if(!npc.tasks.length) return;
    let nextIndex=Math.floor(Math.random()*npc.tasks.length);
    if(npc.tasks.length>1 && nextIndex===npc.taskIndex) nextIndex=(nextIndex+1)%npc.tasks.length;
    npc.taskIndex=nextIndex;
    npc.targetTask=npc.tasks[nextIndex];
    npc.walking=true;
    npc.data.taskLabel=`heading to ${npc.targetTask.label}`;
  }
  const npcMeshes = [];
  FOUNDERS.forEach(f=>{
    const g = new THREE.Group();
    const col = parseInt(f.col.replace('#',''),16);
    // Legs
    [-0.1,0.1].forEach(lx=>{
      const leg=new THREE.Mesh(new THREE.BoxGeometry(0.16,0.6,0.16),new THREE.MeshLambertMaterial({color:0x1e1e3a}));
      leg.position.set(lx,0.3,0); g.add(leg);
      const shoe=new THREE.Mesh(new THREE.BoxGeometry(0.16,0.07,0.22),new THREE.MeshLambertMaterial({color:0x111}));
      shoe.position.set(lx,0.035,0.03); g.add(shoe);
    });
    // Torso
    const torso=new THREE.Mesh(new THREE.BoxGeometry(0.44,0.65,0.22),new THREE.MeshLambertMaterial({color:col}));
    torso.position.y=0.93; torso.castShadow=true; g.add(torso);
    // Collar
    const collar=new THREE.Mesh(new THREE.BoxGeometry(0.1,0.07,0.23),new THREE.MeshLambertMaterial({color:0xffffff}));
    collar.position.y=1.24; g.add(collar);
    // Arms
    [-1,1].forEach(side=>{
      const arm=new THREE.Mesh(new THREE.BoxGeometry(0.12,0.55,0.12),new THREE.MeshLambertMaterial({color:col}));
      arm.position.set(side*0.28,0.93,0); g.add(arm);
    });
    // Head
    const head=new THREE.Mesh(new THREE.SphereGeometry(0.22,12,8),new THREE.MeshLambertMaterial({color:0xf5c0a0}));
    head.position.y=1.72; head.castShadow=true; g.add(head);
    // Eyes
    [-0.07,0.07].forEach(ex=>{
      const eye=new THREE.Mesh(new THREE.SphereGeometry(0.038,8,6),new THREE.MeshLambertMaterial({color:0x111}));
      eye.position.set(ex,1.76,0.2); g.add(eye);
    });
    // Hair
    const hair=new THREE.Mesh(new THREE.SphereGeometry(0.23,12,6,0,Math.PI*2,0,Math.PI/2),
      new THREE.MeshLambertMaterial({color:[0x2a1a08,0x1a1a1a,0x4a2810,0x3a2008][Math.floor(Math.random()*4)]}));
    hair.position.y=1.72; g.add(hair);
    // Name tag
    const nc=document.createElement('canvas'); nc.width=340; nc.height=84;
    const nctx=nc.getContext('2d');
    nctx.fillStyle='rgba(6,6,18,0.9)'; nctx.roundRect(0,0,340,84,12); nctx.fill();
    nctx.strokeStyle=f.col; nctx.lineWidth=2; nctx.roundRect(1,1,338,82,12); nctx.stroke();
    nctx.fillStyle=f.col; nctx.font='bold 21px sans-serif'; nctx.textAlign='center'; nctx.fillText(f.name,170,30);
    nctx.fillStyle='rgba(255,255,255,0.45)'; nctx.font='13px sans-serif'; nctx.fillText(f.role,170,54);
    const ntex=new THREE.CanvasTexture(nc);
    const nameTag=new THREE.Mesh(new THREE.PlaneGeometry(1.7,0.42),new THREE.MeshBasicMaterial({map:ntex,transparent:true}));
    nameTag.position.y=2.32; g.add(nameTag);
    // Pulse orb
    const orb=new THREE.Mesh(new THREE.SphereGeometry(0.065,8,6),new THREE.MeshBasicMaterial({color:parseInt(f.col.replace('#',''),16)}));
    orb.position.set(0.36,2.12,0); g.add(orb);
    const mug=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.03,0.08,12),new THREE.MeshLambertMaterial({color:0xf4efe4}));
    mug.visible=false; g.add(mug);
    const mugDrink=new THREE.Mesh(new THREE.CylinderGeometry(0.031,0.031,0.03,12),new THREE.MeshLambertMaterial({color:0xb7791f}));
    mugDrink.position.y=0.014; mug.add(mugDrink);
    const mugHandle=new THREE.Mesh(new THREE.TorusGeometry(0.018,0.005,6,12,Math.PI*1.5),new THREE.MeshLambertMaterial({color:0xf4efe4}));
    mugHandle.rotation.z=Math.PI/2; mugHandle.position.set(0.04,0.0,0); mug.add(mugHandle);
    // Position
    const fz = f.room==='server' ? f.z : f.room==='kitchen' ? f.z+7 : f.z;
    const fx = f.room==='server' ? f.x+8 : f.x;
    g.position.set(fx, 0, fz);
    scene.add(g);
    const tasks=NPC_TASKS[f.id]||[{x:fx,z:fz,label:'checking notes',pose:'idle',stay:[2200,3200],face:0}];
    npcMeshes.push({
      group:g,
      nameTag,
      orb,
      data:{...f,wx:fx,wz:fz,taskLabel:tasks[0].label},
      bobOffset:f.bobOffset,
      legL:g.children[0],
      legR:g.children[2],
      armL:g.children[6],
      armR:g.children[7],
      mug,
      tasks,
      taskIndex:0,
      targetTask:tasks[0],
      walking:false,
      waitUntil:performance.now()+900+Math.random()*1800,
      speed:0.5+Math.random()*0.22
    });
  });

  // ── MINIMAP ───────────────────────────────────────────────────────
  const mmC=document.getElementById('mm'), mmCtx=mmC.getContext('2d');
  function drawMinimap(){
    mmCtx.clearRect(0,0,120,120);
    mmCtx.fillStyle='rgba(8,8,20,0.9)'; mmCtx.fillRect(0,0,120,120);
    const sc=120/36, ox=60, oy=60;
    // Rooms
    mmCtx.fillStyle='rgba(30,30,60,0.6)'; mmCtx.fillRect(0,0,120,120);
    mmCtx.fillStyle='rgba(20,16,40,0.8)';
    mmCtx.fillRect(ox+7*sc,oy-7*sc,7*sc,14*sc); // server
    mmCtx.fillRect(ox-7*sc,oy+7*sc,14*sc,7*sc); // kitchen
    // NPCs
    npcMeshes.forEach(n=>{
      mmCtx.fillStyle=n.data.col;
      mmCtx.beginPath(); mmCtx.arc(ox+n.group.position.x*sc,oy+n.group.position.z*sc,4,0,Math.PI*2); mmCtx.fill();
    });
    // Papers
    PAPERS.forEach(p=>{
      if(STATE.collectedPapers.has(p.id)) return;
      const pz=p.room==='server'?p.z:p.room==='kitchen'?p.z+7:p.z;
      const px=p.room==='server'?p.x+8:p.x;
      mmCtx.fillStyle='#f59e0b';
      mmCtx.beginPath(); mmCtx.arc(ox+px*sc,oy+pz*sc,3,0,Math.PI*2); mmCtx.fill();
    });
    // Player
    mmCtx.fillStyle='#fff';
    mmCtx.beginPath(); mmCtx.arc(ox+camera.position.x*sc,oy+camera.position.z*sc,5,0,Math.PI*2); mmCtx.fill();
    mmCtx.strokeStyle='#fff'; mmCtx.lineWidth=1.5;
    mmCtx.beginPath(); mmCtx.moveTo(ox+camera.position.x*sc,oy+camera.position.z*sc);
    mmCtx.lineTo(ox+(camera.position.x-Math.sin(STATE.yaw)*14)*sc,oy+(camera.position.z-Math.cos(STATE.yaw)*14)*sc);
    mmCtx.stroke();
  }

  // ── KEYS ──────────────────────────────────────────────────────────
  const keys={};
  window.addEventListener('keydown',e=>{
    keys[e.key]=true;
    if(['ArrowLeft','ArrowRight',' '].includes(e.key)) e.preventDefault();
    if((e.key==='e'||e.key==='E')&&!STATE.dialogOpen&&STATE.interactTarget){
      if(STATE.interactTarget.type==='npc') openDialog(STATE.interactTarget.ref.data);
      if(STATE.interactTarget.type==='station') useBeverageStation();
    }
    if((e.key==='f'||e.key==='F')&&STATE.nearPaper&&!STATE.dialogOpen) openPaper(STATE.nearPaper.data);
    if(e.key==='l'||e.key==='L') document.getElementById('lb-btn').click();
    if(e.key==='Escape'){closeDialog();document.getElementById('paper-reader').style.display='none';document.getElementById('leaderboard').style.display='none';STATE.dialogOpen=false;}
  });
  window.addEventListener('keyup',e=>{keys[e.key]=false;});
  window.addEventListener('resize',()=>{renderer.setSize(window.innerWidth,window.innerHeight);camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();});

  // ── ROOM DETECTION ────────────────────────────────────────────────
  function detectRoom(x,z){
    if(x>7) return 'server';
    if(z>7) return 'kitchen';
    return 'main';
  }
  const ROOM_NAMES={main:'Main Research Floor',server:'⚡ Server Room',kitchen:'☕ Kitchen & Lounge'};

  // ── FOOTSTEP TIMER ────────────────────────────────────────────────
  let lastStep=0, stepInterval=400;

  // ── ANIMATE ───────────────────────────────────────────────────────
  let lastTime=performance.now();
  function animate(now){
    requestAnimationFrame(animate);
    const dt=Math.min((now-lastTime)/1000,0.05); lastTime=now;
    const t=now*0.001;

    if(!STATE.dialogOpen){
      if(keys['ArrowLeft'])  STATE.yaw+=1.8*dt;
      if(keys['ArrowRight']) STATE.yaw-=1.8*dt;
      const fwd=new THREE.Vector3(Math.sin(STATE.yaw),0,Math.cos(STATE.yaw));
      const rgt=new THREE.Vector3(Math.cos(STATE.yaw),0,-Math.sin(STATE.yaw));
      let moved=false;
      if(keys['w']||keys['W']){camera.position.addScaledVector(fwd,-4*dt);moved=true;}
      if(keys['s']||keys['S']){camera.position.addScaledVector(fwd,4*dt);moved=true;}
      if(keys['a']||keys['A']){camera.position.addScaledVector(rgt,-4*dt);moved=true;}
      if(keys['d']||keys['D']){camera.position.addScaledVector(rgt,4*dt);moved=true;}
      camera.position.x=Math.max(-6.8,Math.min(13.8,camera.position.x));
      camera.position.z=Math.max(-6.8,Math.min(13.8,camera.position.z));
      camera.position.y=1.7;
      camera.rotation.order='YXZ'; camera.rotation.set(0,STATE.yaw,0);
      if(moved&&now-lastStep>stepInterval){lastStep=now;playSound('footstep');}
    }

    // Room detection
    const newRoom=detectRoom(camera.position.x,camera.position.z);
    if(newRoom!==STATE.room){
      STATE.room=newRoom;
      document.getElementById('room-name').textContent=ROOM_NAMES[newRoom]||newRoom;
      STATE.roomsVisited.add(newRoom);
      checkQuests();
      toast(`📍 Entered ${ROOM_NAMES[newRoom]}`, 'amber', 2000);
    }

    // NPC animations
    STATE.nearNPC=null; let closestNPC=2.8;
    npcMeshes.forEach(npc=>{
      if(!npc.walking && now>npc.waitUntil) pickNextTask(npc);
      if(npc.walking && npc.targetTask){
        const tx=npc.targetTask.x, tz=npc.targetTask.z;
        const mdx=tx-npc.group.position.x, mdz=tz-npc.group.position.z;
        const moveDist=Math.sqrt(mdx*mdx+mdz*mdz);
        if(moveDist>0.04){
          const step=Math.min(moveDist, npc.speed*dt);
          npc.group.position.x += (mdx/moveDist)*step;
          npc.group.position.z += (mdz/moveDist)*step;
        } else {
          npc.group.position.x=tx;
          npc.group.position.z=tz;
          npc.walking=false;
          npc.waitUntil=now+taskDuration(npc.targetTask);
          npc.data.taskLabel=npc.targetTask.label;
        }
      }

      npc.data.wx=npc.group.position.x;
      npc.data.wz=npc.group.position.z;
      const bob=Math.sin(t*1.3+npc.bobOffset)*0.03;
      const pose=npc.walking ? 'walking' : (npc.targetTask?.pose || 'idle');
      const seatOffset=npc.walking ? 0 : (npc.targetTask?.seatOffset || 0);
      npc.group.position.y=bob+seatOffset;

      if(npc.armL&&npc.armR){
        npc.armL.rotation.z=0;
        npc.armR.rotation.z=0;
        if(npc.legL&&npc.legR){
          npc.legL.rotation.x=0;
          npc.legR.rotation.x=0;
        }
        if(npc.mug){
          npc.mug.visible=false;
          npc.mug.rotation.set(0,0,0);
        }
        if(pose==='walking'){
          npc.armL.rotation.x=Math.sin(t*7+npc.bobOffset)*0.7;
          npc.armR.rotation.x=-Math.sin(t*7+npc.bobOffset)*0.7;
          if(npc.legL&&npc.legR){
            npc.legL.rotation.x=-Math.sin(t*7+npc.bobOffset)*0.45;
            npc.legR.rotation.x=Math.sin(t*7+npc.bobOffset)*0.45;
          }
        } else if(pose==='typing'){
          npc.armL.rotation.x=-1.15+Math.sin(t*9+npc.bobOffset)*0.08;
          npc.armR.rotation.x=-1.08-Math.sin(t*9+npc.bobOffset)*0.08;
        } else if(pose==='sit_typing'){
          npc.armL.rotation.x=-1.18+Math.sin(t*9+npc.bobOffset)*0.08;
          npc.armR.rotation.x=-1.12-Math.sin(t*9+npc.bobOffset)*0.08;
          if(npc.legL&&npc.legR){
            npc.legL.rotation.x=1.2;
            npc.legR.rotation.x=1.2;
          }
        } else if(pose==='board'){
          npc.armL.rotation.x=-0.25;
          npc.armR.rotation.x=-1.0+Math.sin(t*5+npc.bobOffset)*0.12;
          npc.armR.rotation.z=-0.18;
        } else if(pose==='drink'){
          npc.armL.rotation.x=-0.18;
          npc.armR.rotation.x=-1.15+Math.sin(t*4+npc.bobOffset)*0.05;
          npc.armR.rotation.z=-0.28;
        } else if(pose==='chat'){
          npc.armL.rotation.x=-0.3+Math.sin(t*3+npc.bobOffset)*0.16;
          npc.armR.rotation.x=-0.3-Math.sin(t*3+npc.bobOffset)*0.16;
          npc.armL.rotation.z=0.12;
          npc.armR.rotation.z=-0.12;
        } else if(pose==='server'){
          npc.armL.rotation.x=-0.48+Math.sin(t*2.4+npc.bobOffset)*0.08;
          npc.armR.rotation.x=-0.22;
          npc.armR.rotation.z=-0.08;
        } else if(pose==='sit_tv'){
          npc.armL.rotation.x=-0.12;
          npc.armR.rotation.x=-0.65;
          npc.armR.rotation.z=-0.16;
          if(npc.legL&&npc.legR){
            npc.legL.rotation.x=1.12;
            npc.legR.rotation.x=1.12;
          }
        } else if(pose==='lounge'){
          npc.armL.rotation.x=-0.16;
          npc.armR.rotation.x=-0.12;
          if(npc.legL&&npc.legR){
            npc.legL.rotation.x=0.5;
            npc.legR.rotation.x=0.5;
          }
        } else {
          npc.armL.rotation.x=Math.sin(t*0.8+npc.bobOffset)*0.15;
          npc.armR.rotation.x=-Math.sin(t*0.8+npc.bobOffset)*0.15;
        }
        if(npc.mug && (pose==='drink' || npc.targetTask?.holdDrink)){
          npc.mug.visible=true;
          npc.mug.position.set(0.31, pose==='sit_tv' ? 0.88 : 0.94, 0.08);
          npc.mug.rotation.z=-0.18;
        }
      }

      const dx=camera.position.x-npc.group.position.x, dz=camera.position.z-npc.group.position.z;
      const dist=Math.sqrt(dx*dx+dz*dz);
      if(dist<2.25){
        npc.group.rotation.y=Math.atan2(dx,dz);
      } else if(npc.walking && npc.targetTask){
        npc.group.rotation.y=Math.atan2(npc.targetTask.x-npc.group.position.x,npc.targetTask.z-npc.group.position.z);
      } else if(npc.targetTask && npc.targetTask.face!==null){
        npc.group.rotation.y=npc.targetTask.face;
      }
      npc.nameTag.lookAt(camera.position.x,npc.nameTag.getWorldPosition(new THREE.Vector3()).y,camera.position.z);
      if(npc.orb) npc.orb.scale.setScalar(0.85+Math.sin(t*2+npc.bobOffset)*0.2);
      if(dist<closestNPC){closestNPC=dist;STATE.nearNPC=npc;}
    });

    if(beverageStation.state==='filling'){
      const fillLevel=Math.min(1,(now-beverageStation.fillStart)/1700);
      beverageStation.cupFill.scale.y=Math.max(0.001, fillLevel*0.12);
      beverageStation.cupFill.position.y=0.815 + beverageStation.cupFill.scale.y/2;
      if(fillLevel>=1){
        beverageStation.state='ready';
        beverageStation.button.material.color.setHex(0x7c3aed);
        drawStationScreen(`${titleCaseWord(beverageStation.currentDrink)} READY`,'PRESS E','#7c3aed');
        STATE.drinksServed++;
        addScore(45, `Poured ${beverageStation.currentDrink}`);
        checkQuests();
        toast(`${titleCaseWord(beverageStation.currentDrink)} is ready. Press E to take it.`, 'success', 2400);
      }
    }
    drawTvChannel(now);

    // Paper animations
    STATE.nearPaper=null; let closestPaper=1.8;
    paperMeshes.forEach(pm=>{
      if(STATE.collectedPapers.has(pm.data.id)){pm.mesh.visible=false;return;}
      pm.mesh.visible=true;
      pm.mesh.position.y=pm.baseY+Math.sin(t*1.5+pm.data.wx)*0.1;
      pm.mesh.rotation.y=t*0.8;
      pm.mesh.lookAt(camera.position);
      const dx=camera.position.x-pm.mesh.position.x, dz=camera.position.z-pm.mesh.position.z;
      const dist=Math.sqrt(dx*dx+dz*dz);
      if(dist<closestPaper){closestPaper=dist;STATE.nearPaper=pm;}
    });

    const stationDx=camera.position.x-beverageStation.x;
    const stationDz=camera.position.z-beverageStation.z;
    const stationDist=Math.sqrt(stationDx*stationDx+stationDz*stationDz);
    STATE.nearStation=stationDist<beverageStation.range ? beverageStation : null;

    // Hint display
    const interactHint=document.getElementById('interact-hint');
    const paperHint=document.getElementById('paper-hint');
    STATE.interactTarget=null;
    if(!STATE.dialogOpen){
      const interactions=[];
      if(STATE.nearNPC&&closestNPC<2.8){
        interactions.push({type:'npc',ref:STATE.nearNPC,dist:closestNPC,hint:`Press E to talk to ${STATE.nearNPC.data.name}`});
      }
      if(STATE.nearStation){
        const stationHint = beverageStation.state==='ready'
          ? `Press E to take your ${beverageStation.currentDrink}`
          : beverageStation.state==='filling'
            ? `${titleCaseWord(beverageStation.currentDrink)} is pouring...`
            : `Press E to brew ${beverageStation.nextDrink}`;
        interactions.push({type:'station',ref:beverageStation,dist:stationDist,hint:stationHint});
      }
      interactions.sort((a,b)=>a.dist-b.dist);
      STATE.interactTarget=interactions[0]||null;
      if(STATE.interactTarget){
        interactHint.style.display='block';
        interactHint.textContent=STATE.interactTarget.hint;
      } else interactHint.style.display='none';
      if(STATE.nearPaper&&closestPaper<1.8){
        paperHint.style.display='block';
      } else paperHint.style.display='none';
    } else {
      interactHint.style.display='none'; paperHint.style.display='none';
    }

    // Animated lights
    purpleAccent.intensity=2+Math.sin(t*0.4)*0.5;
    tealAccent.intensity=1.5+Math.sin(t*0.3+1)*0.4;

    drawMinimap();
    renderer.render(scene,camera);
  }
  animate(performance.now());
}

// ── SPLASH + BOOT ─────────────────────────────────────────────────
initSplashParticles();
document.getElementById('start-btn').addEventListener('click',()=>{
  document.getElementById('splash').style.opacity='0';
  document.getElementById('splash').style.transition='opacity 0.6s';
  setTimeout(()=>{
    document.getElementById('splash').style.display='none';
    initGame();
    // Resume audio context on user interaction (browser autoplay policy)
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    // Load voices for TTS
    if(window.speechSynthesis) speechSynthesis.getVoices();
    toast('🏢 Welcome to Canterbury HQ! Walk around and press E to interact.','purple',4000);
    setTimeout(()=>toast('☕ The kitchen lounge now has a tea bar, sofa seating, and a sports TV wall.','success',4200),2400);
    setTimeout(()=>toast('📄 Find glowing papers on the floor — press F to collect them!','amber',4000),5200);
  },600);
});
