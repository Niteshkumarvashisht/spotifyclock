// login.js
function login() {
    const CLIENT_ID = "c2a56c8619af49fea91a155f4d32752b";
    const REDIRECT_URI = "https://localhost:5500/auth.html";
    const SCOPES = "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state";
  
    const loginUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
  
    window.location.href = loginUrl;
  }
  