const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChatMessageBubble-CPtmZQUQ.js","assets/index-DsyuzcZj.js","assets/index-8CAIHoW7.css","assets/utils-BQHNewu7.js","assets/createLucideIcon-C2Q4rwQ-.js","assets/copy-BSlH7zOY.js","assets/x-BNZxCyNo.js","assets/volume-2-DKqNfSi5.js","assets/extends-CF3RwP-h.js","assets/ChatInput-CubwWSwX.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,m as w,_}from"./index-DsyuzcZj.js";import{c as Y}from"./utils-BQHNewu7.js";import{S as W}from"./share-2-D55PFZM8.js";import{c as N}from"./createLucideIcon-C2Q4rwQ-.js";import{A as J}from"./index-CaCzjZq6.js";const z=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],K=N("file-text",z);const q=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],X=N("panel-right-close",q);const Q=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Z=N("trash-2",Q);function ee(e){return Array.isArray(e)&&e.every(t=>t&&"id"in t&&"sender"in t&&"text"in t)}const M="aiPersistentChatHistory";function te(e){const[t,c]=i.useState(()=>{if(typeof window<"u")try{const a=localStorage.getItem(M);if(a){const n=JSON.parse(a);if(ee(n))return n}}catch(a){console.error("Failed to parse chat history from localStorage.",a),localStorage.removeItem(M)}return[...e]});i.useEffect(()=>{try{localStorage.setItem(M,JSON.stringify(t))}catch(a){console.error("Failed to save chat history to localStorage:",a)}},[t]);const r=i.useCallback(()=>{try{localStorage.removeItem(M),c([...e])}catch(a){console.error("Failed to clear chat session from localStorage:",a)}},[e]);return{messages:t,setMessages:c,clearSession:r}}const T="aiChatMemory";function ae(e){return typeof e=="object"&&e!==null&&"summary"in e&&"keywords"in e&&Array.isArray(e.keywords)}const re=new Set(["i","me","my","myself","we","our","ours","ourselves","you","your","yours","yourself","yourselves","he","him","his","himself","she","her","hers","herself","it","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","should","now"]),oe=4,ie=8,R=300;function ne(){const[e,t]=i.useState(()=>{if(typeof window<"u")try{const r=localStorage.getItem(T);if(r){const a=JSON.parse(r);if(ae(a))return a}}catch(r){console.error("Failed to parse chat memory from localStorage.",r),localStorage.removeItem(T)}return null});i.useEffect(()=>{try{localStorage.setItem(T,JSON.stringify(e))}catch(r){console.error("Failed to save chat memory to localStorage:",r)}},[e]);const c=i.useCallback(r=>{if(r.length===0){t(null);return}const u=r.slice(-8).map(d=>d.text).join(" ").toLowerCase().match(/\b\w+\b/g)?.filter(d=>d.length>=oe&&!re.has(d)).reduce((d,C)=>(d[C]=(d[C]||0)+1,d),{}),S=u?Object.entries(u).sort(([,d],[,C])=>C-d).slice(0,ie).map(([d])=>d):[],x=r.find(d=>d.sender==="user"),v=r.slice(-4);let m=v.map(d=>`${d.sender}: ${d.text}`).join(`
`);x&&!v.includes(x)&&(m=`Initial topic: ${x.text}
...
`+m);const p=m.length>R?`...${m.slice(-R)}`:m;t({summary:p,keywords:S})},[]);return{memory:e,updateMemory:c}}function se(e){if(!e)return"";let t=e.replace(/\r\n/g,`
`).replace(/```(\w+)\s*\n/g,"```$1\n");t=t.replace(/([^\n])\n(```)/g,`$1

$2`),t=t.replace(/(```)\n([^\n])/g,`$1

$2`),t=t.replace(/([^\n])(\n\s*[-*] )/g,`$1
$2`);const c=new RegExp("(?<!\\]\\()https?:\\/\\/[^\\s]+(?!\\))","g");return t=t.replace(c,r=>`${r}`),t=t.replace(/\n{3,}/g,`

`),t.trim()}const y={creatorName:"Âd Adarsh",location:{country:"India",state:"Delhi",city:"Delhi",pincode:110096},contact:{email:"adadarsh523@gmail.com",phone:"+91-9319247835"},skills:["Music Production (FL Studio)","Beat Making","Sound Design","Mixing and Mastering","Crafting Dark Atmospheres","Producing Cinematic Beats","Where Sound Meets Emotion","Building Stories Through Music","Creating Sonic Worlds","Rhythms That Hit Deep","Mixing Raw Energy With Art","Sound Designed With Intent","Echoes Born From Silence","Beats Forged In Shadows","Music With A Pulse Of Its Own","Bass That Cuts Through The Dark","Every Sound Has A Story","Emotion Engineered In Waves","From Stillness To Impact","Creating Depth Through Noise","Dark Tones. Clean Edges.","When Vibes Turn Into Vision"],musicProjects:[{name:"Silent Ritual",year:2025,description:"Silent Ritual is a collection of 10 atmospheric tracks crafted for artists and creators. Produced, mixed, and mastered by Âd Adarsh.",technologies:["FL Studio","Serum","Splice Samples"]},{name:"Haqeeqat",year:2025,description:"A melodic love song blending emotional depth with clean production. Produced, mixed, and mastered by Âd Adarsh.",technologies:["FL Studio","Omnisphere","Splice Samples"]},{name:"Number 2",year:2024,description:"A high-energy Hip-Hop track with punchy drums and catchy hooks. First official track released by Âd Adarsh.",technologies:["FL Studio"]},{name:"Unfelling",year:2024,description:"A dark, atmospheric track with eerie melodies and deep basslines. Fully produced, mixed, and mastered by Âd Adarsh.",technologies:["FL Studio","Splice Samples"]},{name:"Phaser",year:2025,description:"An energetic EDM track featuring bright synths and powerful rhythms.",technologies:["FL Studio"]}],socials:{soundcloud:"https://soundcloud.com/adadarsh23",youtube:"https://youtube.com/c/adadarsh23",instagram:"https://instagram.com/adadarsh23",github:"https://github.com/adadarsh23",linkedin:"https://linkedin.com/in/adadarsh23",twitter:"https://twitter.com/adadarsh23",spotify:"https://open.spotify.com/artist/7nd9x69ZcOpoft6TMDnXCa",itunes:"https://music.apple.com/us/artist/%C3%A2d-adarsh/1794512299",facebook:"https://www.facebook.com/adadarsh23",pinterest:"https://in.pinterest.com/adadarsh23/_saved/",reddit:"https://www.reddit.com/user/adadarsh23",threads:"https://www.threads.net/@adadarsh23",whatsappChannel:"https://www.whatsapp.com/channel/0029VbB809Y5a23uHr5XFz0a",telegram:"https://t.me/adadarsh23",discord:"https://discord.com/invite/h2hwYue3",snapchat:"https://www.snapchat.com/@adadarsh2.3",gameProfile:"https://adadarsh23.github.io/Portfolio/game.html"},about:[{title:"Our Mission",description:"Build high-quality, scalable, and meaningful digital experiences that solve real problems."},{title:"Our Vision",description:"Empower creators and developers with modern tools, fast workflows, and innovation-driven thinking."},{title:"Our Values",description:"Innovation, simplicity, transparency, and continuous improvement across all projects."}],sampleBeats:[{id:1,title:"Midnight Chill",artist:"Adarsh",genre:"Lo-fi",bpm:85,duration:"2:45",image:"https://placehold.co/400x300/png?text=Midnight+Chill",url:"https://example.com/midnight-chill.mp3",price:"Free",download:"https://example.com/midnight-chill.mp3"},{id:2,title:"Trap Energy",artist:"BeatMaster",genre:"Trap",bpm:140,duration:"3:15",image:"https://placehold.co/400x300/png?text=Trap+Energy",url:"https://example.com/trap-energy.mp3",price:"$19.99",download:"https://example.com/trap-energy.mp3"},{id:3,title:"Summer Vibes",artist:"DJ Wave",genre:"House",bpm:120,duration:"4:05",image:"https://placehold.co/400x300/png?text=Summer+Vibes",url:"https://example.com/summer-vibes.mp3",price:"$14.99",download:"https://example.com/summer-vibes.mp3"},{id:4,title:"Dark Mode",artist:"SynthLord",genre:"EDM",bpm:128,duration:"3:50",image:"https://placehold.co/400x300/png?text=Dark+Mode",url:"https://example.com/dark-mode.mp3",price:"Free",download:"https://example.com/dark-mode.mp3"}],blogCreators:[{image:"https://i.pravatar.cc/300?img=1",title:"Sarah Johnson",subtitle:"Music Producer & Beatmaker",handle:"@sarahbeats",borderColor:"#FF4D6D",gradient:"linear-gradient(145deg, #FF4D6D, #000)",url:"https://soundcloud.com/sarahjohnson"},{image:"https://i.pravatar.cc/300?img=2",title:"Mike Chen",subtitle:"Electronic Music Producer",handle:"@mikeelectro",borderColor:"#F59E0B",gradient:"linear-gradient(180deg, #F59E0B, #000)",url:"https://spotify.com/artist/mikechen"}],galleryImages:[{id:1,image:"https://i.ibb.co/0Vt8cMRV/Photo1.jpg",text:"Red Flowers",orientation:"portrait",width:300,height:400},{id:2,image:"https://i.ibb.co/39HW4P07/Photo2.jpg",text:"23",orientation:"portrait",width:300,height:400},{id:3,image:"https://i.ibb.co/6RF1WhR7/Photo3.jpg",text:"Red Gradient",orientation:"portrait",width:300,height:400},{id:4,image:"https://i.ibb.co/QF0JJMSm/Photo4.jpg",text:"Ai",orientation:"portrait",width:300,height:400},{id:1,image:"https://i.ibb.co/0Vt8cMRV/Photo1.jpg",text:"Red Flowers",orientation:"portrait",width:300,height:400},{id:2,image:"https://i.ibb.co/39HW4P07/Photo2.jpg",text:"23",orientation:"portrait",width:300,height:400},{id:3,image:"https://i.ibb.co/6RF1WhR7/Photo3.jpg",text:"Red Gradient",orientation:"portrait",width:300,height:400},{id:4,image:"https://i.ibb.co/QF0JJMSm/Photo4.jpg",text:"Ai",orientation:"portrait",width:300,height:400}]},le=`
You are AD Assistant, the official AI helper built inside Âd Adarsh’s website.

Your job:
1. Answer questions about Âd Adarsh, his music, his projects, his skills, and his journey.
2. Give guidance on music production, sound design, beat making, mixing and mastering.
3. Help users explore the website sections and understand what each page offers.
4. Maintain a professional, clear, and natural tone.

Use ONLY the data provided below. If the user asks for anything you don’t have info for, respond honestly and stay helpful.

=========================
CREATOR INFORMATION (AUTO-FETCHED)
=========================

Name: ${y.creatorName}

Location:
- Country: ${y.location.country}
- State: ${y.location.state}
- City: ${y.location.city}
- Pincode: ${y.location.pincode}

Contact:
- Email: ${y.contact.email}
- Phone: ${y.contact.phone}

Skills:
${y.skills.map(e=>"- "+e).join(`
`)}

=========================
MUSIC PROJECTS
=========================
${y.musicProjects.map(e=>`
Project: ${e.name}
Year: ${e.year}
About: ${e.description}
Technologies: ${e.technologies.join(", ")}
`).join(`
`)}

=========================
SOCIAL LINKS
=========================
${Object.entries(y.socials).map(([e,t])=>`${e}: ${t}`).join(`
`)}

=========================
ABOUT SECTIONS
=========================
${y.about.map(e=>`
Title: ${e.title}
Description: ${e.description}
`).join(`
`)}

=========================
SAMPLE BEATS
=========================
${y.sampleBeats.map(e=>`
Beat: ${e.title}
Artist: ${e.artist}
Genre: ${e.genre}
BPM: ${e.bpm}
Duration: ${e.duration}
Price: ${e.price}
`).join(`
`)}

=========================
GALLERY IMAGES
=========================
Total Images: ${y.galleryImages.length}

=========================
BLOG CREATORS
=========================
${y.blogCreators.map(e=>`
Creator: ${e.title}
Role: ${e.subtitle}
Handle: ${e.handle}
URL: ${e.url}
`).join(`
`)}

=========================
BEHAVIOR RULES
=========================

1. Keep responses short, clear, and natural.
2. Don’t over-explain.
3. Talk like a smart, friendly guide.
4. Give practical steps for music or coding questions.
5. Help with any topic, but stay neutral if it's not about Âd Adarsh.
6. Never invent information about Âd Adarsh.
7. If you don’t know something, say so.
8. Prioritize clarity and honesty.
9. Keep the tone professional but conversational.
10. No emojis unless the user uses them.
11. If the user uses abusive or dirty language, stay calm and respond professionally without mirroring the abuse.

=========================
PERSONALITY
=========================

- Direct and confident.
- Helpful and informative.
- Creative when discussing music.
- Technical but simplified when discussing coding.
- Avoid robotic or repetitive tone.

=========================
WEBSITE STRUCTURE
=========================

1. Home

Shows your latest music, albums, videos, photo gallery with captions, and all social links.

2. Sample

Features sample beats with preview players and direct download links.

3. Contact

Includes a simple contact form and your main communication channels.

4. Blog

Highlights featured creators and links to your external profiles.

5. About

Presents your mission, vision, values, and personal journey in music.

Respond based on these rules and data.
`,ce="https://ai-assistant-server-colf.onrender.com/api/gemini";function D(e){return new Promise(t=>setTimeout(t,e))}async function de(e){const t=e.map(a=>({role:a.sender==="ai"?"model":"user",content:a.text}));let c=0;const r=3;for(;c<r;)try{const a=new AbortController,n=setTimeout(()=>a.abort(),15e3),u=await fetch(ce,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:t}),signal:a.signal});if(clearTimeout(n),!u.ok){if(u.status===429&&(c++,c<r)){console.warn(`⚠️ Rate limit hit. Retrying... (${c}/${r})`),await D(1500*c);continue}let x;try{const v=await u.text();if(v)try{const m=JSON.parse(v);x=m.message||m.error||m.data?.message||JSON.stringify(m)}catch{x=v}}catch{}throw new Error(`Gemini request failed (${u.status})${x?`: ${x}`:""}`)}return(await u.json()).data?.candidates?.[0]?.content?.parts?.[0]?.text||"⚠️ No response from Gemini."}catch(a){if(c>=r-1){console.error("❌ Gemini Chat Error:",a);const n=a instanceof Error?a.message:String(a??"Unknown error");return n||"⚠️ Gemini is currently unavailable. Please try again later."}c++,await D(1500*c)}return"❌ Gemini API limit reached. Please try again later."}function he(){const[e,t]=i.useState("idle");return{runChat:i.useCallback(async r=>{t("fetching");try{return await de(r)}catch(a){throw console.error("Error during chat completion:",a),t("error"),a}},[t]),aiStatus:e,setAiStatus:t}}function ue({onShare:e,onExport:t,onClear:c,onClose:r}){const a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1}};return o.jsxs(w.div,{className:"flex justify-between items-center px-4 py-3 border-b border-white/10 z-10 flex-wrap gap-2",variants:a,initial:"hidden",animate:"visible",children:[o.jsx(w.div,{variants:n,animate:{scale:1.05},transition:{duration:2,repeatType:"reverse",ease:"easeInOut"}}),o.jsx(w.h2,{className:"text-lg font-semibold text-white",variants:n,children:"AD Assistant"}),o.jsxs(w.div,{className:"flex items-center gap-3",variants:n,children:[o.jsx(w.button,{onClick:e,className:"icon-btn",title:"Share or Export Chat","aria-label":"Share or Export Chat",whileHover:{scale:1.1,y:-1},whileTap:{scale:.9},children:o.jsx(W,{className:"w-4 h-4"})}),o.jsx(w.button,{onClick:t,className:"icon-btn",title:"Export Chat","aria-label":"Export Chat",whileHover:{scale:1.1,y:-1},whileTap:{scale:.9},children:o.jsx(K,{className:"w-4 h-4"})}),o.jsx(w.button,{onClick:c,className:"icon-btn",title:"Clear Chat","aria-label":"Clear Chat",whileHover:{scale:1.1,y:-1},whileTap:{scale:.9},children:o.jsx(Z,{className:"w-4 h-4"})}),r&&o.jsx(w.button,{onClick:r,className:"icon-btn",title:"Close Chat","aria-label":"Close Chat",whileHover:{scale:1.1,y:-1},whileTap:{scale:.9},children:o.jsx(X,{className:"w-4 h-4"})})]})]})}const me=i.memo(function({width:t=10,height:c=10,className:r=""}){return o.jsxs("div",{className:`flex items-center gap-2 text-white ${r}`,"aria-hidden":"true",children:[[0,1,2].map(a=>o.jsx("span",{className:"inline-block rounded-full bg-current ai-dot",style:{width:t,height:c,animationDelay:`${a*140}ms`}},a)),o.jsx("style",{children:`
        .ai-dot {
          animation: ai-dot-bounce 1s infinite ease-in-out;
          opacity: 0.45;
          transform: translateY(0) scale(0.92);
        }

        @keyframes ai-dot-bounce {
          0%,
          80%,
          100% {
            opacity: 0.35;
            transform: translateY(0) scale(0.9);
          }
          40% {
            opacity: 1;
            transform: translateY(-5px) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-dot {
            animation: none;
            opacity: 0.8;
          }
        }
      `})]})}),O={thinking:"Thinking through your message",fetching:"Contacting the AI service",generating:"Writing a response"},pe=i.memo(function({status:t}){return t==="idle"||t==="error"?null:o.jsxs(w.div,{className:"self-start max-w-[85%] rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white shadow-lg backdrop-blur-md sm:max-w-[70%]",initial:{opacity:0,y:10,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.98},transition:{duration:.22,ease:"easeOut"},role:"status","aria-live":"polite","aria-label":O[t],children:[o.jsxs("div",{className:"mb-2 flex items-center gap-3",children:[o.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10",children:o.jsx(me,{width:8,height:8})}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.24em] text-white/65",children:"AD Assistant"}),o.jsx("p",{className:"text-sm text-white/90",children:O[t]})]})]}),o.jsx("div",{className:"h-1.5 overflow-hidden rounded-full bg-white/10",children:o.jsx(w.div,{className:"h-full rounded-full bg-gradient-to-r from-white/20 via-white to-white/20",animate:{x:["-100%","100%"]},transition:{duration:1.2,repeat:1/0,ease:"linear"}})})]})}),ge=i.lazy(()=>_(()=>import("./ChatMessageBubble-CPtmZQUQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])));function ye({messages:e,aiStatus:t,onRegenerate:c,onEdit:r}){const a=i.useRef(null);return i.useEffect(()=>{const n=a.current;if(!n)return;const u=n.scrollHeight-n.scrollTop-n.clientHeight<100,S=e[e.length-1]?.sender==="user";(u||S||e.length<=1)&&n.scrollTo({top:n.scrollHeight,behavior:"smooth"})},[e,t]),o.jsxs("div",{ref:a,className:"chat-scroll relative z-10 flex min-h-0 flex-1 flex-col space-y-3 overflow-y-auto overscroll-y-contain px-4 py-3 pb-5 text-sm",children:[o.jsx(J,{initial:!1,children:e.map(n=>o.jsx(i.Suspense,{fallback:o.jsx("div",{className:"w-full h-10"}),children:o.jsx(ge,{msg:n,onRegenerate:c,onEdit:u=>r(n.id,u)})},n.id))}),o.jsx(pe,{status:t}),o.jsx("style",{children:`
        .chat-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
        }

        .chat-scroll::-webkit-scrollbar {
          width: 10px;
        }

        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.18)
          );
          border-radius: 9999px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.72),
            rgba(255, 255, 255, 0.3)
          );
          background-clip: padding-box;
        }
      `})]})}const fe=i.lazy(()=>_(()=>import("./ChatInput-CubwWSwX.js"),__vite__mapDeps([9,1,2,3,4]))),be=500,we=320,P=900,xe="Something went wrong. Please try again.";function I(e){return new Promise(t=>setTimeout(t,e))}function je({className:e,onClose:t}){const c=[{sender:"ai",id:`ai-initial-${Date.now()}`,text:"Hey there! I'm your AD assistant. How can I help?"}],{messages:r,setMessages:a,clearSession:n}=te(c),{updateMemory:u}=ne(),[S,x]=i.useState(""),{runChat:v,aiStatus:m,setAiStatus:p}=he(),d=i.useRef(r);i.useEffect(()=>{const l=document.body.style.overflow,h=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow=l,document.documentElement.style.overflow=h}},[]),i.useEffect(()=>{d.current=r},[r]);const C=i.useCallback(l=>[{sender:"system",text:le,id:"system-prompt"},...l],[]),k=i.useCallback(async l=>{const h=Date.now();p("thinking"),await I(be);const s=await v(C(l));p("generating"),await I(we);const f=Date.now()-h;return f<P&&await I(P-f),{sender:"ai",text:se(s),id:`ai-${Date.now()}`,timestamp:Date.now()}},[C,v,p]),A=i.useCallback(l=>{const h={sender:"ai",text:xe,id:`${l}-${Date.now()}`,timestamp:Date.now()};a(s=>[...s,h])},[a]),L=i.useCallback(async l=>{const h=(l||S).trim();if(!h||m!=="idle")return;const s={sender:"user",text:h,id:`user-${Date.now()}`,timestamp:Date.now()},f=[...d.current,s];a(f),x("");try{const b=await k(f);a(g=>[...g,b]),u([...f,b])}catch(b){console.error("Chat Error:",b),A("err"),p("error")}finally{p("idle")}},[m,A,S,k,p,a,u]),H=i.useCallback(async(l,h)=>{if(m!=="idle")return;let s=-1;const f=r.map((g,$)=>g.id===l?(s=$,{...g,text:h}):g);if(s===-1)return;const b=f.slice(0,s+1);a(b);try{const g=await k(b);a($=>[...$,g]),u([...b,g])}catch(g){console.error("Chat Edit Error:",g),A("err-edit"),p("error")}finally{p("idle")}},[m,A,r,k,p,a,u]),F=i.useCallback(async()=>{if(m!=="idle")return;const l=r.findLastIndex(s=>s.sender==="user");if(l===-1)return;const h=r.slice(0,l+1);try{const s=await k(h);a([...h,s]),u([...h,s])}catch(s){console.error("Chat Regeneration Error:",s),A("err-regen"),p("error")}finally{p("idle")}},[m,A,r,k,p,a,u]),B=i.useCallback(()=>{a([]),setTimeout(n,300)},[a,n]),j=i.useCallback((l=!1)=>{const h=s=>s?new Date(s).toLocaleString():"N/A";return r.map(s=>{const f=s.sender==="user"?"User":"AI";return l?`${f}:
