// CLOCK FUNCTION
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').textContent = time;
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // SPOTIFY SDK AUTH SETUP
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = localStorage.getItem("spotify_access_token"); // Store token here after login
  
    const player = new Spotify.Player({
      name: 'Clock Spotify Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });
  
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
      // Transfer playback to the Web Playback SDK
      fetch(`https://api.spotify.com/v1/me/player`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ device_ids: [device_id], play: false })
      });
    });
  
    player.connect();
  
    document.getElementById('play').onclick = () => {
      fetch(`https://api.spotify.com/v1/me/player/play`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
    };
  
    document.getElementById('pause').onclick = () => {
      fetch(`https://api.spotify.com/v1/me/player/pause`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
    };
  };
  