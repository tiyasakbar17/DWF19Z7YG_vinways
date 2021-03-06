const innitialState = {
  loading: true,
  artists: null,
  artist: null,
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
    case "LOAD_ARTIST":
      return {
        ...state,
        artist: payload,
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
      const musics = [];
      payload.forEach((music) => {
        musics.push({
          ...music,
          likes: music.likedBy.length,
        });
      });
      return {
        ...state,
        musics: musics,
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
