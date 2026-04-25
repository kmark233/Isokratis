'use strict';
// ═══════════════════════════════════════════
//  NOTES — δι κε Νη Πα Βου Γα Γα# Δι Κε Ζω + Ζω♭
// ═══════════════════════════════════════════
const ALL_NOTES = [
  {key:'di_lo', gr:'δι', en:'di', ro:'di', bg:'ди', ru:'ди', acc:'', lower:true,  hz:110.00},
  {key:'ke_lo', gr:'κε', en:'ke', ro:'ke', bg:'ке', ru:'ке', acc:'', lower:true,  hz:123.47},
  {key:'ni',    gr:'Νη', en:'Ni', ro:'Ni', bg:'Ни', ru:'Ни', acc:'', lower:false, hz:146.83},
  {key:'pa',    gr:'Πα', en:'Pa', ro:'Pa', bg:'Па', ru:'Па', acc:'', lower:false, hz:164.81},
  {key:'vou',   gr:'Βου',en:'Vou',ro:'Vu', bg:'Ву', ru:'Ву', acc:'', lower:false, hz:181.47},
  {key:'ga',    gr:'Γα', en:'Ga', ro:'Ga', bg:'Га', ru:'Га', acc:'', lower:false, hz:196.00},
  {key:'gash',  gr:'Γα', en:'Ga', ro:'Ga', bg:'Га', ru:'Га', acc:'♯',lower:false, hz:203.69},
  {key:'di',    gr:'Δι', en:'Di', ro:'Di', bg:'Ди', ru:'Ди', acc:'', lower:false, hz:220.00},
  {key:'ke',    gr:'Κε', en:'Ke', ro:'Ke', bg:'Ке', ru:'Ке', acc:'', lower:false, hz:246.94},
  {key:'zob',   gr:'Ζω', en:'Zo', ro:'Zo', bg:'Зо', ru:'Зо', acc:'', lower:false, hz:271.89},
  {key:'zob2',  gr:'Ζω', en:'Zo', ro:'Zo', bg:'Зо', ru:'Зо', acc:'♭',lower:false, hz:266.71},
];

const DEFAULT_LAYOUT = ['di_lo','ke_lo','zob','ni','pa','gash','vou','ga','zob2','di','ke'];

// ═══════════════════════════════════════════
//  PRESET SETS
// ═══════════════════════════════════════════
const PRESET_SETS = {
  set5: {
    id:'preset_5',
    name:{gr:'5 Φωνές',en:'5 Voices',ro:'5 Voci',bg:'5 Гласа',ru:'5 Голосов'},
    notes:['ni','pa','di','ke','zob2'],
    isPreset:true
  },
  set10: {
    id:'preset_10',
    name:{gr:'10 Φωνές',en:'10 Voices',ro:'10 Voci',bg:'10 Гласа',ru:'10 Голосов'},
    notes:['di_lo','ke_lo','ni','pa','vou','ga','gash','di','ke','zob2'],
    isPreset:true
  }
};

