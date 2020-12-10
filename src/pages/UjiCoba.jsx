import React from 'react'

function UjiCoba() {

    const initialState = {
        count: 0,
        name: "Tiyas",
        data: []
    }

    const [state, setState] = React.useState(initialState)

    // const clickHandler = () => {
    //     setState(prevState => ({
    //         ...prevState,
    //         count: prevState.count + 1
    //     }))
    //     console.log(state.count);
    // }

    const nameChanger = () => {
        console.log(state);
    }

    const time = async () => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                return res.json()
            })
            .then(result => {
                const udin = result.slice(0, 100)
                return udin
            })
            .then((results) => {
                setState(prevState => ({
                    ...prevState,
                    data: results
                }))
            })
            .then(() => {
                setState(prevState => ({
                    ...prevState,
                    count: prevState.count + 1
                }))
            })
    }

    React.useEffect(() => {
        const fetch = () => {
            let cek = state.count
            cek === 0 && time()
            cek === 1 && nameChanger()
        }
        fetch()
    }, [state.count])

    return (
        <div style={{ position: "fixed", top: "10%", left: "10%", color: "white" }}>
            {state.count === 0 ? (<h1>LOADING....</h1>) : (<>
                {state.data.map(datum => (
                    <p key={datum.id} style={{ margin: "0" }}>{datum.title}</p>
                ))}
                {/* <button onClick={clickHandler}>HIT ME</button>)} */}
            </>)}
        </div>
    )
}

export default UjiCoba
