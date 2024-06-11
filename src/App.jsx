import React, { useEffect, useState } from "react";
import './App.css';
import Login from "../src/components/login/Login";
import { getTokenFromResponse } from "../src/utils/services/spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "../src/components/Player";
import { useSpotifyStateValue } from "../src/store/SpotifyStateProvider";


const s = new SpotifyWebApi();


function App() {
    // const [token, setToken] = useState(null)
    const [{ user, token }, dispatch] = useSpotifyStateValue();
    useEffect(() => {

        // get token from browser searchbar 
        const hash = getTokenFromResponse();

       

        // remove the hash token from the response object. 
        window.location.hash = "";
        let generatedToken = hash.access_token;
        
        if (generatedToken) {
            dispatch({
                type: "SET_TOKEN",
                token: generatedToken
            })
            // setToken(generatedToken)

           

            // link spotify to the token.
            s.setAccessToken(generatedToken);


             s.getPlaylist("0n1GaPbpUi9DEmdQSQ0WGf").then((response) =>
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                }))



            // get user data.
            s.getMe().then((user) => {

                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            })
        };


        // get user playlists
        s.getUserPlaylists().then((playlists) => {
            dispatch({
                type: "SET_PLAYLISTS",
                playlists,
            });

        });
        //

    }, [])

    return (
        <div >
            {!token && <Login />}
           { token  && <Player spotify={s}/>}
        </div>
    )
}


export default App;