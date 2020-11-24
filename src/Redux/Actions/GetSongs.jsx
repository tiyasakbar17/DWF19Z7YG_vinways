module.exports = {
    getSongs: ()=>{
        return {type: "GET_SONGS"}
    },
    getUsers: ()=>{
        return {
            type: "GET_USERS"
        }
    }
}