/* ═══════════════════════════════════════════════════════════════
   VAULT CURRICULUM — Units 1–3
   Defines window.CURRICULUM consumed by vault-app.js
   ═══════════════════════════════════════════════════════════════ */
window.CURRICULUM = [

  /* ═══════════════════════════════════════════════════════════════
     UNIT 1 — Welcome to Parliamentary Debate
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-1',
    title: 'Welcome to Parliamentary Debate',
    icon: '🎤',
    lessons: [

      /* ── Lesson 1.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-1-1',
        title: 'What Is Parliamentary Debate?',
        steps: [
          {
            type: 'content',
            html: `
<h2>What Is Parliamentary Debate?</h2>
<p><strong>Parliamentary debate</strong> (parli for short) is a form of <span class="key-term" data-definition="Debate where teams prepare after the resolution is announced — no pre-researched evidence packs allowed. It's all about fast, intelligent thinking.">extemporaneous debate</span> where two teams argue a <span class="key-term" data-definition="The topic being debated — also called a motion or proposition. It's the statement one team affirms and the other team negates.">resolution</span> announced before the round. No pre-written briefs, no stacks of evidence cards — just your knowledge, your preparation, and your ability to think on your feet.</p>

<h3>The Two Teams</h3>
<ul>
  <li><strong>The Affirmative (Aff)</strong> — They support the resolution. They go first and build the case.</li>
  <li><strong>The Negative (Neg)</strong> — They oppose the resolution. Their job is to tear down the Aff case and prove the proposition is false, harmful, or unnecessary.</li>
</ul>

<h3>Prep Time</h3>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice format (that's you):</strong> <strong>30 minutes</strong> of prep time after the resolution is announced.<br/>
  <strong>JV/Varsity format:</strong> <strong>20 minutes</strong> of prep time.
</div>
<p>During prep, both partners work equally hard. Divide the work — but <em>both</em> of you need to understand the whole case. Write everything <strong>by hand</strong> — no printed materials allowed in the round.</p>

<h3>Style</h3>
<p>Parli is conversational, not a shouting match. <strong>Wit — humor used in moderation — is encouraged.</strong> Show personality. That said, delivery matters enormously — a weak, monotone delivery undercuts even the best argument. Sound confident. Don't just read off the paper.</p>

<h3>Debate Etiquette</h3>
<ul>
  <li>Be respectful — even while dismantling their arguments</li>
  <li>No eye-rolling, faces, or laughing at the other team — <strong>non-verbal disrespect counts against you</strong></li>
  <li>Whisper to your partner during speeches — brief and quiet only</li>
  <li>Knock on your desk when your partner scores a point — don't overdo it</li>
</ul>

<h3>Points of Information (POIs)</h3>
<p>During constructive speeches, the opposing team can rise and offer a <span class="key-term" data-definition="A short interruption — a question or statement — raised by the opposing team during constructive speeches. They last no more than 15–20 seconds and can only be raised between the 1:01 and the last-minute mark of each speech.">Point of Information (POI)</span>. The speaker chooses whether to accept or decline. Try to ask at least one POI per speech and accept at least one when you're speaking — it shows you're engaged.</p>

<p><strong>Remember:</strong> Your first tournament will feel scary. That's normal. Every debater started exactly where you are now.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'multipleChoice',
            exerciseConfig: {
              // Was: options offered 20/45/5/none with "20 minutes" marked
              // correct and called "exactly" — inside a novice lesson that
              // states 30. Novices had no correct option available.
              question: 'You are competing in the Novice division. How long does your team get to prepare after the resolution is announced?',
              options: [
                '5 minutes',
                '15 minutes',
                '30 minutes',
                'No prep time — parli is fully impromptu'
              ],
              correctIndex: 2,
              explanations: [
                'Not quite — 5 minutes is nowhere near enough to build an entire case from scratch.',
                'Longer than that. Novice prep is generous on purpose, because you are writing a whole case from nothing.',
                'Correct. Novice teams get 30 minutes. JV and Varsity get 20, so if you move up a division you will be building the same case in a third less time — worth practising for before you get there.',
                'Close — parli is extemporaneous, meaning no pre-researched evidence, but you do get prep time once the topic drops.'
              ]
            }
          },
          {
            type: 'exercise',
            exerciseType: 'multipleChoice',
            exerciseConfig: {
              question: 'Which of the following best describes the style of parliamentary debate?',
              options: [
                'Highly aggressive and confrontational — dominate the room',
                'Conversational and personality-driven, with wit encouraged in moderation',
                'Formal and robotic — stick strictly to the script',
                'Based entirely on pre-researched evidence cards read at high speed'
              ],
              correctIndex: 1,
              explanations: [
                'Parli specifically moves away from confrontation. Aggression without wit and substance will not impress a parli judge.',
                'Exactly right! Parli is designed to be a sharp, intelligent conversation — you can even use humor when appropriate.',
                'Parli encourages personality and flair. A robotic delivery wastes the format\'s biggest advantage.',
                'Parli is extemporaneous — no pre-printed evidence packs are allowed in the round.'
              ]
            }
          },
          {
            type: 'exercise',
            exerciseType: 'multipleChoice',
            exerciseConfig: {
              // The correct option used to repeat the POI tooltip word for word,
              // one step earlier in the same lesson, so it could be matched
              // without understanding it. Reworded around the mechanic instead.
              question: 'What are Points of Information (POIs)?',
              options: [
                'Written questions submitted to the judge before the round begins',
                'A printed handout of evidence the speaking team distributes',
                'Questions the judge asks the speaking team after each speech',
                'A brief request to speak, offered mid-speech by the other team, which the speaker may take or wave off'
              ],
              correctIndex: 3,
              explanations: [
                'POIs are live and verbal — nothing written goes to the judge beforehand.',
                'No printed materials are allowed inside the debate round at all.',
                'Judges listen silently and don\'t interrupt speeches with questions.',
                'Exactly — and the last part matters most. The speaker chooses whether to take it. POIs run 15–20 seconds, happen only during the four constructive speeches, and only after the first minute and before the last minute of each.'
              ]
            }
          }
        ]
      },

      /* ── Lesson 1.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-1-2',
        title: 'Three Types of Resolutions',
        steps: [
          {
            type: 'content',
            html: `
<h2>Three Types of Resolutions</h2>
<p>Every debate starts with a resolution. But identifying the <em>type</em> of resolution determines your entire strategy — which criteria to use, what structure to follow, and what the Affirmative must prove. There are exactly <strong>three types</strong>.</p>

<h3>1. Statements of Fact</h3>
<p>A <strong>fact resolution</strong> presents an opinion as if it were a provable fact. Both teams argue whether the statement is true or false.</p>
<p><strong>How to spot one:</strong> Can you answer it with yes or no? Is someone stating an opinion as a fact?</p>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Examples from our team's practice:</strong><br/>
  "The death penalty benefits outweigh consequences."<br/>
  "Carceral justice organizations should prioritize education in prisons that prepares inmates for particular jobs over general education."
</div>
<p>Best judging criteria for fact debates: <span class="key-term" data-definition="A judging standard meaning: if you can show your side is more true overall — not necessarily 100% true in every single case — you win. Always define this when you use it.">on balance</span> or "more often than not." You don't have to prove the fact is universally true — just more true than false.</p>

<h3>2. Questions of Value</h3>
<p>A <strong>value resolution</strong> asks which of two principles, standards, or things is more important. Both sides argue that their <span class="key-term" data-definition="A principle or standard — like justice, freedom, privacy, or equality — that one side argues is more important or should be prioritized over the other side's value.">value</span> is superior.</p>
<p><strong>How to spot one:</strong> Does it ask which of two things is "better" or "more important"? Does it ask you to weigh a moral principle?</p>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Examples from our team's practice:</strong><br/>
  "The environmental movement ought to prioritize ecocentrism over anthropocentric ecology."<br/>
  "When in conflict, environmental protection is prioritized over natural landscape."
</div>
<p>Value debates are the most philosophical — you're arguing about what <em>matters most</em>, not just what's factually true or practically possible.</p>

<h3>3. Questions of Policy</h3>
<p>A <strong>policy resolution</strong> identifies a problem in the <span class="key-term" data-definition="The way things are right now — the existing state of affairs before any change. Policy debates always start from the status quo and ask whether it should change.">status quo</span> and calls for a specific solution. The Affirmative must propose a real plan; the Negative argues the plan is unnecessary or harmful.</p>
<p><strong>How to spot one:</strong> Does it contain the word <em>should</em>? Does it require a law, policy, or government action?</p>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Examples from our team's practice:</strong><br/>
  "The USFG should prohibit the sale of genetic data for commercial purposes."<br/>
  "The USFG should substantially increase its investment in space colonization."<br/>
  "The USFG should guarantee universal childcare."
</div>
<p>Policy debates require the Affirmative to present a full <span class="key-term" data-definition="In policy debates, a formal proposal that specifies: who acts (Agent of Action), what they do, how it's funded, who enforces it, and when it happens.">plan</span> with a specific agent, funding source, enforcement mechanism, and timeline.</p>

<h3>Quick Identification Cheat Sheet</h3>
<ul>
  <li>Contains <strong>"should"</strong> + government action → likely <strong>Policy</strong></li>
  <li>Asks which is <strong>more important / better / ought to</strong> → likely <strong>Value</strong></li>
  <li>States an <strong>opinion as a fact</strong>, yes/no answer → likely <strong>Fact</strong></li>
</ul>
`
          },
          {
            type: 'exercise',
            exerciseType: 'dragSort',
            exerciseConfig: {
              instruction: 'Sort these 6 resolutions so that the two FACT resolutions are in positions 1–2, the two VALUE resolutions in positions 3–4, and the two POLICY resolutions in positions 5–6. Use the cheat sheet above — look at the verb.',
              items: [
                '"The USFG should guarantee universal childcare."',
                '"The death penalty is an effective deterrent to violent crime."',
                '"The environmental movement ought to prioritize ecocentrism over anthropocentric ecology."',
                '"The USFG should substantially increase its investment in space colonization."',
                '"Job-specific education reduces recidivism more than general education does."',
                '"When in conflict, environmental protection ought to be prioritized over economic development."'
              ],
              correctOrder: [1, 4, 2, 5, 0, 3]
            }
          }
        ]
      },

      /* ── Lesson 1.3 ─────────────────────────────────────────── */
      {
        id: 'lesson-1-3',
        title: 'How a Round Works',
        steps: [
          {
            type: 'content',
            html: `
<h2>How a Round Works</h2>
<p>Six speeches total. Constructives first — where ALL arguments get introduced. Then rebuttals, where you tell the judge why you won. No new arguments in rebuttals — ever.</p>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice Format (San Marin beginners)</strong><br/>
  Constructive speeches: <strong>5 min each</strong> · Rebuttals: <strong>3 min each</strong> · Prep time: <strong>30 min</strong>
</div>

<h3>Part 1: Constructive Speeches</h3>
<p><span class="key-term" data-definition="The first four speeches in a round. This is where BOTH teams build their cases and present ALL their arguments. No new arguments may be introduced in rebuttal speeches.">Constructive speeches</span> are where both teams lay out every argument they intend to make. <strong>If you forget to say something here, you cannot bring it up in your rebuttal</strong> — that's a Point of Order violation.</p>

<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,.12);">
      <th style="text-align:left;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">SPEECH</th>
      <th style="text-align:left;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">SPEAKER</th>
      <th style="text-align:right;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">NOVICE</th>
      <th style="text-align:right;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">JV/V</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
      <td style="padding:10px 14px;color:var(--text-primary);font-weight:600;">1st Affirmative Constructive</td>
      <td style="padding:10px 14px;color:var(--text-secondary);">1st Aff — sets the entire case</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--gold-300);font-weight:700;">5 min</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--text-muted);font-weight:700;">7 min</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
      <td style="padding:10px 14px;color:var(--text-primary);font-weight:600;">1st Negative Constructive</td>
      <td style="padding:10px 14px;color:var(--text-secondary);">1st Neg — attacks Aff + builds Neg case</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--gold-300);font-weight:700;">5 min</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--text-muted);font-weight:700;">8 min</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
      <td style="padding:10px 14px;color:var(--text-primary);font-weight:600;">2nd Affirmative Constructive</td>
      <td style="padding:10px 14px;color:var(--text-secondary);">2nd Aff — defends Aff + attacks Neg case</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--gold-300);font-weight:700;">5 min</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--text-muted);font-weight:700;">8 min</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;color:var(--text-primary);font-weight:600;">2nd Negative Constructive</td>
      <td style="padding:10px 14px;color:var(--text-secondary);">2nd Neg — rebuilds Neg + attacks Aff</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--gold-300);font-weight:700;">5 min</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--text-muted);font-weight:700;">8 min</td>
    </tr>
  </tbody>
</table>

<h3>Part 2: Rebuttal Speeches</h3>
<p><span class="key-term" data-definition="The final two speeches of the round. Teams summarize and crystallize their strongest arguments. Brand-new arguments are strictly forbidden here — this is summary and voting issues only.">Rebuttal speeches</span> are where the debate gets decided. Each team highlights what they've won and why the judge should vote for them. <strong>No new arguments — ever.</strong></p>

<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,.12);">
      <th style="text-align:left;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">SPEECH</th>
      <th style="text-align:left;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">SPEAKER</th>
      <th style="text-align:right;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">NOVICE</th>
      <th style="text-align:right;padding:10px 14px;color:var(--text-muted);font-size:12px;font-weight:700;letter-spacing:.05em;">JV/V</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
      <td style="padding:10px 14px;color:var(--text-primary);font-weight:600;">Negative Rebuttal</td>
      <td style="padding:10px 14px;color:var(--text-secondary);">1st Neg speaker (speaks twice!)</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--gold-300);font-weight:700;">3 min</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--text-muted);font-weight:700;">4 min</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;color:var(--text-primary);font-weight:600;">Affirmative Rebuttal</td>
      <td style="padding:10px 14px;color:var(--text-secondary);">1st Aff speaker (speaks twice!) — gets the final word</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--gold-300);font-weight:700;">3 min</td>
      <td style="padding:10px 14px;text-align:right;font-family:var(--font-mono);color:var(--text-muted);font-weight:700;">5 min</td>
    </tr>
  </tbody>
</table>

<p>Both rebuttals are given by the <strong>first speakers</strong> on each team. Put your fastest thinker at first speaker — they get two speeches and the final word.</p>

<h3>Constructive vs. Rebuttal — The Key Difference</h3>
<ul>
  <li><strong>Constructive speeches:</strong> Build your case. Introduce ALL your arguments. Only time to bring up new arguments.</li>
  <li><strong>Rebuttal speeches:</strong> Summarize. Highlight your best arguments. Tell the judge why you won. No new arguments — ever.</li>
</ul>

<p>There's <strong>no prep time between speeches</strong>. Once the previous speaker sits down, you have about 20 seconds to be on your feet and talking. Always know what you're going to say before they finish.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'dragSort',
            exerciseConfig: {
              // Speeches are named by side and type only. Numbering them
              // ("1st Affirmative") stated the order the question asks for, and
              // printing the times sorted it a second way, since the rebuttals
              // were the only short speeches.
              instruction: 'Put the six speeches of a parliamentary debate round in the correct order, from first (position 1) to last (position 6).',
              items: [
                'Negative Constructive — second Negative speaker',
                'Affirmative Constructive — first Affirmative speaker',
                'Affirmative Rebuttal',
                'Negative Constructive — first Negative speaker',
                'Negative Rebuttal',
                'Affirmative Constructive — second Affirmative speaker'
              ],
              correctOrder: [1, 3, 5, 0, 4, 2]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 2 — Building Your First Case
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-2',
    title: 'Building Your First Case',
    icon: '🏗️',
    lessons: [

      /* ── Lesson 2.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-2-1',
        title: 'Defining Your Terms',
        steps: [
          {
            type: 'content',
            html: `
<h2>Defining Your Terms</h2>
<p>The first thing the Affirmative does is define key terms. This sounds like housekeeping — it's actually one of the most powerful strategic moves in the round. How you define terms shapes <em>what the entire debate is about.</em></p>

<h3>Why It Matters — A Real Example</h3>
<p>Resolution: <em>"The USFG should prohibit the sale of genetic data for commercial purposes."</em></p>
<p>If the Aff defines "commercial purposes" too narrowly — excluding research companies that profit from data — the Neg can challenge it:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"We challenge the Affirmative's definition. They've excluded biotech research firms that sell genetic insights commercially. This is self-serving — their plan only works if those firms are excluded. We define 'commercial purposes' as any for-profit use of genetic data, which is the plain-language reading."
</div>
<p>That's a <span class="key-term" data-definition="An argument raised by the Negative claiming that the Affirmative's definitions are unfair, off-topic, or don't reflect what the resolution actually intends to debate.">Topicality</span> challenge. Now the debate is about definitions, not contentions — the trap you want to avoid.</p>

<h3>The Golden Rule</h3>
<p>Your definitions must be <span class="key-term" data-definition="A definition is topical when it captures what a reasonable person would understand the resolution to mean — not a cleverly twisted interpretation designed to give your side an unfair advantage.">topical</span>. Ask yourself: <strong>"Would a reasonable person agree this captures what the resolution actually intends to debate?"</strong></p>

<div style="background:rgba(74,222,128,.07);border-left:3px solid #4ade80;padding:12px 18px;border-radius:0 10px 10px 0;margin:10px 0;">
  <strong style="color:#a7f3d0;">✓ Fair:</strong> On "The USFG should guarantee universal childcare" — defining "universal childcare" as "federally funded, accessible childcare for all families regardless of income." Broad, topical, defensible.
</div>
<div style="background:rgba(248,113,113,.07);border-left:3px solid #f87171;padding:12px 18px;border-radius:0 10px 10px 0;margin:10px 0;">
  <strong style="color:#fca5a5;">✗ Unfair:</strong> Defining "universal childcare" as "only programs serving children under 1 year old" to match what you prepped. Too narrow, clearly strategic, won't survive a Topicality challenge.
</div>

<h3>What to Define</h3>
<p>Only define terms that are <strong>ambiguous, technical, or central to your argument</strong>. Don't define every word. Target terms where:</p>
<ul>
  <li>Multiple interpretations are possible</li>
  <li>Your whole case depends on how this term is understood</li>
  <li>The Negative could exploit an unclear definition against you</li>
</ul>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'Resolution: "The USFG should significantly expand its space exploration program."\n\nYou are the Affirmative. You need to define "space exploration program." Which definition strategy is best?',
              options: [
                {
                  text: 'Define it as "only crewed Mars missions" to keep the debate focused on what your team prepared.',
                  feedback: 'Too narrow and clearly self-serving. The resolution says "space exploration program" broadly — limiting it to just Mars missions ignores the obvious intent and will draw an immediate Topicality challenge from the Negative. Never write definitions to match your prep; write prep to match fair definitions.',
                  isOptimal: false
                },
                {
                  text: 'Define it as "all NASA-funded activities including planetary exploration, satellite programs, and scientific research" to capture the reasonable scope of the resolution.',
                  feedback: 'This is the right call. The definition is topical, broad enough to reflect the resolution\'s intent, and reasonable enough that the Negative would have a hard time challenging it. It also gives your team room to run multiple contentions without being boxed into one narrow area.',
                  isOptimal: true
                },
                {
                  text: 'Skip defining terms entirely — it wastes speech time and the judge already knows what the words mean.',
                  feedback: 'Never skip definitions! Undefined ambiguous terms are a gift to the Negative — they can redefine those terms in their favor during their speech. Definitions protect your case and set the boundaries of the debate on your terms.',
                  isOptimal: false
                },
                {
                  text: 'Define "space exploration" as "any frontier scientific discovery, including ocean exploration" to give your team maximum argument flexibility.',
                  feedback: 'This clearly violates topicality. The resolution is about space — not oceans. Stretching the definition this far is not what a reasonable person would conclude from reading the resolution, and the Negative will win the Topicality argument easily.',
                  isOptimal: false
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 2.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-2-2',
        title: 'Setting Judging Criteria',
        steps: [
          {
            type: 'content',
            html: `
<h2>Setting Judging Criteria</h2>
<p>After definitions, the Affirmative sets the <span class="key-term" data-definition="The decision rule the judge uses to evaluate arguments and determine who wins. It tells the judge what lens to apply — what counts as winning.">judging criteria</span>. You're telling the judge <em>how to evaluate the entire round</em> before a single contention has been presented. Set the rules well for your side and your arguments will consistently score — the Negative's won't.</p>

<h3>The Four Main Criteria</h3>

<div style="display:grid;gap:10px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px 18px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:4px;">Net Benefits</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.5;">Which side produces more overall good vs. harm? <strong>Most common in policy debates.</strong> If the plan creates more benefit than harm, Aff wins.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px 18px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:4px;">Preponderance of Evidence</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.5;">Whichever side brings the most credible evidence tips the scale. Works in policy and fact debates.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px 18px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:4px;">Moral Imperative</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.5;">Which position is most ethically defensible, regardless of practical consequences? <strong>Most common in value debates.</strong></p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px 18px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:4px;">On Balance</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.5;">Is the statement more true than false overall? You don't have to prove it's universally true. <strong>Great for fact debates.</strong> Always define this when you use it.</p>
  </div>
</div>

<h3>Match Criteria to Resolution Type</h3>
<ul>
  <li><strong>Fact:</strong> "On balance" or "more often than not"</li>
  <li><strong>Value:</strong> "Moral imperative" or a specific value (justice, liberty, equality) your arguments best support</li>
  <li><strong>Policy:</strong> "Net benefits"</li>
</ul>

<p>The Negative can challenge your criteria and propose their own. Winning the framing argument often determines who wins the round — whoever sets the judging standard controls how everything gets evaluated.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'matching',
            exerciseConfig: {
              instruction: 'Match each judging criterion to the scenario where it is the best fit.',
              pairs: [
                {
                  left: 'Net Benefits',
                  right: 'Policy debate: Does the plan produce more overall good than harm for the most people?'
                },
                {
                  left: 'Moral Imperative',
                  right: 'Value debate: Which position is the most ethically correct, regardless of practical consequences?'
                },
                {
                  left: 'On Balance',
                  right: 'Fact debate: Is the statement more true than false overall, even if not universally provable?'
                },
                {
                  left: 'Preponderance of Evidence',
                  right: 'Any debate: The side with the most credible supporting evidence tips the scale in their favor.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 2.3 ─────────────────────────────────────────── */
      {
        id: 'lesson-2-3',
        title: 'Writing Contentions',
        steps: [
          {
            type: 'content',
            html: `
<h2>Writing Contentions</h2>
<p>A <span class="key-term" data-definition="A fully developed argument that supports your team's position in the debate. Contentions always have four required parts: claim, evidence, warrant, and impact.">contention</span> is the main building block of your case. Four parts, every time. A well-built contention is significantly harder to defeat — and makes it easy for the judge to follow your logic.</p>

<h3>The Four Parts</h3>

<div style="display:grid;gap:10px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">CLAIM</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">Your argument, stated clearly as a statement (never a question). Always number it: <em>"Our first contention is…"</em> One line the judge can write down.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">EVIDENCE</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">Facts, statistics, examples — with sources. Use Subpoint A / Subpoint B if you have multiple pieces. Good anecdotal evidence strengthens your case too.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">WARRANT</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">Explain WHY your evidence proves your claim. Connect the dots explicitly. Every claim needs reasoning to back it up — don't just state a stat and move on.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">IMPACT</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">IMPACT your arguments — tell the judge why it matters. What changes in the real world? What happens if the judge votes wrong? This is what makes a judge care. Slow down here.</p>
  </div>
</div>

<h3>Example — Four Parts in Action</h3>
<p>Using a resolution our team has practiced: <em>"The USFG should prohibit the sale of genetic data for commercial purposes."</em></p>

<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.25);border-radius:12px;padding:18px 20px;margin:14px 0;">
  <p style="margin:0 0 10px;"><strong style="color:var(--gold-300);">Claim:</strong> "Our first contention is that commercial genetic data sales expose individuals to discrimination and privacy violations."</p>
  <p style="margin:0 0 10px;"><strong style="color:var(--gold-300);">Evidence:</strong><br/>
  Subpoint A — A 2021 ProPublica investigation found that insurance companies purchased genetic risk scores from data brokers to adjust premiums without customer knowledge.<br/>
  Subpoint B — The Electronic Frontier Foundation found that 80% of Americans whose data was sold to third parties never consented to that use.</p>
  <p style="margin:0 0 10px;"><strong style="color:var(--gold-300);">Warrant:</strong> "When companies sell your most personal biological data without your knowledge, they hand strangers the ability to discriminate against you based on your genes — information you were born with and cannot change."</p>
  <p style="margin:0;"><strong style="color:var(--gold-300);">Impact:</strong> "The result is a world where your DNA is used against you: higher insurance rates, employment discrimination, and a fundamental loss of bodily privacy. The judge's vote today determines whether corporations can profit by weaponizing your biology."</p>
</div>

<p>Notice how the evidence isn't just floating there — the warrant connects the statistics to the claim, and the impact tells the judge exactly what's at stake. <strong>Your goal is three well-constructed contentions</strong> for a solid, complete case.</p>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:16px 0;">
  <strong>Team practice tips — contentions:</strong>
  <ul style="margin:8px 0 0;padding-left:18px;color:var(--text-secondary);font-size:14px;line-height:1.8;">
    <li><strong>Make sure your arguments have enough evidence.</strong> A claim without evidence is an assertion — easy to dismiss.</li>
    <li><strong>Every claim needs reasoning to back it up.</strong> Don't just state a fact; explain why it proves your contention.</li>
    <li><strong>IMPACT your arguments.</strong> Tell the judge why it matters. "So what?" should never be a question the judge has after your contention.</li>
    <li><strong>Good anecdotal evidence strengthens your case.</strong> Real-world examples make arguments stick with a judge.</li>
    <li><strong>Watch your pacing — slow down on key points.</strong> Don't race through your impact; it's the most important part.</li>
  </ul>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a complete contention on the topic "Social media is harmful to teenagers." Fill in all four parts of the argument framework.',
              fields: [
                {
                  label: 'Claim — State your contention clearly as a statement (start with "Our first contention is…")',
                  placeholder: 'Our first contention is that…',
                  modelAnswer: 'Our first contention is that social media harms the mental health of teenagers.'
                },
                {
                  label: 'Evidence — Provide a specific fact or statistic with a source (use Subpoint A/B format if you have two)',
                  placeholder: 'Subpoint A: According to [source], [specific statistic or fact]…',
                  modelAnswer: 'Subpoint A: According to the American Psychological Association (2023), teens who spend more than 3 hours daily on social media are twice as likely to experience anxiety and depression. Subpoint B: A 2022 Surgeon General advisory found social media causes body image issues in 46% of teenage girls.'
                },
                {
                  label: 'Warrant — Explain WHY this evidence proves your claim (connect the dots explicitly)',
                  placeholder: 'This evidence shows that… because…',
                  modelAnswer: 'This evidence shows that social media directly causes measurable psychological harm in teenagers. The connection between heavy social media use and mental health disorders is not coincidental — multiple peer-reviewed studies confirm it is causal. Teens on these platforms are constantly exposed to curated, unrealistic images of other people\'s lives, driving comparison and feelings of inadequacy.'
                },
                {
                  label: 'Impact — What changes in the real world? What are the stakes for the judge\'s decision?',
                  placeholder: 'If we fail to [action], then [real-world consequence]…',
                  modelAnswer: 'If we fail to address social media\'s harm, an entire generation will face rising rates of anxiety, depression, and self-harm. Protecting teens means healthier families, better academic performance, and fewer mental health crises overwhelming our schools and hospitals. The judge\'s vote today is a vote for teen wellbeing.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 2.4 ─────────────────────────────────────────── */
      {
        id: 'lesson-2-4',
        title: 'Putting It All Together',
        steps: [
          {
            type: 'content',
            html: `
<h2>Putting It All Together: Case Structure</h2>
<p>A great case isn't a pile of arguments — it tells a coherent story the judge can follow from the first sentence to the last. Here's the exact order.</p>

<h3>The Fact/Value Case Structure</h3>
<p>Your 1AC speech (5 min novice / 7 min JV-V) should follow this exact order:</p>

<div style="counter-reset:step-counter;display:flex;flex-direction:column;gap:10px;margin:16px 0;">
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">1.</span>
    <div><strong>Opening Remark / Introduction</strong> — A compelling hook that draws the judge in and states the resolution. Make it memorable — this is your first impression.</div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">2.</span>
    <div><strong>Roadmap</strong> — After your intro, tell the judge what you'll cover. Keep it brief and high-level — not too specific, not too long. Once you say your roadmap, you have to stick to it.
    <div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.15);border-radius:8px;padding:10px 14px;margin-top:8px;font-style:italic;font-size:13px;color:var(--text-secondary);">"In the next few minutes, I will frame the debate, define key terms, and present two contentions supporting the Affirmation."</div>
    </div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">3.</span>
    <div><strong>Resolutional Analysis — Definitions</strong> — State the type of resolution and define key terms. This is Observation One in formal case structure.</div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">4.</span>
    <div><strong>Criteria (Observation Two)</strong> — Establish your judging standard and explain why the judge should use it to evaluate this round.</div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">5.</span>
    <div><strong>Contention 1</strong> — Your strongest argument. Full claim → evidence → warrant → impact structure.</div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">6.</span>
    <div><strong>Contention 2</strong> — Your second argument. Same structure.</div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:28px;">7.</span>
    <div><strong>Conclusion / Underview</strong> — Briefly summarize your key points and urge a vote for the Affirmation. Leave them with your strongest impression.</div>
  </div>
</div>

<h3>Policy Cases Add a Plan</h3>
<p>Policy cases follow the same structure, but after definitions and criteria you add: <strong>Significant Harm → Inherency → Plan → Solvency → Advantages.</strong></p>
<p>The <span class="key-term" data-definition="Required in policy debates. Specifies: WHO acts (Agent of Action), WHAT they do, WHEN it happens, and HOW it's funded and enforced. Must be presented by the Affirmative.">plan</span> uses the WHO/WHAT/WHEN/HOW framework — see Lesson 10.2 for the full breakdown.</p>

<h3>Mastering Your Prep Clock</h3>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:10px 16px;border-radius:0 8px 8px 0;margin:8px 0 12px;">
  <strong>Novice: 30 minutes</strong> · JV/Varsity: 20 minutes
</div>
<ul>
  <li><strong>Minutes 0–3:</strong> Both partners read the resolution. Identify the type. Decide your position.</li>
  <li><strong>Minutes 3–9:</strong> Brainstorm 5–6+ potential arguments — don't filter yet, just generate.</li>
  <li><strong>Minutes 9–12:</strong> Rank arguments from strongest to weakest. Pick the top 2–3; keep the rest as backup.</li>
  <li><strong>Minutes 12–22:</strong> Divide contentions between partners. Each person fully develops their assigned arguments. Include enough evidence — good anecdotal examples strengthen your case.</li>
  <li><strong>Minutes 22–30:</strong> Both write the full case by hand. Review each other's work. Align on definitions and criteria.</li>
</ul>
`
          },
          {
            type: 'exercise',
            exerciseType: 'dragSort',
            exerciseConfig: {
              instruction: 'Put the elements of a First Affirmative Constructive speech in the correct order, from first to last.',
              items: [
                'Criteria (Observation Two) — establish the judging standard',
                'Opening remark / Introduction — hook the judge, state the resolution',
                'Conclusion (Underview) — summarize and urge an Affirmative vote',
                'Roadmap — preview what you will cover and in what order',
                'Contention 1 — your strongest argument',
                'Resolutional Analysis (Observation One) — state the resolution type and define key terms',
                'Contention 2 — your second argument'
              ],
              correctOrder: [1, 3, 5, 0, 4, 6, 2]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 3 — The Affirmative Team
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-3',
    title: 'The Affirmative Team',
    icon: '✅',
    lessons: [

      /* ── Lesson 3.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-3-1',
        title: 'First Aff Speaker',
        steps: [
          {
            type: 'content',
            html: `
<h2>The First Affirmative Constructive Speech (1AC)</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 5 minutes</strong> · JV/Varsity: 7 minutes
</div>

<p>You're up first. The 1AC is where you <strong>set the entire frame of the round</strong> — your definitions, your criteria, your story. When done right, you put the Negative on the defensive before they've said a single word.</p>

<h3>What You Must Cover — In Order</h3>

<p><strong>1. Introduction + State the Resolution</strong><br/>Open with a hook and state your position clearly. Example using a real resolution our team has practiced:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:8px 0;font-style:italic;color:var(--text-secondary);">
"Millions of families struggle to afford childcare — or can't find it at all. For this reason and others, we of the Affirmation support the resolution: <em>The USFG should guarantee universal childcare.</em>"
</div>

<p><strong>2. Roadmap</strong><br/>Tell the judge what's coming so they can flow it accurately. The roadmap goes <em>after</em> your intro, but keep it brief and high-level — not too specific, not too long. Once you say your roadmap, you have to stick to it.</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:8px 0;font-style:italic;color:var(--text-secondary);">
"In the next few minutes, I will frame this debate, define key terms, and present two reasons why the Affirmation wins."
</div>

<p><strong>3. Frame the Debate</strong><br/>State the resolution type, judging criteria, and definitions.</p>

<p><strong>4. Present Your Contentions</strong><br/>Full claim → evidence → warrant → impact for each. Aim for 2–3. Make sure your arguments have enough evidence — good anecdotal evidence strengthens your case. Watch your pacing; slow down on key points.</p>

<p><strong>5. Conclusion</strong><br/>Summarize and urge a vote for the Affirmation. Short and confident.</p>

<h3>First Affirmative Checklist</h3>
<ul>
  <li>✓ Short, compelling introduction</li>
  <li>✓ Stated the resolution</li>
  <li>✓ Provided a roadmap (after intro, not too long, stick to it)</li>
  <li>✓ Stated the resolution type</li>
  <li>✓ Gave a judging criterion</li>
  <li>✓ Defined key terms</li>
  <li>✓ If policy: presented a plan (Agent, Action, Funding, Enforcement)</li>
  <li>✓ Presented 2–3 fully developed contentions with evidence</li>
  <li>✓ Gave a conclusion urging an Affirmative vote</li>
</ul>
<p>The first Aff speaker is usually your team's most confident, fastest-thinking debater — because they also give the <strong>Affirmative Rebuttal</strong> at the very end of the round. Sound confident. Don't just read off the paper.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'checklist',
            exerciseConfig: {
              instruction: 'Read the sample First Affirmative speech below. Check every item from the First Affirmative Checklist that the speaker actually completed. One item is missing — can you spot it?',
              context: 'Sample speech: "Good afternoon. Every year, the United States spends over $300 billion importing foreign oil, leaving our economy at the mercy of unstable regimes. For this reason, we of the Affirmation support the resolution: The USFG should significantly increase the use of alternate energy sources.\n\nIn the next 5 minutes I will frame this debate, define our key terms, and present two reasons why alternate energy is our best future.\n\nThis is a policy debate. We ask the judge to evaluate our arguments on net benefits — which side produces more overall good for Americans. We define \'alternate energy sources\' as all energy sources other than oil and coal.\n\nOur first contention: America\'s dependence on foreign oil is a national security crisis. Subpoint A — the US imports 8 million barrels per day from politically unstable nations (EIA, 2022). Subpoint B — when those nations restrict supply, gas prices spike, hurting every American family. By shifting to domestic renewable energy, we eliminate that vulnerability and protect American families from sudden economic shocks.\n\nOur second contention: Renewable energy creates jobs. The solar industry alone employed roughly a quarter of a million Americans in 2022, and sustained federal investment grows that workforce further. Voting Affirmative means hundreds of thousands of new, good-paying jobs for Americans.\n\nFor these reasons — national security and economic opportunity — we urge a vote for the Affirmation."',
              items: [
                { text: 'Gave a short, compelling introduction', correct: true },
                { text: 'Stated the resolution', correct: true },
                { text: 'Provided a roadmap', correct: true },
                { text: 'Stated the type of resolution (policy)', correct: true },
                { text: 'Gave a judging criterion (net benefits)', correct: true },
                { text: 'Defined key terms ("alternate energy sources")', correct: true },
                { text: 'Presented a plan (required in policy debates — Agent, Action, Funding, Enforcement)', correct: false },
                { text: 'Presented at least 2 contentions', correct: true },
                { text: 'Gave a conclusion urging an Affirmative vote', correct: true }
              ]
            }
          }
        ]
      },

      /* ── Lesson 3.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-3-2',
        title: 'Second Aff Speaker',
        steps: [
          {
            type: 'content',
            html: `
<h2>The Second Affirmative Constructive Speech (2AC)</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 5 minutes</strong> · JV/Varsity: 8 minutes
</div>

<p>By the time you stand up for the 2AC, the Negative has attacked your partner's case. Your job is to defend it, go on offense against the Negative's contentions, and <strong>rebuild your arguments so they're stronger than when they started</strong>. The 2AC is one of the most demanding speeches in the round — you're covering multiple fronts at the same time.</p>

<h3>Your Responsibilities — In Order</h3>

<p><strong>Step 1: Strong Opening + Reaffirm</strong></p>
<p>Start with a powerful line and re-commit to the resolution:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"How we handle energy in the next few years will be vitally important. My partner and I continue to believe that alternate energy sources are our best future, and we support the resolution: <em>Resolved: the USFG should significantly increase the use of alternate energy sources.</em>"
</div>

<p><strong>Step 2: Roadmap</strong></p>
<p>With so much to cover, a clear roadmap is critical:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"During these 8 minutes, I will first address the Negation's concerns with our definitions, then attack the Negation's case, and finally return to our contentions and rebuild them. Let's begin…"
</div>

<p><strong>Step 3: Defend the Framing (If Attacked)</strong></p>
<p>If the Negative challenged your definitions, criteria, or resolution type — respond now. Explain why your framing is correct:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"The Negation argued that we should include nuclear power in our definition of alternate energy. We respectfully disagree. Our definition captures the clear intent of the resolution — shifting away from our dominant fossil fuel dependency. Nuclear has its own distinct policy debates; conflating it here muddies this round unfairly."
</div>

<p><strong>Step 4: Attack the Negative's Contentions</strong></p>
<p>Take down each Negative argument, in the order they presented them:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"The Negation told you that developing alternate energy will cost too much. We disagree. Researching and developing alternate energy sources will provide hundreds of thousands of new jobs. Giving handouts in longer unemployment benefits is only a short-term solution. Creating new jobs creates lasting, sustainable economic growth — which costs far less in the long run."
</div>

<p><strong>Step 5: EXTEND Your Contentions — Never Just Repeat</strong></p>
<p>This is the most important and most misunderstood part of the 2AC. After the Negative attacks your contentions, you must rebuild them. But you cannot simply <em>repeat</em> what your partner said. You must <span class="key-term" data-definition="To extend an argument means to build on it by answering the specific attacks made against it and adding new analysis — not just restating what your partner already said.">extend</span> — answer their specific attacks, add new reasoning, and show why your argument is still standing.</p>

<div style="display:grid;gap:12px;margin:16px 0;">
  <div style="background:rgba(248,113,113,.07);border-left:3px solid #f87171;padding:12px 18px;border-radius:0 10px 10px 0;">
    <strong style="color:#fca5a5;">✗ Just Repeating (Wrong):</strong><br/>
    <span style="color:var(--text-secondary);font-size:14px;">"As my partner stated, we are too dependent on foreign oil. This is a major problem for America."</span>
  </div>
  <div style="background:rgba(74,222,128,.07);border-left:3px solid #4ade80;padding:12px 18px;border-radius:0 10px 10px 0;">
    <strong style="color:#a7f3d0;">✓ Extending (Right):</strong><br/>
    <span style="color:var(--text-secondary);font-size:14px;">"The Negation demands we show a harm in our oil dependence. I point to the recent spike in gas prices — the U.S. is at the mercy of oil-rich countries who can charge whatever they want. The higher costs are real hardship for millions of families. As for their domestic drilling suggestion: that requires drilling in highly sensitive environments. Look at the Gulf oil spill. It is better all around to transition to friendlier energy sources that free us from oil-wealthy nations."</span>
  </div>
</div>

<p><strong>Step 6: Conclusion</strong></p>
<p>Summarize why the Affirmative has won and close strong:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Let's look back. The Affirmative has given you three significant and unique arguments showing that alternate energy must be our top priority. We've proven that the Negation's economic concerns are outweighed by the job-creating power of renewables. The conclusion is simple: a vote for the Affirmation."
</div>

<h3>Second Affirmative Checklist</h3>
<ul>
  <li>✓ Strong opening + reaffirmed position</li>
  <li>✓ Provided a roadmap (brief, stick to it)</li>
  <li>✓ Defended any challenged framing</li>
  <li>✓ Attacked each Negative contention</li>
  <li>✓ REBUILT each Affirmative contention — EXTENDED, not just repeated</li>
  <li>✓ Refuted ALL points, not just the easy ones</li>
  <li>✓ Gave a conclusion urging an Affirmative vote</li>
</ul>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:10px 16px;border-radius:0 8px 8px 0;margin:12px 0;">
  <strong>Delivery reminder:</strong> Sound confident — don't just read off the paper. Slow down when you're impacting your strongest arguments. The judge is watching you, not just listening.
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Your partner presented Contention 1: "Cell phones lead to risky behaviors in teens" (University of Alabama study: 45% higher accident risk when walking and talking; KidsHealth.org: 1 in 3 teens cyberbullied). The Negative attacked it by arguing risky behavior is a normal part of teen life and removing phones won\'t stop risk. Write your EXTENSION — rebuild and strengthen the contention, don\'t just repeat it.',
              fields: [
                {
                  label: 'Briefly summarize what the Negative said about this contention (1–2 sentences)',
                  placeholder: 'The Negation argued that…',
                  modelAnswer: 'The Negation argued that risky behavior is a normal part of teen life — teens take risks while driving, playing sports, and using computers — and that removing cell phones wouldn\'t eliminate those risks.'
                },
                {
                  label: 'Respond with WHY their attack fails (your counter-analysis)',
                  placeholder: 'We disagree because…',
                  modelAnswer: 'We disagree because the Negation conflates supervised, structured risks — like driving with a license, or playing organized sports with coaches — with unnecessary, distraction-driven risks. A teen walking into traffic while texting has no training and no warning. The 45% accident increase is not a natural teen behavior; it is a consequence specific to cell phone distraction that would not exist without the device.'
                },
                {
                  label: 'Add NEW analysis that extends beyond what your partner originally said — this is the heart of extending',
                  placeholder: 'Furthermore, what the Negation failed to address is…',
                  modelAnswer: 'Furthermore, what the Negation failed to address is our cyberbullying subpoint. They said teens will be bullied regardless of cell phones. But cyberbullying is categorically different — it is a form of harm that exists only because of cell phones. You cannot be cyberbullied without a device. Our evidence shows 1 in 3 teens have experienced it. This is not a general teen risk; it is a harm unique to cell phone access and one the Negation cannot explain away.'
                },
                {
                  label: 'Close with a clear statement of why this contention is still standing after the Negative\'s attack',
                  placeholder: 'Therefore, our contention that…',
                  modelAnswer: 'Therefore, our contention that cell phones lead to risky behaviors stands stronger than before. The Negation has conceded that teens take risks — and our evidence shows cell phones multiply those risks with a category of harm that simply would not exist without them. This contention goes to the Affirmation.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 4 — The Negative Team
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-4',
    title: 'The Negative Team',
    icon: '⚔️',
    lessons: [

      /* ── Lesson 4.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-4-1',
        title: 'First Neg Speaker',
        steps: [
          {
            type: 'content',
            html: `
<h2>The First Negative Constructive Speech (1NC)</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 5 minutes</strong> · JV/Varsity: 8 minutes
</div>

<p>The First Affirmative just sat down after building their entire case. Now it's your turn. The 1NC does three things at once: <strong>challenge how the Affirmative framed the debate</strong>, <strong>build your own Negative case</strong>, and <strong>attack the Affirmative's contentions</strong>. Time management is everything.</p>

<h3>Step 1: Introduction — State Your Opposition</h3>
<p>Open with a hook that signals you're opposed to the resolution. Don't just say "we disagree" — show it with a line that makes the resolution feel wrong from the first sentence:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"While 'exploring alternative energy sources' may presently seem like the PC thing to do, developing these sources will be extremely expensive. It is for this reason and others, we stand opposed to the resolution."
</div>

<h3>Step 2: Roadmap — Tell the Judge What's Coming</h3>
<p>The judge is flowing fast. A clear roadmap helps them organize their notes and prepares them to follow your three-part structure:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"In the next few minutes, I will: 1) discuss some concerns we have with how the AFF framed the debate, 2) present the Negative case, and 3) return to the Affirmative's case and show why it is flawed. Turning first to the Affirmative's framing of the debate…"
</div>

<h3>Step 3: Challenge the Framing (If Needed)</h3>
<p>The Affirmative set the rules when they defined terms and chose judging criteria. Your first job is to decide whether to accept or challenge those choices. Three framing elements to evaluate:</p>
<div style="display:grid;gap:12px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:16px 20px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:6px;">1. The Type of Resolution</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Did the AFF correctly identify this as a fact, value, or policy debate? If they misidentified it, tell the judge why — it changes which standards apply to the whole round.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:16px 20px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:6px;">2. The Judging Criteria</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Do you prefer a different standard? Explain why yours is more appropriate:</p>
    <div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.15);border-radius:8px;padding:12px 16px;margin-top:8px;font-style:italic;color:var(--text-secondary);font-size:13px;">"The Affirmative told you this is a policy debate, and we are in agreement. However, they want the judging criteria to be preponderance of evidence. We believe that evidence can always be found to support an argument, and we prefer that the judge use net benefits — the number and quality of the benefits we secure for the American people."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:16px 20px;">
    <div style="font-weight:800;color:var(--gold-300);margin-bottom:6px;">3. The Definitions — This Is a <span class="key-term" data-definition="An argument raised by the Negative claiming that the Affirmative's definitions are unfair, off-topic, or don't reflect what the resolution actually intends to debate. A topicality argument forces the AFF to defend their definitions instead of their substantive arguments.">Topicality</span> Argument</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">The most common framing challenge. Attack definitions that don't reflect the intent of the resolution. On the alternate energy topic, the AFF excluded nuclear power — here's how to challenge it:</p>
    <div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.15);border-radius:8px;padding:12px 16px;margin-top:8px;font-style:italic;color:var(--text-secondary);font-size:13px;">"We disagree with the Affirmative's definition of alternative energy sources. They exempted 'nuclear power' from their definition. Clearly, most of our power comes from oil, making nuclear power clearly an 'alternate' source. The AFF has purposefully kept it out because nuclear power is both costly and detrimental, as we will show. So we need to redefine alternate energy sources to include nuclear power, and it is on that definition that the Negative will debate."</div>
  </div>
</div>

<h3>Step 4: Present the Negative Case FIRST</h3>
<p>Here's the most important strategic principle of the 1NC: <strong>present your Negative contentions before you attack the AFF case.</strong> Why? If you run out of time — and you will feel time pressure — you've already gotten your own arguments on record. If you attack the AFF first and run short on time, your own case never gets presented.</p>
<p>Your Negative contentions should be <span class="key-term" data-definition="Negative arguments that stand on their own merits, independent of what the AFF said. The judge should be able to vote Negative on these contentions even if every AFF argument were true.">unique to the Negative side</span>:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Now let's turn to the Negative's two contentions. Number #1 — Developing alternate energy sources will cost far too much money — money that could be better spent on other things."
</div>

<h3>Step 5: Cross-Applying Your Arguments</h3>
<p>If one of your Negative contentions also destroys an AFF argument, <strong>cross-apply it</strong> — tell the judge you'll return to use that same analysis later. This is efficient: one argument does double duty:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"As we consider the Affirmative's first argument on the benefits of solar power, we would like you to cross apply our first negative argument on the huge cost of alternate energy sources — solar energy being one of those. Solar energy may be nice, but it is going to cost WAY TOO MUCH."
</div>

<h3>Step 6: Attack the AFF Contentions — In Order</h3>
<p>Attack each AFF contention in the exact order they presented them. This keeps the judge's flow clean and organized. Watch the clock — this step gets skipped more often than any other because speakers run long on their Neg case:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"The Affirmative's first contention is that we are too dependent on foreign oil. We would argue first that the Negative shows you no HARM in this. They present no examples of where our dependence has led to a significant harm to U.S. citizens. Second, we argue that the U.S. is already taking steps to minimize our need to get oil from other countries. Statistics show that the U.S. has enough of its own supplies to last for hundreds of years…"
</div>

<h3>Step 7: Conclusion</h3>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Because the Affirmative has a faulty definition of terms and has presented arguments that are flawed AND because we have provided two solid arguments supporting economic considerations, we ask for a Negative ballot."
</div>

<h3>First Negative Speaker Checklist</h3>
<ul>
  <li>✓ Short introduction, stated opposition to the resolution</li>
  <li>✓ Provided a roadmap (brief, stick to it)</li>
  <li>✓ Explained problems with the AFF's framing (type, criteria, and/or definitions)</li>
  <li>✓ Presented at least 2 Negative contentions</li>
  <li>✓ If policy debate: attacked the Affirmative plan</li>
  <li>✓ Attacked ALL AFF contentions in the order they were presented</li>
  <li>✓ Gave a conclusion urging a Negative vote</li>
</ul>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:10px 16px;border-radius:0 8px 8px 0;margin:12px 0;">
  <strong>Delivery reminder:</strong> Sound confident — don't just read off the paper. Refute ALL the points, not just the easy ones. Slow down when you're making your key attacks.
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'Resolution: "The United States government should significantly increase funding for public K–12 education."\n\nThe Affirmative defined the following terms:\n• "United States government" = the federal government only (not state or local governments)\n• "significantly increase" = increase by 25% or more over current levels\n• "public K–12 education" = schools funded and operated by state and local governments\n\nYou are the First Negative speaker. Which framing challenge is your strongest move?',
              options: [
                {
                  text: 'Accept all definitions — they seem reasonable and it\'s not worth spending speech time on definitions.',
                  feedback: 'Look more carefully. The AFF defined "public K–12 education" as schools funded by state and local governments — but then calls for the federal government to fund them. That\'s a built-in contradiction. The AFF\'s own definition excludes the very funding mechanism their plan proposes. Accepting without comment misses a real topicality opportunity.',
                  isOptimal: false
                },
                {
                  text: 'Challenge "public K–12 education" — the AFF defined it as state/local-funded schools, but then calls for federal funding. This built-in contradiction narrows the debate in a self-serving way.',
                  feedback: 'Excellent catch. This is a topicality argument — the AFF\'s own definition contradicts their plan. By defining "public K–12 education" as state/local-funded, the AFF has strategically excluded any discussion of federally-funded programs. Pointing this out forces the AFF to spend speech time defending a definition that handicaps their own resolution. That\'s exactly when to challenge framing.',
                  isOptimal: true
                },
                {
                  text: 'Challenge "significantly increase" — 25% is an arbitrary threshold the AFF invented to make their case easier to prove.',
                  feedback: 'Weaker challenge. The AFF is entitled to quantify their standard, and 25% is specific and defensible. Judges generally won\'t penalize a team for putting a number on "significantly." Save your speech time for the bigger problem: the structural contradiction in how the AFF defined "public K–12 education."',
                  isOptimal: false
                },
                {
                  text: 'Challenge "United States government" — limiting it to the federal government ignores the role of state governments in education.',
                  feedback: 'Weak challenge. In a policy debate, "United States government" most naturally refers to the federal government — that\'s the standard reading. The Negative would have a hard time winning this topicality argument. The bigger vulnerability is the funding contradiction the AFF built into their definition of "public K–12 education."',
                  isOptimal: false
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 4.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-4-2',
        title: 'Second Neg Speaker',
        steps: [
          {
            type: 'content',
            html: `
<h2>The Second Negative Constructive Speech (2NC)</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 5 minutes</strong> · JV/Varsity: 8 minutes
</div>

<p>By the time you stand up, your partner has presented the Negative case and the Second Affirmative has attacked it. Your three jobs: <strong>reaffirm and rebuild your Neg case</strong>, <strong>tear down the AFF's rebuilt contentions</strong>, and <strong>close strongly for the Negative</strong>. You go last in the constructive phase — give the judge something to remember going into rebuttals.</p>

<h3>Step 1: Strong Opening — Reaffirm the Negative Position</h3>
<p>Don't just say "we still disagree." Paint a picture that makes the resolution feel urgent and wrong:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"If you asked a guy in the unemployment line, a woman in front of her foreclosed home, a young adult with huge college loans — 'Alternate energy sources or economic prosperity?' — I think we know what they would answer. Economic security, along with the other arguments we've presented, show why the Negative is against this resolution."
</div>

<h3>Step 2: Roadmap</h3>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Here's where I'll be going during the next 8 minutes. I will first handle our continued problem with the definition of terms, then move to the attacks on our negative contentions — showing you why they aren't valid — and finally I will go back up to the top of the flow to deal with the Affirmative's case."
</div>

<h3>Step 3: Extend on Framing (If Still in Dispute)</h3>
<p>If the 2AC responded to your definitions challenge, respond again — but don't repeat what your partner said. Add new reasoning. The judge is watching to see who makes the stronger argument, not who repeats it more.</p>

<h3>Step 4: Go to Your Negative Case FIRST — REBUILD and EXTEND</h3>
<p>The AFF attacked your partner's contentions during the 2AC. Now you must rebuild them. The cardinal rule: <strong>don't just repeat what your partner said — EXTEND.</strong> Extending means you answer their specific attacks and add new analysis.</p>

<div style="display:grid;gap:12px;margin:16px 0;">
  <div style="background:rgba(248,113,113,.07);border-left:3px solid #f87171;padding:12px 18px;border-radius:0 10px 10px 0;">
    <strong style="color:#fca5a5;">✗ Just Repeating (Wrong):</strong><br/>
    <span style="color:var(--text-secondary);font-size:14px;">"As my partner mentioned, alternate energy is too expensive. This is a major economic problem."</span>
  </div>
  <div style="background:rgba(74,222,128,.07);border-left:3px solid #4ade80;padding:12px 18px;border-radius:0 10px 10px 0;">
    <strong style="color:#a7f3d0;">✓ Extending (Right):</strong><br/>
    <span style="color:var(--text-secondary);font-size:14px;">"The Affirmative said it is better to stimulate the economy through job creation, but we don't believe many jobs will come from the alternate energy sector. First, most of the initial jobs will be for specially trained scientists and engineers — those groups aren't the ones hurting for jobs right now. Second, the jobs created will only last if the company lasts. Look at Solyndra — Obama poured billions into that company and it went bankrupt. When it did, so did the jobs. And finally, we need a STOP GAP measure because jobs are needed now — not in 10 years."</span>
  </div>
</div>

<p>Three separate responses, each building on the last. That's what extending looks like. The judge now has new information they didn't have from the 1NC — that's extending.</p>

<h3>Step 5: Tear Down the AFF Rebuilds</h3>
<p>Your partner attacked the AFF's contentions in the 1NC. The 2AC rebuilt them. Now tear them down again — specifically responding to what the 2AC said, not what the 1AC originally said:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"The Affirmative told you that dependence on oil was bad, and we responded that we needed to see the harm in this. The Affirmative responds that there have been recent hikes in oil prices. In response, we would argue that energy prices will certainly be higher under their case. Companies that develop alternate energy sources must recoup their expenses, and they will hit up the American taxpayer to get them. Those costs are likely to be higher than the current price of oil."
</div>

<h3>Step 6: Summary — Set Up the Rebuttal</h3>
<p>Close by crystallizing the Negative's key arguments. You want the judge thinking about these going into the rebuttal speeches:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Remember: this debate is on what we value most — alternate energy sources or economic prosperity for our citizens. While solar and wind energy seem nice, we have clearly shown that we need to place a priority on our ailing economy. The Affirmative doesn't present a significant harm, while we have presented benefits to our citizens NOW — the choice is clear, and it is a vote for the Negative."
</div>

<h3>Second Negative Speaker Checklist</h3>
<ul>
  <li>✓ Strong opening, re-affirmed opposition to the resolution</li>
  <li>✓ Provided a roadmap (brief, stick to it)</li>
  <li>✓ Extended on framing disputes (if any) — didn't just repeat the 1NC</li>
  <li>✓ Rebuilt Negative contentions by extending — answered AFF's specific attacks</li>
  <li>✓ If policy debate: addressed remaining concerns with the AFF plan</li>
  <li>✓ Tore down ALL AFF contentions as rebuilt by the 2AC — didn't skip the hard ones</li>
  <li>✓ Extended arguments — pointed out flaws in the 2AC analysis</li>
  <li>✓ Gave a strong conclusion setting up the Negative Rebuttal</li>
</ul>
<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:10px 16px;border-radius:0 8px 8px 0;margin:12px 0;">
  <strong>Delivery reminder:</strong> Sound confident — don't just read off the paper. Watch your pacing — slow down on key points so the judge can flow them.
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Your partner (1NC) presented Contention 1: "Mandatory school uniforms reduce bullying by eliminating visible socioeconomic differences between students." The 2AC attacked it with: "Uniforms don\'t reduce bullying — bullying is about personality and social dynamics, not clothing. Studies show zero correlation between uniform policies and reduced bullying rates." Now write your 2NC EXTENSION — rebuild and strengthen the contention. Don\'t just repeat the 1NC.',
              fields: [
                {
                  label: 'Briefly summarize what the 2AC said (1–2 sentences)',
                  placeholder: 'The Affirmative argued that…',
                  modelAnswer: 'The Affirmative argued that uniforms don\'t reduce bullying because bullying stems from personality and social dynamics rather than clothing, and they claim studies show no correlation between uniform policies and reduced bullying rates.'
                },
                {
                  label: 'Challenge their response — explain why the 2AC\'s attack fails',
                  placeholder: 'We disagree with this analysis because…',
                  modelAnswer: 'We disagree because the Affirmative is conflating types of bullying. Our contention is specifically about bullying tied to visible socioeconomic differences — designer brands, expensive shoes, clothing as status symbols. Uniforms directly eliminate that specific trigger. The studies they reference lump all forms of bullying together, which dilutes the measurable effect. When researchers isolate appearance-based socioeconomic bullying, uniform studies consistently show reductions.'
                },
                {
                  label: 'EXTEND — add new analysis that goes beyond what your partner originally argued in the 1NC',
                  placeholder: 'Furthermore, what the Affirmative failed to address is…',
                  modelAnswer: 'Furthermore, what the Affirmative failed to address is the social inclusion argument. When all students wear the same clothing, the visible markers that separate wealthy students from low-income students disappear. A student in a $15 uniform is visually indistinguishable from a student whose parents can afford $200 sneakers. That equality of appearance creates a more inclusive classroom environment — and the Affirmative offered no analysis of how visible economic inequality in clothing affects the school culture of students who can\'t afford the latest trends.'
                },
                {
                  label: 'Close — state clearly that this contention stands and goes to the Negative',
                  placeholder: 'Therefore, our contention that…',
                  modelAnswer: 'Therefore, our contention that uniforms reduce socioeconomic bullying stands. The Affirmative\'s attack missed the specific mechanism we identified. Their "no correlation" studies don\'t address appearance-based socioeconomic bullying. The Negative wins this argument, and it is a reason to vote against the resolution.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 5 — Attacking Arguments
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-5',
    title: 'Attacking Arguments',
    icon: '🗡️',
    lessons: [

      /* ── Lesson 5.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-5-1',
        title: 'Four-Step Refutation',
        steps: [
          {
            type: 'content',
            html: `
<h2>The Four-Step Refutation Method</h2>
<p>When you need to attack an argument, don't wing it. The four-step method makes your attack organized, easy for the judge to follow, and hard for the opponent to dodge.</p>

<h3>The Pattern</h3>
<div style="display:grid;gap:10px;margin:16px 0;">
  <div style="background:rgba(96,165,250,.08);border-left:4px solid #60a5fa;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#93c5fd;font-size:13px;margin-bottom:4px;">STEP 1 — THEY SAID</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Summarize what the opposition said — <strong>very briefly</strong>. One or two sentences max. If you spend too long here, you're just reinforcing their argument and letting the judge hear it again. Summarize and move on.</p>
  </div>
  <div style="background:rgba(248,113,113,.08);border-left:4px solid #f87171;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#fca5a5;font-size:13px;margin-bottom:4px;">STEP 2 — BUT</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Tell the judge what's wrong with the opposition's argument. Is it inaccurate? Insignificant? Exaggerated? Not proven? Choose your angle and state it cleanly.</p>
  </div>
  <div style="background:rgba(167,139,250,.08);border-left:4px solid #a78bfa;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#c4b5fd;font-size:13px;margin-bottom:4px;">STEP 3 — BECAUSE</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Explain <em>why</em> it's wrong. Present your logic and evidence. If you have multiple reasons, divide them into labeled subpoints (A, B, C). If the opposition had subpoints, <strong>attack each subpoint separately</strong> — don't let any of them slide.</p>
  </div>
  <div style="background:rgba(74,222,128,.08);border-left:4px solid #4ade80;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#a7f3d0;font-size:13px;margin-bottom:4px;">STEP 4 — THEREFORE</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Draw the conclusion. Show the judge how this attack weakens your opponent's case and how it supports <em>your</em> position in the debate. Always tie it back to the resolution — this is what makes the attack matter.</p>
  </div>
</div>

<h3>Example — All Four Steps in Action</h3>
<p>The Affirmative argued: <em>"Cell phones lead to risky behaviors in teens — Subpoint A: teens talking on phones while walking had a 45% greater chance of a close call (U. of Alabama, 2008). Subpoint B: 1 in 3 teens have been victimized by cyberbullying (KidsHealth.org)."</em></p>

<div style="border:1px solid rgba(255,255,255,.12);border-radius:14px;overflow:hidden;margin:16px 0;">
  <div style="background:rgba(96,165,250,.08);border-bottom:1px solid rgba(255,255,255,.07);padding:14px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#93c5fd;font-size:11px;letter-spacing:.08em;margin-bottom:6px;">THEY SAID</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">that cell phones lead teens to risky behaviors — and as their Subpoint A says, it often happens while walking and talking on the phone.</p>
  </div>
  <div style="background:rgba(248,113,113,.07);border-bottom:1px solid rgba(255,255,255,.07);padding:14px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#fca5a5;font-size:11px;letter-spacing:.08em;margin-bottom:6px;">BUT</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">risky behaviors are an accepted part of being a teenager and those risky behaviors will continue even if teens don't have cell phones.</p>
  </div>
  <div style="background:rgba(167,139,250,.07);border-bottom:1px solid rgba(255,255,255,.07);padding:14px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#c4b5fd;font-size:11px;letter-spacing:.08em;margin-bottom:6px;">BECAUSE</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;">teens are always involved in risky behavior, and as a society we have accepted that risk as part of the teen years:</p>
    <ul style="color:var(--text-secondary);font-size:14px;margin:0 0 8px;padding-left:20px;">
      <li>Subpoint A — They can drive, though it increases their accident risk</li>
      <li>Subpoint B — They can play football, though it increases their risk for injury</li>
      <li>Subpoint C — They can use the computer, though it causes injuries like carpal tunnel</li>
    </ul>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;"><em>And on Subpoint B (cyberbullying):</em> kids will be bullied regardless of the cell phone. 56% of students say they have personally felt some sort of bullying at school. The bullying will not stop just because cell phones aren't there.</p>
  </div>
  <div style="background:rgba(74,222,128,.07);padding:14px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#a7f3d0;font-size:11px;letter-spacing:.08em;margin-bottom:6px;">THEREFORE</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">the Affirmation's claim that cell phones are bad because they lead to risky behavior isn't significant. Many of those risky behaviors aren't inherent to the cell phone and will continue with or without it. This contention goes to the Negative.</p>
  </div>
</div>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:16px 0;">
  <strong>Team practice tips — refutation:</strong>
  <ul style="margin:8px 0 0;padding-left:18px;color:var(--text-secondary);font-size:14px;line-height:1.8;">
    <li><strong>Refute ALL the points, not just the easy ones.</strong> Judges notice when you dodge a strong argument. Skipping it is the same as losing it.</li>
    <li><strong>Sound confident — don't just read off the paper.</strong> If you sound uncertain, the judge treats your attack as uncertain.</li>
    <li><strong>Watch your pacing — slow down on key points.</strong> Rush through a refutation and the judge can't write it down.</li>
  </ul>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a complete four-step refutation. The Affirmative argued: "Our second contention is that social media is addictive. Teens spend an average of 7 hours daily on their phones (Common Sense Media, 2023), and the American Psychological Association confirms that dopamine feedback loops in social media apps are deliberately engineered to create compulsive use patterns." Use all four steps.',
              fields: [
                {
                  label: 'THEY SAID — Summarize the opposition\'s argument briefly (1–2 sentences only)',
                  placeholder: 'The opposition said that…',
                  modelAnswer: 'The Affirmative said that social media is addictive — they cited 7 hours of daily phone use and the APA\'s finding that social media apps are deliberately designed with dopamine feedback loops to create compulsive behavior in teens.'
                },
                {
                  label: 'BUT — State what is wrong with this argument (inaccurate? exaggerated? not proven?)',
                  placeholder: 'But we argue that…',
                  modelAnswer: 'But we argue that calling social media "addictive" conflates normal habitual use with a clinical addiction disorder — and those are fundamentally different things that require fundamentally different policy responses.'
                },
                {
                  label: 'BECAUSE — Explain WHY it\'s wrong. Use Subpoint A and Subpoint B format.',
                  placeholder: 'Subpoint A: Because…\nSubpoint B: Also, because…',
                  modelAnswer: 'Subpoint A — The clinical definition of addiction requires physiological dependence and withdrawal symptoms. Social media use, however heavy, does not produce the physiological withdrawal that defines addiction. Teens who give up their phones for a week are uncomfortable and bored — they are not medically ill. The AFF is using the word "addictive" loosely in a way that doesn\'t match clinical science. Subpoint B — The 7-hour figure includes all phone use: texting, school apps, maps, music, and yes, social media. Lumping all phone activity together and then attributing it to social media inflates the statistic beyond what the evidence actually supports.'
                },
                {
                  label: 'THEREFORE — Draw your conclusion. How does this attack weaken the AFF case?',
                  placeholder: 'Therefore, we would argue that…',
                  modelAnswer: 'Therefore, we would argue that the Affirmative\'s "addiction" claim is exaggerated and not supported by clinical definitions. Their statistic overreaches by mixing all phone use into a social media argument. Without a genuine, clinically supported harm, this contention fails to prove the resolution, and it goes to the Negative.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 5.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-5-2',
        title: 'What Can You Attack?',
        steps: [
          {
            type: 'content',
            html: `
<h2>What Can You Attack?</h2>
<p>When you face an opponent's argument, you have three distinct targets. Every well-built argument has three parts — claim, warrant, and impact — and each one is vulnerable in a different way. Skilled debaters don't randomly attack whatever sounds easy; they <strong>identify the weakest link and hit it hard</strong>.</p>

<h3>The Three Targets</h3>

<div style="display:grid;gap:14px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);font-size:11px;letter-spacing:.1em;margin-bottom:8px;">TARGET 1 — THE CLAIM</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;line-height:1.6;">Ask: <strong>Is the claim overstated? Does it suffer from a logical fallacy?</strong></p>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">If the opponent states something as a universal truth that's only sometimes true, attack the overstatement. If the claim assumes what it's trying to prove (circular reasoning) or leaps from a small cause to a catastrophic effect (<span class="key-term" data-definition="A logical fallacy that assumes one event will inevitably lead to a chain of increasingly dire consequences — without proving each step in the chain. Example: 'If we allow cell phones in schools, students will be distracted, grades will fall, and our entire education system will collapse.'">slippery slope</span>), call it out.</p>
    <div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.15);border-radius:8px;padding:10px 14px;margin-top:10px;font-size:13px;color:var(--text-secondary);">
      <strong>Example claim attack:</strong> "The Affirmative claims banning cell phones will eliminate teen distraction. But that's an overstatement — distraction existed long before cell phones. Daydreaming, passing notes, and staring out windows are all forms of teen distraction with nothing to do with phones. The claim is too broad."
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);font-size:11px;letter-spacing:.1em;margin-bottom:8px;">TARGET 2 — THE WARRANT</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;line-height:1.6;">Ask: <strong>Does the evidence actually support the claim? Is the source credible? Is the reasoning logical?</strong></p>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">The warrant is the bridge between evidence and claim. Even if the evidence is real, it might not prove what they say it proves. Check: Is the source biased? Is the study outdated? Does the statistic measure what they claim? A warrant attack says: "Your evidence doesn't connect to your claim the way you think it does."</p>
    <div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.15);border-radius:8px;padding:10px 14px;margin-top:10px;font-size:13px;color:var(--text-secondary);">
      <strong>Example warrant attack:</strong> "The Affirmative cites a University of Alabama study from 2008. But that study is 17 years old — conducted before modern smartphones even existed. Technology, teen behavior, and safety features have changed dramatically. Drawing conclusions about today's teens from research that old doesn't hold."
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);font-size:11px;letter-spacing:.1em;margin-bottom:8px;">TARGET 3 — THE IMPACT</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;line-height:1.6;">Ask: <strong>Does the impact actually matter? Is it as significant as the opponent claims?</strong></p>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Even if the claim is true and the evidence supports it, you can argue that <span class="key-term" data-definition="Arguing that even if an argument is true, its real-world consequences are too minor, too speculative, or too limited in scope to matter to the resolution. You're not denying the fact — you're minimizing its significance.">the impact is not significant enough to matter</span>. Small effects, effects on tiny numbers of people, or effects that are already being solved are all weak impacts you can challenge.</p>
    <div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.15);border-radius:8px;padding:10px 14px;margin-top:10px;font-size:13px;color:var(--text-secondary);">
      <strong>Example impact attack:</strong> "Even if we grant that some teens are distracted by phones while walking, the wave of teen injuries the Affirmative describes doesn't show up in the data. The actual pedestrian injury rate for teens has been declining for a decade, even as phone use has skyrocketed. Their impact is speculative — not backed by real-world trends."
    </div>
  </div>
</div>

<h3>How to Prioritize: Find the Weakest Link</h3>
<p>You rarely have time to attack all three parts of every argument. The smart move is to find the one that's most obviously wrong and drive that nail all the way in. A quick mental checklist before you attack:</p>
<ul>
  <li>Is the claim a stretch or overstatement? → <strong>Attack the claim</strong></li>
  <li>Is the evidence old, biased, or measuring the wrong thing? → <strong>Attack the warrant</strong></li>
  <li>Is the real-world harm small or speculative? → <strong>Attack the impact</strong></li>
</ul>
<p>If all three are vulnerable, use the four-step refutation pattern and address them as subpoints in your Because step. But if time is short — always pick the weakest link. A devastating attack on one part beats three shallow attacks on all three parts.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'The Affirmative presents this argument:\n\n"Our second contention is that homework causes teen sleep deprivation. According to the National Sleep Foundation, only 15% of teens get the recommended 8–10 hours of sleep per night. Research from Stanford University found that teens who do more than 3.5 hours of homework nightly report significantly higher stress and sleep disruption. By burdening teens with excessive homework, our school system is creating a mental health crisis that will follow this generation into adulthood."\n\nWhich part of this argument is the most accessible and effective to attack?',
              options: [
                {
                  text: 'Attack the claim — "homework causes sleep deprivation" overstates the connection because many other factors (screens, early school times, jobs, social media) also cause teen sleep loss.',
                  feedback: 'Strong choice. The claim overstates the causal link between homework specifically and sleep deprivation. There are many competing causes of teen sleep loss, and the AFF hasn\'t proven that homework is the primary driver. You can make this argument from general knowledge — you don\'t need to know the specific details of either study cited. It\'s the most accessible attack and the hardest for the AFF to deny outright.',
                  isOptimal: true
                },
                {
                  text: 'Attack the warrant — the Stanford study only applied to students in high-achieving, high-income school districts, so it doesn\'t generalize to all teens.',
                  feedback: 'This can work as a secondary attack, but it requires knowing a specific limitation of the Stanford study\'s methodology that most debaters won\'t have. If you don\'t know those details, you can\'t make this argument credibly. The claim attack (Option A) is more reliable because you can make it from general knowledge about the many causes of teen sleep loss — no study-specific knowledge needed.',
                  isOptimal: false
                },
                {
                  text: 'Attack the impact — calling reduced sleep a "mental health crisis" is a dramatic exaggeration of normal adolescent stress.',
                  feedback: 'Weaker target here. Teen sleep deprivation is genuinely well-documented and taken seriously by medical professionals — the "crisis" framing is harder to dismiss. Judges are likely to have sympathy for the real-world consequences of chronic sleep loss. You\'d be fighting uphill. Better to attack the causal claim that homework specifically is to blame, rather than disputing the seriousness of sleep deprivation itself.',
                  isOptimal: false
                },
                {
                  text: 'Don\'t attack this argument — the statistics are from credible sources and the connection to mental health is well established.',
                  feedback: 'Never concede an AFF argument without a fight. Even strong arguments have vulnerabilities. Here, the biggest weakness is the causal claim — that homework (specifically) causes sleep deprivation, as opposed to screens, social media, early school times, or jobs. Find the weakest link and hit it with the four-step refutation.',
                  isOptimal: false
                }
              ]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 6 — Flowing & Notetaking
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-6',
    title: 'Flowing & Notetaking',
    icon: '📝',
    lessons: [

      /* ── Lesson 6.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-6-1',
        title: 'Setting Up Your Flow Sheet',
        steps: [
          {
            type: 'content',
            html: `
<h2>Setting Up Your Flow Sheet</h2>
<p><span class="key-term" data-definition="The specialized note-taking method used in debate. Arguments are recorded in columns across horizontal paper — one column per speech — and responses are written directly across from the arguments they're responding to. You can trace any argument horizontally across the whole round.">Flowing</span> is how you track every argument across all six speeches. Without it, you can't respond to what was dropped, you can't crystallize voting issues, and you can't give a strong rebuttal. A good flow lets you reconstruct the entire round from one sheet of paper.</p>

<h3>Step 1: Get the Right Paper</h3>
<p>Regular 8×11 paper isn't enough. Get <strong>legal-sized paper</strong> (8.5 × 14 inches) — it's longer, giving you more horizontal space for your columns. Turn it <strong>sideways (horizontally)</strong> so the long edge runs left to right. Now you have a wide canvas to spread six speeches across.</p>

<h3>Step 2: Divide into 6 Columns — One Per Speech</h3>
<p>A parliamentary debate has 6 speeches. Draw lines to divide your paper into <strong>6 equal vertical columns</strong> and label each one at the top:</p>

<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden;margin:16px 0;">
  <div style="display:grid;grid-template-columns:repeat(6,1fr);border-bottom:2px solid rgba(212,168,67,.3);">
    <div style="padding:10px 8px;text-align:center;border-right:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-300);">1AC</div>
    <div style="padding:10px 8px;text-align:center;border-right:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-300);">1NC</div>
    <div style="padding:10px 8px;text-align:center;border-right:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-300);">2AC</div>
    <div style="padding:10px 8px;text-align:center;border-right:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-300);">2NC</div>
    <div style="padding:10px 8px;text-align:center;border-right:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-300);">NR</div>
    <div style="padding:10px 8px;text-align:center;font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-300);">AR</div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(6,1fr);min-height:70px;">
    <div style="border-right:1px solid rgba(255,255,255,.08);padding:8px 6px;font-size:11px;color:var(--text-muted);">AFF case here</div>
    <div style="border-right:1px solid rgba(255,255,255,.08);padding:8px 6px;font-size:11px;color:var(--text-muted);">NEG responses + NEG case (back side)</div>
    <div style="border-right:1px solid rgba(255,255,255,.08);padding:8px 6px;"></div>
    <div style="border-right:1px solid rgba(255,255,255,.08);padding:8px 6px;"></div>
    <div style="border-right:1px solid rgba(255,255,255,.08);padding:8px 6px;"></div>
    <div style="padding:8px 6px;"></div>
  </div>
</div>

<p><strong>1AC</strong> = First Affirmative Constructive &nbsp;·&nbsp; <strong>1NC</strong> = First Negative Constructive &nbsp;·&nbsp; <strong>2AC</strong> = Second Affirmative Constructive &nbsp;·&nbsp; <strong>2NC</strong> = Second Negative Constructive &nbsp;·&nbsp; <strong>NR</strong> = Negative Rebuttal &nbsp;·&nbsp; <strong>AR</strong> = Affirmative Rebuttal</p>

<h3>Step 3: Use BOTH Sides of the Paper</h3>
<p>Two separate flows on one sheet of paper — front and back:</p>
<ul>
  <li><strong>Front side:</strong> Track the <em>Affirmative case</em> — the AFF's own contentions and every response made to them across all 6 speeches.</li>
  <li><strong>Back side:</strong> Track the <em>Negative case</em> — the NEG's own contentions and every response made to them.</li>
</ul>
<p>When the 1NC presents the Negative's own arguments, flip the paper and write them on the back, starting in the second column. When the 2AC attacks those NEG arguments, flip back to that side and write the response across from the contention it's attacking.</p>

<h3>Step 4: Three Golden Rules for Every Column</h3>
<div style="display:grid;gap:10px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">1.</span>
    <div><strong>Abbreviate everything.</strong> You are writing while someone speaks at full speed. Develop shorthands now: "b/c" for because, "w/" for with, "↑" for increase, "↓" for decrease, "→" for leads to, "≠" for doesn't prove or disproves, "gov" for government, "res" for resolution.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">2.</span>
    <div><strong>Leave space between each argument.</strong> Don't cram everything together. Every contention needs room below it for responses in the next column. If you run out of vertical space, you'll have nowhere to write the 2NC's response to the 1AC's third contention.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">3.</span>
    <div><strong>Write responses directly across from what they respond to.</strong> If the 1NC attacks AFF Contention 2, write that attack in the 1NC column at the same vertical height as Contention 2. This is what makes flowing powerful — you can trace an argument horizontally across the entire debate.</div>
  </div>
</div>

<h3>Step 5: Write the Resolution at the Top</h3>
<p>Before you start, write the <strong>exact wording of the resolution</strong> at the very top of the page. This keeps you anchored to what's actually being debated and helps you evaluate arguments against the right standard throughout the round.</p>
<p>Your flow will be messy and personal — but it should be legible enough that your partner can read it under pressure. Your partner may need to consult your notes during their own speech.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'dragSort',
            exerciseConfig: {
              instruction: 'A parliamentary debate flow sheet has 6 columns, one per speech, arranged left to right in chronological order. Sort the 6 speech labels into the correct order — column 1 (leftmost) to column 6 (rightmost).',
              items: [
                'NR — Negative Rebuttal',
                '2AC — Second Affirmative Constructive',
                '1AC — First Affirmative Constructive',
                'AR — Affirmative Rebuttal',
                '1NC — First Negative Constructive',
                '2NC — Second Negative Constructive'
              ],
              correctOrder: [2, 4, 1, 5, 0, 3]
            }
          }
        ]
      },

      /* ── Lesson 6.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-6-2',
        title: 'Flowing During a Round',
        steps: [
          {
            type: 'content',
            html: `
<h2>Flowing During a Round</h2>
<p>You know how to set up a flow. Now actually use it in real time while someone talks at full speed.</p>

<h3>The First Column: Flowing the 1AC</h3>
<p>Write the AFF case as it's presented. If you <em>are</em> on AFF, fill this column in during prep time — it saves frantic writing during the speech. For each contention, capture: claim, key evidence, source, subpoint labels (A, B…). No full sentences — just enough to reconstruct the argument.</p>

<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:12px 0;">
  <p style="margin:0 0 8px;font-weight:700;color:var(--gold-300);font-size:13px;">Example — Flowing the 1AC's Contention 1 (cell phones):</p>
  <p style="margin:0;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);line-height:2.2;">C1: cell phones → risky behav in teens<br/>A. walking+talking: 45% ↑ acc risk (U.Alabama '08)<br/>B. cyberbullying: 1/3 teens victimized (KidsHealth)<br/>W: cell phones = expose teens to risk → hurts them<br/>I: ban phones → ↓ deaths, injuries, esteem probs</p>
</div>

<h3>The Second Column: Flowing the 1NC's Responses</h3>
<p>In the second column, write the NEG's responses to the AFF case — and write each response <strong>directly across from the contention it responds to</strong>. If the 1NC attacks Contention 1 first, that response goes in column 2 at the same vertical height as Contention 1 in column 1.</p>
<p>If the 1NC <em>skips</em> a contention and doesn't respond to it, leave that row blank in column 2. That blank space is a dropped argument — one of the most important things on your flow sheet.</p>

<h3>Marking Dropped Arguments</h3>
<p>A <span class="key-term" data-definition="When a team fails to respond to an argument made by the opposing team. In debate, a dropped argument is generally considered conceded — the dropping team is treated as if they agreed the argument is true.">dropped argument</span> is powerful. When you notice one, mark it clearly — draw a circle in the empty space or write <strong>DROP</strong> in the blank cell. Then call it out in your speech:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:12px 0;font-style:italic;color:var(--text-secondary);">
"Notice that the Negative dropped our second contention entirely — the cyberbullying evidence from KidsHealth showing 1 in 3 teens victimized. The Negative offered no response. That argument stands uncontested, and the judge should treat it as conceded."
</div>

<h3>Columns 3–4: Middle Speeches</h3>
<p>Same pattern — write each response directly across from the argument it's responding to. You should be able to trace any argument horizontally across all four columns and see exactly how it evolved.</p>

<h3>Columns 5–6: Rebuttals — Voting Issues</h3>
<p>Rebuttal columns are shorter. Teams identify 2–3 <span class="key-term" data-definition="The key arguments each team identifies as the most important reasons the judge should vote for them.">voting issues</span> — the arguments they've clearly won that matter most. Capture which arguments they're claiming and why those arguments are decisive.</p>

<h3>Shorthand Symbols</h3>
<p>Build your own system — anything that lets you write faster than full words. Common ones:</p>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">↑ = increase / more / better</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">↓ = decrease / less / worse</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">→ = leads to / causes</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">≠ = does not / disproves</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">w/ = with &nbsp;·&nbsp; w/o = without</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">b/c = because &nbsp;·&nbsp; ∴ = therefore</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">C1, C2 = Contention 1, 2</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">DROP = dropped argument</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">X = cross-apply</div>
  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-secondary);">VI = voting issue</div>
</div>

<p><strong>The test:</strong> can your partner pick up your flow mid-speech and know exactly where you are? If yes — you're doing it right.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Practice flowing. Read each speech excerpt below and write abbreviated flow notes as you would on a real flow sheet, using shorthand symbols from the lesson.',
              fields: [
                {
                  label: 'Flow this in column 1 (1AC) — AFF Contention 1:\n\n"Our first contention is that social media harms teen mental health. Subpoint A — According to the American Psychological Association in 2023, teens who spend more than three hours daily on social media are twice as likely to experience anxiety and depression. Subpoint B — A 2022 Surgeon General advisory found that social media causes body image issues in 46% of teenage girls. By exposing teens to a constant stream of filtered images, social media directly causes depression and anxiety. If we fail to act, this generation will face a mental health crisis unlike any we have seen before."',
                  placeholder: 'C1: …\nA. …\nB. …\nW: …\nI: …',
                  modelAnswer: 'C1: soc media → harm teen MH\nA. APA \'23: 3+hrs/day → 2x ↑ anxiety+depression\nB. Surg Gen \'22: soc media → body image issues, 46% teen girls\nW: soc media = expose teens to filtered images → depression/anxiety\nI: no action → MH crisis this gen'
                },
                {
                  label: 'Flow this in column 2 (1NC) — NEG response to AFF Contention 1:\n\n"The Affirmative said social media causes teen mental health problems. But we argue the correlation doesn\'t prove causation. Because teens who are already anxious or depressed tend to use social media more — the mental health problem leads to the heavy use, not the other way around. Therefore, restricting social media doesn\'t solve the underlying mental health crisis — it just removes one outlet while the anxiety remains."',
                  placeholder: 'They said: …\nBut: …\nB/c: …\n∴: …',
                  modelAnswer: 'AFF: soc media → MH probs\nBUT: correlation ≠ causation\nB/C: anxious teens → use soc media MORE (reverse causation)\n∴: restrict soc media ≠ solve MH crisis — anxiety stays'
                },
                {
                  label: 'AFF Contention 2 was never addressed by the 1NC. How do you mark a dropped argument on the flow, and what do you say about it in your next speech?',
                  placeholder: 'Mark it: …\nSay out loud: …',
                  modelAnswer: 'Mark it: Write DROP (or draw a circle) in the 1NC column directly across from AFF Contention 2 — at the same vertical height it appears in the 1AC column.\nSay out loud: "Notice that the Negative dropped our second contention entirely — the Surgeon General\'s 2022 advisory finding that social media causes body image issues in 46% of teenage girls. The Negative offered no response. That argument stands uncontested. The judge should treat it as conceded, and it goes to the Affirmation."'
                },
                {
                  label: 'Flow these voting issues from the Negative Rebuttal:\n\n"The two voting issues in this debate are: first, causation — the Affirmative has not proven that social media causes mental health problems, only that they correlate; and second, solvency — even if social media is a contributing factor, restricting it doesn\'t remove the underlying anxiety."',
                  placeholder: 'NR — Voting Issues:\nVI 1: …\nVI 2: …',
                  modelAnswer: 'NR — Voting Issues:\nVI 1: CAUSATION — AFF = correlation only, ≠ prove soc media causes MH probs\nVI 2: SOLVENCY — restrict soc media ≠ remove anxiety, harm stays'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 7 — Points of Information & Points of Order
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-7',
    title: 'Points of Information & Order',
    icon: '✋',
    lessons: [

      /* ── Lesson 7.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-7-1',
        title: 'Points of Information',
        steps: [
          {
            type: 'content',
            html: `
<h2>Points of Information (POIs)</h2>
<p>A <span class="key-term" data-definition="A short interruption — a question or statement — raised by the opposing team during a constructive speech. The speaker decides whether to accept or decline. POIs are limited to 15–20 seconds and can only be raised between the 1:01 mark and the last minute of each constructive speech.">Point of Information (POI)</span> is a short interruption you raise during the opponent's constructive speech. Done right, a POI can expose a weakness, lock them into a position, or disrupt their flow. Done poorly, it just annoys the judge.</p>

<h3>When Can You Rise?</h3>
<p>POIs are only allowed in the <strong>four constructive speeches</strong> — not rebuttals. You can only rise <strong>after the first minute and before the last minute</strong> of each speech. Keep it to <strong>15–20 seconds</strong>. You are not giving a speech — state your point and sit down.</p>

<h3>Three Strategic Purposes</h3>
<p>Every POI you raise should have a clear reason behind it. The three purposes from the source material are:</p>

<div style="display:grid;gap:12px;margin:16px 0;">
  <div style="background:rgba(96,165,250,.08);border-left:4px solid #60a5fa;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#93c5fd;font-size:12px;margin-bottom:6px;">CLARIFY</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Ask questions to ensure you understand what the other team is saying. You cannot respond to arguments you don't have on your flow. More critically: you don't want to lose a debate by <span class="key-term" data-definition="Attacking a weakened or distorted version of your opponent's argument rather than their actual argument. Responding to a strawman you misunderstood is worse than not responding at all.">responding to a strawman</span> — an argument you got wrong because you misunderstood it.</p>
    <div style="background:rgba(96,165,250,.07);border-radius:8px;padding:10px 14px;margin-top:10px;font-style:italic;font-size:13px;color:var(--text-secondary);">"Point of information — when you say 'alternate energy sources,' does your team include nuclear power in that definition?"</div>
  </div>

  <div style="background:rgba(167,139,250,.08);border-left:4px solid #a78bfa;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#c4b5fd;font-size:12px;margin-bottom:6px;">COMMIT</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Ask questions that make the opposing team commit to a specific position or fact. This serves two purposes: it prevents them from being vague or shifting their argument later in the debate, and it creates a link you can use in your own case. Once they say it on the record, you can hold them to it.</p>
    <div style="background:rgba(167,139,250,.07);border-radius:8px;padding:10px 14px;margin-top:10px;font-style:italic;font-size:13px;color:var(--text-secondary);">"Point of information — is your team claiming that solar energy alone is sufficient to fully replace oil, or only that it can supplement it?"</div>
  </div>

  <div style="background:rgba(74,222,128,.08);border-left:4px solid #4ade80;padding:14px 20px;border-radius:0 12px 12px 0;">
    <div style="font-family:var(--font-mono);font-weight:800;color:#a7f3d0;font-size:12px;margin-bottom:6px;">CONTEST</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Ask questions that directly challenge a point the speaker is making — as a preempt to your own case or to set up a specific argument. You can even lay a trap: ask a commit question now that you'll use to spring an argument in your next speech. In conjunction with a commit question, you may create a contradiction you can exploit.</p>
    <div style="background:rgba(74,222,128,.07);border-radius:8px;padding:10px 14px;margin-top:10px;font-style:italic;font-size:13px;color:var(--text-secondary);">"Point of information — can you name a single country that has successfully replaced fossil fuels with renewable energy at the national level within a 10-year timeline?"</div>
  </div>
</div>

<h3>Who Should Rise?</h3>
<p><strong>The person speaking next should NOT be the one asking POIs</strong> — they need to be mentally preparing their speech. The other team member rises. And don't rise randomly just to seem engaged — every POI should have a clear purpose. A bad question gives the speaker an easy win.</p>

<h3>Accepting and Declining</h3>
<p>As the speaker, you control when you accept. Aim to take at least one POI per speech and raise at least one per speech — zero on either end looks like you're not engaged. Never accept a POI in the middle of a critical argument.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'The First Affirmative speaker says: "Our first contention is that cell phones lead to risky behaviors in teens. Studies show teens talking on cell phones while walking are 45% more likely to have a close call or accident. Furthermore, cell phones are used for cyberbullying — 1 in 3 teens have been victimized. This risky behavior is becoming a growing epidemic in our schools."\n\nYou are on the Negative team. Write one POI for each of the three strategic purposes below.',
              fields: [
                {
                  label: 'CLARIFY POI — Ask a question to make sure you understand exactly what they\'re claiming (something genuinely unclear that you need for your flow)',
                  placeholder: '"Point of information — …"',
                  modelAnswer: '"Point of information — when you say \'risky behavior,\' does your team consider all teen activities involving some risk, or are you specifically claiming that cell phone-related risks are categorically different from other risks teens already face?"'
                },
                {
                  label: 'COMMIT POI — Ask a question that locks the AFF into a specific position they can\'t back away from later',
                  placeholder: '"Point of information — …"',
                  modelAnswer: '"Point of information — is your team\'s position that banning cell phones entirely would eliminate cyberbullying, or only that it would reduce it? We want to know exactly what you\'re claiming the ban would achieve."'
                },
                {
                  label: 'CONTEST POI — Ask a question that directly challenges their argument or plants a seed for an argument you\'re about to make',
                  placeholder: '"Point of information — …"',
                  modelAnswer: '"Point of information — isn\'t it true that teens face equally significant risks from driving, organized sports, and internet use — none of which your team is proposing to ban? What makes cell phones uniquely different from those accepted risks?"'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 7.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-7-2',
        title: 'Handling POIs When Speaking',
        steps: [
          {
            type: 'content',
            html: `
<h2>Handling POIs When You're the Speaker</h2>
<p>When someone rises to offer a POI during your speech, you're briefly in control of the room. How you handle that moment tells the judge a lot about your poise and preparation. The cardinal rules are simple: stay in control, answer efficiently, and don't let a 15-second interruption derail a 7-minute speech.</p>

<h3>The Four Rules for Handling POIs</h3>

<div style="display:grid;gap:12px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 20px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">1.</span>
    <div>
      <strong>Limit how many POIs you take.</strong> You can set the terms: <em>"I'll take your first of three points."</em> This signals confidence, controls the pace of your speech, and prevents the opposing team from interrupting every 30 seconds. You decide when you're done taking points — not them.
    </div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 20px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">2.</span>
    <div>
      <strong>Never stop mid-sentence or mid-argument to answer.</strong> If someone rises while you're in the middle of a critical point, you can wave them off with: <em>"I'll take your point at the end of this argument."</em> Then finish what you were saying, then accept the POI. This keeps the judge's attention on your argument — not on the interruption.
    </div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 20px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">3.</span>
    <div>
      <strong>Answer in the least amount of words necessary.</strong> A POI should get a concise response — not a 90-second sub-speech. Answer cleanly and move on. Don't be rude, but don't let follow-up questions drag you down either. Limit follow-ups: one answer, done.
    </div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 20px;display:flex;gap:14px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">4.</span>
    <div>
      <strong>Don't do your opponent's work for them.</strong> If you think the question is irrelevant or off-topic, say so: <em>"I find that point irrelevant to the resolution."</em> If they think it's worthwhile, let them spend their own speech time making those arguments. By engaging with an irrelevant point, you elevate it and give it credibility it doesn't deserve.
    </div>
  </div>
</div>

<h3>Recognizing Abusive POIs</h3>
<p>Not every POI is fair. Watch out for:</p>
<ul>
  <li><strong>The long-winded POI:</strong> Someone who starts talking and won't stop after 15–20 seconds. You can simply say "Thank you" and continue speaking — you don't owe them more time.</li>
  <li><strong>The repeat question:</strong> They asked it, you answered it, they stand again asking the same thing. Decline: "I've already answered that."</li>
  <li><strong>The irrelevant question:</strong> A question that has nothing to do with what you just said, designed only to break your rhythm. Decline it and say why: "That has no bearing on the argument I was just making."</li>
</ul>

<h3>The Balance: Take at Least One, Give at Least One</h3>
<p>The source material recommends that every debater aim to <strong>accept at least one POI per speech and raise at least one per speech</strong>. Accepting zero POIs in your speech looks like you're afraid to engage. Raising zero POIs during the other team's speeches signals you're not paying attention. Engagement is part of your overall performance evaluation — the judge is watching both.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'You are delivering the First Affirmative Constructive speech on the resolution "Cell phones are bad for teens." You\'ve just finished Subpoint A of Contention 1 (the pedestrian accident statistic) and are mid-sentence introducing Subpoint B (cyberbullying), when the Negative team member rises and says:\n\n"Point of information — isn\'t your statistic from 2008? That\'s almost 20 years old. Doesn\'t that completely invalidate your evidence?"\n\nWhat is the best way to handle this?',
              options: [
                {
                  text: 'Stop immediately and defend the statistic at length — spend 60 seconds explaining why older studies can still be valid.',
                  feedback: 'Don\'t let a 15-second interruption turn into a 60-second detour. By spending a full minute defending the date of a statistic, you\'ve (1) burned your speech time, (2) interrupted your own argument flow, and (3) signaled to the judge that the date issue is a major vulnerability. A brief answer and move on is far more effective.',
                  isOptimal: false
                },
                {
                  text: 'Give a brief, confident response — "The study\'s core finding on distraction and accident risk has been replicated in more recent research" — then immediately return to Subpoint B.',
                  feedback: 'Exactly right. This response does three things efficiently: it acknowledges the point, provides a concise counter, and keeps your speech moving. The judge sees you as confident and in control. You haven\'t let the POI derail your argument, and you\'ve answered without giving the issue more weight than it deserves.',
                  isOptimal: true
                },
                {
                  text: 'Decline the POI entirely — say "I\'m not taking that point" and continue speaking.',
                  feedback: 'Declining is sometimes the right move, but you shouldn\'t decline every POI. The source material recommends accepting at least one POI per speech. Declining a question about your specific evidence when you have a ready answer can look evasive to the judge. In this case, a brief confident answer is better than a flat decline.',
                  isOptimal: false
                },
                {
                  text: 'Say "I\'ll take your point at the end of this argument" — finish your Subpoint B sentence, then address the date question.',
                  feedback: 'Also a solid approach — finishing the sentence first before accepting keeps your argument clean. The one risk is that if your answer is very brief, the transition back to your speech can feel awkward. But this is a legitimate strategy from the source material, and it\'s defensible. However, Option B is slightly stronger because it handles the POI mid-stream with confidence while immediately returning to the speech.',
                  isOptimal: false
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 7.3 ─────────────────────────────────────────── */
      {
        id: 'lesson-7-3',
        title: 'Points of Order',
        steps: [
          {
            type: 'content',
            html: `
<h2>Points of Order</h2>
<p>A <span class="key-term" data-definition="An interruption raised during a rebuttal speech challenging the opposing team for introducing a brand-new argument. Unlike a POI, a Point of Order pauses time — the judge hears both sides and decides whether to uphold or deny the challenge.">Point of Order</span> is a formal challenge you raise when the opposing team introduces a brand-new argument during their rebuttal. No new arguments are allowed in rebuttals. When you raise it, <strong>time pauses</strong> — the judge hears both sides and rules to uphold or deny.</p>

<h3>When Can You Raise One?</h3>
<p>Only during the <strong>Negative Rebuttal or Affirmative Rebuttal</strong>. If an argument was never mentioned in any of the four constructive speeches, it's new — and that's grounds for a Point of Order.</p>

<h3>What Qualifies — and What Doesn't</h3>
<div style="display:grid;gap:12px;margin:16px 0;">
  <div style="background:rgba(74,222,128,.07);border-left:3px solid #4ade80;padding:14px 18px;border-radius:0 10px 10px 0;">
    <strong style="color:#a7f3d0;">Legitimate — You CAN raise a Point of Order for:</strong><br/>
    <span style="color:var(--text-secondary);font-size:14px;">Any argument in the rebuttal that was never mentioned in the 1AC, 1NC, 2AC, or 2NC. New claims, new evidence on a completely new issue, new contentions — if it wasn't on the flow from the constructive phase, it's new.</span>
  </div>
  <div style="background:rgba(248,113,113,.07);border-left:3px solid #f87171;padding:14px 18px;border-radius:0 10px 10px 0;">
    <strong style="color:#fca5a5;">Not a Point of Order — Extensions and Analysis:</strong><br/>
    <span style="color:var(--text-secondary);font-size:14px;">Adding new evidence or analysis to an argument that was already introduced in constructive speeches is called extending — it's allowed and expected. The test is: was the core argument already on the flow? If yes, they're extending. If the argument itself is completely new, that's a Point of Order.</span>
  </div>
</div>

<h3>Don't Be Trigger-Happy</h3>
<p>Raising a Point of Order every few sentences looks nitpicky and annoys judges. Ask yourself: is this argument genuinely new <em>and</em> does it significantly change the round? If yes to both — raise it. If borderline — deal with it in your speech time instead.</p>

<h3>How to Raise a Point of Order — Four Steps</h3>
<p>When you decide to raise one, keep it short and focused. Going off on a tangent dilutes the power of the point. Here's the structure:</p>
<div style="display:grid;gap:8px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">1.</span>
    <div><strong>Identify the argument.</strong> State exactly what they just said that you believe is new.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">2.</span>
    <div><strong>State its impact.</strong> Is this a game-changer? Why does it matter to the outcome of the debate?</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">3.</span>
    <div><strong>Explain why it's unfair.</strong> Typically: because this argument is new, there is no opportunity to adequately respond to it.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">4.</span>
    <div><strong>Keep it short.</strong> A Point of Order is not your speech. State it, let the judge rule, and move on.</div>
  </div>
</div>

<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:16px 0;font-style:italic;color:var(--text-secondary);">
<strong style="color:var(--gold-300);font-style:normal;">Example — How to raise a Point of Order:</strong><br/>
"Point of Order — the Affirmative just argued in their rebuttal that the plan would also reduce carbon emissions. This was never mentioned in any of the four constructive speeches — it did not appear in the 1AC, and the AFF did not bring it up when attacking our contentions. This is a brand-new argument. Because we are now in rebuttals, we have no opportunity to respond to it. We ask the judge to disallow this argument."
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'dragSort',
            exerciseConfig: {
              instruction: 'The debate is on the resolution "The USFG should significantly increase the use of alternate energy sources." The NEG team argued in the 1NC that the plan costs too much, and there is no proven harm from current energy sources. The AFF extended their contentions in the 2AC.\n\nNow in the Negative Rebuttal, the first Neg speaker makes the following statements. Sort them into two groups: statements 1–3 should be EXTENSIONS (acceptable — extending previously made arguments) and statements 4–6 should be NEW ARGUMENTS (not acceptable — grounds for a Point of Order).\n\nThey all sound confident. Ask one question of each: can I trace this back to something already said in a constructive speech?',
              // No labels, and the new arguments no longer announce themselves.
              // Phrases like "we haven't raised this before" gave the answer away
              // three times over, and no opponent would ever really say them. The
              // skill being tested is noticing an argument has no root in a
              // constructive speech, so these have to sound perfectly ordinary.
              items: [
                'The Affirmative\'s response to our cost argument cited job creation from Solyndra-type companies — but as we showed in the 2NC, Solyndra went bankrupt. That evidence still stands.',
                'Adopting this plan would put the United States in violation of its treaty obligations under the WTO, and the Affirmative has no answer for that.',
                'On our second contention — no proven harm from current energy — the Affirmative pointed to gas price hikes. But we responded that energy price volatility isn\'t unique to oil, and the Affirmative provided no data to contradict that.',
                'The scientific consensus on whether solar is ready for large-scale adoption is genuinely in dispute among climate scientists, which undercuts the entire Affirmative case.',
                'Our first contention is still the strongest argument on the flow. The Affirmative never provided a specific dollar figure to rebut our cost analysis — they only said it \'creates jobs,\' which we already addressed.',
                'This plan hands energy infrastructure to private contractors, creating a national security vulnerability the judge should weigh heavily.'
              ],
              correctOrder: [0, 2, 4, 1, 3, 5]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 8 — Rebuttals
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-8',
    title: 'Rebuttals',
    icon: '🏆',
    lessons: [

      /* ── Lesson 8.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-8-1',
        title: 'What Makes a Great Rebuttal',
        steps: [
          {
            type: 'content',
            html: `
<h2>What Makes a Great Rebuttal</h2>
<p>The rebuttal speeches are where debates get decided. Your job is simple: give the judge <strong>closure</strong>. Not a replay of the last 20 minutes — closure. Tell the judge what they should remember, what matters most, and why your side wins.</p>

<h3>The Iron Rules</h3>
<ul>
  <li><strong>No new arguments — ever.</strong> Brand new arguments in rebuttals are grounds for a Point of Order. If you forgot to say something in constructive speeches, you can't say it now.</li>
  <li><strong>Don't try to cover everything.</strong> You can't re-argue every point from the constructive phase in 3 minutes (novice). Pick your fights.</li>
</ul>

<h3>Issue Selection — The Heart of a Great Rebuttal</h3>
<p><strong>You don't need to win every argument to win the round. You need to win the most significant ones.</strong> A great rebuttal has <strong>2–3 voting issues</strong> — the arguments your team clearly won that matter most. Pick arguments where:</p>
<ul>
  <li>Your evidence was clearly stronger</li>
  <li>The opponent dropped it (never responded)</li>
  <li>It directly determines whether the resolution is true or false</li>
  <li>It connects to the judging criteria set at the start</li>
</ul>

<h3>Round Vision</h3>
<p><span class="key-term" data-definition="The ability to see the entire debate round as it unfolds and understand where you need to take it by the end. Round vision means constantly thinking about which arguments you're winning, which you're losing, and which ones need to be in a strong position by the time rebuttals arrive.">Round vision</span> is the ability to track the debate as it happens and know which arguments to feature in your rebuttal before you stand up. Think of it like chess — you start with a strong case and make moves to position your key issues for the endgame. You're never surprised by what's on the flow. A great rebuttal starts during the constructive speeches, not when you stand up to give it. Flow carefully — you can't crystallize arguments you didn't capture.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'Resolution: "The USFG should significantly increase the use of alternate energy sources." You are the First Negative speaker preparing your 3-minute Negative Rebuttal. Here is the state of the round:\n\n• NEG Contention 1 (cost too high): You extended with the Solyndra bankruptcy example. AFF said it creates jobs but didn\'t address Solyndra specifically. This argument is STRONG for the NEG.\n\n• NEG Contention 2 (no proven harm from oil dependence): AFF said gas prices have risen. You countered that volatility affects all energy sources. Both sides responded. This argument is CONTESTED — judge could go either way.\n\n• AFF Contention 1 (oil dependence): AFF extended it, NEG attacked it. Argument is CONTESTED.\n\n• AFF Contention 2 (creates jobs): NEG attacked in both 1NC and 2NC with Solyndra. AFF never specifically responded to Solyndra. This argument is STRONG for the NEG.\n\n• AFF Contention 3 (environmental benefits of renewables): The 1NC NEVER ATTACKED THIS. AFF pointed out the drop. This argument goes to the AFF — acknowledge the loss.\n\nWhich voting issues should you focus on in your 3-minute Negative Rebuttal?',
              options: [
                {
                  text: 'Cover all 5 arguments equally — you need to address everything to show the judge you\'re still competing on all fronts.',
                  feedback: 'This approach will produce a rushed, shallow rebuttal. In 4 minutes, giving equal time to 5 arguments means less than a minute per point. The source material says: a good rebuttal has 2–4 voting issues. Spreading too thin means none of your arguments land with force. The judge will remember a clear, well-developed argument better than five rushed ones.',
                  isOptimal: false
                },
                {
                  text: 'Focus your two voting issues on: (1) the cost/Solyndra argument — where you have specific extended evidence the AFF never addressed; and (2) AFF\'s job creation contention — where the same Solyndra evidence destroys their strongest claim. Concede the environmental drop but minimize it.',
                  feedback: 'This is issue selection done right. You\'re focusing on the two arguments where you have the clearest wins — and notably, one piece of evidence (Solyndra) does double duty against both voting issues. You\'re also doing the smart thing by acknowledging the environmental drop rather than ignoring it, which shows the judge you\'re honest and in control of the round. This is round vision in action.',
                  isOptimal: true
                },
                {
                  text: 'Focus entirely on AFF Contention 3 (environmental) and try to respond to it — the judge already knows you dropped it and you need to fix that.',
                  feedback: 'This is a Point of Order trap. Responding to AFF Contention 3 for the first time in your rebuttal is introducing a new response to an argument you never attacked — that\'s a new argument in a rebuttal, which is forbidden and grounds for a Point of Order from the AFF. You cannot retroactively fix a dropped argument in your rebuttal speech. Concede it briefly and spend your time on arguments you actually won.',
                  isOptimal: false
                },
                {
                  text: 'Focus only on the contested arguments (NEG Contention 2 and AFF Contention 1) since those are the ones the judge is undecided on.',
                  feedback: 'Focusing only on contested arguments and ignoring your clear wins is backwards strategy. Your strongest voting issue is NEG Contention 1 / AFF Contention 2 — the Solyndra argument, which the AFF never addressed. Dropping a clear win to fight harder on contested ground is poor issue selection. Lead with your strongest arguments; use any remaining time on contested ones.',
                  isOptimal: false
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 8.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-8-2',
        title: 'Negative Rebuttal (3 min)',
        steps: [
          {
            type: 'content',
            html: `
<h2>The Negative Rebuttal (NR)</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 3 minutes</strong> · JV/Varsity: 4 minutes
</div>

<p>The Negative Rebuttal is given by the First Negative speaker — same person as the 1NC. You speak first in the rebuttal phase. No new arguments. Make every second count.</p>

<h3>Your Strategic Position</h3>
<p>You speak before the AFF Rebuttal, which means the Affirmative will have the last word. Set up your voting issues clearly — because you won't get to respond to the AFF Rebuttal afterward. Think ahead: <strong>what do you want the judge thinking about after BOTH rebuttals are done?</strong></p>

<h3>Structure of the Negative Rebuttal</h3>

<p><strong>Step 1: Frame the Round for the Judge</strong></p>
<p>Open with a clear, big-picture statement of what this debate has really been about. Crystallize the central clash in one or two sentences:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"This debate comes down to one question: can the Affirmative show that the benefits of switching to alternate energy outweigh the massive, immediate economic costs? We have shown they cannot — and here's why."
</div>

<p><strong>Step 2: Call Out Drops</strong></p>
<p>Before going into your voting issues, explicitly identify any AFF arguments that were dropped by the AFF themselves. If the AFF failed to extend one of their own contentions in the 2AC, call it out now:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Notice that in their last speech, the Affirmative dropped their second contention on job creation entirely — they offered no defense of it. That argument is uncontested and conceded to the Negative."
</div>

<p><strong>Step 3: Your 2–3 Voting Issues</strong></p>
<p>State each voting issue clearly, explain the argument, explain why you've won it, and explain why it's decisive to the resolution. This is the heart of your rebuttal. Be specific — don't just say "we won the cost argument." Tell the judge exactly which evidence was extended, why the AFF didn't address it, and what that means for the resolution:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Voting Issue 1: Alternate energy is economically unsustainable. Our Solyndra example — Obama poured billions into that company and it went bankrupt, taking all the jobs with it — was never responded to by the Affirmative in either of their speeches. That example stands as concrete proof that the job creation benefit the AFF claims is not durable. The Affirmative cannot show net benefits when their own best economic example collapsed."
</div>

<p><strong>Step 4: Explain Why Your Arguments Outweigh</strong></p>
<p>Even if the judge grants some AFF arguments, you need to explain why your arguments outweigh theirs under the judging criteria. If the criteria is net benefits: show the NEG side produces more overall good. If it's on balance: show the NEG arguments are more significant than the AFF arguments:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Even if the Affirmative shows some environmental benefit — which they haven't proven — the immediate economic harm to working Americans outweighs a speculative future environmental advantage. Jobs and economic stability affect Americans today. Environmental projections are decades away. Under net benefits, the NEG wins."
</div>

<p><strong>Step 5: Close with a Clear Vote Request</strong></p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"The Affirmative has not shown a significant harm, their economic benefits are unproven, and our cost argument stands uncontested. The choice is clear. We ask for a Negative ballot."
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a Negative Rebuttal outline for the following debate scenario.\n\nResolution: "The United States government should ban the use of cell phones by teens under 16."\n\nState of the round:\n• NEG Contention 1 (teens have a right to communicate with parents/guardians via phone — safety benefit) was fully extended; AFF never addressed the specific safety benefit subpoint.\n• NEG Contention 2 (phone bans are unenforceable) was attacked by AFF who said parents can enforce it at home; NEG responded that school enforcement is impossible.\n• AFF Contention 1 (phones cause distracted driving accidents) was extended well; NEG attacked but the argument is still strong.\n• AFF Contention 2 (cyberbullying) was partially answered by NEG (bullying exists without phones), but AFF extended it well.',
              fields: [
                {
                  label: 'Frame the Round (1–2 sentences that crystallize the central clash in this debate)',
                  placeholder: 'This debate comes down to…',
                  modelAnswer: 'This debate comes down to whether banning teen cell phone use produces any real, practical benefit — or whether it simply removes a valuable safety tool while leaving the underlying harms the Affirmative describes completely unsolved.'
                },
                {
                  label: 'Call out any drops or concessions from the AFF (what did they fail to adequately respond to?)',
                  placeholder: 'Notice that the Affirmative…',
                  modelAnswer: 'Notice that the Affirmative never addressed the core of our first contention — the safety benefit. We showed that teens rely on cell phones to reach parents and guardians in emergencies. The AFF spent all their speech time on cyberbullying and driving accidents. They offered zero response to the scenario where a teen in an emergency cannot reach help. That subpoint stands uncontested and goes to the Negative.'
                },
                {
                  label: 'Voting Issue 1 — State your strongest voting issue, explain the argument, and say why you\'ve won it',
                  placeholder: 'Voting Issue 1: …',
                  modelAnswer: 'Voting Issue 1: The ban is unenforceable, which means it solves nothing. We showed that enforcing a teen cell phone ban at school is practically impossible — teachers cannot monitor 30 students simultaneously, and any phone can be concealed. The Affirmative responded that parents can enforce it at home. But our argument was about the places where harm actually occurs: the school, the street, the social media platform. If the ban cannot be enforced where the harm happens, the ban does not solve the harm. The Affirmative has not shown a mechanism for real enforcement, and without enforcement there is no solvency.'
                },
                {
                  label: 'Explain why your arguments outweigh the AFF\'s strongest argument (e.g., AFF Contention 1 on distracted driving)',
                  placeholder: 'Even if the Affirmative is right about…',
                  modelAnswer: 'Even if the Affirmative is right that phones contribute to distracted driving accidents, a complete ban is not the right solution — and here\'s why: the Negative has shown that the same phone that might cause a distracted driving incident is also the phone a teen uses to call for help after that accident. Removing the phone removes both the risk AND the emergency resource simultaneously. A targeted driving law — phones off while operating a vehicle — achieves the AFF\'s goal without stripping teens of their primary safety communication tool. The AFF has not addressed why a total ban is necessary rather than a targeted one.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 8.3 ─────────────────────────────────────────── */
      {
        id: 'lesson-8-3',
        title: 'Affirmative Rebuttal (3 min)',
        steps: [
          {
            type: 'content',
            html: `
<h2>The Affirmative Rebuttal (AR)</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 3 minutes</strong> · JV/Varsity: 5 minutes
</div>

<p>The Affirmative Rebuttal is given by the First Affirmative speaker — and it's the <strong>final speech of the entire round</strong>. No one speaks after you. The judge walks out of the room with your voice in their head. Use it.</p>

<h3>Your Unique Challenge: Two Jobs at Once</h3>
<p>You must do two things in your limited time. First, <strong>respond to the Negative Rebuttal</strong>. Second, <strong>crystallize your own voting issues</strong>. Don't spend all your time reacting — deal with their key voting issues efficiently, then pivot to why you've won.</p>

<h3>Step 1: Address the Negative's Voting Issues — Efficiently</h3>
<p>The Negative just identified 2–3 reasons they think they've won. You need to knock each one down — but briefly. Don't re-argue the whole round. One or two focused sentences per issue is often enough to show the judge why the NEG's framing doesn't hold:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"The Negative says their strongest voting issue is cost — the Solyndra example. But Solyndra was one company. The solar industry as a whole has grown 89% in the last five years and now employs 260,000 Americans. One bankruptcy from a decade ago does not represent an entire sector. Their cost argument relies on an outlier, not a trend."
</div>

<p><strong>Important:</strong> If the NEG called out any drops from earlier in the round, address them directly. Ignoring a drop they've called out only reinforces the concession.</p>

<h3>Step 2: Extend and Crystallize Your Voting Issues</h3>
<p>Once you've dealt with the NEG's framing, pivot to your own affirmative voting issues. These should be the arguments you've won — arguments the NEG couldn't answer, arguments tied to your strongest evidence, and arguments that directly support the resolution:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"Now, here's why the Affirmation wins this debate. Voting Issue 1: The Negative never responded to our environmental contention. The scientific consensus on climate risk from fossil fuels is not contested — and the Negative offered zero analysis against it. That argument stands, and it's the most significant long-term harm in this round."
</div>

<h3>Step 3: The Final 30 Seconds — End Powerfully</h3>
<p>You have the final word of the entire debate. Don't end by trailing off with "and so, for all these reasons, vote affirmative." End with a statement that gives the judge a clear, memorable reason to vote for you:</p>
<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:10px 0;font-style:italic;color:var(--text-secondary);">
"This debate is about whether America can afford to keep burning fossil fuels. The Negative says we can't afford to change. The Affirmation says we can't afford not to. We've shown the scientific necessity, the economic opportunity, and the national security benefit of alternate energy. The Negative's one example of a failed company does not outweigh the weight of evidence we've brought today. The choice is clear — vote Affirmative."
</div>

<h3>What You Cannot Do</h3>
<ul>
  <li><strong>No new arguments.</strong> Same rule as the NR — anything new in the AR is a Point of Order violation.</li>
  <li><strong>Don't rehash everything.</strong> 3 minutes is not enough to re-argue the entire round. Issue selection matters just as much here as in the NR.</li>
  <li><strong>Don't ignore the NR's framing.</strong> If you don't address what the NEG said, the judge may assume you concede their points.</li>
</ul>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Write the Affirmative Rebuttal responding to the following Negative Rebuttal voting issues.\n\nResolution: "Cell phones are bad for teens."\n\nThe Negative Rebuttal said:\n• Voting Issue 1: "Risky behavior is a normal part of teen life — the Affirmative has never shown cell phones create a unique category of risk beyond what teens already face. The 45% accident statistic doesn\'t prove phones are uniquely dangerous."\n• Voting Issue 2: "The Affirmative dropped the NEG\'s argument that cyberbullying exists without cell phones — 56% of students have experienced bullying at school regardless. That point goes to the NEG."',
              fields: [
                {
                  label: 'Address NEG Voting Issue 1 — Why does the 45% accident statistic still hold? Give a focused, specific response.',
                  placeholder: 'The Negative says our accident statistic doesn\'t prove uniqueness, but…',
                  modelAnswer: 'The Negative says risky behavior is normal for teens and phones don\'t create a unique risk. But this misses the point of our evidence. The University of Alabama study doesn\'t just show that teens take risks — it shows that talking on a cell phone while walking specifically multiplies accident risk by 45%. That\'s not a baseline teen risk. That\'s a quantified, measurable increase caused directly by cell phone use. You cannot get a 45% accident increase from distracted walking without the phone. The causal connection is in the study — the Negative never addressed the methodology, only the conclusion.'
                },
                {
                  label: 'Address NEG Voting Issue 2 — The NEG says the AFF dropped their cyberbullying counter-argument. How do you respond without introducing new arguments?',
                  placeholder: 'On the cyberbullying drop the NEG called out…',
                  modelAnswer: 'The Negative claims we dropped their argument that cyberbullying exists without phones. We did respond to this — in the 2AC, we drew the distinction between general bullying and cyberbullying specifically. Cyberbullying is a category of harm that requires a digital platform. You cannot cyberbully someone without a device. The NEG\'s 56% statistic covers all forms of school bullying — verbal, physical, social. Our evidence from KidsHealth.org is specifically about cyberbullying victimization. These are different things. The NEG is conflating them to claim a drop that didn\'t happen.'
                },
                {
                  label: 'State your AFF Voting Issue(s) — What argument(s) have you won that the judge should vote on? Be specific about what evidence stands.',
                  placeholder: 'Here is why the Affirmation wins this debate…',
                  modelAnswer: 'Here is why the Affirmation wins. Our first contention — cell phones lead to risky behaviors — stands. The pedestrian accident subpoint was never sufficiently attacked on its methodology; the Negative only argued that teens face other risks, which does not rebut a 45% measured increase. Our cyberbullying subpoint was not dropped — we distinguished it clearly. And the impact stands: banning or limiting cell phone use for teens produces healthier teens with fewer avoidable injuries and less exposure to a form of harassment that only exists because of the device. Under any judging standard — net benefits, preponderance of evidence, or on balance — the Affirmation has shown a real, measurable harm. Vote Affirmative.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 9 — Fact & Value Case Construction
     ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-9',
    title: 'Fact & Value Cases',
    icon: '⚖️',
    lessons: [

      /* ── Lesson 9.1 ─────────────────────────────────────────── */
      {
        id: 'lesson-9-1',
        title: 'Building a Fact Case',
        steps: [
          {
            type: 'content',
            html: `
<h2>Building a Fact Case</h2>
<p>A <span class="key-term" data-definition="A resolution that presents an opinion stated as if it were a provable fact. Both teams argue whether the statement is true or false. Fact cases are judged on standards like 'on balance' or 'more often than not' — you don't need to prove the statement is universally true.">fact resolution</span> asks both teams to argue whether a statement is true or false. You don't need to prove it's true in 100% of cases — just more true than false. That's what makes the right judging criteria so important.</p>

<p>Example from our team's practice: <em>"The death penalty benefits outweigh consequences."</em></p>

<h3>The Five-Step Prep Process</h3>

<div style="display:grid;gap:8px;margin:14px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">1.</span>
    <div><strong>Define the Key Terms.</strong> Topical definitions only — what a reasonable person would use. Narrow or strange definitions invite Topicality challenges that derail your debate.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">2.</span>
    <div><strong>Set the Criteria.</strong> Use <span class="key-term" data-definition="A judging standard meaning: if your position is more true overall — not necessarily true in every single case — you win.">on balance</span> or "more often than not." Never use a criteria requiring universal proof — that's impossible in any fact debate.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">3.</span>
    <div><strong>Brainstorm.</strong> Generate 5–6+ arguments. Don't filter yet — just get ideas on paper. You won't use all of them.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">4.</span>
    <div><strong>Rank and Divide.</strong> Pick the top 2–3 strongest. Rest become backup. You and your partner each develop your assigned contentions fully — make sure each has enough evidence.</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 16px;display:flex;gap:12px;align-items:flex-start;">
    <span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:20px;">5.</span>
    <div><strong>Write It by Hand — Both Partners.</strong> No printed materials in the round. If only one partner writes the case, the other may not be able to speak to it under pressure.</div>
  </div>
</div>

<h3>Full Framework for a Fact Case</h3>
<p>The source material provides a specific framework every fact case should follow:</p>

<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden;margin:16px 0;">
  <div style="padding:0;">
    <div style="padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">1.</span><div><strong>Opening Remark</strong> — A compelling hook, then state the resolution.</div></div>
    <div style="padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">2.</span><div><strong>Resolutional Analysis</strong> — State the type (fact) and define key terms.</div></div>
    <div style="padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">3.</span><div><strong>Establish Criteria</strong> — State "on balance" or "more often than not" and explain why this is the right standard for this resolution.</div></div>
    <div style="padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">4.</span><div><strong>Contention 1</strong> — Fully developed: claim → evidence → warrant → impact.</div></div>
    <div style="padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">5.</span><div><strong>Contention 2</strong> — Same structure.</div></div>
    <div style="padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">6.</span><div><strong>Contention 3 (optional but recommended)</strong> — Same structure.</div></div>
    <div style="padding:10px 18px;display:flex;gap:12px;"><span style="font-family:var(--font-mono);font-weight:800;color:var(--gold-400);flex-shrink:0;min-width:24px;">7.</span><div><strong>Underview</strong> — Briefly summarize your key arguments and urge a vote for your side.</div></div>
  </div>
</div>

<h3>Why "On Balance" Is the Right Criteria</h3>
<p>The power of "on balance" for a fact case is strategic, not just logical. Consider the resolution: <em>"Cell phones are bad for teens."</em> If you need to prove this is true in every case, the Negative only needs to find one teen who benefited from having a phone to defeat you. But under "on balance" — is this statement more true than false, across the population of teens generally? — you can win even if the Negative has some counterexamples. Always protect yourself with the right criteria.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a complete fact case outline for the resolution: "The death penalty benefits outweigh consequences."\n\nFollow the full framework from the lesson. You are AFFIRMATIVE — arguing the death penalty benefits outweigh the consequences.',
              fields: [
                {
                  label: 'Opening Remark + State the Resolution (hook the judge, then state the resolution)',
                  placeholder: 'Start with a compelling hook, then: "For this reason, we of the Affirmation support the resolution that states: …"',
                  modelAnswer: 'Every year in this country, thousands of families lose someone to murder. When society fails to apply consequences proportional to the crime, it fails the victims of those crimes. For this reason and others, we of the Affirmation support the resolution that states: The death penalty benefits outweigh consequences.\n\n(Note the hook does not cite a number. In parliamentary debate you speak from memory and a judge may ask where a figure came from. Use a specific statistic only when you genuinely know it and can say your source — a number you half-remember will cost you more than the vaguer sentence above ever would.)'
                },
                {
                  label: 'Resolutional Analysis — State the type, then define "death penalty" and "benefits outweigh consequences"',
                  placeholder: 'This is a [type] debate. We define "death penalty" as… We define "benefits outweigh consequences" as…',
                  modelAnswer: 'This is a fact debate — the resolution asks us to show whether the overall benefits of the death penalty are greater than its harms. We define "death penalty" as legally sanctioned execution carried out by the state as punishment for capital crimes such as first-degree murder. We define "benefits outweigh consequences" as the claim that, on balance, the positive outcomes — deterrence, justice for victims, protection of society — are greater than the negative outcomes such as wrongful execution risk and cost.'
                },
                {
                  label: 'Criteria — State "on balance" and explain why it fits this resolution',
                  placeholder: 'We ask the judge to evaluate this debate on the standard of…',
                  modelAnswer: 'We ask the judge to evaluate this debate on the standard of "on balance" — if the death penalty produces more benefit than harm across its application, the Affirmation wins. We do not need to prove the death penalty is perfect in every case. We need to show that on the whole, the benefits are greater. This is the correct standard because the resolution itself uses the comparative phrase "outweigh" — it is explicitly asking for a balance-of-costs analysis.'
                },
                {
                  label: 'Contention 1 — Write a fully developed contention (claim → evidence → warrant → impact)',
                  placeholder: 'Our first contention is that…',
                  modelAnswer: 'Our first contention is that the death penalty provides justice for victims of the most heinous crimes. The families of murder victims have a right to see proportional justice. A life sentence does not restore the life that was taken — and in some cases, those convicted of violent crimes go on to harm others while incarcerated. The warrant: when the justice system fails to match the severity of the crime with the severity of the penalty, it communicates to victims and their families that their lives were not worth the full weight of the law. Impact: A vote for the Affirmation is a vote for a justice system that treats the most extreme crimes with the seriousness they deserve.'
                },
                {
                  label: 'Underview — Briefly summarize your key points and urge a vote for the Affirmation',
                  placeholder: 'For all these reasons…',
                  modelAnswer: 'For all these reasons — the justice delivered to victims\' families and the protection of society from the most dangerous individuals — we have demonstrated that the death penalty\'s benefits, on balance, outweigh its consequences. The resolution stands proven. We urge a vote for the Affirmation.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 9.2 ─────────────────────────────────────────── */
      {
        id: 'lesson-9-2',
        title: 'Building a Value Case',
        steps: [
          {
            type: 'content',
            html: `
<h2>Building a Value Case</h2>
<p>A <span class="key-term" data-definition="A resolution that asks which of two principles, standards, or values is more important. Both sides argue that their value should take priority.">value resolution</span> asks both teams to argue for a <strong>value</strong> — a principle — and show why it should be prioritized. You've debated this: <em>"The environmental movement ought to prioritize ecocentrism over anthropocentric ecology."</em> That's a value debate — not about facts or plans, but about which principle matters more.</p>

<h3>Your Value IS Your Criteria</h3>
<p><strong>Your value tells the judge what lens to use.</strong> If you argue for "ecological integrity," the judge asks: which side better protects ecosystems? Every contention must connect to that lens. Pick a value that's hard for the Negative to claim — if both teams can say they're arguing for "justice," you haven't differentiated.</p>

<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:16px 20px;margin:16px 0;">
  <p style="margin:0 0 10px;font-weight:700;color:var(--gold-300);">Example: "The environmental movement ought to prioritize ecocentrism."</p>
  <div style="display:grid;gap:8px;">
    <div style="background:rgba(255,255,255,.04);border-radius:8px;padding:10px 14px;">
      <strong style="color:var(--gold-300);">AFF Value:</strong> <span style="color:var(--text-secondary);">Ecological Integrity — the principle that the natural world has intrinsic value independent of human benefit.</span>
    </div>
    <div style="background:rgba(255,255,255,.04);border-radius:8px;padding:10px 14px;">
      <strong style="color:var(--gold-300);">Contention 1:</strong> <span style="color:var(--text-secondary);">Anthropocentric frameworks have failed — decades of human-centered environmentalism have not stopped species collapse or ecosystem destruction. Ecocentrism demands we put nature first, not second.</span>
    </div>
    <div style="background:rgba(255,255,255,.04);border-radius:8px;padding:10px 14px;">
      <strong style="color:var(--gold-300);">Contention 2:</strong> <span style="color:var(--text-secondary);">Ecocentrism creates stronger long-term protections — when nature has rights independent of human utility, political trade-offs can't override those protections.</span>
    </div>
  </div>
</div>

<h3>Value Clash</h3>
<p>The Negative will argue their own value — maybe "human welfare" or "sustainable development." Your job in rebuttal is to show why your value <strong>outweighs</strong> theirs. Come prepared: is your value more foundational? Does theirs lead to the same harms you're describing?</p>

<h3>Case Structure</h3>
<ul>
  <li><strong>Opening Remark</strong> — Hook, state the resolution</li>
  <li><strong>Resolutional Analysis</strong> — Define key terms</li>
  <li><strong>Value Statement / Criteria</strong> — Name your value, explain the lens, link to your contentions</li>
  <li><strong>Contentions 1–3</strong> — Each directly supports your value</li>
  <li><strong>Underview</strong> — Summarize and urge a vote</li>
</ul>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a value case for the resolution: "The environmental movement ought to prioritize ecocentrism over anthropocentric ecology."\n\nYou are on the AFFIRMATIVE team. Choose a value that links your contentions, then write two contentions that support it.',
              fields: [
                {
                  label: 'Your Value — Name it and explain why it\'s the right lens for this debate (2–3 sentences)',
                  placeholder: 'The Affirmation will argue for the value of… This value is the right lens because…',
                  modelAnswer: 'The Affirmation will argue for the value of Ecological Integrity — the principle that ecosystems and species have intrinsic value independent of their usefulness to humans. This is the right lens because the resolution asks which philosophical framework should guide the environmental movement, and the answer should be measured by what best protects nature in the long run. Anthropocentrism has had decades to prove itself and failed; ecocentrism offers a fundamentally different foundation.'
                },
                {
                  label: 'Contention 1 — Claim → Evidence → Warrant → Impact (connects to your value)',
                  placeholder: 'Our first contention is that…',
                  modelAnswer: 'Our first contention is that anthropocentrism has structurally failed to protect the environment. Claim: Human-centered environmental policy treats nature as a resource, not as something worth protecting for its own sake. Evidence: Despite decades of human-welfare-based environmental law, global biodiversity has declined 69% since 1970 according to the WWF Living Planet Report. Warrant: When nature is only protected insofar as it benefits humans, trade-offs are always possible — and nature keeps losing those trade-offs to economic interests. Impact: Under ecological integrity, this failure is unacceptable. Ecocentrism removes that trade-off by granting nature independent moral standing, which is the only framework that consistently produces real protection.'
                },
                {
                  label: 'Contention 2 — Claim → Evidence → Warrant → Impact (also connects to your value)',
                  placeholder: 'Our second contention is that…',
                  modelAnswer: 'Our second contention is that ecocentric frameworks produce stronger, more durable environmental protections. Claim: When ecosystems have rights independent of human utility, legal and political protections are harder to override. Evidence: Countries like Ecuador and New Zealand have recognized rights of nature in law — and those protections have successfully blocked extractive projects that would have passed under anthropocentric frameworks. Warrant: The difference is structural: if a river has legal standing, a corporation cannot simply argue economic benefit outweighs environmental harm. Impact: Under our value of ecological integrity, ecocentrism is the only framework that creates protections strong enough to actually work.'
                },
                {
                  label: 'Value Clash — Why does your value outweigh the Negative\'s likely value (e.g., "Human Welfare" or "Sustainable Development")?',
                  placeholder: 'Even if the Negative argues for the value of…, our value outweighs because…',
                  modelAnswer: 'Even if the Negative argues for human welfare or sustainable development, ecological integrity outweighs for a simple reason: human welfare depends on functioning ecosystems. There is no sustainable development on a planet with collapsed biodiversity, polluted water systems, and destabilized climate. The Negative\'s value is not independent — it ultimately requires what our value protects. Ecocentrism is foundational; anthropocentrism is derivative. When the judge asks which value is more fundamental, the answer is clear: protect the natural systems everything else depends on, and human welfare follows. Prioritize human welfare first, and nature — and eventually humanity — loses.'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 10 — Policy Case Construction
  ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-10',
    title: 'Policy Case Construction',
    icon: '📋',
    lessons: [

      /* ── Lesson 10.1 ────────────────────────────────────────────── */
      {
        id: 'lesson-10-1',
        title: 'The Policy Framework',
        steps: [
          {
            type: 'content',
            html: `
<h2>The Policy Framework</h2>
<p>A <span class="key-term" data-definition="A debate resolution that requires the affirmative team to identify a significant problem in the status quo and present a plan to solve it. Policy resolutions typically contain the word 'should.'">policy case</span> has a higher burden than fact or value cases. You're not just arguing something is true — you're arguing a problem exists <em>and</em> your plan fixes it. Your team has debated this: <em>"The USFG should prohibit the sale of genetic data for commercial purposes."</em> That's a policy resolution — identify the harm, present the plan, prove it works.</p>

<div style="display:grid;gap:10px;margin:16px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">1 — SIGNIFICANT HARM</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">The problem that exists right now. Build a story: who is hurt, how badly, why it matters. Has to be significant — small inconveniences don't win rounds.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">2 — INHERENCY</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">Why won't the problem fix itself without your plan? If you skip this, the judge assumes the status quo is already solving it.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">3 — PLAN</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">The specific policy you're proposing. Precise language, four planks: Agency, Enforcement, Funding, Timeline. Once you read it, you don't change it.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">4 — SOLVENCY</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">How your plan actually fixes the harm. This closes the loop — problem exists, can't self-correct, your plan works.</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:14px 18px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:4px;">5 — ADVANTAGES</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;">Extra benefits beyond solving the harm. More reasons the judge should vote your way.</p>
  </div>
</div>

<h3>The Judging Criteria: Net Benefits</h3>
<p>The judge asks one question: do the plan's advantages outweigh its disadvantages? If yes, Affirmative wins. The Negative's job is to prove the harms aren't real, the plan won't work, or the plan creates new problems that outweigh your advantages.</p>

<h3>1AC Speech Order</h3>
<ol>
  <li>Introduction</li>
  <li>Statement of Support of the Resolution</li>
  <li>Definitions</li>
  <li>Criteria: Net Benefits</li>
  <li>Significant Harm</li>
  <li>Inherency</li>
  <li>Plan</li>
  <li>Solvency</li>
  <li>Advantages</li>
</ol>
`
          },
          {
            type: 'exercise',
            exerciseType: 'matching',
            exerciseConfig: {
              instruction: 'Match each policy case element to its correct definition and purpose.',
              pairs: [
                {
                  left: 'Significant Harm',
                  right: 'The major problem that exists right now — you build a story of who is hurt, how badly, and why it matters.'
                },
                {
                  left: 'Inherency',
                  right: 'The barrier preventing the problem from being fixed without your plan — why the status quo cannot self-correct.'
                },
                {
                  left: 'Plan',
                  right: 'The precise policy your team proposes, with four planks: Agency, Enforcement, Funding, and Timeline.'
                },
                {
                  left: 'Solvency',
                  right: 'The proof that your plan actually fixes the harm — closing the loop between problem and solution.'
                },
                {
                  left: 'Advantages',
                  right: 'The additional benefits beyond just solving the harm — extra reasons the judge should vote for your plan.'
                },
                {
                  left: 'Net Benefits',
                  right: 'The judging standard: if plan advantages outweigh disadvantages, a Government ballot is warranted.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 10.2 ────────────────────────────────────────────── */
      {
        id: 'lesson-10-2',
        title: 'Writing Your Plan',
        steps: [
          {
            type: 'content',
            html: `
<h2>Writing Your Plan</h2>
<p>The plan is the most precise piece of writing in parliamentary debate. Unlike contentions — where you argue and persuade — the plan is formal, specific, and fixed. Once you read it in the round, you don't get to change it. Write it carefully, stress-test it for weaknesses, and know how to defend every word.</p>

<h3>The WHO / WHAT / WHEN / HOW Framework</h3>
<p>Here's the simplest way to remember what your plan needs to include:</p>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:16px 0;">
  <div style="background:rgba(96,165,250,.1);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:16px 18px;">
    <div style="font-family:var(--font-mono);font-size:18px;font-weight:900;color:rgba(96,165,250,1);margin-bottom:6px;">WHO</div>
    <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Agent of Action</div>
    <p style="margin:0;color:var(--text-secondary);font-size:13px;">Who enacts the plan? Be specific: Congress, a federal agency, the President — not just "the government."</p>
  </div>
  <div style="background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.3);border-radius:12px;padding:16px 18px;">
    <div style="font-family:var(--font-mono);font-size:18px;font-weight:900;color:rgba(167,139,250,1);margin-bottom:6px;">WHAT</div>
    <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Plan Details</div>
    <p style="margin:0;color:var(--text-secondary);font-size:13px;">What exactly does the plan do? The specific mandate — what is required, prohibited, or created.</p>
  </div>
  <div style="background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.3);border-radius:12px;padding:16px 18px;">
    <div style="font-family:var(--font-mono);font-size:18px;font-weight:900;color:rgba(74,222,128,1);margin-bottom:6px;">WHEN</div>
    <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Timeframe</div>
    <p style="margin:0;color:var(--text-secondary);font-size:13px;">When does it happen? When does it go into effect, and over what timeline does it roll out?</p>
  </div>
  <div style="background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.3);border-radius:12px;padding:16px 18px;">
    <div style="font-family:var(--font-mono);font-size:18px;font-weight:900;color:rgba(251,191,36,1);margin-bottom:6px;">HOW</div>
    <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Funding &amp; Enforcement</div>
    <p style="margin:0;color:var(--text-secondary);font-size:13px;">How is it paid for? Who enforces compliance and what happens if someone doesn't follow the plan?</p>
  </div>
</div>

<div style="background:rgba(212,168,67,.05);border:1px solid rgba(212,168,67,.2);border-radius:12px;padding:14px 18px;margin:12px 0;">
  <strong style="color:var(--gold-300);">Example — "The USFG should prohibit the sale of genetic data for commercial purposes":</strong><br/>
  <span style="color:var(--text-secondary);font-size:14px;"><strong>WHO:</strong> Congress passes legislation · <strong>WHAT:</strong> prohibits companies from selling genetic data for commercial profit · <strong>WHEN:</strong> effective 12 months after enactment · <strong>HOW:</strong> enforced by the FTC with civil penalties up to $10M per violation; funded through existing FTC budget</span>
</div>

<h3>The Four Planks</h3>
<p>Every policy plan has four required components called <span class="key-term" data-definition="The four required sections of a policy plan: Agency (who enacts it), Enforcement (who ensures compliance), Funding (how it's paid for), and Timeline (when it happens and how long it takes).">planks</span>. Think of planks as the legs of a table — remove one and the whole thing becomes unstable.</p>

<div style="display:grid;gap:12px;margin:20px 0;">
  <div style="background:rgba(96,165,250,.07);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:rgba(96,165,250,1);letter-spacing:.1em;margin-bottom:6px;">PLANK 1 — AGENCY</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;"><strong>Who enacts the plan?</strong></p>
    <p style="margin:0;color:var(--text-muted);font-size:13px;line-height:1.6;">Identify the specific body that will carry out the policy: Congress, a federal regulatory agency, the President, state governments, etc. Be specific — "the government" is too vague and easy to attack.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "The United States Congress will pass legislation requiring…"</div>
  </div>
  <div style="background:rgba(96,165,250,.07);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:rgba(96,165,250,1);letter-spacing:.1em;margin-bottom:6px;">PLANK 2 — ENFORCEMENT</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;"><strong>Who makes sure the plan is followed?</strong></p>
    <p style="margin:0;color:var(--text-muted);font-size:13px;line-height:1.6;">A plan with no enforcement mechanism is easy to attack on solvency — if there's no consequence for non-compliance, the plan might not work. Identify the enforcement body: courts, regulatory agencies, law enforcement.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "…enforced by the Environmental Protection Agency with civil penalties for violations…"</div>
  </div>
  <div style="background:rgba(96,165,250,.07);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:rgba(96,165,250,1);letter-spacing:.1em;margin-bottom:6px;">PLANK 3 — FUNDING</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;"><strong>Who pays for the plan and how much does it cost?</strong></p>
    <p style="margin:0;color:var(--text-muted);font-size:13px;line-height:1.6;">The Negative will attack underfunded plans. Identify the funding source: federal appropriations, existing agency budgets, a new tax, public-private partnerships. You don't need an exact dollar figure, but you need a realistic source.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "…funded through reallocation of existing Department of Energy discretionary budget…"</div>
  </div>
  <div style="background:rgba(96,165,250,.07);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:rgba(96,165,250,1);letter-spacing:.1em;margin-bottom:6px;">PLANK 4 — TIMELINE</div>
    <p style="margin:0 0 8px;color:var(--text-secondary);font-size:14px;"><strong>When does the plan happen? How long does it take?</strong></p>
    <p style="margin:0;color:var(--text-muted);font-size:13px;line-height:1.6;">Plans without a timeline feel vague. State when implementation begins and how long the full rollout takes. A phased implementation is fine and often more defensible than "immediately."</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "…to be implemented within 18 months of passage, with full compliance required within three years."</div>
  </div>
</div>

<h3>Understanding Fiat</h3>
<p><span class="key-term" data-definition="The assumed power in policy debate for the affirmative team to propose that their plan WILL be enacted and implemented as written, for the sake of argument. Fiat means you don't have to debate whether Congress would actually pass the bill — you debate whether the policy, if enacted, would be good.">Fiat</span> is one of the most important concepts in policy debate. It means your plan has assumed power to be enacted as written. You don't have to argue that Congress <em>would</em> pass your bill — you argue that if it <em>were</em> passed, it would be good. The counterplan also has fiat power, which is why both plans can be debated on their merits.</p>

<h3>The Most Common Plan-Writing Mistake</h3>
<div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.3);border-radius:12px;padding:18px 20px;margin:16px 0;">
  <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:rgba(239,68,68,1);letter-spacing:.1em;margin-bottom:8px;">AVOID THESE WORDS</div>
  <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Your source documents warn explicitly: <strong>avoid words like "ALL," "EVERYONE," or "100%."</strong> Absolute mandates are easy for the Negative to attack — all it takes is one exception to undermine your solvency. Write plans with scope and flexibility built in: "all federally-funded facilities" is better than "all facilities everywhere."</p>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Write the four planks of a policy plan for the following resolution: "The United States federal government should require all new public school buildings to be powered by renewable energy sources." You are on the Affirmative team. Write each plank as a complete sentence.',
              fields: [
                {
                  label: 'Plank 1 — Agency: Who enacts this plan?',
                  placeholder: 'The United States Congress will…',
                  modelAnswer: 'The United States Congress will pass the Clean Schools Energy Act, requiring that all new public school construction projects receiving federal funding be powered by at least 80% renewable energy sources such as solar, wind, or geothermal.'
                },
                {
                  label: 'Plank 2 — Enforcement: Who ensures compliance?',
                  placeholder: 'This plan will be enforced by…',
                  modelAnswer: 'This plan will be enforced by the Department of Education in coordination with the Environmental Protection Agency, which will conduct biennial audits of federally-funded school construction projects and withhold future funding from non-compliant districts.'
                },
                {
                  label: 'Plank 3 — Funding: Who pays and how?',
                  placeholder: 'Funding for this plan will come from…',
                  modelAnswer: 'Funding for this plan will come from a reallocation of existing federal education infrastructure grants, supplemented by tax incentives for renewable energy installations under the existing federal clean energy tax credit program, at no net increase to the federal education budget.'
                },
                {
                  label: 'Plank 4 — Timeline: When does this happen and how long does it take?',
                  placeholder: 'This plan will be implemented…',
                  modelAnswer: 'This plan will take effect for all new school construction projects breaking ground 24 months after passage, with a full compliance review conducted by the Department of Education at the five-year mark and every three years thereafter.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 10.3 ────────────────────────────────────────────── */
      {
        id: 'lesson-10-3',
        title: 'Harms, Inherency & Solvency',
        steps: [
          {
            type: 'content',
            html: `
<h2>Harms, Inherency & Solvency</h2>
<p>These three sections are the core of your policy case. They have to work together — pull any one and the whole argument collapses.</p>

<h3>Harms</h3>
<p>Answer three questions: <strong>What</strong> is happening? <strong>Who</strong> is affected and at what scale? <strong>How badly</strong> — why does this demand a solution? State the harm claim, support it with evidence, and close with the impact: what happens if this goes unsolved.</p>

<h3>Inherency</h3>
<p><span class="key-term" data-definition="The structural barrier that prevents the problem from being solved without the affirmative plan. Inherency explains why the status quo cannot self-correct.">Inherency</span> is your answer to: <em>"This is already being fixed."</em> Show that existing laws or policies are inadequate or absent. Key questions: Is there a law that should prevent this but doesn't? Is there a structural barrier keeping the problem in place? Has the status quo had time to fix this and failed?</p>

<h3>Solvency</h3>
<p><span class="key-term" data-definition="The section of the affirmative policy case that explains how and why the plan will eliminate or significantly reduce the harms identified.">Solvency</span> proves your plan actually fixes the harm. Weak solvency — "this could help" — loses rounds. Strong solvency ties your plan's specific mechanism directly to the inherency barrier and shows why it produces the result you promised in harms.</p>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:20px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:22px;margin-bottom:8px;">🔥</div>
    <div style="font-family:var(--font-mono);font-size:10px;font-weight:800;color:var(--gold-400);letter-spacing:.08em;margin-bottom:6px;">HARMS</div>
    <p style="margin:0;font-size:12px;color:var(--text-muted);line-height:1.5;">The problem exists and it's serious</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:22px;margin-bottom:8px;">🧱</div>
    <div style="font-family:var(--font-mono);font-size:10px;font-weight:800;color:var(--gold-400);letter-spacing:.08em;margin-bottom:6px;">INHERENCY</div>
    <p style="margin:0;font-size:12px;color:var(--text-muted);line-height:1.5;">The barrier keeps it from fixing itself</p>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:10px;padding:16px;text-align:center;">
    <div style="font-size:22px;margin-bottom:8px;">🔑</div>
    <div style="font-family:var(--font-mono);font-size:10px;font-weight:800;color:var(--gold-400);letter-spacing:.08em;margin-bottom:6px;">SOLVENCY</div>
    <p style="margin:0;font-size:12px;color:var(--text-muted);line-height:1.5;">Your plan is the key that breaks through the barrier</p>
  </div>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Write the Harm, Inherency, and Solvency sections for a policy case on this resolution: "The USFG should guarantee universal childcare." You are on the Affirmative team.',
              fields: [
                {
                  label: 'Significant Harm — What is the problem, who is affected, and what is the impact?',
                  placeholder: 'The United States currently has a significant harm: …',
                  modelAnswer: 'The United States currently has a significant harm: the cost and scarcity of childcare forces millions of American families — disproportionately low-income and single-parent households — out of the workforce entirely. According to the Center for American Progress, the average annual cost of childcare now exceeds the average cost of in-state college tuition in most states, putting it out of reach for working-class families. The impact: parents — primarily mothers — are forced to reduce hours or leave jobs entirely, driving wage gaps, increasing poverty rates, and permanently reducing lifetime earning potential.'
                },
                {
                  label: 'Inherency — Why won\'t the market or existing law fix this on its own?',
                  placeholder: 'The barrier preventing this problem from being solved is…',
                  modelAnswer: 'The barrier is structural: the childcare market is economically unworkable without government intervention. Childcare providers cannot lower prices without cutting wages for workers already earning near-poverty incomes, and they cannot raise wages without making care unaffordable. Existing programs like the Child Care and Development Block Grant cover only a fraction of eligible families — only 1 in 6 children who qualify for federal childcare subsidies actually receives them, according to HHS. State-level programs are underfunded and uneven. The market has had decades to solve this and has not.'
                },
                {
                  label: 'Solvency — How and why does your plan solve the harm?',
                  placeholder: 'Our plan solves the harm because…',
                  modelAnswer: 'Our plan solves the harm by removing the economic barrier inherency identified: cost. Universal childcare funded by the federal government — modeled on programs in France, Germany, and Canada — eliminates family cost at the point of access. Providers receive public funding, allowing them to pay living wages without raising parent fees. Evidence from countries with universal childcare programs shows consistent results: higher maternal workforce participation, reduced gender wage gaps, and improved early childhood outcomes. Our plan directly addresses the inherency barrier and produces the exact outcomes we identified in harms.'
                }
              ]
            }
          }
        ]
      }

    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 11 — Advanced Negative Strategy
  ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-11',
    title: 'Advanced Negative Strategy',
    icon: '🧠',
    lessons: [

      /* ── Lesson 11.1 ────────────────────────────────────────────── */
      {
        id: 'lesson-11-1',
        title: 'Topicality',
        steps: [
          {
            type: 'content',
            html: `
<h2>Topicality</h2>
<p><span class="key-term" data-definition="A procedural argument that the affirmative team's plan falls outside the boundaries of the resolution as written. If the Negative wins topicality, the judge votes Negative regardless of the plan's merits.">Topicality</span> ("T") is how the Negative argues the Affirmative's plan falls outside the resolution. If you win it, you win the round — before the judge even looks at the plan's merits. Example: resolution is about "alternative energy" and the AFF runs nuclear power. If nuclear isn't a reasonable reading of "alternative energy," their case is non-topical.</p>

<h3>The Four-Part Topicality Framework</h3>

<div style="display:grid;gap:12px;margin:20px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">1 — INTERPRETATION</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Your definition of the key term in dispute. This is the standard the Affirmative's plan must meet. Use a dictionary, expert source, or common usage to establish what the term means in context.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Under our interpretation, 'alternative energy sources' refers to renewable energy sources — solar, wind, geothermal, and hydroelectric — which are defined by contrast to fossil fuels."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">2 — VIOLATION</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">How the Affirmative's plan fails to meet your interpretation. Be specific — point to the exact part of the plan that falls outside the definition.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "The Affirmative has run a case entirely about nuclear power. Nuclear energy is not a renewable source — it relies on finite uranium deposits and generates long-lived radioactive waste. It does not meet our interpretation."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">3 — STANDARD</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Why your interpretation is the correct one. Common standards include: dictionary definition, expert consensus, common usage, or what the resolution-writers most likely intended.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "The standard is common usage — when policymakers and the general public discuss 'alternative energy,' nuclear power is consistently categorized separately from renewables in legislation, textbooks, and energy policy literature."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">4 — VOTER</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Why topicality is a voting issue — why the judge should vote Negative if the Affirmative is non-topical. Common voters include: fairness (Negative couldn't prepare for a case outside the resolution) and education (debating off-topic cases produces no educational value).</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Topicality is a voting issue for two reasons. First, fairness: if the Affirmative can run any plan regardless of the resolution, the Negative has no way to prepare. Second, education: debates constrained by the resolution produce better clash and deeper learning than debates about an unlimited topic."</div>
  </div>
</div>

<h3>When to Run Topicality</h3>
<p>Run T when the AFF's plan clearly falls outside a reasonable reading of the resolution <em>and</em> you have a stronger interpretation. Don't throw it out as a throwaway — a flimsy T hurts your credibility on the rest of your arguments.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a complete topicality argument. The resolution is: "The United States government should significantly expand mental health services." The Affirmative has run a case about expanding prison rehabilitation programs — not specifically mental health services. Write all four parts of your topicality argument.',
              fields: [
                {
                  label: 'Interpretation — Define the key term in dispute',
                  placeholder: 'Under our interpretation, "mental health services" means…',
                  modelAnswer: 'Under our interpretation, "mental health services" refers to clinically recognized treatments, programs, and support systems for individuals diagnosed with mental health conditions — including therapy, psychiatric care, crisis intervention, and community mental health centers — as defined by the American Psychological Association and the National Institute of Mental Health.'
                },
                {
                  label: 'Violation — How does the Affirmative\'s plan fail your interpretation?',
                  placeholder: 'The Affirmative has violated our interpretation because…',
                  modelAnswer: 'The Affirmative has violated our interpretation because their case focuses entirely on expanding prison rehabilitation programs — job training, educational courses, and vocational skills development for incarcerated individuals. While rehabilitation programs have value, they are not mental health services as clinically defined. The Affirmative has presented no psychiatric treatment, no therapy access, and no mental health infrastructure in their plan.'
                },
                {
                  label: 'Standard — Why is your interpretation the correct one?',
                  placeholder: 'The standard is…',
                  modelAnswer: 'The standard is expert definition and common usage. The APA, NIMH, and every major federal mental health policy document define mental health services as clinical treatment for recognized mental health conditions. General rehabilitation programs may be valuable — but they are categorized under criminal justice reform, not mental health expansion. When policymakers and legislators debate "expanding mental health services," they mean access to clinical care, not vocational training.'
                },
                {
                  label: 'Voter — Why should the judge vote Negative if the Affirmative is non-topical?',
                  placeholder: 'Topicality is a voting issue because…',
                  modelAnswer: 'Topicality is a voting issue for fairness and education. On fairness: the Negative prepared for a debate about mental health services — psychiatric care access, therapist shortages, crisis intervention funding. The Affirmative has instead run a criminal justice case, eliminating our preparation and our ability to generate specific negative arguments. On education: resolutions exist to provide a defined debate space. If the Affirmative can redefine the resolution to debate any social program they prefer, the educational value of a focused resolution is destroyed. For both reasons, a non-topical affirmative warrants a Negative ballot.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 11.2 ────────────────────────────────────────────── */
      {
        id: 'lesson-11-2',
        title: 'Disadvantages',
        steps: [
          {
            type: 'content',
            html: `
<h2>Disadvantages</h2>
<p>A <span class="key-term" data-definition="A negative argument showing that the affirmative plan will cause harmful consequences. Disadvantages (DAs) must be unique to the plan — the harm must not already be happening in the status quo.">disadvantage</span> (DA) says: even if the AFF's plan solves the harms they identified, it creates new harms that outweigh the benefits. The key rule: <strong>the bad thing must happen because of the plan, not regardless of it.</strong> If the harm already exists in the status quo, there's no DA.</p>

<h3>The Four-Part Disadvantage Framework</h3>

<div style="display:grid;gap:12px;margin:20px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">UNIQUENESS</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Prove that the harmful outcome is <em>not</em> already happening in the status quo. This establishes that the plan is what <em>causes</em> it. Without uniqueness, the Affirmative can argue: "This bad thing is already happening — our plan doesn't make it worse."</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Currently, federal education spending is stable. The status quo does not include an unfunded mandate of this scale."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">LINK</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Prove the connection between the plan and the harmful outcome. The link is your argument that the plan specifically <em>triggers</em> the disadvantage. A strong link is direct and specific to the Affirmative's plan.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "The Affirmative's plan requires 80% renewable energy in all new school construction, which the Department of Energy estimates will cost an average of $2.3 million more per building than conventional construction."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">BRINK</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">The threshold at which the disadvantage becomes catastrophic — why the plan pushes us over the edge, rather than just adding a small cost. The brink argues we're close enough to a tipping point that the plan's additional pressure causes a qualitative shift in outcomes.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "School districts are already operating at budget deficits averaging 8% nationwide. The additional construction cost pushes dozens of districts across the insolvency threshold."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">IMPACT</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">The ultimate harm that results. The impact must be significant enough to outweigh whatever the Affirmative is solving. You'll weigh your impact against the Affirmative's advantage — magnitude (how bad), probability (how likely), and timeframe (how soon).</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Insolvent school districts are forced to cancel programs, lay off teachers, and defer maintenance — directly harming the educational outcomes of the very students the Affirmative's plan is supposed to benefit."</div>
  </div>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Build a complete disadvantage against the Affirmative plan: "The U.S. federal government should implement a universal basic income of $1,000 per month for all citizens." Write all four parts of your disadvantage.',
              fields: [
                {
                  label: 'Uniqueness — Prove the harm is NOT already happening in the status quo',
                  placeholder: 'Currently, in the status quo…',
                  modelAnswer: 'Currently, in the status quo, the United States federal budget operates without a universal income transfer program of this scale. While targeted assistance programs like SNAP and Medicaid exist, the inflation pressure created by a universal cash transfer to all 260 million adult Americans does not exist — and economists at the Federal Reserve confirm that current inflation, while elevated, is not driven by the type of broad monetary expansion that a UBI would create.'
                },
                {
                  label: 'Link — How does the plan specifically trigger the disadvantage?',
                  placeholder: 'The Affirmative\'s plan triggers this disadvantage because…',
                  modelAnswer: 'The Affirmative\'s plan triggers this disadvantage because injecting approximately $3.1 trillion annually in cash transfers directly into the consumer economy represents the largest single expansion of the money supply in U.S. history. When the same dollar amount is available to every citizen simultaneously, consumer demand spikes faster than productive capacity can respond — the classic precondition for sustained, broad-based inflation. The link is not theoretical: the Roosevelt Institute and the Congressional Budget Office have both modeled that an unconditional UBI of this size would increase the CPI by an estimated 4-6% annually above baseline.'
                },
                {
                  label: 'Brink — Why is the plan pushing us over a critical threshold?',
                  placeholder: 'We are near a critical threshold because…',
                  modelAnswer: 'We are near a critical threshold because the Federal Reserve has limited remaining capacity to counteract inflationary pressure through interest rate increases. Rates are already elevated from post-pandemic tightening, and further increases risk triggering a recession. The brink is the point at which inflation-fighting tools become self-defeating — where the cure (higher rates, reduced lending, economic contraction) causes more harm than the disease. The Affirmative\'s plan pushes aggregate demand past the point where the Fed can respond without triggering the very recession it\'s trying to prevent.'
                },
                {
                  label: 'Impact — What is the ultimate harm, and why does it outweigh the Affirmative\'s advantages?',
                  placeholder: 'The impact of this disadvantage is…',
                  modelAnswer: 'The impact is stagflation — simultaneous high inflation and economic stagnation — which erodes the purchasing power of the very $1,000-per-month transfer the Affirmative is promising. If inflation rises 6% annually, the real value of the UBI drops to roughly $940 in year one, $884 in year two, and continues declining. The people most harmed are those with no other income sources — the exact low-income citizens the Affirmative claims to help. This impact outweighs the Affirmative\'s advantage on two dimensions: magnitude (stagflation affects the entire economy, not just one segment) and probability (the inflationary mechanism is well-documented, not speculative).'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 11.3 ────────────────────────────────────────────── */
      {
        id: 'lesson-11-3',
        title: 'Introduction to Counterplans',
        steps: [
          {
            type: 'content',
            html: `
<h2>Introduction to Counterplans</h2>

<div style="background:rgba(248,113,113,.07);border:1px solid rgba(248,113,113,.25);border-radius:12px;padding:16px 20px;margin:0 0 16px;">
  <strong style="color:#fca5a5;">Counterplans are OPTIONAL.</strong>
  <p style="margin:8px 0 0;color:var(--text-secondary);font-size:14px;">If you're in a rush during prep, unsure of the resolution, or don't think a counterplan would be your strongest option — <strong>don't make one.</strong> It is better to have no counterplan than one that is noncompetitive or ineffective. A weak counterplan gives the Affirmative free points. Only run a counterplan when you have a genuinely strong, competitive alternative.</p>
</div>

<p>Most Negative teams defend the status quo — arguing that the Affirmative's plan is unnecessary or harmful. But the Negative can also present a <span class="key-term" data-definition="A policy proposal offered by the Negative team that is not the status quo and not the Affirmative plan. The counterplan competes with the Affirmative plan by offering a superior alternative.">counterplan</span> — their own solution that is better than the Affirmative's.</p>

<h3>The Hamburger vs. Chinese Food Analogy</h3>
<div style="background:rgba(255,255,255,.04);border-left:3px solid var(--gold-400);padding:14px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
  <p style="margin:0 0 12px;font-size:14px;color:var(--text-secondary);line-height:1.7;">Your source documents explain counterplans with a perfect analogy: <em>"Let's say your friend is hungry and suggests that you go get hamburgers. But you suggest that Chinese food is a better idea. Both plans compete for the same money and the same time. Now your job is to show that your counterplan for Chinese food is a better way to solve your hunger problem."</em></p>
  <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">The friend (Affirmative) identified a real problem — hunger. You (Negative) agree the problem is real, but argue your solution is better. You don't defend starvation (the status quo). You compete on which plan better solves the agreed-upon harm.</p>
</div>

<h3>The Critical Warning: You Admit the Harms Exist</h3>
<div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.3);border-radius:12px;padding:18px 20px;margin:16px 0;">
  <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;"><strong>By presenting a counterplan, you are ADMITTING that the status quo has harms that need to be addressed.</strong> Your source documents make this explicit: "you have given the Affirmation half their case — you have agreed to the harms that they have presented. That's huge!" Think carefully before running a counterplan. Only run one when the resolution almost demands a specific plan, so you can reasonably predict what the Affirmative will propose.</p>
</div>

<h3>What a Counterplan Must Do</h3>
<p>A valid counterplan must:</p>
<ul>
  <li><strong>Compete with the Affirmative plan</strong> — it must force a choice. If both plans could be done simultaneously, there's no reason to reject the Affirmative.</li>
  <li><strong>Be non-topical</strong> — it should propose something the resolution doesn't require (often a different agent, method, or scale).</li>
  <li><strong>Be net beneficial</strong> — it must produce more advantages than the Affirmative's plan.</li>
</ul>

<h3>The Three Generic Counterplans</h3>
<p>These "one shoe fits all" counterplans can be adapted to many rounds:</p>

<div style="display:grid;gap:12px;margin:20px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">AGENT COUNTERPLAN</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">You accept the Affirmative's goal but argue that a different agent should implement it. Classic version: if the Affirmative uses the federal government, you counterplan with the states (or vice versa). You need evidence that the Affirmative's agent is ineffective and yours is better.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "The Affirmation wants the U.S. federal government to provide malaria medications. We counterplan with the World Health Organization, which has existing infrastructure and global expertise that the U.S. federal government lacks."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">STUDY COUNTERPLAN</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">You argue that we need more information before committing to the Affirmative's plan — that locking in a policy before full study is harmful. Must include: who does the study, how long it takes (6–18 months), and a mandate to act on findings.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Rather than immediately mandating solar energy in all schools, we counterplan with a 12-month independent study by the National Academies of Sciences to evaluate cost-effectiveness, grid compatibility, and regional feasibility — then mandate action based on findings."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">CONSULTATION COUNTERPLAN</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">You argue that the Affirmative's unilateral action will create disadvantages, and that consulting a relevant group or commission first would prevent those harms. The counterplan gives that group veto power over whether the plan is implemented.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Before implementing a federal paid leave mandate, we counterplan with mandatory consultation with the National Federation of Independent Business and small business stakeholders — allowing implementation only if consultation produces consensus."</div>
  </div>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'The resolution is: "The United States should implement a national carbon tax." The Affirmative has presented a plan where Congress passes legislation imposing a $50/ton carbon tax, enforced by the IRS, funded through a revenue-neutral rebate system, implemented in 18 months.\n\nAs the Negative, you\'ve decided to run a counterplan. Which counterplan type is the best strategic choice in this situation?',
              options: [
                {
                  text: 'Agent Counterplan — argue that individual states, not the federal government, should implement carbon pricing, pointing to California\'s cap-and-trade system as a superior, already-functioning model.',
                  isOptimal: true,
                  feedback: 'Strong choice. The Agent counterplan is well-suited here because there\'s a real-world example (California) to point to, a clear theoretical justification (state experimentation, decentralized approach, tailored regional policy), and genuine competition — you can\'t have both a federal and 50 different state carbon systems simultaneously. Your source documents note this is one of the clearest uses of the Agent counterplan: "If the Affirmation wants the federal government to do it, you present a counterplan to have the state run it, saying that the decentralized approach is better."'
                },
                {
                  text: 'Study Counterplan — argue that more research is needed before committing to a national carbon tax, and propose a 12-month independent study of carbon pricing mechanisms.',
                  isOptimal: false,
                  feedback: 'This could work but is weaker here. The Affirmative will respond that climate economists have studied carbon taxes extensively for decades — the evidence base is not the barrier. Your source documents warn that Study counterplans require you to prove "we don\'t know enough about the harms or the best way to proceed." On a well-studied policy like carbon pricing, that\'s a difficult case to make. An Agent counterplan gives you a more defensible competition story.'
                },
                {
                  text: 'Consultation Counterplan — argue that the U.S. should consult with major trading partners (Canada, EU, China) before implementing any carbon tax, to prevent competitive disadvantage.',
                  isOptimal: false,
                  feedback: 'Somewhat defensible but high-risk. The Affirmative will argue that consultation doesn\'t produce a forced choice — the U.S. can consult AND implement a carbon tax. Your source documents note that the Consultation counterplan\'s best use is when "the unilateral method proposed by the Affirmation will lead to significant disadvantages" — you\'d need strong evidence that unilateral implementation creates trade disadvantages specifically prevented by consultation. The Agent counterplan has cleaner competition in this round.'
                },
                {
                  text: 'No counterplan — defend the status quo and attack the Affirmative\'s harms and solvency instead.',
                  isOptimal: false,
                  feedback: 'A reasonable default but a missed opportunity here. The Affirmative likely has strong climate harms evidence, and pure defense can be an uphill battle. Your source documents note that counterplans are most valuable when "the wording of the resolution almost DEMANDS what the plan should be" — and a carbon tax resolution makes the Affirmative\'s plan fairly predictable. A well-prepared Agent counterplan lets you concede the harms (which are hard to deny) while competing on the implementation mechanism, where you have more flexibility.'
                }
              ]
            }
          }
        ]
      },

      /* ── Lesson 11.4 ────────────────────────────────────────────── */
      {
        id: 'lesson-11-4',
        title: 'Defeating Counterplans — STOP',
        steps: [
          {
            type: 'content',
            html: `
<h2>Defeating Counterplans — The STOP Method</h2>
<p>When the Negative team presents a counterplan, many Affirmative debaters panic. Don't. Your source documents make an important point: <em>"When the Negation presents a counterplan, they have handed you, the Affirmation, a huge part of your case on a silver platter. They have AGREED that the harms you presented DO EXIST and need solving."</em></p>

<p>The Negative has conceded your harms. Now your only job is to show that your plan is the better solution. Use the <span class="key-term" data-definition="The four-part Affirmative response to a counterplan: Solvency (CP doesn't solve), Theory (CP is procedurally unfair), Offense (advantages or disadvantages specific to the CP), Permutation (both plans can coexist — the CP isn't competitive).">STOP method</span> to systematically attack every pillar the counterplan stands on.</p>

<div style="display:grid;gap:12px;margin:20px 0;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">S — SOLVENCY</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Argue that the counterplan does not actually solve the harms the Affirmative presented. Apply the same solvency scrutiny the Negative uses against your plan — does the counterplan have a credible mechanism? A realistic timeline? A funded enforcement structure?</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example against Study CP: "A 12-month study solves nothing. During that study period, harms continue. At the end, the study's recommendations are non-binding. This counterplan doesn't solve — it delays."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">T — THEORY</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Challenge whether the counterplan is procedurally legitimate. Theory arguments claim the counterplan is unfair or reduces educational value. Examples: the counterplan is topical (if it's topical, it affirms the resolution), it's conditional (the Negative should have to commit), or it's too vague to evaluate.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "The Negative's Agent counterplan is topical — having states implement this policy is still topical government action under the resolution. A topical counterplan affirms the resolution, and the judge should reject it."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">O — OFFENSE</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">Run arguments that attack the counterplan directly — advantages the counterplan can't solve, or disadvantages the counterplan creates. This turns the net benefits calculation against the Negative's own proposal.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example against Consultation CP: "Consultation with industry groups will be captured by fossil fuel interests and delay action indefinitely — creating a disadvantage to the counterplan that doesn't apply to our plan."</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;padding:18px 20px;">
    <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);letter-spacing:.1em;margin-bottom:6px;">P — PERMUTATION</div>
    <p style="margin:0;color:var(--text-secondary);font-size:14px;line-height:1.6;">A <span class="key-term" data-definition="A test of competition: the Affirmative imagines doing both the plan and the counterplan simultaneously. If the permutation achieves the benefits of both without contradiction, the counterplan is not competitive — it doesn't force a choice.">permutation</span> is a thought experiment: <em>what if we do both the plan and the counterplan?</em> If the permutation works — if both can be done simultaneously without contradiction — the counterplan fails its competition burden. It doesn't force a choice between the two proposals. The Affirmative wins because there's no reason to reject their plan if the counterplan can also be adopted.</p>
    <div style="margin-top:12px;background:rgba(0,0,0,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--text-secondary);font-style:italic;">Example: "Permutation — do both the federal carbon tax AND consult with trading partners first. There's no logical reason we can't implement the plan AND engage in consultation. The plans aren't mutually exclusive. The counterplan therefore fails competition, and the judge has no reason to reject our plan."</div>
  </div>
</div>

<h3>STOP in Practice</h3>
<p>You don't need to win all four parts of STOP. Winning even one — especially the Permutation — can defeat the counterplan entirely. The Permutation is often the most powerful because it directly attacks the counterplan's most fundamental requirement: that it must force a choice.</p>
`
          },
          {
            type: 'exercise',
            exerciseType: 'scenario',
            exerciseConfig: {
              situation: 'The Affirmative has proposed a plan requiring all U.S. hospitals to adopt electronic health records (EHR) by a mandatory federal deadline, enforced by the Department of Health and Human Services.\n\nThe Negative has presented a Study Counterplan: A 12-month independent commission will study the costs and benefits of mandatory EHR adoption before any mandate is implemented.\n\nYou are the Affirmative\'s second speaker. Which STOP response gives you the strongest single argument against this counterplan?',
              options: [
                {
                  text: 'S — Solvency: The study counterplan doesn\'t solve the harms. During the 12-month study, hospitals that lack EHRs will continue experiencing medical errors from poor record-keeping. Studies are also non-binding — nothing guarantees action after the study ends.',
                  isOptimal: true,
                  feedback: 'Excellent use of S. This is the strongest single STOP argument here because the Solvency attack is airtight. The Study CP delays action while your harms continue accumulating. Your source documents specifically identify this argument: "argue that a study would take too long, meanwhile all the harms you presented would still be happening, and they need to be addressed NOW." You can also add that the study\'s mandate is unclear — who enforces action after the study? This makes the counterplan\'s solvency essentially zero. Combine this with a Permutation ("do both the mandate and a concurrent study") and you have a complete defeat of the CP.'
                },
                {
                  text: 'T — Theory: The study counterplan is procedurally unfair because it is conditional — the Negative might drop it later if it becomes inconvenient, making it impossible for us to prepare responses.',
                  isOptimal: false,
                  feedback: 'Procedural theory arguments can work but are often uphill battles with judges who prefer substance over procedure. A theory argument also doesn\'t engage the content of the counterplan — it feels like a dodge. In this round, your strongest argument is that the Study CP literally doesn\'t solve your harms (Solvency), which is a substantive argument that resonates with any judge. Save Theory for situations where the counterplan is truly procedurally abusive — like a CP that\'s clearly identical to the plan, or one that steals your funding.'
                },
                {
                  text: 'O — Offense: A study commission will be captured by hospital industry lobbyists who oppose mandatory EHR costs, leading to a biased report that recommends against the mandate and blocks any future policy action.',
                  isOptimal: false,
                  feedback: 'A legitimate Offense argument and worth making — but it\'s speculative. The Negative can answer that the commission will be independent and insulated from lobbying. Your source documents acknowledge this exact defense: "argue that the findings of the study will be biased and flawed" is one of the Affirmative\'s options, but they also warn the Negative can answer by specifying study composition. The Solvency argument (the study is non-binding and causes delay while harms continue) is more structurally sound and harder to rebut.'
                },
                {
                  text: 'P — Permutation: Do both the federal EHR mandate AND the independent study simultaneously. There\'s no reason we can\'t implement the mandate while also studying its effects — hospitals can comply with the mandate while researchers evaluate outcomes.',
                  isOptimal: false,
                  feedback: 'This is actually a strong permutation and worth making in a real round — but there\'s a subtle problem. The Study CP is designed to happen BEFORE the mandate, and the Negative can argue that sequencing matters: study first, then act. That gives them a response to your perm ("the perm destroys the net benefit of deliberate sequencing"). In contrast, the Solvency argument is unassailable: even if the study runs, it doesn\'t bind anyone to act, and harms continue in the interim. Lead with Solvency, then add the Perm as a backup.'
                }
              ]
            }
          }
        ]
      }

    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     UNIT 12 — Prep Time Mastery
  ═══════════════════════════════════════════════════════════════ */
  {
    id: 'unit-12',
    title: 'Prep Time Mastery',
    icon: '⏱️',
    lessons: [

      /* ── Lesson 12.1 ────────────────────────────────────────────── */
      {
        id: 'lesson-12-1',
        title: 'Your Prep Time',
        steps: [
          {
            type: 'content',
            html: `
<h2>Your Prep Time</h2>

<div style="background:rgba(212,168,67,.07);border-left:3px solid var(--gold-400);padding:12px 18px;border-radius:0 10px 10px 0;margin:12px 0;">
  <strong>Novice: 30 minutes</strong> of prep time · JV/Varsity: 20 minutes
</div>

<p>The moment the resolution is announced, the clock starts. No internet. No pre-written cases. Just you, your partner, and whatever you can build in the time you have. Both partners must work equally hard — at the end of prep, you need to be ready to go into battle.</p>

<p>Don't improvise prep. Follow a phase-by-phase process — it's the difference between walking in ready and scrambling through your first speech. Here's the novice breakdown (scale down proportionally for JV/V's 20 minutes):</p>

<div style="display:grid;gap:10px;margin:20px 0;">
  <div style="display:grid;grid-template-columns:80px 1fr;gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;overflow:hidden;">
    <div style="background:rgba(212,168,67,.15);padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(212,168,67,.2);">
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);">0–3</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);">MIN</div>
      </div>
    </div>
    <div style="padding:16px 20px;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Read and Identify</div>
      <p style="margin:0;font-size:13px;color:var(--text-secondary);line-height:1.6;">Read the resolution — more than once. Identify the type (Fact, Value, Policy). Find the key terms you'll need to define. Get a gut read on which side is stronger. Don't start writing yet.</p>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:80px 1fr;gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;overflow:hidden;">
    <div style="background:rgba(212,168,67,.15);padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(212,168,67,.2);">
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);">3–9</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);">MIN</div>
      </div>
    </div>
    <div style="padding:16px 20px;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Brainstorm Together</div>
      <p style="margin:0;font-size:13px;color:var(--text-secondary);line-height:1.6;">Both partners brainstorm every argument you can think of — for your side AND the opponent's. Don't evaluate yet; just generate. Think contentions, harms, definitions that help your side, examples from history, science, economics, current events.</p>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:80px 1fr;gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;overflow:hidden;">
    <div style="background:rgba(212,168,67,.15);padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(212,168,67,.2);">
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);">9–12</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);">MIN</div>
      </div>
    </div>
    <div style="padding:16px 20px;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Rank Your Arguments</div>
      <p style="margin:0;font-size:13px;color:var(--text-secondary);line-height:1.6;">Pick your 2–3 strongest contentions. Cut weak arguments — two excellent contentions beats five mediocre ones. Decide which leads (strongest goes first), pick your criteria, and nail down definitions.</p>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:80px 1fr;gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;overflow:hidden;">
    <div style="background:rgba(212,168,67,.15);padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(212,168,67,.2);">
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);">12–22</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);">MIN</div>
      </div>
    </div>
    <div style="padding:16px 20px;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Divide and Build</div>
      <p style="margin:0;font-size:13px;color:var(--text-secondary);line-height:1.6;">Split up. Speaker 1: write the intro, definitions, criteria, and first contention. Speaker 2: write the second contention and prepare to cross-apply and refute. Write enough detail to speak fluently — not a script, but full sentences for key claims and evidence. Make sure your arguments have enough evidence.</p>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:80px 1fr;gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;overflow:hidden;">
    <div style="background:rgba(212,168,67,.15);padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(212,168,67,.2);">
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);">22–26</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);">MIN</div>
      </div>
    </div>
    <div style="padding:16px 20px;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Share and Align</div>
      <p style="margin:0;font-size:13px;color:var(--text-secondary);line-height:1.6;">Come back together. Share what you've written. Both partners should know both speeches — you may get POIs on your partner's contentions. Confirm definitions and criteria match. Make sure your contentions don't contradict each other.</p>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:80px 1fr;gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(212,168,67,.3);border-radius:12px;overflow:hidden;">
    <div style="background:rgba(212,168,67,.15);padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(212,168,67,.2);">
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gold-400);">26–30</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);">MIN</div>
      </div>
    </div>
    <div style="padding:16px 20px;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Predict Their Moves</div>
      <p style="margin:0;font-size:13px;color:var(--text-secondary);line-height:1.6;">What are the 2–3 most obvious arguments against your position? How will you respond? What are the weakest parts of your case they'll attack first? A team that has pre-loaded their opponent's best arguments enters the round with a massive advantage.</p>
    </div>
  </div>
</div>

<h3>The Cardinal Rule of Prep Time</h3>
<div style="background:rgba(255,255,255,.04);border-left:3px solid var(--gold-400);padding:14px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
  <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;"><strong>Never spend all your prep time writing — leave time to think.</strong> A debate round is not an essay you prepared in advance; it's a live exchange. The team that spends 29 of their 30 minutes writing and no time thinking about the opponent's strategy enters the round tactically blind. The team that understands both sides' arguments can respond, adapt, and pivot in real time.</p>
</div>
`
          },
          {
            type: 'exercise',
            exerciseType: 'fillBlank',
            exerciseConfig: {
              instruction: 'Simulated Prep Time Challenge — You have just received the following resolution:\n\n"The USFG should guarantee universal childcare."\n\nYou are the AFFIRMATIVE team. Work through each prep phase as if you have exactly 5 minutes (compressed from 30 for novice). Write your actual responses — not descriptions of what you would write.',
              fields: [
                {
                  label: 'Phase 1 (Read & Identify) — What type of resolution is this? What are the key terms to define? Which side is stronger?',
                  placeholder: 'This is a [type] resolution. Key terms to define: … My initial read: …',
                  modelAnswer: 'This is a Policy resolution — it contains "should" and requires the Affirmative to propose a change to the status quo. Key terms: "USFG" (the U.S. federal government — Congress, executive agencies), "guarantee" (mandate access, not merely offer — this is a strong word that locks us in), "universal childcare" (publicly funded childcare accessible to all families regardless of income). My initial read: The Affirmative has strong ground. The U.S. is one of the only wealthy nations without universal childcare, and the economic and equity arguments are well-documented. The Negative\'s strongest argument is cost/feasibility.'
                },
                {
                  label: 'Phase 2 (Brainstorm) — List arguments for the Affirmative AND anticipate the Negative\'s strongest arguments',
                  placeholder: 'Affirmative arguments: … Negative arguments they\'ll likely make: …',
                  modelAnswer: 'Affirmative arguments: (1) Childcare costs are a barrier to work — especially for low-income mothers who earn less than childcare costs. (2) Early childhood development: children in quality early programs have better educational outcomes. (3) Economic productivity: universal childcare increases workforce participation, especially among women. (4) Equity: wealthy families access private childcare easily; poor families can\'t — this compounds inequality. (5) Precedent: France, Germany, Nordic countries have universal childcare with measurable benefits.\n\nNegative arguments they\'ll make: (1) Cost — this would cost hundreds of billions annually. (2) Quality concerns — government-run childcare may not match private options. (3) Parents should choose — not everyone wants institutionalized childcare. (4) Federalism — this should be a state-level decision.'
                },
                {
                  label: 'Phase 3 (Rank & Select) — Which 2 contentions will you lead with and in what order? State your criteria.',
                  placeholder: 'Our top 2 contentions are… Our criteria will be… because…',
                  modelAnswer: 'Our top two contentions: (1) LEAD: Economic equity — childcare costs disproportionately burden low-income working parents, especially women, creating a structural trap where working costs more than not working. This is our strongest because it\'s specific, well-evidenced, and hard to deny. (2) SECOND: Child development — universal early childhood education produces measurable improvements in educational outcomes, especially for low-income children. Our criteria: "Net benefits" — we ask the judge to evaluate whether the plan produces more overall good than harm for American families. This is a policy debate and net benefits is the appropriate standard.'
                },
                {
                  label: 'Phase 4 (Build) — Write claim, evidence, warrant, and impact for your first (strongest) contention',
                  placeholder: 'Contention 1: … Evidence: … Warrant: … Impact: …',
                  modelAnswer: 'Contention 1: The childcare cost crisis forces low-income parents — especially women — out of the workforce, deepening poverty. Evidence — Subpoint A: The Economic Policy Institute found that childcare costs exceed median rent in 34 states, consuming over 20% of median family income. Subpoint B: The Center for American Progress found that 2 million parents — 81% of them mothers — reported leaving the workforce or cutting hours specifically due to childcare costs. Warrant: This isn\'t a personal choice — it\'s a structural economic trap. A family earning $50,000 paying $20,000 for childcare loses the math on working. The people most harmed by the status quo are exactly those least able to absorb the loss. Impact: Under net benefits, a plan that allows 2 million parents to re-enter the workforce produces immediate, measurable economic gains for families and the national economy. That impact is decisive.'
                },
                {
                  label: 'Phase 5 (Predict) — What are the two strongest Negative attacks, and how will you respond?',
                  placeholder: 'Their strongest attack will be… My response: … Their second attack: … My response: …',
                  modelAnswer: 'Their strongest attack: "This costs hundreds of billions — the U.S. can\'t afford it." My response: First, the economic cost of NOT having universal childcare is also hundreds of billions — in lost workforce productivity, welfare costs, and foregone tax revenue from parents who can\'t work. Second, countries with universal childcare fund it through a combination of employer contributions and income-scaled taxes. The net cost to government is reduced by the increased tax base from higher workforce participation. Cost is manageable when you account for returns.\n\nTheir second attack: "Parents should choose their childcare — government programs won\'t match private quality." My response: Our plan guarantees access, not compulsion. Parents who prefer private childcare can still use it. Universal childcare expands options for families who currently have none. On quality: the Negative assumes government programs are inferior, but France and Denmark — both with universal programs — consistently rank higher than the U.S. on early childhood development metrics.'
                }
              ]
            }
          }
        ]
      }

    ]
  }

];