// ═══════════════════════════════════════════
//  TRANSLATIONS
// ═══════════════════════════════════════════
const T = {
  gr:{
    voices:'Φωνές', addvoice:'Προσθήκη Φωνής', changeset:'Αλλαγή Συνόλου',
    diapason:'Διαπασών', dhz:'Κε · 220.00 Hz', dsub:'Πάτα για ακρόαση 5″',
    pitch:'Ανιχνευτής Νότας', pdstart:'Έναρξη', pdstop:'Διακοπή',
    layout:'Διάταξη', layoutsub:'Σύρε για αλλαγή σειράς', resetlayout:'↺ Επαναφορά',
    settings:'Ρυθμίσεις', lang:'Γλώσσα', theme:'Θέμα',
    fadein:'Fade In', fadeinsub:'Ομαλή έναρξη',
    fadeout:'Fade Out', fadesub:'Ομαλό σβήσιμο',
    synth:'Συνθετικός Ήχος', synthsub:'Default χωρίς φωνή',
    audio:'Ήχος', about:'Πληροφορίες', aboutsub:'Ψηφιακός Βυζαντινός Ισοκράτης',
    abouttext:'Εφαρμογή ψαλτικής για βυζαντινό ισοκράτημα.',
    tcdark:'Σκοτεινό', tclight:'Ανοιχτό', tcwarm:'Περγαμηνή',
    semi:'Ημιτόνια', moria:'Μόρια',
    mv_title:'Νέα Φωνή', mv_name:'Όνομα Φωνής', mv_notes:'Φόρτωσε Φθόγγους', mv_save:'Αποθήκευση',
    sp_sub:'Επιλέξτε σύνολο φωνών', sp_voices:'Φωνές', sp_or:'— ή —',
    sp_custom:'Χρήση προσωπικής φωνής',
    sp_notes5:'Νη · Πα · Δι · Κε · Ζω♭',
    sp_notes10:'δι · κε · Νη · Πα · Βου · Γα · Γα♯ · Δι · Κε · Ζω♭',
    load_tag:'Βυζαντινός Ισοκράτης',
    tap:'Πάτα', idle:'—', notes_count:'φθόγγοι',
    pdnotsupported:'⚠ Απαιτεί HTTPS', pdhttps:'Άνοιξε από Cloudflare URL',
    pdnoperm:'⚠ Απαιτείται άδεια μικροφώνου',
  },
  en:{
    voices:'Voices', addvoice:'Add Voice', changeset:'Change Set',
    diapason:'Tuning Fork', dhz:'Ke · 220.00 Hz', dsub:'Tap to hear 5″',
    pitch:'Pitch Detector', pdstart:'Start', pdstop:'Stop',
    layout:'Note Layout', layoutsub:'Drag to reorder', resetlayout:'↺ Reset',
    settings:'Settings', lang:'Language', theme:'Theme',
    fadein:'Fade In', fadeinsub:'Smooth start',
    fadeout:'Fade Out', fadesub:'Smooth stop',
    synth:'Synthetic Sound', synthsub:'Default without voice',
    audio:'Audio', about:'Information', aboutsub:'Digital Byzantine Isokratis',
    abouttext:'App for Byzantine isokratima chanting.',
    tcdark:'Dark', tclight:'Light', tcwarm:'Parchment',
    semi:'Semitones', moria:'Microtones',
    mv_title:'New Voice', mv_name:'Voice Name', mv_notes:'Load Notes', mv_save:'Save',
    sp_sub:'Select voice set', sp_voices:'Voices', sp_or:'— or —',
    sp_custom:'Use personal voice',
    sp_notes5:'Ni · Pa · Di · Ke · Zo♭',
    sp_notes10:'di · ke · Ni · Pa · Vou · Ga · Ga♯ · Di · Ke · Zo♭',
    load_tag:'Byzantine Isokratis',
    tap:'Tap', idle:'—', notes_count:'notes',
    pdnotsupported:'⚠ Requires HTTPS', pdhttps:'Open from Cloudflare URL',
    pdnoperm:'⚠ Microphone permission required',
  },
  ro:{
    voices:'Voci', addvoice:'Adaugă Voce', changeset:'Schimbă Setul',
    diapason:'Diapazon', dhz:'Ke · 220.00 Hz', dsub:'Atinge pentru 5″',
    pitch:'Detector de Notă', pdstart:'Start', pdstop:'Stop',
    layout:'Aranjament Note', layoutsub:'Trage pentru reordonare', resetlayout:'↺ Resetare',
    settings:'Setări', lang:'Limbă', theme:'Temă',
    fadein:'Fade In', fadeinsub:'Start lin',
    fadeout:'Fade Out', fadesub:'Stop lin',
    synth:'Sunet Sintetic', synthsub:'Implicit fără voce',
    audio:'Audio', about:'Informații', aboutsub:'Isocrat Bizantin Digital',
    abouttext:'Aplicație pentru isocratima bizantină.',
    tcdark:'Întunecat', tclight:'Deschis', tcwarm:'Pergament',
    semi:'Semitonuri', moria:'Microtonuri',
    mv_title:'Voce Nouă', mv_name:'Nume Voce', mv_notes:'Încarcă Note', mv_save:'Salvare',
    sp_sub:'Selectați setul de voci', sp_voices:'Voci', sp_or:'— sau —',
    sp_custom:'Folosește voce personală',
    sp_notes5:'Ni · Pa · Di · Ke · Zo♭',
    sp_notes10:'di · ke · Ni · Pa · Vu · Ga · Ga♯ · Di · Ke · Zo♭',
    load_tag:'Isocrat Bizantin',
    tap:'Atinge', idle:'—', notes_count:'note',
    pdnotsupported:'⚠ Necesită HTTPS', pdhttps:'Deschide din Cloudflare URL',
    pdnoperm:'⚠ Permisiune microfon necesară',
  },
  bg:{
    voices:'Гласове', addvoice:'Добави Глас', changeset:'Смени Набора',
    diapason:'Камертон', dhz:'Ке · 220.00 Hz', dsub:'Натисни за 5″',
    pitch:'Детектор на Нота', pdstart:'Старт', pdstop:'Спри',
    layout:'Наредба на Ноти', layoutsub:'Плъзни за пренареждане', resetlayout:'↺ Нулиране',
    settings:'Настройки', lang:'Език', theme:'Тема',
    fadein:'Fade In', fadeinsub:'Плавно начало',
    fadeout:'Fade Out', fadesub:'Плавен край',
    synth:'Синтетичен Звук', synthsub:'По подразбиране без глас',
    audio:'Звук', about:'Информация', aboutsub:'Цифров Византийски Исократ',
    abouttext:'Приложение за византийски исократима.',
    tcdark:'Тъмна', tclight:'Светла', tcwarm:'Пергамент',
    semi:'Полутонове', moria:'Микротонове',
    mv_title:'Нов Глас', mv_name:'Име на Глас', mv_notes:'Зареди Ноти', mv_save:'Запази',
    sp_sub:'Изберете набор от гласове', sp_voices:'Гласове', sp_or:'— или —',
    sp_custom:'Използвай личен глас',
    sp_notes5:'Ни · Па · Ди · Ке · Зо♭',
    sp_notes10:'ди · ке · Ни · Па · Ву · Га · Га♯ · Ди · Ке · Зо♭',
    load_tag:'Византийски Исократ',
    tap:'Натисни', idle:'—', notes_count:'ноти',
    pdnotsupported:'⚠ Изисква HTTPS', pdhttps:'Отвори от Cloudflare URL',
    pdnoperm:'⚠ Нужно е разрешение за микрофон',
  },
  ru:{
    voices:'Голоса', addvoice:'Добавить Голос', changeset:'Изменить Набор',
    diapason:'Камертон', dhz:'Ке · 220.00 Hz', dsub:'Нажми для 5″',
    pitch:'Детектор Ноты', pdstart:'Старт', pdstop:'Стоп',
    layout:'Расположение Нот', layoutsub:'Перетащи для изменения', resetlayout:'↺ Сброс',
    settings:'Настройки', lang:'Язык', theme:'Тема',
    fadein:'Fade In', fadeinsub:'Плавное начало',
    fadeout:'Fade Out', fadesub:'Плавное завершение',
    synth:'Синтетический Звук', synthsub:'По умолчанию без голоса',
    audio:'Аудио', about:'Информация', aboutsub:'Цифровой Византийский Исократ',
    abouttext:'Приложение для византийского исократимы.',
    tcdark:'Тёмная', tclight:'Светлая', tcwarm:'Пергамент',
    semi:'Полутоны', moria:'Микротоны',
    mv_title:'Новый Голос', mv_name:'Название Голоса', mv_notes:'Загрузить Ноты', mv_save:'Сохранить',
    sp_sub:'Выберите набор голосов', sp_voices:'Голоса', sp_or:'— или —',
    sp_custom:'Использовать свой голос',
    sp_notes5:'Ни · Па · Ди · Ке · Зо♭',
    sp_notes10:'ди · ке · Ни · Па · Ву · Га · Га♯ · Ди · Ке · Зо♭',
    load_tag:'Византийский Исократ',
    tap:'Нажми', idle:'—', notes_count:'ноты',
    pdnotsupported:'⚠ Требует HTTPS', pdhttps:'Открой через Cloudflare URL',
    pdnoperm:'⚠ Требуется доступ к микрофону',
  },
};

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
// ── Persistent settings ─────────────────────────────────
const FADE_SIZES = { small:0.3, medium:0.8, large:2.0 };
const XFADE_TIME = 0.35; // legacy compat
const DEFAULT_SETTINGS = {
  lang:       'gr',
  theme:      'dark',
  fadeIn:     'medium',   // small | medium | large | off
  fadeOut:    'medium',
  synthEnabled: true,
  voiceSet:   null,       // 'preset_5' | 'preset_10' | custom id
};
let appSettings = {...DEFAULT_SETTINGS};

function saveSettings(){
  localStorage.setItem('eiso_settings', JSON.stringify(appSettings));
}
function loadSettings(){
  try{
    const s = localStorage.getItem('eiso_settings');
    if(s) appSettings = {...DEFAULT_SETTINGS, ...JSON.parse(s)};
  }catch(e){}
}
function getFadeInTime(){
  if(appSettings.fadeIn==='off') return 0;
  return FADE_SIZES[appSettings.fadeIn] ?? FADE_SIZES.medium;
}
function getFadeOutTime(){
  if(appSettings.fadeOut==='off') return 0;
  return FADE_SIZES[appSettings.fadeOut] ?? FADE_SIZES.medium;
}
function getSynth(){ return appSettings.synthEnabled === true || appSettings.synthEnabled === undefined; }
// Legacy helpers (keep for compat)
function getFadeIn(){ return appSettings.fadeIn !== 'off'; }
// DOM toggle helpers removed — use appSettings
function getFadeOut(){ return appSettings.fadeOut !== 'off'; }

// ── Runtime state ────────────────────────────────────────
let lang='gr', currentTheme='dark';
let noteLayout=[...DEFAULT_LAYOUT];
let voices=[], activeVoiceId=null;
let audioBuffers={}, pendingFiles={};
let actx, masterGain, loopSrc;
let playing=false, currentKey=null;
let vol=0.786, muted=false;
let semis=0, moriaV=0;
let repTimer, repIntvl;
let isMinimized=false;

const HARMONICS=[
  {r:1.0,g:1.0},{r:2.0,g:0.5},{r:3.0,g:0.28},
  {r:4.0,g:0.16},{r:5.0,g:0.09},{r:6.0,g:0.05}
];
let droneOscs=[], droneVibLFO=null, droneVibGain=null, droneMGain=null;
let pdActive=false, pdStream=null, pdAnalyser=null, pdActx=null, pdRaf=null;
let pdLastNote='', pdStableCount=0;

// ═══════════════════════════════════════════
//  INDEXEDDB
// ═══════════════════════════════════════════
const DB='eiso_db1', STORE='voices';
let db;
function openDB(){
  return new Promise((res,rej)=>{
    const r=indexedDB.open(DB,1);
    r.onupgradeneeded=e=>e.target.result.createObjectStore(STORE,{keyPath:'id'});
    r.onsuccess=e=>{db=e.target.result;res();};
    r.onerror=rej;
  });
}
const dbSave=v=>new Promise((res,rej)=>{const t=db.transaction(STORE,'readwrite');t.objectStore(STORE).put(v);t.oncomplete=res;t.onerror=rej;});
const dbDel=id=>new Promise((res,rej)=>{const t=db.transaction(STORE,'readwrite');t.objectStore(STORE).delete(id);t.oncomplete=res;t.onerror=rej;});
const dbAll=()=>new Promise((res,rej)=>{const t=db.transaction(STORE,'readonly');const r=t.objectStore(STORE).getAll();r.onsuccess=e=>res(e.target.result);r.onerror=rej;});

