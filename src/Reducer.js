export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQBTkV9Q14meQjQNIULzdsESVv92Ty-5gRiimZCo1zbwskKTOoVRbe6yvNuvV0fxFJo8hKGn2_Zt0TV4JaeG4Xa8BKrC7Tok9mEidB6McCKoC5QWFURuHZh66I2VAsMjczpeKLXj92AAKm-KkKiObm1tav8be_AeiH3gsw2nf617XnQQUPNhu139veY2t8rsn_oUubHUEJ1qHlfDa3P4"
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
            case "SET_DAILYMIX1":
                return{
                    ...state,
                    daily_mix: action.daily_mix,
                };
        // Add more cases for other actions if needed
        default:
            return state;
    }
}

export default reducer;