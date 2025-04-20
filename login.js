function login() {
  const CLIENT_ID = "c2a56c8619af49fea91a155f4d32752b";
  const REDIRECT_URI = "https://niteshkumarvashisht.github.io/spotifyclock/auth.html";
  const SCOPES = "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state";
  
  // Construct authorization URL
  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.append("client_id", CLIENT_ID);
  authUrl.searchParams.append("response_type", "token");
  authUrl.searchParams.append("redirect_uri", REDIRECT_URI);
  authUrl.searchParams.append("scope", SCOPES);
  
  // Redirect to Spotify auth page
  window.location.href = authUrl.toString();
}