// ═══════════════════════════════════════════
//  AUDIO ENGINE
// ═══════════════════════════════════════════
function initCtx(){
  if(actx)return;
  actx=new(window.AudioContext||window.webkitAudioContext)({sampleRate:44100});
  masterGain=actx.createGain();
  masterGain.gain.value=vol;
  masterGain.connect(actx.destination);
}
function getFadeIn(){ return appSettings.fadeIn !== 'off'; }
function getFadeOut(){ return appSettings.fadeOut !== 'off'; }
// getSynth defined above
function getRate(){return Math.pow(2,(semis*100+moriaV*(1200/72))/1200);}

function stopSynth(fade=0){
  if(!droneMGain||!actx)return;
  const mg=droneMGain;
  if(fade>0){mg.gain.setValueAtTime(mg.gain.value,actx.currentTime);mg.gain.linearRampToValueAtTime(0,actx.currentTime+fade);}
  const st=actx.currentTime+fade+0.05;
  droneOscs.forEach(({o})=>{try{o.stop(st);}catch(e){}});
  if(droneVibLFO){try{droneVibLFO.stop(st);}catch(e){}}
  droneOscs=[];droneVibLFO=droneVibGain=null;
  setTimeout(()=>{try{mg.disconnect();}catch(e){}}, (fade+0.15)*1000);
  droneMGain=null;
}

function startSynth(key){
  if(!actx)return;
  stopSynth(0);
  const note=ALL_NOTES.find(n=>n.key===key);
  const freq=(note?note.hz:220)*getRate();
  droneMGain=actx.createGain();
  droneMGain.gain.setValueAtTime(0,actx.currentTime);
  const fiT=getFadeInTime();
  if(fiT>0){droneMGain.gain.linearRampToValueAtTime(muted?0:vol,actx.currentTime+fiT);}
  else{droneMGain.gain.setValueAtTime(muted?0:vol,actx.currentTime);}
  droneMGain.connect(masterGain);
  const filt=actx.createBiquadFilter();
  filt.type='lowpass';filt.frequency.value=freq*7;filt.Q.value=0.7;
  filt.connect(droneMGain);
  droneVibLFO=actx.createOscillator();droneVibLFO.type='sine';droneVibLFO.frequency.value=5.2;
  droneVibGain=actx.createGain();droneVibGain.gain.value=freq*0.003;
  droneVibLFO.connect(droneVibGain);droneVibLFO.start();
  droneOscs=[];
  HARMONICS.forEach(h=>{
    const o=actx.createOscillator();o.type='sine';o.frequency.value=freq*h.r;
    if(h.r===1)droneVibGain.connect(o.frequency);
    const g=actx.createGain();g.gain.value=h.g;
    o.connect(g);g.connect(filt);o.start();
    droneOscs.push({o,g});
  });
}

function retuneSynth(glideTime=0){
  if(!droneOscs.length||!actx||!currentKey)return;
  const note=ALL_NOTES.find(n=>n.key===currentKey);
  const freq=(note?note.hz:220)*getRate();
  const now=actx.currentTime;
  droneOscs.forEach(({o},i)=>{
    const h=HARMONICS[i]; if(!h)return;
    if(glideTime>0.01){
      // Exponential glide — sounds natural like a voice
      o.frequency.cancelScheduledValues(now);
      o.frequency.setValueAtTime(o.frequency.value||freq*h.r, now);
      o.frequency.exponentialRampToValueAtTime(Math.max(0.001,freq*h.r), now+glideTime);
    } else {
      o.frequency.setTargetAtTime(freq*h.r, now, 0.04);
    }
  });
  if(droneVibGain) droneVibGain.gain.setTargetAtTime(freq*0.003, now, 0.04);
}

// XFADE_TIME defined above

function selectNote(key){
  initCtx();
  if(actx.state==='suspended') actx.resume();
  if(currentKey===key&&playing){ stopNote(); return; }

  const hasBuf  = !!audioBuffers[key];
  const hasSynth = getSynth();
  if(!hasBuf && !hasSynth) return;

  const now        = actx.currentTime;
  const targetVol  = muted ? 0 : vol;
  const isSwitch   = playing && (loopSrc || droneMGain);
  const glideTime  = getFadeInTime();   // reuse fade-in time as glide duration

  // ── SYNTH → SYNTH : pitch glide (no stop/restart) ────
  if(isSwitch && droneMGain && !loopSrc && !hasBuf && hasSynth){
    currentKey = key; playing = true;
    retuneSynth(glideTime);
    _updateNoteUI(key);
    updateUI();
    return;
  }

  // ── BUFFER → BUFFER : crossfade ──────────────────────
  if(loopSrc){
    const old = loopSrc; loopSrc = null;
    const xfade = Math.min(glideTime, 0.5); // crossfade max 0.5s for buffers
    const fg = actx.createGain();
    try{ old.disconnect(); }catch(e){}
    old.connect(fg); fg.connect(actx.destination);
    fg.gain.setValueAtTime(targetVol, now);
    fg.gain.linearRampToValueAtTime(0, now + xfade);
    setTimeout(()=>{
      try{old.stop();}catch(e){}
      try{fg.disconnect();}catch(e){}
    }, (xfade+0.1)*1000);
  }

  // ── Stop synth if switching away from it ─────────────
  if(droneMGain) stopSynth(isSwitch ? Math.min(glideTime,0.4) : 0);

  // ── Start new source ──────────────────────────────────
  if(hasBuf){
    const src = actx.createBufferSource();
    src.buffer = audioBuffers[key];
    src.loop   = true;
    src.playbackRate.value = getRate();
    const fi = actx.createGain();
    const fiTime = isSwitch ? Math.min(glideTime, 0.5) * 0.7 : 0.15;
    fi.gain.setValueAtTime(0, now);
    fi.gain.linearRampToValueAtTime(targetVol, now + fiTime);
    src.connect(fi); fi.connect(masterGain);
    src.start(0);
    loopSrc = src;
    setTimeout(()=>{
      if(loopSrc===src){
        try{ src.disconnect(); fi.disconnect(); }catch(e){}
        try{ src.connect(masterGain); }catch(e){}
        masterGain.gain.setValueAtTime(targetVol, actx.currentTime);
      }
    }, (fiTime+0.05)*1000);
  } else if(hasSynth){
    const delay = isSwitch ? 60 : 0;
    setTimeout(()=>{ if(currentKey===key) startSynth(key); }, delay);
  }

  currentKey = key; playing = true;
  _updateNoteUI(key);
  updateUI();
}

function _updateNoteUI(key){
  document.querySelectorAll('.n-btn,.mb-note').forEach(b=>b.classList.remove('playing'));
  const btn  = document.getElementById('nb-'+key);
  const mbtn = document.getElementById('mbn-'+key);
  if(btn)  btn.classList.add('playing');
  if(mbtn) mbtn.classList.add('playing');
}

function stopNote(){
  const fadeT = getFadeOutTime();
  if(loopSrc){
    const src=loopSrc; loopSrc=null;
    if(fadeT>0){
      const fg=actx.createGain();
      try{src.disconnect();}catch(e){}
      src.connect(fg); fg.connect(actx.destination);
      fg.gain.setValueAtTime(vol, actx.currentTime);
      fg.gain.linearRampToValueAtTime(0, actx.currentTime+fadeT);
      setTimeout(()=>{try{src.stop();}catch(e){}try{fg.disconnect();}catch(e){}}, (fadeT+0.1)*1000);
    } else { try{src.stop(0);}catch(e){} }
  }
  stopSynth(fadeT);
  playing=false; currentKey=null;
  document.querySelectorAll('.n-btn,.mb-note').forEach(b=>b.classList.remove('playing'));
  updateUI();
}

