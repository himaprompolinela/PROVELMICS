/* ═══════════════════════════════════════════════════
   PROVELMICS v4 — script.js
   Neo-Vintage Blueprint Theme
   No fetch · No async · Works on file:// and GitHub Pages
   ═══════════════════════════════════════════════════ */
'use strict';

/* ════════════════════════
   AUTHORS DATA
════════════════════════ */
const AUTHORS_DATA = [
  { id:'a1', realName:'Okta',  penName:'Heart Broker', photo:'https://picsum.photos/seed/auth1/200/200', bio:'Komikus visioner yang terinspirasi sains fiksi klasik. Setiap panel karyanya seperti foto dari galaksi yang belum pernah ada.', rating:{ average:4.7, votes:180 } },
  { id:'a2', realName:'OpenAI',   penName:'chatgpt',   photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/960px-ChatGPT_logo.svg.png', bio:'Novelis dengan kepekaan emosional luar biasa. Karyanya hidup dari detail kecil yang orang lain lewatkan.', rating:{ average:4.9, votes:320 } },
  { id:'a3', realName:'...', penName:'...',   photo:'https://picsum.photos/seed/auth3/200/200', bio:'Maestro cyberpunk Indonesia. Worldbuilding-nya rapi, action-nya membara, linework-nya tak tertandingi.', rating:{ average:4.5, votes:210 } }
];

/* ════════════════════════
   STORIES DATA
════════════════════════ */
const STORIES_DATA = [
  {
    id:'1', title:'Echoes of the Void', type:'comic',
    cover:'https://picsum.photos/seed/void11/400/600',
    description:'A lone astronaut drifts through a fractured galaxy, encountering remnants of civilizations lost to time. Each panel is a meditation on solitude and wonder.',
    genre:['Sci-Fi','Adventure','Drama'], status:'Ongoing', authorId:'a1', updatedAt:'2025-03-10',
    rating:{ average:4.8, votes:230 },
    music:{ enabled:true, playlist:['https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY','https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U'] },
    chapters:[
      { id:'ch1', title:'Chapter 1: The Silence Between Stars', date:'2025-01-01', pages:['https://picsum.photos/seed/v1p1/800/1200','https://picsum.photos/seed/v1p2/800/1200','https://picsum.photos/seed/v1p3/800/1200','https://picsum.photos/seed/v1p4/800/1200'] },
      { id:'ch2', title:'Chapter 2: Dust and Light', date:'2025-01-15', pages:['https://picsum.photos/seed/v2p1/800/1200','https://picsum.photos/seed/v2p2/800/1200','https://picsum.photos/seed/v2p3/800/1200'] },
      { id:'ch3', title:'Chapter 3: The Forgotten Meridian', date:'2025-02-01', pages:['https://picsum.photos/seed/v3p1/800/1200','https://picsum.photos/seed/v3p2/800/1200','https://picsum.photos/seed/v3p3/800/1200'] }
    ]
  },
  {
    id:'2', title:'The Last Herbalist', type:'novel',
    cover:'https://picsum.photos/seed/herb22/400/600',
    description:'In a world where magic is dying, a young herbalist discovers the cure to a spreading plague within forgotten ancestral recipes. A slow-burn fantasy of healing and loss.',
    genre:['Fantasy','Mystery','Slice of Life'], status:'Completed', authorId:'a2', updatedAt:'2025-02-20',
    rating:{ average:4.6, votes:188 },
    music:{ enabled:true, playlist:['https://open.spotify.com/embed/track/7q4zdBAgLFETdnslE7Z0Eq'] },
    chapters:[
      { id:'ch1', title:'Chapter 1: The Root Cellar', date:'2024-11-01', content:"The morning smelled of thyme and rain-soaked earth. Mira opened the cellar door with both hands — the hinges always stuck in autumn — and descended the worn stone steps into the cool dark below.\n\nBarrels lined the walls. Jars of dried lavender, powdered bone-root, and crystallized witch-hazel crowded the shelves her grandmother had built forty years ago. Some labels had faded to ghost-script, readable only in slanted light.\n\n'If you can't name it, you can't use it,' her grandmother used to say. 'And if you can't use it, you're just a person standing in a cellar.'\n\nMira had laughed then. She didn't laugh now.\n\nThe village elder had knocked before sunrise — three quiet scratches like a dog in the cold. When she opened the door, he stood in his nightclothes, a lantern clutched in both hands, his face the grey of a man who hadn't slept in days.\n\n'Mirabel,' he said. 'It's spreading.'\n\nShe already knew. She'd seen the smoke from the Fenwick farm the evening before.\n\nShe pulled her coat from the hook. 'Show me the symptoms.'" },
      { id:'ch2', title:'Chapter 2: The Blue Tide', date:'2024-11-15', content:"By the third day, seven more cases had been reported. By the fifth, twelve. Mira had barely slept — she moved between houses with her basket, applying poultices that slowed the spread but didn't stop it.\n\nThe recipe book was three hundred pages of dense handwriting in at least four different hands. Her grandmother's was the most recent. Before that, a formal copperplate. Before that, two older hands she couldn't date.\n\nIt was in those oldest pages that she found the first mention of the Wasting Blue.\n\n'...called the Tidemark by the old families... this affliction has no pharmaceutical remedy in the conventional sense. It is not a sickness of the body, though it wears that disguise. It is a sickness of the land. To cure the patient, one must first—'\n\nThe page was torn.\n\nSomeone had not wanted this known." },
      { id:'ch3', title:'Chapter 3: The Cartographer\'s Inn', date:'2024-12-01', content:"The road to the eastern mountains was two days on foot. Mira reached the Cartographer's Inn by nightfall — a low stone building that smelled of pipe smoke and dampness.\n\nIn the common room, she spread the book on the table, studying the oldest entries.\n\n'That's old Kellish,' said a voice beside her.\n\nA man leaned on the adjacent chair — weathered face, ink-stained fingers, the look of someone who slept outdoors more than in.\n\n'You read it?' Mira asked.\n\n'Enough.' He nodded at the book. 'What are you looking for?'\n\nMira thought of the elder's daughter with the violet lines climbing her arms.\n\n'I think this book knows the cure, but someone tore the page out.'\n\nThe man pulled out the chair and sat. 'My name is Aldric,' he said. 'I'm very good at finding things meant to stay lost.'" }
    ]
  },
  {
    id:'3', title:'Iron Feathers', type:'comic',
    cover:'https://picsum.photos/seed/iron33/400/600',
    description:'A fallen warrior reborn as a mechanical phoenix fights to reclaim her humanity in a world run by corporate warlords and rogue AIs. Every panel burns.',
    genre:['Action','Cyberpunk','Sci-Fi'], status:'Ongoing', authorId:'a3', updatedAt:'2025-03-05',
    rating:{ average:4.7, votes:312 },
    music:{ enabled:true, playlist:['https://open.spotify.com/embed/playlist/37i9dQZF1DX0pH2SQMRXnC','https://open.spotify.com/embed/playlist/37i9dQZF1DXdxcBWuJkbcy'] },
    chapters:[
      { id:'ch1', title:'Chapter 1: Ignition', date:'2025-01-10', pages:['https://picsum.photos/seed/if1/800/1200','https://picsum.photos/seed/if2/800/1200','https://picsum.photos/seed/if3/800/1200'] },
      { id:'ch2', title:'Chapter 2: Chrome City', date:'2025-02-05', pages:['https://picsum.photos/seed/if4/800/1200','https://picsum.photos/seed/if5/800/1200','https://picsum.photos/seed/if6/800/1200'] }
    ]
  },
  {
    id:'4', title:'Paradoxum: Jalan Tanpa Awal', type:'novel',
    cover:'https://picsum.photos/seed/petri44/400/600',
    description:'A road trip told in journal entries. Two estranged siblings drive the length of Indonesia, trying to rebuild something they both broke years ago.',
    genre:['Slice of Life','Drama','Romance'], status:'Completed', authorId:'a2', updatedAt:'2025-01-30',
    rating:{ average:4.9, votes:445 },
    music:{ enabled:true, playlist:['https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6','https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0'] },
    chapters:[
      { id:'ch1', title:'Chapter 1 — Pesan dari Masa Depan', date:'23-03-2026', content:"Aren adalah seorang pemuda biasa yang tinggal di kota kecil.\nHidupnya tenang, tanpa hal aneh, tanpa kejadian luar biasa.\nSetiap hari berjalan sama, seolah hidupnya sudah memiliki jalur yang pasti.\nIa tidak pernah mempertanyakan dunia.\nIa hanya menjalaninya.\n\nNamun suatu sore, semuanya berubah.\nKetika ia pulang ke rumah, ia menemukan sebuah buku di depan pintunya.\nBuku itu tua, berdebu, dan tidak memiliki judul.\nTidak ada nama pemilik.\nTidak ada tanda siapa yang meletakkannya.\nNamun anehnya, Aren merasa buku itu… familiar.\nSeolah ia pernah melihatnya, meskipun ia yakin belum pernah.\n\nIa mengambil buku itu dan membawanya masuk.\nSaat disentuh, buku itu terasa hangat.\nBukan seperti benda lama.\nMelainkan seperti sesuatu yang baru saja ditinggalkan.\nIa duduk dan mulai membukanya perlahan.\nHalaman pertama kosong.\nNamun ketika ia membalik halaman berikutnya, tulisan tiba-tiba muncul.\n\n“Aren, jangan pergi ke kota besok.”\n\nAren langsung terdiam.\nJantungnya berdetak lebih cepat.\nTulisan itu menggunakan namanya.\nDan lebih aneh lagi…\ntulisan itu terlihat seperti tulisannya sendiri.\n\nIa mencoba berpikir logis.\nMungkin ini hanya lelucon.\nMungkin ada temannya yang bercanda.\nNamun tidak ada satu pun orang yang tahu kebiasaannya menulis seperti itu.\nKesalahan kecil di huruf.\nTekanan tinta.\nSemuanya identik.\n\nMalam itu, ia tidak terlalu memikirkannya.\nIa menutup buku itu dan mencoba tidur.\nNamun kata-kata itu terus terngiang di kepalanya.\n“Jangan pergi ke kota besok.”\n\nKeesokan harinya, Aren tetap pergi.\nIa tidak ingin dikendalikan oleh sesuatu yang tidak masuk akal.\nIa ingin membuktikan bahwa ini semua hanyalah kebetulan.\n\nNamun di tengah perjalanan menuju kota,\nkerumunan orang terlihat di depan.\nSuara panik.\nSuara teriakan.\n\nAren mendekat perlahan.\nDan saat ia melihat ke depan…\ntubuhnya membeku.\n\nDi jalan itu, seseorang tergeletak.\nWajahnya tidak asing.\nBahkan terlalu familiar.\n\nItu adalah dirinya sendiri.\n\nAren mundur beberapa langkah.\nNapasnya tidak teratur.\nPikirannya kosong.\nIa melihat dirinya… mati.\n\nTanpa berpikir panjang, ia berlari pulang.\nTangannya gemetar saat membuka buku itu kembali.\n\nTulisan baru muncul.\n\n“Aku sudah memperingatkanmu.”\n\nAren terdiam lama.\nKali ini, ia tidak bisa menyangkalnya lagi.\n\nBuku ini tahu masa depan.\nAtau lebih mengerikan lagi…\n\nBuku ini ditulis oleh dirinya sendiri." },
      { id:'ch2', title:'Chapter 2 — Pilihan yang Mengubah Waktu', date:'23-03-2026', content:"Malam itu terasa lebih panjang dari biasanya.\nAren tidak bisa tidur sama sekali.\nSetiap kali ia menutup mata, bayangan tubuhnya di jalan terus muncul.\n\nJika itu benar masa depan,\nmaka seharusnya ia sudah mati.\nNamun ia masih hidup.\n\nItu berarti satu hal.\nMasa depan bisa berubah.\n\nDengan tangan gemetar, ia membuka buku itu lagi.\nHalaman kosong di depannya perlahan terisi tulisan.\n\n“Ada dua jalan di depanmu.”\n\nAren menelan ludah.\nIa membaca lanjutannya.\n\n“Pergi, dan kamu mati.”\n“Tinggal, dan kamu akan tahu kebenaran.”\n\nAren menutup buku itu perlahan.\nUntuk pertama kalinya dalam hidupnya,\nia benar-benar harus memilih.\n\nKeesokan harinya, ia tidak pergi ke kota.\nIa tetap di rumah.\nSepanjang hari, tidak terjadi apa-apa.\nTidak ada kecelakaan.\nTidak ada kejadian aneh.\n\nIa merasa lega.\nMungkin ini semua sudah berakhir.\n\nNamun saat malam tiba,\nsesuatu berubah.\n\nLampu rumahnya tiba-tiba mati.\nSuasana menjadi sunyi.\nTerlalu sunyi.\n\nAren berdiri perlahan.\nIa berjalan menuju pintu.\nJantungnya berdetak kencang.\n\nLalu… terdengar ketukan.\n\nTok.\nTok.\nTok.\n\nAren membuka pintu dengan hati-hati.\nDan saat pintu terbuka,\nia langsung terpaku.\n\nSeseorang berdiri di depannya.\n\nWajahnya sama.\nPosturnya sama.\nNamun matanya berbeda.\nLebih dalam.\nLebih lelah.\n\n“Akhirnya kamu memilih jalan ini,” kata orang itu.\n\nAren mundur selangkah.\n“Siapa kamu?”\n\nOrang itu tersenyum tipis.\n\n“Aku adalah kamu… dari masa depan.”\n\nAren terdiam.\nSemua potongan mulai tersusun.\nBuku.\nPeringatan.\nKematian.\n\n“Kalau kamu aku… kenapa kamu di sini?”\n\nSosok itu masuk perlahan ke dalam rumah.\n\n“Karena kamu akan membuat kesalahan.”\n\nAren mengerutkan kening.\n“Kesalahan apa?”\n\nSosok itu menatapnya serius.\n\n“Kesalahan yang sama… yang membuatku kembali ke sini.”\n\nSuasana menjadi lebih berat.\nSeolah dunia ikut mendengarkan percakapan itu.\n\nDan untuk pertama kalinya,\nAren mulai merasa bahwa kebenaran…\nbukan sesuatu yang ingin ia temukan." },
      { id:'ch3', title:'Chapter 3 — Kebenaran yang Berbahaya', date:'23-03-2026', content:"Aren duduk berhadapan dengan dirinya sendiri.\nPikirannya kacau.\nNamun ia tahu, ini bukan mimpi.\n\n“Jelaskan semuanya,” kata Aren pelan.\n\nSosok di depannya menarik napas panjang.\nSeolah ia sudah mengulang percakapan ini berkali-kali.\n\n“Di masa depan, kamu mulai mencari jawaban.”\n“Kamu ingin tahu kenapa buku ini ada.”\n“Kenapa waktu bisa berubah.”\n\nAren mengangguk pelan.\nItu memang yang ia inginkan.\n\n“Dan aku berhasil menemukannya,” lanjut sosok itu.\n\nAren langsung menatapnya.\n“Lalu?”\n\nSosok itu tersenyum pahit.\n\n“Dan itu adalah kesalahan terbesar kita.”\n\nAren terdiam.\n\n“Kebenaran itu bukan sesuatu yang aman.”\n“Semakin kamu memahaminya… semakin dunia ini berubah.”\n\n“Berubah bagaimana?”\n\n“Tidak stabil.”\n“Retak.”\n“Seperti realitas tidak bisa menahan dirinya sendiri.”\n\nAren mulai merasa takut.\n\n“Jadi semua ini… karena aku?”\n\nSosok itu mengangguk.\n\n“Kamu menemukan terlalu banyak.”\n“Dan dunia tidak dibuat untuk itu.”\n\nAren melihat buku itu lagi.\nTangannya perlahan menyentuhnya.\n\n“Jadi aku harus berhenti?”\n\nSosok itu tidak langsung menjawab.\n\n“Kalau kamu ingin hidup normal, iya.”\n\n“Dan kalau tidak?”\n\nSosok itu menatapnya dalam.\n\n“Semua akan hancur.”\n\nSaat itu juga, buku di tangan Aren terbuka sendiri.\nTulisan baru muncul.\n\n“Kamu punya dua pilihan.”\n\nAren membaca perlahan.\n\n“Berhenti sekarang, dan lupakan semuanya.”\n“Atau lanjut… dan kehilangan segalanya.”\n\nAren menutup buku itu.\nIa menatap dirinya sendiri.\n\nTidak ada jawaban yang benar.\n\nHanya konsekuensi.\n\nDan untuk pertama kalinya,\nAren menyadari sesuatu.\n\nMungkin…\nbukan kebenaran yang berbahaya.\n\nTapi keinginan manusia untuk mengetahuinya."}
    ]
  },
  {
    id:'5', title:'Thornwall', type:'comic',
    cover:'https://picsum.photos/seed/thorn55/400/600',
    description:'A medieval kingdom protected by a sentient magical wall begins to crack. The cartographer discovers the wall is alive — and asking for help.',
    genre:['Fantasy','Adventure','Mystery'], status:'Dropped', authorId:'a3', updatedAt:'2024-08-20',
    rating:{ average:4.2, votes:98 },
    music:{ enabled:false, playlist:[] },
    chapters:[
      { id:'ch1', title:'Chapter 1: The First Crack', date:'2024-05-01', pages:['https://picsum.photos/seed/tw1/800/1200','https://picsum.photos/seed/tw2/800/1200','https://picsum.photos/seed/tw3/800/1200'] },
      { id:'ch2', title:'Chapter 2: Root & Stone', date:'2024-06-15', pages:['https://picsum.photos/seed/tw4/800/1200','https://picsum.photos/seed/tw5/800/1200'] }
    ]
  },
  {
    id:'6', title:'Stillwater', type:'novel',
    cover:'https://picsum.photos/seed/still66/400/600',
    description:'A grief counselor moves to a remote coastal town, only to find all the residents share the same secret — one that lives in the water.',
    genre:['Horror','Mystery','Drama'], status:'Hiatus', authorId:'a1', updatedAt:'2024-12-10',
    rating:{ average:4.4, votes:156 },
    music:{ enabled:false, playlist:[] },
    chapters:[
      { id:'ch1', title:'Chapter 1: Arrival', date:'2024-09-01', content:"The town of Brinemouth appeared gradually, the way bad news does — first a smudge on the horizon, then a shape, then something unavoidable.\n\nDr. Elise Varn had been driving eleven hours. The radio picked up nothing but static this far north, and eventually even the static faded, leaving silence so complete it felt like pressure.\n\nThe gas station attendant — a teenager with sun-bleached hair — filled her tank without speaking. Elise paid cash and asked if there was a diner.\n\n'Down the main road. The Anchor. They close at seven.'\n\n'It's four-thirty.'\n\n'Yeah.' He handed back her change. 'You're the grief doctor, aren't you.'\n\nIt wasn't a question.\n\nIn the diner, a table of four locals watched her with the kind of patient, courteous attention that felt, in retrospect, less like welcome and more like assessment." }
    ]
  }
];

/* ════════════════════════
   STATE
════════════════════════ */
const S = {
  stories:[], authors:[],
  view:'home', item:null, chapter:null, author:null,
  bookmarks: new Set(),
  history: {},
  storyVotes: {},   // { id: { score, votes, lastVote } }
  authorVotes: {},  // { id: { score, votes, lastVote } }
  filterType:'all', filterStatus:'all', filterGenre:'all', sortBy:'newest',
  activeGenre:null, fontSize:17,
  music:{ currentStoryId:null, playlists:[], index:0, playing:false, visible:false }
};

/* ════════════════════════
   HELPERS
════════════════════════ */
const el  = id  => document.getElementById(id);
const qs  = (s,c=document) => c.querySelector(s);
const qsa = (s,c=document) => [...c.querySelectorAll(s)];
const fmtDate = d => d ? new Date(d).toLocaleDateString('id-ID',{year:'numeric',month:'long',day:'numeric'}) : '';
const getAllGenres = () => { const s=new Set(); S.stories.forEach(i=>i.genre.forEach(g=>s.add(g))); return [...s].sort(); };
const getAuthor   = id => S.authors.find(a=>a.id===id);

/* ════════════════════════
   LOCALSTORAGE
════════════════════════ */
function lsLoad() {
  try {
    const bm=localStorage.getItem('prv_bm'); if(bm) S.bookmarks=new Set(JSON.parse(bm));
    const hi=localStorage.getItem('prv_hi'); if(hi) S.history=JSON.parse(hi);
    const sv=localStorage.getItem('prv_sv'); if(sv) S.storyVotes=JSON.parse(sv);
    const av=localStorage.getItem('prv_av'); if(av) S.authorVotes=JSON.parse(av);
    const th=localStorage.getItem('prv_theme'); if(th) document.documentElement.setAttribute('data-theme',th);
    const fs=localStorage.getItem('prv_fs'); if(fs) S.fontSize=parseInt(fs)||17;
    const ms=localStorage.getItem('prv_music'); if(ms){const m=JSON.parse(ms);S.music.currentStoryId=m.storyId||null;S.music.index=m.index||0;S.music.playing=m.playing||false;}
  } catch(e){}
}
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function saveBookmarks(){lsSave('prv_bm',[...S.bookmarks]);}
function saveHistory()  {lsSave('prv_hi',S.history);}
function saveStoryVotes(){lsSave('prv_sv',S.storyVotes);}
function saveAuthVotes() {lsSave('prv_av',S.authorVotes);}
function saveMusicState(){lsSave('prv_music',{storyId:S.music.currentStoryId,index:S.music.index,playing:S.music.playing});}

/* ════════════════════════
   RATING — Live, re-voteable
════════════════════════ */
function getEffectiveRating(type, id) {
  const base = type==='story'
    ? S.stories.find(s=>s.id===id)?.rating
    : S.authors.find(a=>a.id===id)?.rating;
  if (!base) return { average:0, votes:0 };
  const store = type==='story' ? S.storyVotes : S.authorVotes;
  const v = store[id];
  if (!v) return base;
  const totalScore = base.average * base.votes + v.score;
  const totalVotes = base.votes + v.votes;
  return { average:+(totalScore/totalVotes).toFixed(1), votes:totalVotes };
}

function submitVote(type, id, star) {
  const store = type==='story' ? S.storyVotes : S.authorVotes;
  if (!store[id]) store[id]={score:0,votes:0,lastVote:null};
  const v=store[id];
  if (v.lastVote!==null){v.score-=v.lastVote;v.votes-=1;}
  v.score+=star; v.votes+=1; v.lastVote=star;
  type==='story' ? saveStoryVotes() : saveAuthVotes();
  toast(`★ ${star} — Suaramu tercatat! Bisa diubah kapan saja.`);
}

function makeStarWidget(type, id) {
  const store = type==='story' ? S.storyVotes : S.authorVotes;
  const lastVote = store[id]?.lastVote || null;
  const r = getEffectiveRating(type, id);
  const displayStar = lastVote || Math.round(r.average);
  return `<div class="star-rating" id="sw-${type}-${id}">
    <div class="stars">
      ${[1,2,3,4,5].map(i=>`<span class="star${i<=displayStar?' filled':''}" data-val="${i}" data-type="${type}" data-id="${id}">★</span>`).join('')}
    </div>
    <span class="star-info">★ ${r.average} · ${r.votes} votes</span>
    ${lastVote
      ? `<span class="star-voted">✔ voted ${lastVote}★ — click to change</span>`
      : `<button class="star-vote-btn" data-type="${type}" data-id="${id}">VOTE</button>`
    }
  </div>`;
}

function attachStarWidget(container) {
  qsa('.star',container).forEach(star => {
    star.addEventListener('mouseenter',()=>{
      const val=+star.dataset.val, {type,id}=star.dataset;
      qsa(`.star[data-type="${type}"][data-id="${id}"]`,container).forEach((s,i)=>{
        s.classList.toggle('filled',i<val); s.classList.toggle('hover',i<val);
      });
    });
    star.addEventListener('mouseleave',()=>{
      const {type,id}=star.dataset;
      const store=type==='story'?S.storyVotes:S.authorVotes;
      const lv=store[id]?.lastVote||null;
      const r=getEffectiveRating(type,id);
      const fill=lv||Math.round(r.average);
      qsa(`.star[data-type="${type}"][data-id="${id}"]`,container).forEach((s,i)=>{
        s.classList.toggle('filled',i<fill); s.classList.remove('hover');
      });
    });
    star.addEventListener('click',()=>{
      const val=+star.dataset.val,{type,id}=star.dataset;
      submitVote(type,id,val);
      refreshStarWidget(container,type,id,val);
    });
  });
  qsa('.star-vote-btn',container).forEach(btn=>{
    btn.addEventListener('click',()=>{
      const {type,id}=btn.dataset;
      const r=getEffectiveRating(type,id);
      submitVote(type,id,Math.round(r.average)||3);
      refreshStarWidget(container,type,id,Math.round(r.average)||3);
    });
  });
}

function refreshStarWidget(container,type,id,val) {
  const w=el(`sw-${type}-${id}`); if(!w)return;
  const r=getEffectiveRating(type,id);
  const store=type==='story'?S.storyVotes:S.authorVotes;
  const lv=store[id]?.lastVote||null;
  w.innerHTML=`
    <div class="stars">
      ${[1,2,3,4,5].map(i=>`<span class="star${i<=(val||lv||Math.round(r.average))?' filled':''}" data-val="${i}" data-type="${type}" data-id="${id}">★</span>`).join('')}
    </div>
    <span class="star-info">★ ${r.average} · ${r.votes} votes</span>
    <span class="star-voted">✔ voted ${lv}★ — click to change</span>`;
  attachStarWidget(w);
}

/* ════════════════════════
   PIXEL HOURGLASS CANVAS
════════════════════════ */
let _hgStop = null;

function startHourglass() {
  const canvas = el('hgCanvas');
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  const W=44, H=60, PX=4;
  const COLS=Math.floor(W/PX), ROWS=Math.floor(H/PX);
  let frame=0, flipped=false;

  function colors() {
    const dark = document.documentElement.getAttribute('data-theme')!=='light';
    return {
      frame  : dark ? '#1a3360' : '#8aabda',
      sand   : dark ? '#4a9eff' : '#1d5ec9',
      sandGlow: dark ? '#6ba3f5' : '#4a7ecf',
      gold   : dark ? '#c8a84b' : '#9a7628',
      empty  : dark ? '#060d1e' : '#f0f4fc',
    };
  }

  // Hourglass silhouette mask
  function buildMask() {
    const mask=[];
    for (let r=0;r<ROWS;r++){
      mask[r]=[];
      for (let c=0;c<COLS;c++){
        // Top/bottom border rows
        if(r===0||r===1||r===ROWS-1||r===ROWS-2){mask[r][c]=true;continue;}
        // Left/right border cols
        if(c===0||c===1||c===COLS-1||c===COLS-2){mask[r][c]=true;continue;}
        // Hourglass inner shape: width tapers to center
        const norm=Math.abs((r/(ROWS-1))-0.5)*2; // 0 at mid, 1 at top/bot
        const hw=Math.max(1,(Math.floor(norm*(COLS/2-2))));
        const cx=COLS/2;
        mask[r][c]=(c>=cx-hw && c<cx+hw);
      }
    }
    return mask;
  }
  const mask=buildMask();
  const CYCLE=48;

  function drawHourglass(progress) {
    const C=colors();
    ctx.clearRect(0,0,W,H);
    for(let r=0;r<ROWS;r++){
      for(let c=0;c<COLS;c++){
        if(!mask[r][c])continue;
        const x=c*PX,y=r*PX;
        const isBorder=r<=1||r>=ROWS-2||c<=1||c>=COLS-2;
        if(isBorder){
          // corner pixels = gold, rest = frame color
          const isCorner=(r<=1||r>=ROWS-2)&&(c<=1||c>=COLS-2);
          ctx.fillStyle=isCorner?C.gold:C.frame;
        } else {
          const isMid=Math.abs(r-ROWS/2)<1.5;
          if(isMid){
            // Neck — falling sand particle
            const particleOn=(frame%4)<2;
            ctx.fillStyle=particleOn?C.sandGlow:C.empty;
          } else {
            const inTop=r<ROWS/2;
            // Identify inner cells in top/bot chamber
            const chamberStart=inTop?2:Math.ceil(ROWS/2)+1;
            const chamberEnd  =inTop?Math.floor(ROWS/2)-1:ROWS-3;
            const filled=inTop
              ? r>=(chamberStart+Math.round((chamberEnd-chamberStart)*(progress)))  // top drains from bottom up
              : r<=(chamberStart+Math.round((chamberEnd-chamberStart)*(progress)));  // bot fills from top down
            ctx.fillStyle=filled?C.sand:C.empty;
          }
        }
        ctx.fillRect(x,y,PX-1,PX-1);
      }
    }
  }

  const iv=setInterval(()=>{
    const progress=((frame%CYCLE)/CYCLE);
    drawHourglass(progress);
    frame++;
    // Flip at end of cycle
    if(frame%CYCLE===0){
      flipped=!flipped;
      canvas.style.transition='transform 0.45s cubic-bezier(.4,0,.2,1)';
      canvas.style.transform=flipped?'rotate(180deg)':'rotate(0deg)';
    }
  },75);

  return ()=>clearInterval(iv);
}

/* ════════════════════════
   TOAST
════════════════════════ */
function toast(msg){
  const w=el('toastWrap'); if(!w)return;
  const t=document.createElement('div');
  t.className='toast'; t.textContent=msg;
  w.appendChild(t);
  setTimeout(()=>t.remove(),3100);
}

/* ════════════════════════
   LOADER
════════════════════════ */
function hideLoader(){
  const l=el('loader'); if(!l)return;
  l.classList.add('hidden');
  setTimeout(()=>l.parentNode&&l.parentNode.removeChild(l),600);
}

/* ════════════════════════
   THEME
════════════════════════ */
function applyTheme(){
  const cur=document.documentElement.getAttribute('data-theme')||'dark';
  const btn=el('themeBtn');
  if(btn) btn.innerHTML=cur==='dark'?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme')||'dark';
  const nxt=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',nxt);
  lsSave('prv_theme',nxt);
  applyTheme();
}

/* ════════════════════════
   BUILD SHELL
════════════════════════ */
function buildShell(){
  el('app').innerHTML=`
  <!-- NAV -->
  <nav class="nav">
    <canvas id="navPixelCanvas"></canvas>
    <div class="nav-inner">
      <div class="nav-logo" id="logoBtn">
        <span class="nav-logo-main">PROV<span class="hl">EL</span>MICS</span>
        <span class="nav-logo-badge">PROMED</span>
      </div>
      <div class="nav-spacer"></div>
      <div class="nav-search-wrap">
        <span class="nav-search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input class="nav-search" id="navSearch" type="search" placeholder="Search title, genre…" autocomplete="off"/>
      </div>
      <button class="icon-btn" id="mobileSearchBtn" title="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
      <button class="icon-btn" id="themeBtn" title="Toggle theme"></button>
      <button class="icon-btn burger" id="burgerBtn" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- MOBILE SEARCH -->
  <div class="mobile-search-overlay" id="mobileSearchOverlay">
    <div style="display:flex;align-items:center;gap:10px">
      <button class="icon-btn" id="mobileSearchClose"><i class="fa-solid fa-arrow-left"></i></button>
      <input class="mobile-search-input" id="mobileSearchInput" type="search" placeholder="Search title, genre, author…" autocomplete="off"/>
    </div>
  </div>

  <!-- DRAWER -->
  <div class="drawer-overlay" id="drawerOverlay"></div>
  <aside class="drawer" id="drawer">
    <div class="drawer-head">
      <span class="drawer-title">Nav<span>igation</span></span>
      <button class="icon-btn" id="drawerClose"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="drawer-body">
      <div class="drawer-item active" data-nav="home"><i class="fa-solid fa-house"></i> Home</div>
      <div class="drawer-item" data-nav="ratings"><i class="fa-solid fa-trophy"></i> Top Rating</div>
      <div class="drawer-item" data-nav="authors"><i class="fa-solid fa-users"></i> Authors</div>
      <div class="drawer-item" data-nav="genre"><i class="fa-solid fa-layer-group"></i> Browse Genre</div>
      <div class="drawer-item" data-nav="bookmarks"><i class="fa-solid fa-bookmark"></i> Bookmarks</div>
      <div class="drawer-sep">◆ Genre </div>
      <div class="drawer-genre-wrap" id="drawerGenres"></div>
    </div>
    <div class="drawer-foot">PROVELMICS © 2025 · Neo-Vintage Blueprint</div>
  </aside>

  <!-- PROGRESS BAR -->
  <div class="progress-wrap" id="progressWrap" style="display:none">
    <div class="progress-fill" id="progressFill"></div>
  </div>

  <!-- PAGES -->
  <main id="mainContent">
    <div class="page" id="page-home"></div>
    <div class="page" id="page-detail"></div>
    <div class="page" id="page-reader"></div>
    <div class="page" id="page-bookmarks"></div>
    <div class="page" id="page-authors"></div>
    <div class="page" id="page-author-detail"></div>
    <div class="page" id="page-genre"></div>
    <div class="page" id="page-search"></div>
    <div class="page" id="page-ratings"></div>
  </main>

  <!-- MUSIC PLAYER -->
  <div class="music-player hidden" id="musicPlayer">
    <div class="music-head">
      <div class="music-now">
        <div class="music-pulse paused" id="musicPulse"></div>
        <span class="music-now-label">SARAN GUA SAMBIL DENGER INI LANGSUNG DI SPOTIFY BRAY</span>
      </div>
      <div class="music-btns">
        <button class="m-btn" id="mPrev"><i class="fa-solid fa-backward-step"></i></button>
        <button class="m-btn primary" id="mPlayPause"><i class="fa-solid fa-play"></i></button>
        <button class="m-btn" id="mNext"><i class="fa-solid fa-forward-step"></i></button>
        <button class="m-btn" id="mClose"><i class="fa-solid fa-xmark"></i></button>
      </div>
    </div>
    <div class="music-track" id="musicTrackInfo">Track 1 / 1</div>
    <div id="musicIframe" class="music-iframe"></div>
    <div class="music-paused hidden" id="musicPausedMsg"><i class="fa-solid fa-pause"></i> Paused</div>
  </div>
  <button class="music-fab hidden" id="musicFab"><i class="fa-solid fa-music"></i></button>
  <div class="toast-wrap" id="toastWrap"></div>
  `;
}

/* ════════════════════════
   VIEW ROUTER
════════════════════════ */
function showView(name){
  S.view=name;
  qsa('.page').forEach(p=>p.classList.remove('active'));
  const pg=el('page-'+name); if(pg) pg.classList.add('active');
  const pw=el('progressWrap'); if(pw) pw.style.display=name==='reader'?'block':'none';
  qsa('.drawer-item[data-nav]').forEach(i=>i.classList.toggle('active',i.dataset.nav===name));
  closeDrawer();
  window.scrollTo({top:0});
}

/* ════════════════════════
   CARD
════════════════════════ */
function buildCard(story){
  const r=getEffectiveRating('story',story.id);
  const bm=S.bookmarks.has(story.id);
  const auth=getAuthor(story.authorId);
  const sc='s-'+story.status.toLowerCase();
  return `<div class="card" data-id="${story.id}">
    <div class="card-cover">
      <img src="${story.cover}" alt="${story.title}" loading="lazy"/>
      <span class="card-badge">${story.type}</span>
      <span class="card-status ${sc}" title="${story.status}"></span>
      ${bm?'<span class="card-bm"><i class="fa-solid fa-bookmark"></i></span>':''}
    </div>
    <div class="card-body">
      <div class="card-title">${story.title}</div>
      <div class="card-genres">${story.genre.slice(0,2).map(g=>`<span class="card-genre">${g}</span>`).join('')}</div>
      <div class="card-foot"><span class="card-stars">★ ${r.average}</span><span class="card-author">${auth?auth.penName:''}</span></div>
    </div>
  </div>`;
}
function attachCardClicks(c){qsa('.card',c).forEach(card=>card.addEventListener('click',()=>{const s=S.stories.find(x=>x.id===card.dataset.id);if(s)goDetail(s);}));}

/* ════════════════════════
   FILTER
════════════════════════ */
function getFiltered(){
  let d=[...S.stories];
  if(S.filterType!=='all') d=d.filter(s=>s.type===S.filterType);
  if(S.filterStatus!=='all') d=d.filter(s=>s.status.toLowerCase()===S.filterStatus);
  if(S.filterGenre!=='all') d=d.filter(s=>s.genre.map(g=>g.toLowerCase()).includes(S.filterGenre.toLowerCase()));
  switch(S.sortBy){
    case 'newest': d.sort((a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt)); break;
    case 'oldest': d.sort((a,b)=>new Date(a.updatedAt)-new Date(b.updatedAt)); break;
    case 'az':     d.sort((a,b)=>a.title.localeCompare(b.title)); break;
    case 'za':     d.sort((a,b)=>b.title.localeCompare(a.title)); break;
    case 'rating': d.sort((a,b)=>getEffectiveRating('story',b.id).average-getEffectiveRating('story',a.id).average); break;
  }
  return d;
}

/* ════════════════════════
   HOME
════════════════════════ */
function renderHome(){
  const genres=getAllGenres();
  const totalComics=S.stories.filter(s=>s.type==='comic').length;
  const totalNovels=S.stories.filter(s=>s.type==='novel').length;
  el('page-home').innerHTML=`
  <div class="home-hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-left">
          <div class="hero-eyebrow">Est. 2025 · Produksi Media</div>
          <h1 class="hero-h1">Read <em>deeply.</em><br>Discover <span class="gold-word">worlds.</span></h1>
          <p class="hero-p">Koleksi komik web dan novel orisinal terpilih — dibaca dengan indah, disajikan dengan rasa.</p>
          <div class="hero-stats">
            <div class="hstat"><div class="hstat-n">${S.stories.length}</div><div class="hstat-l">TITLES</div></div>
            <div class="hstat"><div class="hstat-n">${totalComics}</div><div class="hstat-l">COMICS</div></div>
            <div class="hstat"><div class="hstat-n">${totalNovels}</div><div class="hstat-l">NOVELS</div></div>
            <div class="hstat"><div class="hstat-n">${S.authors.length}</div><div class="hstat-l">AUTHORS</div></div>
          </div>
        </div>
        <div class="hero-deco">
          <div class="hero-deco-title">◆ LATEST ◆</div>
          <div class="hero-deco-line"></div>
          ${S.stories.slice(0,4).map(s=>`<div class="hero-deco-item"><div class="hero-deco-dot"></div>${s.title}</div>`).join('')}
          <div class="hero-deco-line"></div>
          <div class="hero-deco-title" style="color:var(--text-3);margin-top:4px">PROVELMICS</div>
        </div>
      </div>
    </div>
  </div>

  <div class="filterbar">
    <div class="filterbar-inner">
      <span class="fl-label">FILTER</span>
      <select class="fsel" id="fType"><option value="all">All Type</option><option value="comic">Comic</option><option value="novel">Novel</option></select>
      <select class="fsel" id="fStatus"><option value="all">All Status</option><option value="ongoing">Ongoing</option><option value="completed">Completed</option><option value="hiatus">Hiatus</option><option value="dropped">Dropped</option></select>
      <select class="fsel" id="fGenre"><option value="all">All Genre</option>${genres.map(g=>`<option value="${g}">${g}</option>`).join('')}</select>
      <div class="divider-pill"></div>
      <span class="fl-label">SORT</span>
      <select class="fsel" id="fSort"><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="az">A → Z</option><option value="za">Z → A</option><option value="rating">Top Rating</option></select>
    </div>
  </div>

  <div class="container">
    <div id="continueWrap" style="padding-top:28px"></div>
    <div class="section">
      <div class="sec-head">
        <div class="sec-title-wrap">
          <span class="sec-eyebrow">◆ COLLECTION</span>
          <h2 class="sec-title" id="gridTitle">All Stories</h2>
        </div>
        <span class="sec-count" id="gridCount"></span>
      </div>
      <div class="card-grid" id="mainGrid"></div>
    </div>

    <div class="orn-div"><span>◆</span></div>

    <div class="section">
      <div class="sec-head">
        <div class="sec-title-wrap">
          <span class="sec-eyebrow">◆ CREATORS</span>
          <h2 class="sec-title">Our Authors</h2>
        </div>
        <span class="sec-action" id="seeAllAuthors">View All →</span>
      </div>
      <div class="author-strip" id="authorStrip"></div>
    </div>
  </div>
  `;

  const fType=el('fType'),fStatus=el('fStatus'),fGenre=el('fGenre'),fSort=el('fSort');
  if(fType)   fType.value  =S.filterType;
  if(fStatus) fStatus.value=S.filterStatus;
  if(fGenre)  fGenre.value =S.filterGenre;
  if(fSort)   fSort.value  =S.sortBy;

  renderContinue(); renderGrid(); renderAuthorStrip(); populateDrawerGenres();

  [fType,fStatus,fGenre,fSort].forEach(sel=>{if(!sel)return;sel.addEventListener('change',()=>{S.filterType=el('fType').value;S.filterStatus=el('fStatus').value;S.filterGenre=el('fGenre').value;S.sortBy=el('fSort').value;renderGrid();});});
  el('seeAllAuthors')?.addEventListener('click',goAuthors);
}

function renderContinue(){
  const wrap=el('continueWrap'); if(!wrap)return;
  const entries=Object.entries(S.history); if(!entries.length)return;
  const[sid,hist]=entries[entries.length-1];
  const story=S.stories.find(s=>s.id===sid); if(!story)return;
  const chap=story.chapters.find(c=>c.id===hist.chapterId); if(!chap)return;
  wrap.innerHTML=`<div class="continue-banner" id="continueBanner">
    <div class="cb-icon"><i class="fa-solid fa-rotate-right"></i></div>
    <div>
      <div class="cb-tag">◆ CONTINUE READING</div>
      <div class="cb-title">${story.title}</div>
      <div class="cb-chap">${chap.title}</div>
    </div>
    <div class="cb-arr"><i class="fa-solid fa-arrow-right"></i></div>
  </div>`;
  el('continueBanner')?.addEventListener('click',()=>goReader(story,chap));
}

function renderGrid(){
  const grid=el('mainGrid'),cnt=el('gridCount'); if(!grid)return;
  const data=getFiltered();
  if(cnt) cnt.textContent=`${data.length} titles`;
  grid.innerHTML=data.length?data.map(buildCard).join(''):'<div class="empty"><i class="fa-regular fa-compass"></i><p>No stories found.</p></div>';
  attachCardClicks(grid);
}

function renderAuthorStrip(){
  const s=el('authorStrip'); if(!s)return;
  s.innerHTML=S.authors.map(a=>`<div class="author-chip" data-aid="${a.id}">
    <div class="author-avatar"><img src="${a.photo}" alt="${a.penName}" loading="lazy"/></div>
    <span class="author-chip-name">${a.penName}</span>
  </div>`).join('');
  qsa('.author-chip',s).forEach(c=>c.addEventListener('click',()=>{const a=S.authors.find(x=>x.id===c.dataset.aid);if(a)goAuthorDetail(a);}));
}

function populateDrawerGenres(){
  const w=el('drawerGenres'); if(!w)return;
  w.innerHTML=getAllGenres().map(g=>`<span class="drawer-genre" data-genre="${g}">${g}</span>`).join('');
  qsa('.drawer-genre',w).forEach(b=>b.addEventListener('click',()=>goGenre(b.dataset.genre)));
}

/* ════════════════════════
   DETAIL
════════════════════════ */
function goDetail(story){
  S.item=story;
  const pg=el('page-detail');
  const author=getAuthor(story.authorId);
  const bm=S.bookmarks.has(story.id);
  const hist=S.history[story.id];
  const contChap=hist?story.chapters.find(c=>c.id===hist.chapterId)||story.chapters[0]:story.chapters[0];
  pg.setAttribute('data-type','');
  pg.innerHTML=`
  <div class="detail-hero" data-type="${story.type}">
    <div class="detail-inner">
      <div class="detail-cover"><img src="${story.cover}" alt="${story.title}"/></div>
      <div class="detail-info">
        <div class="detail-type-badge"><i class="fa-solid fa-${story.type==='comic'?'image':'book'}"></i> ${story.type.toUpperCase()}</div>
        <h1 class="detail-title">${story.title}</h1>
        <div class="detail-author-link" id="detailAuthorLink">
          by <strong>${author?author.penName:'Unknown'}</strong>${author?` <span style="color:var(--text-3);font-style:normal">· ${author.realName}</span>`:''}
        </div>
        <div class="detail-badges">
          <span class="badge badge-${story.status.toLowerCase()}">${story.status}</span>
          ${story.genre.map(g=>`<span class="badge">${g}</span>`).join('')}
        </div>
        <p class="detail-desc">${story.description}</p>
        ${makeStarWidget('story',story.id)}
        <div class="detail-actions">
          <button class="btn btn-primary" id="detailReadBtn"><i class="fa-solid fa-book-open-reader"></i> ${hist?'Continue Reading':'Start Reading'}</button>
          <button class="btn btn-secondary" id="detailBmBtn"><i class="fa-${bm?'solid':'regular'} fa-bookmark"></i> ${bm?'Saved':'Save'}</button>
          <button class="btn btn-ghost" id="detailBackBtn"><i class="fa-solid fa-arrow-left"></i> Back</button>
        </div>
      </div>
    </div>
  </div>
  <div class="chap-section">
    <div class="chap-header">
      <h2 class="chap-header-title">Chapters</h2>
      <span class="chap-header-count">${story.chapters.length} total</span>
    </div>
    <div class="chap-list">
      ${story.chapters.map((ch,i)=>{
        const isRead=hist&&hist.readChapters&&hist.readChapters.includes(ch.id);
        return `<div class="chap-item" data-chid="${ch.id}">
          <div class="chap-item-left">
            <div class="chap-num">${String(i+1).padStart(2,'0')}</div>
            <div>
              <div class="chap-name">${ch.title}</div>
              <div class="chap-date">${fmtDate(ch.date)}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            ${isRead?'<span class="chap-read-tag">READ</span>':''}
            <i class="fa-solid fa-chevron-right" style="color:var(--accent);font-size:.78rem"></i>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;

  attachStarWidget(pg);
  el('detailReadBtn')?.addEventListener('click',()=>goReader(story,contChap));
  el('detailBackBtn')?.addEventListener('click',()=>{showView('home');renderHome();});
  el('detailBmBtn')?.addEventListener('click',()=>{
    if(S.bookmarks.has(story.id)){S.bookmarks.delete(story.id);toast('Bookmark removed');}
    else{S.bookmarks.add(story.id);toast('★ Saved to bookmarks!');}
    saveBookmarks(); goDetail(story);
  });
  if(author){el('detailAuthorLink').style.cursor='pointer';el('detailAuthorLink').addEventListener('click',()=>goAuthorDetail(author));}
  qsa('.chap-item',pg).forEach(item=>item.addEventListener('click',()=>{const ch=story.chapters.find(c=>c.id===item.dataset.chid);if(ch)goReader(story,ch);}));
  showView('detail');
}

/* ════════════════════════
   READER
════════════════════════ */
function goReader(story,chapter){
  S.item=story; S.chapter=chapter;
  const ci=story.chapters.findIndex(c=>c.id===chapter.id);
  const hasPrev=ci>0,hasNext=ci<story.chapters.length-1;
  if(!S.history[story.id]) S.history[story.id]={readChapters:[]};
  S.history[story.id].chapterId=chapter.id;
  if(!S.history[story.id].readChapters.includes(chapter.id)) S.history[story.id].readChapters.push(chapter.id);
  saveHistory();
  handleMusicForStory(story);
  const pg=el('page-reader');
  const content=story.type==='comic'?buildComicContent(chapter):buildNovelContent(chapter);
  pg.innerHTML=`
  <div class="reader-topbar">
    <button class="icon-btn" id="rdrBack"><i class="fa-solid fa-arrow-left"></i></button>
    <div class="reader-topbar-title">${story.title} · ${chapter.title}</div>
    <div class="reader-controls">
      ${story.type==='novel'?`<div class="font-ctrl"><button class="font-btn" id="fontDec">A−</button><span class="font-val" id="fontVal">${S.fontSize}</span><button class="font-btn" id="fontInc">A+</button></div>`:''}
      ${hasPrev?`<button class="btn btn-secondary btn-sm" id="rdrPrev"><i class="fa-solid fa-chevron-left"></i></button>`:''}
      ${hasNext?`<button class="btn btn-primary btn-sm" id="rdrNext"><i class="fa-solid fa-chevron-right"></i></button>`:''}
    </div>
  </div>
  ${content}
  <div class="reader-bot">
    ${hasPrev?`<button class="btn btn-secondary btn-sm" id="rdrPrevBot"><i class="fa-solid fa-chevron-left"></i> Prev</button>`:'<div></div>'}
    <button class="btn btn-ghost btn-sm" id="rdrChapBtn"><i class="fa-solid fa-list"></i> Chapters</button>
    ${hasNext?`<button class="btn btn-primary btn-sm" id="rdrNextBot">Next <i class="fa-solid fa-chevron-right"></i></button>`:'<div></div>'}
  </div>`;

  const prevCh=hasPrev?story.chapters[ci-1]:null;
  const nextCh=hasNext?story.chapters[ci+1]:null;
  el('rdrBack')?.addEventListener('click',()=>goDetail(story));
  el('rdrChapBtn')?.addEventListener('click',()=>goDetail(story));
  el('rdrPrev')?.addEventListener('click',()=>goReader(story,prevCh));
  el('rdrNext')?.addEventListener('click',()=>goReader(story,nextCh));
  el('rdrPrevBot')?.addEventListener('click',()=>goReader(story,prevCh));
  el('rdrNextBot')?.addEventListener('click',()=>goReader(story,nextCh));
  el('fontDec')?.addEventListener('click',()=>{S.fontSize=Math.max(13,S.fontSize-1);applyFontSize();});
  el('fontInc')?.addEventListener('click',()=>{S.fontSize=Math.min(26,S.fontSize+1);applyFontSize();});
  showView('reader');
  setupProgressBar();
}

function applyFontSize(){lsSave('prv_fs',S.fontSize);const c=el('novelContent'),v=el('fontVal');if(c)c.style.fontSize=S.fontSize+'px';if(v)v.textContent=S.fontSize;}
function buildComicContent(ch){const imgs=ch.pages.map((p,i)=>`<img class="comic-page" src="${p}" alt="Page ${i+1}" loading="lazy"/>`).join('');return `<div class="comic-reader"><div class="comic-inner">${imgs}<div class="comic-end">— ${ch.title} —</div></div></div>`;}
function buildNovelContent(ch){const ps=(ch.content||'').split('\n\n').filter(p=>p.trim());return `<div class="novel-reader"><div class="novel-inner"><h1 class="novel-ch-title">${ch.title}</h1><div class="novel-ch-meta">${fmtDate(ch.date)}</div><div class="novel-content" id="novelContent" style="font-size:${S.fontSize}px">${ps.map(p=>`<p>${p.replace(/\n/g,'<br>')}</p>`).join('')}</div><div class="novel-end">${ch.title}</div></div></div>`;}
function setupProgressBar(){const fill=el('progressFill');function onS(){const h=document.documentElement.scrollHeight-window.innerHeight;if(fill)fill.style.width=(h>0?(window.scrollY/h)*100:0)+'%';}window.addEventListener('scroll',onS,{passive:true});const obs=new MutationObserver(()=>{if(S.view!=='reader'){window.removeEventListener('scroll',onS);obs.disconnect();}});const pg=el('page-reader');if(pg)obs.observe(pg,{attributes:true,attributeFilter:['class']});}

/* ════════════════════════
   MUSIC
════════════════════════ */
function handleMusicForStory(story){const m=story.music,fab=el('musicFab'),player=el('musicPlayer');if(!m||!m.enabled||!m.playlist.length){if(fab)fab.classList.add('hidden');if(player)player.classList.add('hidden');S.music.playing=false;saveMusicState();return;}fab.classList.remove('hidden');if(S.music.currentStoryId!==story.id){S.music.currentStoryId=story.id;S.music.playlists=m.playlist;S.music.index=0;S.music.playing=false;}saveMusicState();updateMusicUI();}
function updateMusicUI(){const player=el('musicPlayer'),ifw=el('musicIframe'),pm=el('musicPausedMsg'),pulse=el('musicPulse'),ppBtn=el('mPlayPause'),track=el('musicTrackInfo');if(!player)return;const{playlists,index,playing,visible}=S.music;if(track)track.textContent=`Track ${index+1} / ${playlists.length}`;if(playing){if(ifw)ifw.innerHTML=`<iframe src="${playlists[index]}" allow="autoplay;clipboard-write;encrypted-media;fullscreen;picture-in-picture" loading="lazy"></iframe>`;if(pm)pm.classList.add('hidden');if(pulse)pulse.classList.remove('paused');if(ppBtn)ppBtn.innerHTML='<i class="fa-solid fa-pause"></i>';}else{if(ifw)ifw.innerHTML='';if(pm)pm.classList.remove('hidden');if(pulse)pulse.classList.add('paused');if(ppBtn)ppBtn.innerHTML='<i class="fa-solid fa-play"></i>';}if(visible)player.classList.remove('hidden');else player.classList.add('hidden');}

/* ════════════════════════
   AUTHORS
════════════════════════ */
function goAuthors(){
  const pg=el('page-authors');
  pg.innerHTML=`<div class="container"><div class="page-head"><div class="page-eyebrow">◆ CREATORS</div><h1 class="page-heading">Our Authors</h1><p class="page-sub">Para kreator di balik cerita favoritmu</p></div><div class="author-grid">${S.authors.map(a=>{const r=getEffectiveRating('author',a.id);return`<div class="author-card" data-aid="${a.id}"><div class="author-card-avatar"><img src="${a.photo}" alt="${a.penName}" loading="lazy"/></div><div class="author-card-pen">${a.penName}</div><div class="author-card-real">${a.realName}</div><div class="author-card-stars">★ ${r.average} · ${r.votes} votes</div></div>`;}).join('')}</div></div>`;
  qsa('.author-card',pg).forEach(c=>c.addEventListener('click',()=>{const a=S.authors.find(x=>x.id===c.dataset.aid);if(a)goAuthorDetail(a);}));
  showView('authors');
}

function goAuthorDetail(author){
  S.author=author;
  const works=S.stories.filter(s=>s.authorId===author.id);
  const pg=el('page-author-detail');
  pg.innerHTML=`
  <div class="author-detail-hero">
    <div class="author-detail-inner">
      <div class="author-big-avatar"><img src="${author.photo}" alt="${author.penName}" loading="lazy"/></div>
      <div>
        <div class="detail-type-badge">◆ AUTHOR</div>
        <div class="author-detail-pen">${author.penName}</div>
        <div class="author-detail-real">${author.realName}</div>
        <p style="font-size:.9rem;color:var(--text-2);margin-bottom:16px;max-width:500px;font-style:italic;font-family:var(--f-serif)">${author.bio}</p>
        ${makeStarWidget('author',author.id)}
        <button class="btn btn-ghost" id="authorBackBtn" style="margin-top:10px"><i class="fa-solid fa-arrow-left"></i> Back</button>
      </div>
    </div>
  </div>
  <div class="container" style="padding-top:30px;padding-bottom:70px">
    <div class="sec-head">
      <div class="sec-title-wrap">
        <span class="sec-eyebrow">◆ WORKS</span>
        <h2 class="sec-title">By ${author.penName} (${works.length})</h2>
      </div>
    </div>
    <div class="card-grid" id="authorWorksGrid">${works.length?works.map(buildCard).join(''):'<div class="empty"><i class="fa-regular fa-compass"></i><p>No works yet.</p></div>'}</div>
  </div>`;
  attachStarWidget(pg);
  el('authorBackBtn')?.addEventListener('click',goAuthors);
  attachCardClicks(el('authorWorksGrid'));
  showView('author-detail');
}

/* ════════════════════════
   GENRE / BOOKMARKS / RATINGS / SEARCH
════════════════════════ */
function goGenre(g){
  if(g)S.activeGenre=g;
  const genres=getAllGenres(),active=S.activeGenre||genres[0];
  const filtered=S.stories.filter(s=>s.genre.map(x=>x.toLowerCase()).includes(active.toLowerCase()));
  const pg=el('page-genre');
  pg.innerHTML=`<div class="container"><div class="page-head"><div class="page-eyebrow">◆ BROWSE</div><h1 class="page-heading">Genre</h1></div><div class="genre-chips">${genres.map(x=>`<button class="genre-chip-btn ${x===active?'active':''}" data-genre="${x}">${x}</button>`).join('')}</div><div class="sec-head"><div class="sec-title-wrap"><span class="sec-eyebrow">◆ RESULTS</span><h2 class="sec-title">${active}</h2></div><span class="sec-count">${filtered.length} titles</span></div><div class="card-grid" id="genreGrid">${filtered.length?filtered.map(buildCard).join(''):'<div class="empty"><i class="fa-regular fa-compass"></i><p>No stories.</p></div>'}</div></div>`;
  qsa('.genre-chip-btn',pg).forEach(b=>b.addEventListener('click',()=>goGenre(b.dataset.genre)));
  attachCardClicks(pg);
  showView('genre');
}

function goBookmarks(){
  const items=S.stories.filter(s=>S.bookmarks.has(s.id));
  const pg=el('page-bookmarks');
  pg.innerHTML=`<div class="container"><div class="page-head"><div class="page-eyebrow">◆ SAVED</div><h1 class="page-heading">Bookmarks</h1><p class="page-sub">${items.length} cerita tersimpan</p></div><div class="card-grid">${items.length?items.map(buildCard).join(''):'<div class="empty"><i class="fa-regular fa-bookmark"></i><p>Belum ada bookmark.</p></div>'}</div></div>`;
  attachCardClicks(pg);
  showView('bookmarks');
}

function goRatings(){
  const sorted=[...S.stories].sort((a,b)=>getEffectiveRating('story',b.id).average-getEffectiveRating('story',a.id).average);
  const pg=el('page-ratings');
  pg.innerHTML=`<div class="container"><div class="page-head"><div class="page-eyebrow">◆ LEADERBOARD</div><h1 class="page-heading">Top Rated</h1><p class="page-sub">Cerita terbaik berdasarkan suara pembaca</p></div>${sorted.map((s,i)=>{const r=getEffectiveRating('story',s.id),auth=getAuthor(s.authorId);return`<div class="top-rating-item" data-id="${s.id}"><div class="top-rank ${i===0?'gold-rank':''}">#${i+1}</div><div class="top-cover"><img src="${s.cover}" alt="${s.title}" loading="lazy"/></div><div class="top-info"><div class="top-title">${s.title}</div><div class="top-author">${auth?auth.penName:''} · ${s.type} · ${s.status}</div><div class="top-stars">★ ${r.average} <span style="color:var(--text-3);font-weight:400">(${r.votes} votes)</span></div></div><i class="fa-solid fa-chevron-right" style="color:var(--accent)"></i></div>`;}).join('')}</div>`;
  qsa('.top-rating-item',pg).forEach(item=>item.addEventListener('click',()=>{const s=S.stories.find(x=>x.id===item.dataset.id);if(s)goDetail(s);}));
  showView('ratings');
}

function goSearch(query){
  const q=query.toLowerCase().trim();
  const results=!q?[]:S.stories.filter(s=>s.title.toLowerCase().includes(q)||s.genre.some(g=>g.toLowerCase().includes(q))||(getAuthor(s.authorId)||{penName:''}).penName.toLowerCase().includes(q)||s.description.toLowerCase().includes(q));
  const pg=el('page-search');
  pg.innerHTML=`<div class="container"><div class="page-head"><div class="page-eyebrow">◆ SEARCH</div><h1 class="page-heading">"${query}"</h1><p class="page-sub">${results.length} results found</p></div><div class="card-grid">${results.length?results.map(buildCard).join(''):'<div class="empty"><i class="fa-solid fa-magnifying-glass"></i><p>No results.</p></div>'}</div></div>`;
  attachCardClicks(pg);
  showView('search');
}

/* ════════════════════════
   DRAWER
════════════════════════ */
function openDrawer() {el('drawer')?.classList.add('open');el('drawerOverlay')?.classList.add('open');el('burgerBtn')?.classList.add('open');}
function closeDrawer(){el('drawer')?.classList.remove('open');el('drawerOverlay')?.classList.remove('open');el('burgerBtn')?.classList.remove('open');}

/* ════════════════════════
   LISTENERS
════════════════════════ */
function attachListeners(){
  el('themeBtn')?.addEventListener('click',toggleTheme);
  el('logoBtn')?.addEventListener('click',()=>{renderHome();showView('home');});
  el('burgerBtn')?.addEventListener('click',openDrawer);
  el('drawerClose')?.addEventListener('click',closeDrawer);
  el('drawerOverlay')?.addEventListener('click',closeDrawer);
  qsa('.drawer-item[data-nav]').forEach(item=>item.addEventListener('click',()=>{const n=item.dataset.nav;if(n==='home'){renderHome();showView('home');}else if(n==='ratings')goRatings();else if(n==='authors')goAuthors();else if(n==='genre')goGenre(null);else if(n==='bookmarks')goBookmarks();}));
  el('navSearch')?.addEventListener('input',e=>{const q=e.target.value.trim();if(q)goSearch(q);else{renderHome();showView('home');}});
  el('navSearch')?.addEventListener('keydown',e=>{if(e.key==='Escape'){e.target.value='';renderHome();showView('home');}});
  el('mobileSearchBtn')?.addEventListener('click',()=>{el('mobileSearchOverlay')?.classList.add('open');setTimeout(()=>el('mobileSearchInput')?.focus(),80);});
  el('mobileSearchClose')?.addEventListener('click',()=>{el('mobileSearchOverlay')?.classList.remove('open');el('mobileSearchInput').value='';});
  el('mobileSearchInput')?.addEventListener('input',e=>{const q=e.target.value.trim();if(q){el('mobileSearchOverlay')?.classList.remove('open');goSearch(q);}});
  el('musicFab')?.addEventListener('click',()=>{S.music.visible=!S.music.visible;updateMusicUI();});
  el('mClose')?.addEventListener('click',()=>{S.music.visible=false;updateMusicUI();});
  el('mPlayPause')?.addEventListener('click',()=>{if(!S.music.playlists.length)return;S.music.playing=!S.music.playing;saveMusicState();updateMusicUI();});
  el('mNext')?.addEventListener('click',()=>{if(!S.music.playlists.length)return;S.music.index=(S.music.index+1)%S.music.playlists.length;saveMusicState();updateMusicUI();toast(`Track ${S.music.index+1}/${S.music.playlists.length}`);});
  el('mPrev')?.addEventListener('click',()=>{if(!S.music.playlists.length)return;S.music.index=(S.music.index-1+S.music.playlists.length)%S.music.playlists.length;saveMusicState();updateMusicUI();toast(`Track ${S.music.index+1}/${S.music.playlists.length}`);});
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();el('navSearch')?.focus();}if(e.key==='Escape')closeDrawer();});
}

