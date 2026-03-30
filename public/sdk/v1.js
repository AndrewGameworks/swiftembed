(async function() {
  const scriptTag = document.currentScript;
  const userId = scriptTag.getAttribute('data-id') || 'andrewsmile';
  
  // Ambil Base URL dari tempat script ini di-hosting (Vercel)
  const baseUrl = new URL(scriptTag.src).origin;
  
  try {
    const response = await fetch(`${baseUrl}/api/config?id=${userId}`);
    const config = await response.json();

    // Buat Container Shadow DOM
    const host = document.createElement('div');
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });

    // Masukkan HTML & CSS Widget
    shadow.innerHTML = `
      <style>
        .ig-widget {
          position: fixed; bottom: 20px; right: 20px;
          background: ${config.theme === 'dark' ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)'};
          backdrop-filter: blur(10px);
          color: ${config.theme === 'dark' ? 'white' : '#262626'};
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 15px; border-radius: 14px;
          display: flex; align-items: center; gap: 12px;
          font-family: -apple-system, system-ui, sans-serif;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          text-decoration: none; z-index: 999999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .ig-widget:hover { transform: translateY(-5px) scale(1.02); background: #E1306C; color: white; }
        .ig-avatar { width: 34px; height: 34px; border-radius: 50%; border: 2px solid #E1306C; }
        .ig-info b { display: block; font-size: 13px; margin: 0; }
        .ig-info span { font-size: 10px; opacity: 0.8; }
      </style>
      
      <a href="https://instagram.com/${config.username}" class="ig-widget" target="_blank">
        <img src="${config.profilePic}" class="ig-avatar" alt="pfp">
        <div class="ig-info">
          <b>@${config.username}</b>
          <span>${config.buttonText}</span>
        </div>
      </a>
    `;
  } catch (err) {
    console.error("SwiftEmbed Error:", err);
  }
})();