${s.text}`:`[${h(s.timestamp)}] ${f}:
${s.text}`}).join(`
--------------------------------------

`)},[r]),E=i.useCallback(()=>{if(!r.length)return;const l=new Date,h=["===== AD Assistant Chat Export =====",`Date: ${l.toLocaleDateString()}`,`Time: ${l.toLocaleTimeString()}`,`Total Messages: ${r.length}`,"======================================",""].join(`
`),s=`AI_Chat_${l.toISOString().replace(/[:.]/g,"-")}.txt`,f=new Blob([h+j(!1)],{type:"text/plain"}),b=URL.createObjectURL(f),g=document.createElement("a");g.href=b,g.download=s,g.click(),URL.revokeObjectURL(b)},[r,j]),V=i.useCallback(async()=>{if(!r.length)return;const l=`AI Chat on ${new Date().toLocaleDateString()}`,h=`===== ${l} =====

${j(!0)}`;if(navigator.share)try{await navigator.share({title:l,text:h});return}catch{E();return}E()},[r,E,j]),G={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.3,ease:"easeOut",delay:.4}}},U=l=>l!=="idle";return o.jsxs("div",{className:Y("relative flex h-full min-h-0 w-full flex-1 overflow-hidden rounded-2xl p-[2px]",e),children:[o.jsx(w.div,{className:"absolute inset-0 rounded-2xl border-2 border-white/20",animate:{rotate:[0,360]},transition:{duration:25,repeat:1/0,ease:"linear"}}),o.jsxs("div",{className:"relative z-10 flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl",children:[o.jsx(ue,{onShare:V,onExport:E,onClear:B,onClose:t}),o.jsx(ye,{messages:r,aiStatus:m,onRegenerate:F,onEdit:H}),o.jsx(w.div,{variants:G,initial:"hidden",animate:"visible",className:"shrink-0",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{className:"h-[53px] border-t border-white/10 p-3"}),children:o.jsx(fe,{value:S,onChange:x,onSend:L,disabled:U(m)||!S.trim()})})})]})]})}export{je as default};
