const innitialValue = {
    users:[{
        id: 1,
        email: "tiyas.akbar@gmail.com",
        password: "dumbways.id",
        name: "Muhammad Tiyas Fachreza Akbar"
    }],
    songs:[{
        id: 1,
        title: "Circles",
        singer: "Post Malone",
        img: '',
        year: 2019
    },
    {
        id: 2,
        title: "Logic",
        singer: "Kearu Reaces",
        img: '',
        year: 2019
    },
    {
        id: 3,
        title: "Godzilla",
        singer: "Eminem",
        img: '',
        year: 2020
    },
    {
        id: 4,
        title: "Midsummer",
        singer: "88rising",
        img: '',
        year: 2018
    },
    {
        id: 5,
        title: "History",
        singer: "Rich Brian",
        img: '',
        year: 2018
    },
    {
        id: 6,
        title: "I LIKE U",
        singer: "Niki",
        img: '',
        year: 2017
    },
    {
        id: 7,
        title: "Love Galore",
        singer: "SZA",
        img: '',
        year: 2017
    }]
}


module.exports = {
    GET_SONGS: (state=innitialValue, action) => {
        switch (action.type){
            case "GET_SONGS":
            return {
                songs:[...state.songs]
            }
            break;
        }
        return state;
    }
}