function updateUI(){
  // Voice badge removed from topbar
  // Mini bar
  if(isMinimized) syncMiniPlaying();
}

// ═══════════════════════════════════════════
//  PITCH CONTROLS
// ═══════════════════════════════════════════
function changePitch(type,delta){
  if(type==='semi'){
    semis=Math.max(-6,Math.min(6,semis+delta));
    const d=semis*6;
    document.getElementById('pvSemi').textContent=(d>0?'+':'')+(d||'0');
  } else {
    moriaV=Math.max(-6,Math.min(6,moriaV+delta));
    document.getElementById('pvMoria').textContent=(moriaV>0?'+':'')+(moriaV||'0');
  }
  if(loopSrc)loopSrc.playbackRate.value=getRate();
  else if(playing)retuneSynth();
  // Sync mini bar pitch display
  const ms=document.getElementById('mbSemi');const mm=document.getElementById('mbMoria');
  if(ms)ms.textContent=document.getElementById('pvSemi').textContent;
  if(mm)mm.textContent=document.getElementById('pvMoria').textContent;
}
function resetPitch(type){
  if(type==='semi'){semis=0;document.getElementById('pvSemi').textContent='0';}
  else{moriaV=0;document.getElementById('pvMoria').textContent='0';}
  if(loopSrc)loopSrc.playbackRate.value=getRate();
  else if(playing)retuneSynth();
}
function startRepeat(t,d){changePitch(t,d);repTimer=setTimeout(()=>{repIntvl=setInterval(()=>changePitch(t,d),120);},380);}
function stopRepeat(){clearTimeout(repTimer);clearInterval(repIntvl);}

// ═══════════════════════════════════════════
//  VOLUME (1-15)
// ═══════════════════════════════════════════
function setVol(v){
  vol=(v-1)/14;
  document.getElementById('volVal').textContent=v;
  if(masterGain)masterGain.gain.value=muted?0:vol;
  if(droneMGain)droneMGain.gain.value=muted?0:vol;
  // Sync mini bar vol display
  const mv=document.getElementById('mbVol');
  if(mv)mv.textContent=v;
}
function changeVol(delta){
  const sl=document.getElementById('volSlider');
  if(!sl)return;
  const newVal=Math.max(1,Math.min(15,parseInt(sl.value)+delta));
  sl.value=newVal;
  setVol(newVal);
}
function toggleMute(){
  muted=!muted;
  if(masterGain)masterGain.gain.value=muted?0:vol;
  if(droneMGain)droneMGain.gain.value=muted?0:vol;
  document.getElementById('volIcon').textContent=muted?'🔇':'🔊';
}

// ═══════════════════════════════════════════
//  MINIMIZE / EXPAND
// ═══════════════════════════════════════════
function minimizeApp(){
  isMinimized=true;
  // Show ONLY mini bar
  document.getElementById('appTopbar').style.display='none';
  document.getElementById('voiceBar').style.display='none';
  document.getElementById('mainScroll').style.display='none';
  document.getElementById('miniPlayer').style.display='block';
  renderMiniNotes();
  const btn=document.getElementById('mbExpandBtn');
  if(btn)btn.textContent='↑';
  updateUI();
}
function expandApp(){
  isMinimized=false;
  // Show ONLY full app — hide mini bar
  document.getElementById('appTopbar').style.display='';
  document.getElementById('voiceBar').style.display='';
  document.getElementById('mainScroll').style.display='';
  document.getElementById('miniPlayer').style.display='none';
  const btn=document.getElementById('mbExpandBtn');
  if(btn)btn.textContent='↓';
  updateUI();
}
function toggleMinimize(){
  if(isMinimized) expandApp();
  else minimizeApp();
}
function renderMiniNotes(){
  const wrap=document.getElementById('mbNotes');
  if(!wrap)return;
  wrap.innerHTML='';
  noteLayout.forEach(key=>{
    const n=ALL_NOTES.find(x=>x.key===key);if(!n)return;
    const hasAudio=!!audioBuffers[key];
    const canPlay=hasAudio||getSynth();
    const lbl=n[lang]||n.gr;
    const btn=document.createElement('div');
    btn.className='mb-note'+(hasAudio?' has-audio':'')+(n.lower?' note-lo':'')+(currentKey===key&&playing?' playing':'');
    btn.id='mbn-'+key;
    const accHtml=n.acc?`<span class="mb-note-acc">${n.acc}</span>`:'';
    btn.innerHTML=`${lbl}${accHtml}`;
    if(canPlay)btn.onclick=()=>{selectNote(key);syncMiniPlaying();};
    wrap.appendChild(btn);
  });
  // Update pitch displays
  const ms=document.getElementById('mbSemi');
  const mm=document.getElementById('mbMoria');
  if(ms)ms.textContent=document.getElementById('pvSemi').textContent;
  if(mm)mm.textContent=document.getElementById('pvMoria').textContent;
  // Update vol display
  const mv=document.getElementById('mbVol');
  if(mv)mv.textContent=document.getElementById('volVal').textContent;
}
function syncMiniPlaying(){
  document.querySelectorAll('.mb-note').forEach(b=>{
    const key=b.id.replace('mbn-','');
    b.classList.toggle('playing',key===currentKey&&playing);
  });
}

// ═══════════════════════════════════════════
//  EXIT
// ═══════════════════════════════════════════
function exitApp(){
  stopNote();
  if(pdActive)togglePitchDetector();
  setTimeout(()=>{window.close();},200);
}

// ═══════════════════════════════════════════
//  DIAPASON
// ═══════════════════════════════════════════
let dTimer=null, dGain=null, dOscs=[];
function playDiapason(){
  if(dTimer){
    clearInterval(dTimer);dTimer=null;
    if(dGain){
      dGain.gain.setValueAtTime(dGain.gain.value,actx.currentTime);
      dGain.gain.linearRampToValueAtTime(0,actx.currentTime+0.3);
      setTimeout(()=>{dOscs.forEach(o=>{try{o.stop();}catch(e){}});dOscs=[];try{dGain.disconnect();}catch(e){}dGain=null;},400);
    }
    const card=document.getElementById('dCard');if(card)card.classList.remove('ringing');
    const el=document.getElementById('dCount');if(el)el.textContent='';
    return;
  }
  initCtx();if(actx.state==='suspended')actx.resume();
  const card=document.getElementById('dCard');if(card)card.classList.add('ringing');
  dGain=actx.createGain();
  dGain.gain.setValueAtTime(0,actx.currentTime);
  dGain.gain.linearRampToValueAtTime(0.45,actx.currentTime+0.3);
  dGain.gain.setValueAtTime(0.45,actx.currentTime+4.2);
  dGain.gain.linearRampToValueAtTime(0,actx.currentTime+5);
  dGain.connect(actx.destination);
  const vib=actx.createOscillator();vib.type='sine';vib.frequency.value=5.5;
  const vg=actx.createGain();vg.gain.value=220*0.003;
  vib.connect(vg);dOscs=[vib];
  HARMONICS.slice(0,4).forEach(h=>{
    const o=actx.createOscillator();o.type='sine';o.frequency.value=220*h.r;
    if(h.r===1)vg.connect(o.frequency);
    const og=actx.createGain();og.gain.value=h.g*0.8;
    o.connect(og);og.connect(dGain);o.start();o.stop(actx.currentTime+5.1);dOscs.push(o);
  });
  vib.start();vib.stop(actx.currentTime+5.1);
  let t=5;const elC=document.getElementById('dCount');if(elC)elC.textContent=t;
  dTimer=setInterval(()=>{
    t--;const el=document.getElementById('dCount');if(el)el.textContent=t>0?t:'';
    if(t<=0){clearInterval(dTimer);dTimer=null;dGain=null;dOscs=[];const c=document.getElementById('dCard');if(c)c.classList.remove('ringing');}
  },1000);
}

