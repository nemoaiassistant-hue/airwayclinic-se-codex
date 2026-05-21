(function(){
  const WORKER_URL='https://airway-clinic-chatbot.airwayclinicproxy.workers.dev';
  let chatOpen=false,messages=[];

  // Inject CSS
  const style=document.createElement('style');
  style.textContent=`
    .chat-bubble{position:fixed;bottom:24px;right:24px;width:60px;height:60px;background:linear-gradient(135deg,#1a6b8a,#4db8c9);border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(201,168,76,0.4);z-index:999;transition:transform .2s,box-shadow .2s,opacity .3s;animation:pulse-gold 2s infinite}
    .chat-bubble:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(201,168,76,0.6)}
    .chat-bubble svg{width:28px;height:28px;fill:#1a1a1a}
    .chat-bubble.hidden{opacity:0;pointer-events:none;transform:scale(.5)}
    @keyframes pulse-gold{0%,100%{box-shadow:0 4px 20px rgba(201,168,76,0.4)}50%{box-shadow:0 4px 30px rgba(201,168,76,0.7)}}
    .chat-overlay{position:fixed;left:0;right:0;top:0;height:100vh;height:100dvh;background:#0e1621;z-index:1001;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);will-change:transform;overflow:hidden}
    .chat-overlay.open{transform:translateY(0)}
    @media(min-width:481px){.chat-overlay{left:auto;top:auto;right:24px;bottom:24px;width:400px;height:600px;max-height:calc(100vh - 48px);border-radius:16px;transform:translateY(20px);opacity:0;pointer-events:none;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s ease;box-shadow:0 12px 48px rgba(0,0,0,.6);border:1px solid #1e2a3a}.chat-overlay.open{transform:translateY(0);opacity:1;pointer-events:auto}}
    .tg-header{display:flex;align-items:center;padding:0 12px;height:56px;background:#1a2736;border-bottom:1px solid #0d1520;flex-shrink:0}
    .tg-back{width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;background:none;color:#1a6b8a;font-size:22px;border-radius:50%;transition:background .15s}
    .tg-back:hover{background:rgba(255,255,255,.05)}
    .tg-avatar{width:38px;height:38px;background:linear-gradient(135deg,#1a6b8a,#4db8c9);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;margin-left:4px;flex-shrink:0}
    .tg-header-text{margin-left:12px;flex:1}
    .tg-header-name{font-size:15px;font-weight:600;color:#fff}
    .tg-header-status{font-size:12px;color:#6d8aab}
    .tg-header-status.online{color:#4dd964}
    .tg-messages{flex:1;overflow-y:auto;padding:12px 12px 8px;display:flex;flex-direction:column;gap:4px;background:#0e1621}
    .tg-messages::-webkit-scrollbar{width:6px}
    .tg-messages::-webkit-scrollbar-thumb{background:#2b3e50;border-radius:3px}
    .tg-date-sep{text-align:center;padding:8px 0}
    .tg-date-sep span{background:#182533;color:#5a7a96;font-size:12px;font-weight:500;padding:4px 12px;border-radius:12px}
    .tg-msg{max-width:85%;padding:7px 10px 6px;font-size:15px;line-height:1.45;position:relative;word-wrap:break-word}
    .tg-msg.bot{align-self:flex-start;background:#182533;color:#f5f5f5;border-radius:12px 12px 12px 4px}
    .tg-msg.user{align-self:flex-end;background:#2b5278;color:#f5f5f5;border-radius:12px 12px 4px 12px}
    .tg-msg .time{float:right;margin:6px 0 -4px 12px;font-size:11px;color:rgba(255,255,255,.35)}
    .tg-msg.user .time{color:rgba(255,255,255,.45)}
    .tg-msg.bot strong{color:#4db8c9;font-weight:600}
    .tg-msg.bot em{color:#b8c4d0;font-style:italic}
    .tg-msg.bot ul{margin:0;padding-left:18px;list-style:none}
    .tg-msg.bot li{margin:3px 0;position:relative}
    .tg-msg.bot li::before{content:'•';position:absolute;left:-14px;color:#1a6b8a}
    .tg-msg.bot a{color:#4db8c9;text-decoration:underline;text-underline-offset:2px;cursor:pointer}
    .tg-msg.bot a:hover{color:#f0e0a0}
    .tg-msg.typing{color:#6d8aab;font-style:italic}
    .tg-msg.typing .typing-dots span{display:inline-block;animation:blink 1.4s infinite both}
    .tg-msg.typing .typing-dots span:nth-child(2){animation-delay:.2s}
    .tg-msg.typing .typing-dots span:nth-child(3){animation-delay:.4s}
    @keyframes blink{0%,80%,100%{opacity:.3}40%{opacity:1}}
    .tg-quick-replies{display:flex;gap:6px;flex-wrap:wrap;padding:4px 12px 8px;flex-shrink:0;background:#0e1621}
    .tg-quick-btn{padding:7px 14px;background:#1a2736;border:1px solid #2b3e50;border-radius:18px;color:#1a6b8a;font-size:13px;font-weight:500;cursor:pointer;transition:all .15s;white-space:nowrap;font-family:inherit}
    .tg-quick-btn:hover,.tg-quick-btn:active{background:#1a6b8a;color:#1a1a1a;border-color:#1a6b8a}
    .tg-input-bar{display:flex;align-items:flex-end;padding:8px 10px;background:#1a2736;border-top:1px solid #0d1520;flex-shrink:0;gap:8px}
    .tg-input{flex:1;background:#0e1621;border:none;border-radius:20px;padding:10px 16px;color:#f5f5f5;font-size:15px;font-family:inherit;outline:none;max-height:120px;resize:none;line-height:1.4}
    .tg-input::placeholder{color:#4a6478}
    .tg-send{width:40px;height:40px;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#6d8aab;transition:color .15s;border-radius:50%;flex-shrink:0}
    .tg-send.active{color:#1a6b8a}
    .tg-send:hover{background:rgba(255,255,255,.05)}
    .tg-send svg{width:22px;height:22px}
    @supports(padding-bottom:env(safe-area-inset-bottom)){.tg-input-bar{padding-bottom:calc(8px + env(safe-area-inset-bottom))}}
  `;
  document.head.appendChild(style);

  // Inject HTML
  const wrap=document.createElement('div');
  wrap.innerHTML=`
    <div class="chat-bubble" id="chatBubble" onclick="window._chatToggle()">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
    </div>
    <div class="chat-overlay" id="chatOverlay">
      <div class="tg-header">
        <button class="tg-back" onclick="window._chatToggle()">←</button>
        <div class="tg-avatar">🦷</div>
        <div class="tg-header-text">
          <div class="tg-header-name">Airway Clinic</div>
          <div class="tg-header-status online">online</div>
        </div>
      </div>
      <div class="tg-messages" id="chatMessages">
        <div class="tg-date-sep"><span>Today</span></div>
        <div class="tg-msg bot">Welcome to Airway Clinic! 👋<span class="time">now</span><br>We speak English and Swedish. Tap an option or type your question.</div>
      </div>
      <div class="tg-quick-replies" id="quickReplies">
        <button class="tg-quick-btn" onclick="window._chatQuick(this)">Sleep issues?</button>
        <button class="tg-quick-btn" onclick="window._chatQuick(this)">Children</button>
        <button class="tg-quick-btn" onclick="window._chatQuick(this)">Book consultation</button>
        <button class="tg-quick-btn" onclick="window._chatQuick(this)">Jaw pain</button>
      </div>
      <div class="tg-input-bar">
        <input class="tg-input" id="chatInput" placeholder="Message..." onkeypress="if(event.key==='Enter')window._chatSend()" oninput="window._chatUpdateBtn()">
        <button class="tg-send" id="sendBtn" onclick="window._chatSend()">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  // Keyboard handling for iOS
  if(window.innerWidth<=480&&window.visualViewport){
    const ov=document.getElementById('chatOverlay'),ms=document.getElementById('chatMessages'),ip=document.getElementById('chatInput');
    function adj(){if(!chatOpen)return;const vv=window.visualViewport;if(!vv)return;ov.style.position='fixed';ov.style.top=vv.offsetTop+'px';ov.style.left='0';ov.style.right='0';ov.style.height=vv.height+'px';requestAnimationFrame(()=>{ms.scrollTop=ms.scrollHeight})}
    window.visualViewport.addEventListener('resize',adj);
    window.visualViewport.addEventListener('scroll',adj);
    ip.addEventListener('focus',()=>{document.body.style.overflow='hidden';document.body.style.position='fixed';document.body.style.width='100%';setTimeout(adj,50);setTimeout(adj,150);setTimeout(adj,300);setTimeout(adj,500)});
    ip.addEventListener('blur',()=>{document.body.style.overflow='';document.body.style.position='';document.body.style.width='';setTimeout(()=>{if(!chatOpen)return;const vv=window.visualViewport;if(vv){ov.style.top=vv.offsetTop+'px';ov.style.height=vv.height+'px'}},100)});
  }

  function getTime(){const d=new Date();return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0')}

  function parseMarkdown(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,'<em>$1</em>').replace(/^[\-\*]\s+(.+)$/gm,'<li>$1</li>').replace(/(<li>[\s\S]*?<\/li>(\n|<br>)?)+/g,m=>'<br><ul>'+m.replace(/\n/g,'').replace(/<br>/g,'')+'</ul><br>').replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>')}

  function addMsg(text,type){
    const c=document.getElementById('chatMessages'),d=document.createElement('div');
    d.className='tg-msg '+type;
    d.innerHTML=(type==='bot'?parseMarkdown(text):text)+'<span class="time">'+getTime()+'</span>';
    c.appendChild(d);c.scrollTop=c.scrollHeight;
  }

  function showTyping(){const c=document.getElementById('chatMessages'),d=document.createElement('div');d.className='tg-msg bot typing';d.id='typingIndicator';d.innerHTML='<span class="typing-dots"><span>●</span> <span>●</span> <span>●</span></span>';c.appendChild(d);c.scrollTop=c.scrollHeight}
  function hideTyping(){const el=document.getElementById('typingIndicator');if(el)el.remove()}

  window._chatToggle=function(){
    chatOpen=!chatOpen;
    const ov=document.getElementById('chatOverlay'),bb=document.getElementById('chatBubble');
    if(chatOpen){ov.classList.add('open');bb.classList.add('hidden');if(window.innerWidth<=480)setTimeout(()=>document.getElementById('chatInput').focus(),350)}
    else{ov.classList.remove('open');bb.classList.remove('hidden');ov.style.opacity='';ov.style.transform='';ov.style.height='';ov.style.top=''}
  };

  window._chatUpdateBtn=function(){document.getElementById('sendBtn').classList.toggle('active',document.getElementById('chatInput').value.trim().length>0)};

  window._chatSend=async function(text){
    const ip=document.getElementById('chatInput'),msg=text||ip.value.trim();
    if(!msg)return;ip.value='';window._chatUpdateBtn();
    document.getElementById('quickReplies').style.display='none';
    addMsg(msg,'user');messages.push({role:'user',content:msg});showTyping();
    try{
      const res=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages})});
      const data=await res.json();const reply=data.response||"I'm sorry, I couldn't process that. Please try again.";hideTyping();addMsg(reply,'bot');messages.push({role:'assistant',content:reply});
    }catch(e){hideTyping();addMsg("I'm having trouble connecting. Please try again or contact us directly.",'bot')}
  };

  window._chatQuick=function(btn){window._chatSend(btn.textContent)};
})();
