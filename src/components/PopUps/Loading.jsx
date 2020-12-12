import React from 'react'
import ReactDOM from 'react-dom'

function Loading() {
    return ReactDOM.createPortal(
        <div className="loadingPage">
            <div className="loading" style={{
                position: "relative",
                left: "70px"
            }}>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
                <div className="loadingObj"></div>
            </div>
        </div>,
        document.getElementById('portal-root')
    )
}

export default Loading