// ═══════════════════════════════════════════
//  PITCH DETECTOR (YIN)
// ═══════════════════════════════════════════
// ── Pitch detection: YIN + harmonic correction ──────────
// Uses A4=440Hz standard reference (SoundCorset-style)
function yinPitch(buf, sampleRate){
  const N=buf.length, W=Math.floor(N/2);

  // RMS energy check
  let rms=0;
  for(let i=0;i<N;i++) rms+=buf[i]*buf[i];
  rms=Math.sqrt(rms/N);
  if(rms<0.012) return -1; // silence

  // Step 1: Difference function
  const d=new Float32Array(W);
  for(let tau=1;tau<W;tau++){
    let s=0;
    for(let j=0;j<W;j++){const diff=buf[j]-buf[j+tau];s+=diff*diff;}
    d[tau]=s;
  }

  // Step 2: Cumulative Mean Normalized Difference
  const cmnd=new Float32Array(W);
  cmnd[0]=1; let runSum=0;
  for(let tau=1;tau<W;tau++){
    runSum+=d[tau];
    cmnd[tau]=runSum>0 ? d[tau]*tau/runSum : 1;
  }

  // Step 3: Absolute threshold — find lowest dip
  const threshold=0.10; // tighter threshold = better fundamental detection
  let tau=-1;
  for(let t=2;t<W-1;t++){
    if(cmnd[t]<threshold){
      // Find local minimum
      while(t+1<W-1 && cmnd[t+1]<=cmnd[t]) t++;
      tau=t; break;
    }
  }
  if(tau===-1){
    // Fallback: global minimum if no threshold dip
    let minVal=1, minIdx=-1;
    for(let t=2;t<W;t++){if(cmnd[t]<minVal){minVal=cmnd[t];minIdx=t;}}
    if(minVal>0.35) return -1; // not periodic enough
    tau=minIdx;
  }

  // Step 4: Parabolic interpolation
  if(tau>0 && tau<W-1){
    const s0=cmnd[tau-1],s1=cmnd[tau],s2=cmnd[tau+1];
    const den=2*(2*s1-s0-s2);
    if(Math.abs(den)>1e-7) tau+=(s2-s0)/den;
  }

  const rawHz = sampleRate/tau;

  // Step 5: Harmonic correction
  // If detected pitch seems too high, check if halving it fits better
  // (avoids octave errors - the common "one note too high" problem)
  return harmonicCorrect(rawHz, cmnd, sampleRate, W);
}

function harmonicCorrect(hz, cmnd, sampleRate, W){
  if(hz<=0) return -1;

  // Build candidate list: fundamental + sub-harmonics (÷2, ÷3)
  const candidates=[hz];
  for(const div of [2,3]){
    const sub=hz/div;
    if(sub>=60 && sub<=1200) candidates.push(sub);
  }

  // Score each candidate by checking its period in cmnd
  let bestHz=hz, bestScore=Infinity;
  for(const cHz of candidates){
    const tau=sampleRate/cHz;
    const ti=Math.round(tau);
    if(ti<1||ti>=W) continue;
    const score=cmnd[Math.min(ti,W-1)];
    if(score<bestScore){bestScore=score;bestHz=cHz;}
  }

  return bestHz;
}
// chromatic→Byzantine mapping (A4=440Hz reference)
// We detect the chromatic pitch class, then map to Byzantine note name
const CHROM_TO_BYZ = {
  // pitch class (0=C,1=C#,2=D,...,11=B) → Byzantine note
  // Based on standard Byzantine Diatonic starting from D(=Νη)
  // D=Νη, E=Πα, F=Βου(approx), F#=Γα, G#=Γα#, A=Δι, B=Κε, C=Ζω♭, C#=Ζω
  0:  'zob',   // C  → Ζω (close)
  1:  'zob2',  // C# → Ζω♭
  2:  'ni',    // D  → Νη
  3:  'pa',    // D# → (between)
  4:  'pa',    // E  → Πα
  5:  'vou',   // F  → Βου
  6:  'ga',    // F# → Γα (close)
  7:  'gash',  // G  → Γα# (close)
  8:  'gash',  // G# → Γα#
  9:  'di',    // A  → Δι
  10: 'ke',    // A# → Κε (close)
  11: 'ke',    // B  → Κε
};

function noteFromHz(hz){
  if(!hz||hz<60||hz>1400) return null;

  // 1. Find chromatic pitch (A4=440Hz reference)
  const A4=440;
  const semitonesFromA4 = 12*Math.log2(hz/A4);
  const noteNum = Math.round(semitonesFromA4); // nearest semitone
  const pitchClass = ((noteNum % 12) + 12) % 12; // 0-11

  // 2. Map to Byzantine note key
  const key = CHROM_TO_BYZ[pitchClass] || 'di';
  const n = ALL_NOTES.find(x=>x.key===key);
  if(!n) return null;

  // 3. Calculate reference frequency for this note (find closest octave)
  let bestF=n.hz, bestDist=Infinity;
  for(let oct=-1;oct<=3;oct++){
    const f=n.hz*Math.pow(2,oct);
    const dist=Math.abs(1200*Math.log2(hz/f));
    if(dist<bestDist){bestDist=dist;bestF=f;}
  }

  // 4. Cents deviation from reference
  const cents=1200*Math.log2(hz/bestF);

  return {...n, detHz:bestF, cents};
}
async function togglePitchDetector(){
  const _e=id=>document.getElementById(id);
  if(pdActive){
    pdActive=false;
    if(pdRaf){clearTimeout(pdRaf);cancelAnimationFrame(pdRaf);pdRaf=null;}
    if(pdStream){pdStream.getTracks().forEach(t=>t.stop());pdStream=null;}
    if(pdActx){try{pdActx.close();}catch(e){}pdActx=null;}
    const b=_e('pdBtn');if(b)b.classList.remove('on');
    const bt=_e('pdBtnTxt');if(bt)bt.textContent=T[lang].pdstart;
    const pn=_e('pdNote');if(pn)pn.textContent='—';
    const ph=_e('pdHz');if(ph)ph.textContent='— Hz';
    const pc=_e('pdCents');if(pc)pc.textContent='—';
    const pnd=_e('pdNeedle');if(pnd)pnd.style.left='50%';
    return;
  }
  const isSecure=location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1';
  if(!isSecure){
    const pn=_e('pdNote');if(pn)pn.textContent=T[lang].pdnotsupported;
    const ph=_e('pdHz');if(ph)ph.textContent=T[lang].pdhttps;
    return;
  }
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    const pn=_e('pdNote');if(pn)pn.textContent=T[lang].pdnotsupported;return;
  }
  try{
    if(actx&&actx.state==='suspended')await actx.resume();
    pdStream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});
    pdActx=new(window.AudioContext||window.webkitAudioContext)({sampleRate:44100});
    await pdActx.resume();
    const src=pdActx.createMediaStreamSource(pdStream);
    pdAnalyser=pdActx.createAnalyser();pdAnalyser.fftSize=2048;pdAnalyser.smoothingTimeConstant=0;
    src.connect(pdAnalyser);pdActive=true;
    const b=_e('pdBtn');if(b)b.classList.add('on');
    const bt=_e('pdBtnTxt');if(bt)bt.textContent=T[lang].pdstop;
    detectLoop();
  } catch(e){
    const pn=_e('pdNote');
    if(pn)pn.textContent=e.name==='NotAllowedError'?T[lang].pdnoperm:'⚠ '+e.message;
    console.error('Mic:',e);
  }
}
function detectLoop(){
  if(!pdActive)return;
  const buf=new Float32Array(pdAnalyser.fftSize);
  pdAnalyser.getFloatTimeDomainData(buf);
  const hz=yinPitch(buf,pdActx.sampleRate);
  if(hz>60&&hz<1400){
    const n=noteFromHz(hz);
    if(n){
      const label=(n[lang]||n.gr)+(n.acc||'');
      if(label===pdLastNote)pdStableCount++;else{pdLastNote=label;pdStableCount=0;}
      if(pdStableCount>=1){
        const pn=document.getElementById('pdNote');const ph=document.getElementById('pdHz');
        const pc=document.getElementById('pdCents');const pnd=document.getElementById('pdNeedle');
        if(pn)pn.textContent=label;if(ph)ph.textContent=hz.toFixed(1)+' Hz';
        const c=Math.round(n.cents);if(pc)pc.textContent=(c>0?'+':'')+c+' cents';
        const pct=5+((Math.max(-50,Math.min(50,c))+50)/100)*90;if(pnd)pnd.style.left=pct+'%';
      }
    }
  }
  pdRaf=setTimeout(detectLoop,80);
}

