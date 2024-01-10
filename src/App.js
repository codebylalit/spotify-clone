import React, { useEffect, useState } from 'react';
import './components/Login/Login';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists : playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1E37WEplGht8uQ').then(response =>{
        dispatch({
          type: "SET_DAILYMIX1",
          daily_mix : response ,
        });
      })
    }
  }, [])

  return (
    <div className="App">{token ? <Player spotify={spotify}/>:<Login />}
      {/*Spotify Logo*/}
      {/*Login with spotpify button*/}
    </div>
  );
}
export default App;
