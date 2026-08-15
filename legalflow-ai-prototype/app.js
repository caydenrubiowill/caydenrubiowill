const intake = document.getElementById('intake');
const runBtn = document.getElementById('runBtn');
const resetBtn = document.getElementById('resetBtn');
const alternateBtn = document.getElementById('alternateBtn');
const factsEl = document.getElementById('facts');
const missingEl = document.getElementById('missing');
const routingEl = document.getElementById('routing');
const validationEl = document.getElementById('validation');
const summaryEl = document.getElementById('summary');
const followupWrap = document.getElementById('followupWrap');
const followupsEl = document.getElementById('followups');
const auditEl = document.getElementById('audit');
const approveBtn = document.getElementById('approveBtn');
const changesBtn = document.getElementById('changesBtn');
const approvalState = document.getElementById('approvalState');
const extractionStatus = document.getElementById('extractionStatus');
const stages = [...document.querySelectorAll('.stage')];

const defaultText = intake.value;
const alternateText = "Taylor Morgan is a Nevada physician relocating part-time to Arizona. Taylor mentions a medical practice, two homes, retirement accounts, and a family investment LLC, but gives no approximate asset values or information about current claims. Taylor asks for a consultation and prefers a phone call.";

function stamp() { return new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'}); }
function log(message) {
  const li = document.createElement('li');
  li.innerHTML = `<time>${stamp()}</time><span>${message}</span>`;
  auditEl.appendChild(li);
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function setStage(n) {
  stages.forEach((stage, i) => {
    stage.classList.remove('active');
    if (i < n) stage.classList.add('done');
    else if (i === n) stage.classList.add('active');
  });
}
function resetUI() {
  stages.forEach((s,i) => { s.classList.toggle('active', i===0); s.classList.remove('done'); });
  factsEl.className = 'facts empty-state'; factsEl.textContent = 'Run the workflow to populate structured facts.';
  missingEl.className = 'clean-list muted'; missingEl.innerHTML = '<li>Awaiting analysis</li>';
  routingEl.className = 'routing muted'; routingEl.textContent = 'Awaiting analysis';
  validationEl.className = 'validation muted'; validationEl.textContent = 'Awaiting analysis';
  summaryEl.className = 'summary muted'; summaryEl.textContent = 'No summary generated yet.';
  followupWrap.classList.add('hidden'); followupsEl.innerHTML = '';
  auditEl.innerHTML = '<li><time>--:--:--</time><span>Demo ready. No data has left this browser.</span></li>';
  approveBtn.disabled = true; changesBtn.disabled = true;
  approvalState.className = 'approval-state'; approvalState.textContent = 'Locked until validation completes.';
  extractionStatus.className = 'tag idle'; extractionStatus.textContent = 'Waiting';
}
function analyzeText(text) {
  const lower = text.toLowerCase();
  const isJordan = lower.includes('jordan');
  const state = lower.includes('arizona') ? 'Arizona' : lower.includes('nevada') ? 'Nevada / Arizona' : 'Not stated';
  const assets = lower.includes('2.4m') ? 'Approx. $2.4M + business interests' : 'Multiple assets; value not stated';
  const entities = lower.includes('llc') ? (isJordan ? 'At least one rental-property LLC' : 'Family investment LLC + medical practice') : 'Not stated';
  const concern = lower.includes('liability') ? 'Future business liability' : 'Asset-protection consultation';
  const contact = lower.includes('email') ? 'Email' : lower.includes('phone') ? 'Phone' : 'Not stated';
  const missing = isJordan
    ? ['Any current or threatened claims/litigation', 'Ownership / title details for remaining properties', 'Business entity structure and ownership', 'Existing estate or asset-protection planning documents']
    : ['Approximate asset values', 'Any current or threatened claims/litigation', 'Ownership/title details for homes', 'Medical-practice entity structure', 'Existing planning documents'];
  return { state, assets, entities, concern, contact, missing, isJordan };
}
async function runWorkflow() {
  const text = intake.value.trim();
  if (!text) return;
  resetUI(); runBtn.disabled = true; alternateBtn.disabled = true;
  log('Intake captured in local browser session.');
  const data = analyzeText(text);

  setStage(1); await sleep(330); log('Extraction stage normalized intake into a fixed schema.');
  extractionStatus.className = 'tag ok'; extractionStatus.textContent = 'Schema valid';
  factsEl.className = 'facts';
  const facts = [
    ['Jurisdiction / location', data.state], ['Asset picture', data.assets], ['Entities mentioned', data.entities],
    ['Primary concern', data.concern], ['Contact preference', data.contact], ['Source confidence', 'Intake-supplied facts only']
  ];
  factsEl.innerHTML = facts.map(([k,v]) => `<div class="fact"><span>${k}</span><strong>${v}</strong></div>`).join('');

  setStage(2); await sleep(330); log(`Completeness stage identified ${data.missing.length} information gaps.`);
  missingEl.className = 'clean-list'; missingEl.innerHTML = data.missing.map(x => `<li>${x}</li>`).join('');

  setStage(3); await sleep(330); log('Matter routing stage created an internal review destination; no legal conclusion made.');
  routingEl.className = 'routing';
  routingEl.innerHTML = '<strong>Asset Protection - New Inquiry</strong><p>Priority: Standard intake review</p><p>Next owner: Attorney / qualified intake staff</p><p>Automation authority: Administrative routing only</p>';

  setStage(4); await sleep(330); log('Summary stage generated a concise staff brief from extracted facts.');
  summaryEl.className = 'summary';
  summaryEl.textContent = data.isJordan
    ? 'Fictional prospective client Jordan Lee reports an Arizona consulting business, three rental properties, and approximately $2.4M in investment and real-estate assets. At least one rental is held in an LLC. The stated concern is future business liability. The inquiry requests information needed before an asset-protection analysis. Key ownership, entity-structure, existing-planning, and current-claim details remain incomplete.'
    : 'Fictional prospective client Taylor Morgan is a Nevada physician planning to spend part of the year in Arizona. The intake mentions a medical practice, two homes, retirement accounts, and a family investment LLC. Approximate asset values and current-claim information were not supplied. The inquiry requests a consultation, with phone as the preferred contact method.';
  followupWrap.classList.remove('hidden');
  followupsEl.innerHTML = data.missing.slice(0,4).map(x => `<li>Clarify: ${x}</li>`).join('');

  setStage(5); await sleep(330); log('Validation stage checked schema completeness, source grounding, and prohibited autonomous advice.');
  validationEl.className = 'validation';
  validationEl.innerHTML = `
    <div class="metric"><span>Schema validation</span><b class="good">PASS</b></div>
    <div class="metric"><span>Unsupported factual claims</span><b class="good">0 detected</b></div>
    <div class="metric"><span>Legal advice generated</span><b class="good">No</b></div>
    <div class="metric"><span>Human review gate</span><b class="good">Enforced</b></div>`;

  setStage(6); await sleep(250); log('Package locked at human approval gate. No downstream action executed.');
  approveBtn.disabled = false; changesBtn.disabled = false;
  approvalState.textContent = 'Validation complete. Awaiting authorized human decision.';
  runBtn.disabled = false; alternateBtn.disabled = false;
}

approveBtn.addEventListener('click', () => {
  approvalState.className = 'approval-state approved';
  approvalState.textContent = 'Approved for internal next-step processing (simulation only).';
  log('Human reviewer approved the internal package. Simulation ends here.');
});
changesBtn.addEventListener('click', () => {
  approvalState.className = 'approval-state changes';
  approvalState.textContent = 'Returned for changes. No downstream action permitted.';
  log('Human reviewer requested changes; workflow returned to review queue.');
});
runBtn.addEventListener('click', runWorkflow);
resetBtn.addEventListener('click', () => { intake.value = defaultText; resetUI(); });
alternateBtn.addEventListener('click', () => { intake.value = intake.value.includes('Jordan') ? alternateText : defaultText; resetUI(); });