// ═══════════════════════════════════════════
//  VOICES
// ═══════════════════════════════════════════
async function loadVoiceBuffers(voice){
  initCtx();audioBuffers={};
  if(!voice||!voice.notes)return;
  for(const[key,ab]of Object.entries(voice.notes)){
    if(!ab)continue;
    try{const clone=ab instanceof ArrayBuffer?ab.slice(0):ab;audioBuffers[key]=await actx.decodeAudioData(clone);}
    catch(e){console.error('decode',key,e);}
  }
}
async function setActiveVoice(id){
  stopNote();activeVoiceId=id;
  const v=voices.find(x=>x.id===id);
  await loadVoiceBuffers(v);
  renderVoiceBar();renderDrawerVoices();renderNoteGrid();updateUI();
}
async function deleteVoice(id){
  stopNote();await dbDel(id);voices=voices.filter(v=>v.id!==id);
  if(activeVoiceId===id){
    activeVoiceId=voices.length?voices[0].id:null;
    if(activeVoiceId)await setActiveVoice(activeVoiceId);
    else{audioBuffers={};renderNoteGrid();}
  }
  renderVoiceBar();renderDrawerVoices();updateUI();
}

// ═══════════════════════════════════════════
//  PRESET SETS
// ═══════════════════════════════════════════
async function b64ToArrayBuffer(dataUrl){
  const res=await fetch(dataUrl);return await res.arrayBuffer();
}
async function selectPresetSet(setKey){
  const set=PRESET_SETS[setKey];if(!set)return;
  // Find and show loading on button (now in main UI, not splash)
  // Set buttons now in menu
  const btn=document.getElementById('menuSetBtn_'+setKey);
  if(btn){btn.classList.add('loading');btn.disabled=true;}

  // Load ALL notes — both sets use all available audio
  const voiceNotes={};
  for(const n of ALL_NOTES){
    const k=n.key;
    if(typeof AUDIO_B64!=='undefined'&&AUDIO_B64[k]){
      try{voiceNotes[k]=await b64ToArrayBuffer(AUDIO_B64[k]);}
      catch(e){voiceNotes[k]=null;}
    } else {voiceNotes[k]=null;}
  }
  const voice={id:set.id,name:set.name[lang]||set.name.gr,notes:voiceNotes,isPreset:true};
  voices=voices.filter(v=>v.id!==set.id);
  await dbSave(voice);voices.push(voice);
  await setActiveVoice(set.id);
  if(btn){btn.classList.remove('loading');btn.disabled=false;}
  // Mark active set buttons (menu)
  document.querySelectorAll('.menu-set-btn').forEach(b=>b.classList.remove('active-set'));
  const activeBtn=document.getElementById('menuSetBtn_'+setKey);
  if(activeBtn)activeBtn.classList.add('active-set');
  closeMenu();
}
function skipSplash(){hideSplash();setTimeout(()=>openAddVoice(),450);}

// ═══════════════════════════════════════════
//  SPLASH
// ═══════════════════════════════════════════
function showSplash(){
  // Scroll to set buttons in main UI instead of overlay
  const el=document.getElementById('setButtonsRow');
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
}
function hideSplash(){
  const s=document.getElementById('splashScreen');
  s.style.opacity='0';s.style.transition='opacity 0.4s';
  setTimeout(()=>{s.style.display='none';s.style.opacity='';s.style.transition='';},400);
}

// ═══════════════════════════════════════════
//  ADD VOICE MODAL
// ═══════════════════════════════════════════
function openAddVoice(){
  pendingFiles={};
  document.getElementById('voiceNameInput').value='';
  document.getElementById('btnSave').disabled=true;
  renderNotesUploadGrid();
  document.getElementById('addVoiceModal').classList.add('open');
  setTimeout(()=>document.getElementById('voiceNameInput').focus(),350);
}
function closeAddVoice(){document.getElementById('addVoiceModal').classList.remove('open');pendingFiles={};}
function renderNotesUploadGrid(){
  const grid=document.getElementById('notesUploadGrid');grid.innerHTML='';
  ALL_NOTES.forEach(n=>{
    const lbl=n[lang]||n.gr;
    const div=document.createElement('div');
    div.className='nub'+(pendingFiles[n.key]?' uploaded':'');div.id='nub-'+n.key;
    div.innerHTML=`<div class="nub-chk">✓</div>
      <div class="nub-name">${lbl}<span style="font-size:11px;color:var(--red)">${n.acc||''}</span></div>
      <div class="nub-st">${pendingFiles[n.key]?'OK':T[lang].tap}</div>
      <input type="file" accept="audio/*" onchange="handleNoteFile('${n.key}',this)">`;
    grid.appendChild(div);
  });
}
async function handleNoteFile(key,input){
  const file=input.files[0];if(!file)return;
  const ab=await new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.onerror=rej;r.readAsArrayBuffer(file);});
  pendingFiles[key]=ab;
  const btn=document.getElementById('nub-'+key);
  if(btn){btn.classList.add('uploaded');btn.querySelector('.nub-st').textContent='OK';}
  checkSaveReady();
}
function checkSaveReady(){
  const n=document.getElementById('voiceNameInput').value.trim().length>0;
  const a=Object.keys(pendingFiles).length>0;
  document.getElementById('btnSave').disabled=!(n&&a);
}
async function saveVoice(){
  const name=document.getElementById('voiceNameInput').value.trim();
  if(!name||!Object.keys(pendingFiles).length)return;
  const voice={id:Date.now().toString(),name,notes:{...pendingFiles}};
  await dbSave(voice);voices.push(voice);
  closeAddVoice();await setActiveVoice(voice.id);
}

