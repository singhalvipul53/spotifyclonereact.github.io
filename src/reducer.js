import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  item: null,
  top_artists: null,
  discover_weekly: null,
  // Set back to null the token after finishing the development process
  // token:"BQAKm_XgUEcSZFg7soBlR52JOojwXKyfAqMi48aJ-BNhFPfvaHWzG7Bejw-GEPrF59OiOeEBVApWOlF2kjP4neMHmdzw-Ytv_8gbzvqhJ9LnijRsG2DCtexsdHCr9Kda8drAcjinlY5XaEYl_T_tHznHJFrdG_WTVwSpxj2YPYYaZtGA"
};

const reducer = (state, action) => {
  console.log(action);
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
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
