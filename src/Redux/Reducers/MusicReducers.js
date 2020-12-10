const innitialState = {
  loading: true,
  artists: null,
  musics: null,
  thumbnails: [
    {
      id: 1,
      img:
        "https://www.thenorthwall.com/wp-content/uploads/2016/08/Banner-Song-of-Riots.jpg",
    },
    {
      id: 2,
      img:
        "https://www.countryarts.org.au/wp-content/uploads/2018/08/New-banner-with-coat-and-songs-2.jpg",
    },
    {
      id: 3,
      img:
        "https://apnapunjablive.com/wp-content/uploads/2015/09/Harvy-Sandhu-Banner.jpg",
    },
    {
      id: 4,
      img:
        "https://afridocs.net/wp-content/uploads/2017/08/Last-Song-Before-the-War-AfriDocs-Sliding-Banner-NEW-STYLE.jpg",
    },
    {
      id: 5,
      img:
        "https://images.squarespace-cdn.com/content/v1/556c8586e4b0943b6a6f76d4/1582933907651-OPPWLE0XC0D2809S89V9/ke17ZwdGBToddI8pDm48kA47qaxzGU3oa60Mv3IrElh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnE_ZbuhWuTjDl9Hn0Vaidb23CyzgPgNZ_l0zINYXrCLdg/Ladies+of+Song+Banner.jpg",
    },
  ],
};

const Musics = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ARTISTS":
      return {
        ...state,
        artists: payload,
      };
    case "LOAD_MUSICS":
      console.log(state);
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
    default:
      return state;
  }
};

export default Musics;