// ═══════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════
function renderVoiceBar(){
  const bar=document.getElementById('voiceBar');bar.innerHTML='';
  voices.forEach(v=>{
    const chip=document.createElement('div');
    chip.className='v-chip'+(v.id===activeVoiceId?' active':'');
    chip.textContent=v.name;
    let tSX=0,tST=0,moved=false;
    chip.addEventListener('touchstart',e=>{tSX=e.touches[0].clientX;tST=Date.now();moved=false;},{passive:true});
    chip.addEventListener('touchmove',e=>{if(Math.abs(e.touches[0].clientX-tSX)>8)moved=true;},{passive:true});
    chip.addEventListener('touchend',e=>{if(!moved&&Date.now()-tST<400){e.preventDefault();setActiveVoice(v.id);}},{passive:false});
    chip.addEventListener('click',()=>setActiveVoice(v.id));
    bar.appendChild(chip);
  });
}
function renderDrawerVoices(){
  const list=document.getElementById('drawerVoiceList');list.innerHTML='';
  voices.forEach(v=>{
    const cnt=Object.keys(v.notes||{}).length;
    const div=document.createElement('div');div.className='vi'+(v.id===activeVoiceId?' act':'');
    div.innerHTML=`<div style="flex:1;cursor:pointer" onclick="setActiveVoice('${v.id}');closeMenu()">
      <div class="vi-name">${v.name}</div>
      <div class="vi-cnt">${cnt} ${T[lang].notes_count}</div>
    </div>
    <button class="vi-del" onclick="event.stopPropagation();deleteVoice('${v.id}')">✕</button>`;
    list.appendChild(div);
  });
}
function renderNoteGrid(){
  const grid=document.getElementById('noteGrid');grid.innerHTML='';
  noteLayout.forEach(key=>{
    const n=ALL_NOTES.find(x=>x.key===key);if(!n)return;
    const hasAudio=!!audioBuffers[key];
    const canPlay=hasAudio||getSynth();
    const lbl=n[lang]||n.gr;
    const btn=document.createElement('button');
    btn.className='n-btn'+(hasAudio?' has-audio':'')+(n.lower?' note-lo':'');
    btn.id='nb-'+key;
    const accHtml=n.acc?`<span class="n-acc">${n.acc}</span>`:'';
    btn.innerHTML=`<div class="n-name">${lbl}${accHtml}</div>
      <div class="n-wave"><div class="wv"></div><div class="wv"></div><div class="wv"></div><div class="wv"></div><div class="wv"></div></div>`;
    if(canPlay)btn.onclick=()=>selectNote(key);
    grid.appendChild(btn);
  });
}
function renderLayoutGrid(){
  const grid=document.getElementById('layoutGrid');if(!grid)return;grid.innerHTML='';
  let dragSrc=null;
  noteLayout.forEach(key=>{
    const n=ALL_NOTES.find(x=>x.key===key);if(!n)return;
    const lbl=n[lang]||n.gr;
    const div=document.createElement('div');div.className='ln';div.draggable=true;div.dataset.key=key;
    div.textContent=lbl+(n.acc||'');
    div.addEventListener('dragstart',e=>{dragSrc=key;div.style.opacity='0.4';e.dataTransfer.effectAllowed='move';});
    div.addEventListener('dragend',()=>{div.style.opacity='1';document.querySelectorAll('.ln').forEach(d=>d.classList.remove('drag-over'));});
    div.addEventListener('dragover',e=>{e.preventDefault();div.classList.add('drag-over');});
    div.addEventListener('dragleave',()=>div.classList.remove('drag-over'));
    div.addEventListener('drop',e=>{
      e.preventDefault();if(dragSrc===key)return;
      const fi=noteLayout.indexOf(dragSrc),ti=noteLayout.indexOf(key);
      if(fi>=0&&ti>=0){[noteLayout[fi],noteLayout[ti]]=[noteLayout[ti],noteLayout[fi]];saveLayout();renderLayoutGrid();renderNoteGrid();}
    });
    let tSrc=null;
    div.addEventListener('touchstart',e=>{tSrc=key;div.style.opacity='0.5';},{passive:true});
    div.addEventListener('touchend',e=>{
      div.style.opacity='1';const t=e.changedTouches[0];
      const el=document.elementFromPoint(t.clientX,t.clientY);
      const tgt=el&&el.closest('.ln');
      if(tgt&&tgt.dataset.key&&tgt.dataset.key!==tSrc){
        const fi=noteLayout.indexOf(tSrc),ti=noteLayout.indexOf(tgt.dataset.key);
        if(fi>=0&&ti>=0){[noteLayout[fi],noteLayout[ti]]=[noteLayout[ti],noteLayout[fi]];saveLayout();renderLayoutGrid();renderNoteGrid();}
      }
    },{passive:true});
    grid.appendChild(div);
  });
}

// ═══════════════════════════════════════════
//  LAYOUT
// ═══════════════════════════════════════════
function resetLayout(){noteLayout=[...DEFAULT_LAYOUT];saveLayout();renderLayoutGrid();renderNoteGrid();}
function saveLayout(){localStorage.setItem('eiso_layout',JSON.stringify(noteLayout));}
function loadLayout(){try{const s=localStorage.getItem('eiso_layout');if(s)noteLayout=JSON.parse(s);}catch(e){}}

// ═══════════════════════════════════════════
//  MENU
// ═══════════════════════════════════════════
function openMenu(){document.getElementById('menuOverlay').classList.add('open');renderLayoutGrid();renderDrawerVoices();}
function closeMenu(){document.getElementById('menuOverlay').classList.remove('open');}
function toggleDS(name){document.getElementById('ds-'+name).classList.toggle('open');}

// ═══════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════
const THEMES={
  dark:{
    '--bg':'#0f0f0f','--bg2':'#1a1a1a','--bg3':'#242424',
    '--surf':'#1e1e1e','--surf2':'#2a2a2a','--surf3':'#333',
    '--line':'#2e2e2e','--line2':'#3a3a3a',
    '--tx':'#f0f0f0','--tx2':'#a0a0a0','--tx3':'#606060','--tx4':'#3a3a3a',
    '--acc':'#e8e0cc','--acc2':'#ffffff','--acc3':'#c8bfa8',
    '--acc-bg':'rgba(232,224,204,0.08)','--acc-glow':'rgba(232,224,204,0.15)',
  },
  white:{
    '--bg':'#ffffff','--bg2':'#f8f8f8','--bg3':'#f0f0f0',
    '--surf':'#fafafa','--surf2':'#efefef','--surf3':'#e5e5e5',
    '--line':'#e0e0e0','--line2':'#d0d0d0',
    '--tx':'#111111','--tx2':'#444444','--tx3':'#888888','--tx4':'#bbbbbb',
    '--acc':'#111111','--acc2':'#000000','--acc3':'#333333',
    '--acc-bg':'rgba(0,0,0,0.05)','--acc-glow':'rgba(0,0,0,0.10)',
  },
  gold:{
    '--bg':'#1a1400','--bg2':'#241c04','--bg3':'#2e2408',
    '--surf':'#201800','--surf2':'#2c2008','--surf3':'#382a10',
    '--line':'#3a2e10','--line2':'#4a3c1a',
    '--tx':'#fdf0c0','--tx2':'#c8a840','--tx3':'#8a7030','--tx4':'#4a3c18',
    '--acc':'#f0c830','--acc2':'#ffe066','--acc3':'#c8a020',
    '--acc-bg':'rgba(240,200,48,0.10)','--acc-glow':'rgba(240,200,48,0.22)',
  },
  warm:{
    '--bg':'#d0be98','--bg2':'#c0ae88','--bg3':'#b09e78',
    '--surf':'#daccaa','--surf2':'#caba98','--surf3':'#baa888',
    '--line':'#a09070','--line2':'#907860',
    '--tx':'#1a1006','--tx2':'#3a2e1a','--tx3':'#604838','--tx4':'#907060',
    '--acc':'#2a1a08','--acc2':'#100800','--acc3':'#4a3018',
    '--acc-bg':'rgba(42,26,8,0.10)','--acc-glow':'rgba(42,26,8,0.18)',
  }
};
function setTheme(th){
  currentTheme=th;
  const vars=THEMES[th]||THEMES.dark;
  const root=document.documentElement;
  Object.entries(vars).forEach(([k,v])=>root.style.setProperty(k,v));
  document.documentElement.setAttribute('data-theme',th);
  // Update theme options in settings modal
  document.querySelectorAll('.theme-opt').forEach(el=>el.classList.toggle('on', el.dataset.theme===th));
  appSettings.theme=th; saveSettings();
}