/* ════════════════════════════════════════
   NAV PIXEL ANIMATION
   Floating pixel particles drifting across navbar
════════════════════════════════════════ */
function startNavPixels() {
  const canvas = el('navPixelCanvas');
  if (!canvas) return () => {};

  const nav = canvas.parentElement;
  function resize() {
    canvas.width  = nav.offsetWidth;
    canvas.height = nav.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const ctx = canvas.getContext('2d');
  const PX  = 4; // pixel block size

  // Particle types: drifters, blinkers, shooters
  const COUNT = 28;
  const particles = [];

  function mkColor(alpha) {
    const dark = document.documentElement.getAttribute('data-theme') !== 'light';
    const cols = dark
      ? ['74,158,255', '200,168,75', '110,180,255', '42,78,140']
      : ['29,94,201',  '154,118,40', '60,120,200',  '80,140,220'];
    const c = cols[Math.floor(Math.random() * cols.length)];
    return `rgba(${c},${alpha})`;
  }

  function mkParticle() {
    const W = canvas.width, H = canvas.height;
    const type = Math.random() < 0.5 ? 'drift' : Math.random() < 0.6 ? 'blink' : 'shoot';
    return {
      type,
      x    : Math.random() * W,
      y    : Math.floor(Math.random() * (H / PX)) * PX,
      vx   : type === 'shoot' ? (Math.random() * 2 + 1.5) * (Math.random() < 0.5 ? 1 : -1) : (Math.random() * 0.4 + 0.1),
      vy   : type === 'drift' ? (Math.random() * 0.3 - 0.15) : 0,
      alpha: Math.random() * 0.5 + 0.25,
      size : Math.random() < 0.3 ? PX * 2 : PX,
      life : 1,
      decay: type === 'blink' ? (Math.random() * 0.012 + 0.006) : (Math.random() * 0.004 + 0.001),
      col  : mkColor(1),
      blinkT: 0,
    };
  }

  for (let i = 0; i < COUNT; i++) particles.push(mkParticle());

  let animId;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      // Update
      p.x += p.vx;
      p.y += p.vy;

      if (p.type === 'blink') {
        p.blinkT += 0.08;
        p.alpha = (Math.sin(p.blinkT) * 0.4 + 0.5) * 0.65;
      } else {
        p.life -= p.decay;
        p.alpha = p.life * 0.55;
      }

      // Remove dead / out-of-bounds
      const W = canvas.width, H = canvas.height;
      if (p.life <= 0 || p.x < -PX * 2 || p.x > W + PX * 2 || p.y < 0 || p.y > H) {
        particles.splice(i, 1);
        particles.push(mkParticle());
        continue;
      }

      // Draw pixel block — snap to grid
      const sx = Math.floor(p.x / PX) * PX;
      const sy = Math.floor(p.y / PX) * PX;
      ctx.globalAlpha = Math.min(p.alpha, 0.7);
      ctx.fillStyle   = p.col;
      ctx.fillRect(sx, sy, p.size - 1, p.size - 1);

      // Tiny trail for shoot particles
      if (p.type === 'shoot') {
        ctx.globalAlpha = p.alpha * 0.3;
        ctx.fillRect(sx - Math.sign(p.vx) * p.size, sy, p.size - 1, p.size - 1);
      }
    }

    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }

  draw();
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
  };
}

/* ════════════════════════
   INIT — urutan benar
════════════════════════ */
function init(){
  lsLoad();                      // 1. Load state
  buildShell();                  // 2. Build DOM
  applyTheme();                  // 3. Theme (DOM tersedia)
  _hgStop = startHourglass();    // 4. Hourglass loader animation
  startNavPixels();              // 5. Nav pixel animation (runs forever)
  S.stories = STORIES_DATA;     // 6. Load data
  S.authors = AUTHORS_DATA;
  renderHome();                  // 7. Render home
  showView('home');
  attachListeners();             // 8. Events
  hideLoader();                  // 9. Hide loader
  if (_hgStop) setTimeout(_hgStop, 700);
}

document.addEventListener('DOMContentLoaded', init);
