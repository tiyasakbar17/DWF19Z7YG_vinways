const Reducers = (state, action) => {
    console.log("LOAD REDUCER");
    //KEPERLUAN UPDATE
    const copyUsers = state.users

    //SWITCH
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    isLogin: true,
                    userLogin: action.payload
                }
            }
        case "LOGOUT":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    isLogin: false,
                    userLogin: null,
                    playerComp: false
                },
            }
        case "REGISTER":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
        case "PAYMENT":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    paymentComp: !state.tempData.paymentComp
                }
            }
        case "POP_UP":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    popUpComp: !state.tempData.popUpComp,
                    popUpMessage: action.payload.message
                }
            }
        case "MUSIC_PLAYER":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    playerComp: true,
                    musicToPlay: action.payload
                }
            }
        case "UPLOAD_PAYMENT":
            let userUpdate = state.users.findIndex(user => user.id_u === action.payload.id_u)
            let users = state.users
            let id = users[userUpdate].buktiBayar.length
            let updatedUsers = {
                ...users[userUpdate],
                buktiBayar: [...users[userUpdate].buktiBayar,
                { id_b: id + 1, img: action.payload.img, approved: null }
                ]
            }
            return {
                ...state,
                users: [...users.slice(0, userUpdate),
                    updatedUsers,
                ...users.slice(userUpdate + 1)
                ]
            }
        case "APPROVE_PAYMENT":
            let userUpdate2 = state.users.findIndex(user => user.id_u === action.payload.id_u)
            let users2 = state.users
            let buktiUpdate = users2[userUpdate2].buktiBayar.findIndex(bukti => bukti.id_b === action.payload.id_b)
            let buktiLama = users2[userUpdate2].buktiBayar
            let updatedBukti = {
                ...buktiLama[buktiUpdate],
                approved: true
            }
            let newBukti = [...buktiLama.slice(0, buktiUpdate), updatedBukti, ...buktiLama.slice(buktiUpdate + 1)]
            let newUser = { ...users2[userUpdate2], buktiBayar: newBukti, activeDay: users2[userUpdate2].activeDay + 30 }
            return {
                ...state,
                users: [...users2.slice(0, userUpdate2),
                    newUser,
                ...users2.slice(userUpdate2 + 1)
                ]
            }
        case "CANCEL_PAYMENT":
            let userUpdate3 = state.users.findIndex(user => user.id_u === action.payload.id_u)
            let buktiUpdateHapus = copyUsers[userUpdate3].buktiBayar.findIndex(bukti => bukti.id_b === action.payload.id_b)
            let buktiLamaHapus = copyUsers[userUpdate3].buktiBayar
            let updatedBuktiHapus = {
                ...buktiLamaHapus[buktiUpdateHapus],
                approved: false
            }
            let newBuktiHapus = [...buktiLamaHapus.slice(0, buktiUpdateHapus), updatedBuktiHapus, ...buktiLamaHapus.slice(buktiUpdateHapus + 1)]
            let newUserHapus = { ...copyUsers[userUpdate3], buktiBayar: newBuktiHapus, activeDay: (buktiLamaHapus[buktiUpdateHapus].approved !== null) ? ((copyUsers[userUpdate3].activeDay > 30) ? (copyUsers[userUpdate3].activeDay - 30) : 0) : (copyUsers[userUpdate3].activeDay) }
            return {
                ...state,
                users: [...copyUsers.slice(0, userUpdate3),
                    newUserHapus,
                ...copyUsers.slice(userUpdate3 + 1)
                ]
            }
        case "ADD_ARTIST":
            return {
                ...state,
                artists: [
                    ...state.artists,
                    action.payload
                ]
            }
        case "ADD_MUSIC":
            const indexArtist = state.artists.findIndex(artist => artist.id_a === action.payload.id_a);
            const copyArtists = state.artists;
            const idSongs = copyArtists[indexArtist].songs.length
            const newSelectedArtist = {
                ...copyArtists[indexArtist],
                songs: [...copyArtists[indexArtist].songs, { id_s: idSongs + 1, title: action.payload.title, year: action.payload.year, img: action.payload.img, audio: action.payload.audio }]
            }
            // const newSongs = [...oldSelectedArtist.songs,
            // {}]
            return {
                ...state,
                artists: [...copyArtists.slice(0, indexArtist),
                    newSelectedArtist, ...copyArtists.slice(indexArtist + 1)]
            }
        default:
            throw new Error()
    }
};

export default Reducers;