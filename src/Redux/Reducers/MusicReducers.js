const innitialState = {
  loading: true,
  artists: null,
  musics: null,
  thumbnails: [],
  push: false,
};

const Musics = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ARTISTS":
      return {
        ...state,
        artists: payload,
        push: false,
      };
    case "LOAD_THUMBNAILS":
      const thumbnailLists = [];
      state.artists.map((artist) =>
        thumbnailLists.push({
          thumbnail: artist.thumbnail,
          artistId: artist.id,
        })
      );
      return {
        ...state,
        thumbnails: thumbnailLists,
      };
    case "LOAD_MUSICS":
      const musicLists = [];
      state.artists.map((artist) =>
        artist.musics.map((music) => musicLists.push(music))
      );
      return {
        ...state,
        musics: musicLists,
        loading: false,
      };
    case "MUSIC_ERROR":
      return {
        ...state,
        ...innitialState,
      };
    case "PUSH_HOME":
      return {
        ...state,
        push: true,
      };
    default:
      return state;
  }
};

export default Musics;