// ═══════════════════════════════════════════
//  LANG
// ═══════════════════════════════════════════
function setLang(l){
  lang=l;const t=T[l]||T.gr;
  const _s=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  const _c=(id,on)=>{const e=document.getElementById(id);if(e)e.classList.toggle('on',on);};
  _c('langGR',l==='gr');_c('langEN',l==='en');_c('langRO',l==='ro');_c('langBG',l==='bg');_c('langRU',l==='ru');
  _s('dt-voices',t.voices);_s('dt-addvoice',t.addvoice);_s('dt-changeset',t.changeset);
  _s('dt-diapason',t.diapason);_s('dt-dhz',t.dhz);_s('dt-dsub',t.dsub);
  _s('dt-pitch',t.pitch);_s('pdBtnTxt',pdActive?t.pdstop:t.pdstart);
  _s('dt-layout',t.layout);_s('dt-layoutsub',t.layoutsub);_s('dt-resetlayout',t.resetlayout);
  _s('dt-settings',t.settings);_s('dt-lang',t.lang);_s('dt-theme',t.theme);
  // Settings strings now in modal (openSettingsModal populates)
  _s('dt-about',t.about);_s('dt-aboutsub',t.aboutsub);_s('dt-abouttext',t.abouttext);
  // Settings modal labels
  _s('smt-title','⚙ '+t.settings);
  _s('smt-voiceset',t.voices);
  _s('smt-fadein',t.fadein);_s('smt-fadeout',t.fadeout);
  _s('smt-synth',t.synth);_s('smt-synthdesc',t.synthsub);
  _s('smt-theme',t.theme);_s('smt-lang',t.lang);
  _s('smt-save','✓ '+t.mv_save);
  // Update set btn labels in menu
  document.querySelectorAll('.menu-set-lbl').forEach(el=>{el.textContent=t.sp_voices||'Φωνές';});
  _s('tc-dark',t.tcdark);_s('tc-light',t.tclight);_s('tc-warm',t.tcwarm);
  _s('lbl-semi',t.semi);_s('lbl-moria',t.moria);
  _s('mv-title',t.mv_title);_s('mv-namelabel',t.mv_name);_s('mv-noteslabel',t.mv_notes);_s('mv-save',t.mv_save);
  _s('sp-sub',t.sp_sub);_s('sp-lbl5',t.sp_voices);_s('sp-lbl10',t.sp_voices);
  _s('sp-notes5',t.sp_notes5);_s('sp-notes10',t.sp_notes10);
  _s('sp-or',t.sp_or);_s('sp-custom',t.sp_custom);
  document.documentElement.lang=l==='gr'?'el':l;
  // Update set button labels
  const sl5=document.getElementById('setLbl5');const sl10=document.getElementById('setLbl10');
  if(sl5)sl5.textContent=t.sp_voices||'Φωνές';
  if(sl10)sl10.textContent=t.sp_voices||'Φωνές';
  renderNoteGrid();renderDrawerVoices();renderLayoutGrid();renderNotesUploadGrid();updateUI();
}


// ═══════════════════════════════════════════
//  SETTINGS MODAL
// ═══════════════════════════════════════════
function openSettingsModal(){
  closeMenu();
  const modal = document.getElementById('settingsModal');
  if(!modal) return;
  // Populate current values
  _setRadio('fadeInGroup', appSettings.fadeIn);
  _setRadio('fadeOutGroup', appSettings.fadeOut);
  _setBool('synthToggle', appSettings.synthEnabled);
  // Theme
  document.querySelectorAll('.theme-opt').forEach(el=>{
    el.classList.toggle('on', el.dataset.theme === appSettings.theme);
  });
  // Lang
  document.querySelectorAll('.lang-opt').forEach(el=>{
    el.classList.toggle('on', el.dataset.lang === appSettings.lang);
  });
  // Voice set
  document.querySelectorAll('.set-opt').forEach(el=>{
    el.classList.toggle('on', el.dataset.set === appSettings.voiceSet);
  });
  modal.classList.add('open');
}
function closeSettingsModal(){
  document.getElementById('settingsModal')?.classList.remove('open');
}
function saveAndCloseSettings(){
  // Read all values from modal
  appSettings.fadeIn     = _getRadio('fadeInGroup')    || 'medium';
  appSettings.fadeOut    = _getRadio('fadeOutGroup')   || 'medium';
  // synthToggle read from modal
  appSettings.synthEnabled = _getBool('synthToggle');
  // Theme & lang already saved via their own buttons
  saveSettings();
  closeSettingsModal();
}
function _setRadio(groupId, val){
  document.querySelectorAll(`[data-group="${groupId}"]`).forEach(el=>{
    el.classList.toggle('on', el.dataset.value === val);
  });
}
function _getRadio(groupId){
  const el=document.querySelector(`[data-group="${groupId}"].on`);
  return el ? el.dataset.value : null;
}
function _setBool(id, val){
  const el=document.getElementById(id);
  if(el) el.classList.toggle('on', !!val);
}
function _getBool(id){
  return document.getElementById(id)?.classList.contains('on') ?? false;
}
function toggleSetting(id){
  const el=document.getElementById(id);
  if(el) el.classList.toggle('on');
}
function pickRadio(groupId, val){
  _setRadio(groupId, val);
}
function pickTheme(th){
  setTheme(th);
  document.querySelectorAll('.theme-opt').forEach(el=>{
    el.classList.toggle('on', el.dataset.theme === th);
  });
}
function pickLang(l){
  setLang(l);
  document.querySelectorAll('.lang-opt').forEach(el=>{
    el.classList.toggle('on', el.dataset.lang === l);
  });
}
async function pickVoiceSet(setKey){
  appSettings.voiceSet = setKey;
  document.querySelectorAll('.set-opt').forEach(el=>{
    el.classList.toggle('on', el.dataset.set === setKey);
  });
  await selectPresetSet(setKey);
}
// ═══════════════════════════════════════════
//  LOADING SCREEN
// ═══════════════════════════════════════════
function runLoadingScreen(onComplete){
  const bar=document.getElementById('loadBar');
  const pct=document.getElementById('loadPct');
  let progress=0;
  const steps=[
    {to:30,delay:400},{to:60,delay:300},{to:85,delay:400},{to:100,delay:300}
  ];
  function step(i){
    if(i>=steps.length){
      setTimeout(()=>{
        const ls=document.getElementById('loadScreen');
        ls.style.transition='opacity 0.5s';
        ls.style.opacity='0';
        setTimeout(()=>{ls.style.display='none';onComplete();},500);
      },200);
      return;
    }
    setTimeout(()=>{
      progress=steps[i].to;
      if(bar)bar.style.width=progress+'%';
      if(pct)pct.textContent=progress+'%';
      step(i+1);
    },steps[i].delay);
  }
  step(0);
}

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
async function init(){
  loadSettings();
  const th = appSettings.theme || 'dark';
  setTheme(th);
  const savedLang = appSettings.lang || 'gr';
  lang = savedLang;
  loadLayout();
  await openDB();
  voices=await dbAll();
  renderVoiceBar();renderDrawerVoices();renderLayoutGrid();
  renderNoteGrid();
  if(voices.length){
    activeVoiceId=voices[0].id;
    await loadVoiceBuffers(voices[0]);
    renderNoteGrid();updateUI();
  }
  // Start with full app visible, mini bar hidden
  const mp=document.getElementById('miniPlayer');
  if(mp)mp.style.display='none';

  runLoadingScreen(()=>{
    setLang(savedLang);
    renderMiniNotes();
  });
}

// Save lang on change
const origSetLang=setLang;
window.setLang=function(l){
  origSetLang(l);
  appSettings.lang=l; saveSettings();
};

window.addEventListener('load',init);
