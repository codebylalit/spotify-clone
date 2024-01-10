
export const authendpoint=
"https://accounts.spotify.com/authorize";
const redirecturl = "http://localhost:3000/";
const clientid = "b94dbfe7af06442889658aa0e7c03a34";

const scops=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{})
}

export const loginurl = `${authendpoint}?client_id=${clientid}&redirect_uri=${redirecturl}&scope=${scops.join("%20")}&response_type=token&show_dialog=true`;
