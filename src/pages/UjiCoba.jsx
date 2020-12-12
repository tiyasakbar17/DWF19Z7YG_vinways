import React from 'react'
import { connect } from 'react-redux'

export const UjiCoba = () => {

    return (
        <div className="loadingPage">
            <div className="" style={{ position: "relative", height: "400px", width: "400px", border: "4px white solid", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", clear: "both" }}>
                <div className="" style={{ position: "relative", height: "400px", width: "400px" }}>
                    <svg style={{ position: "relative", height: "100%", width: "100%" }}>
                        <circle cx="48%" cy="50%" r="100" style={{ width: "100%", height: "100%", fill: "none", stroke: "#c9f8e382", strokeWidth: "25", transform: "translate(5px, 5px)", strokeDasharray: "629", strokeDashoffset: "0" }}></circle>
                        <circle cx="48%" cy="50%" r="100" style={{ width: "100%", height: "100%", fill: "none", stroke: "#03f387", strokeWidth: "25", transform: "translate(5px, 5px)", strokeDasharray: "629", strokeDashoffset: "calc(629 - (629*80)/100)", strokeLinecap: "round" }}></circle>
                    </svg>
                    <div className="" style={{ width: "100%", height: "100%", position: "absolute", top: "0", left: "0", color: "#999", display: "flex", justifyContent: "center", alignItems: "center" }}><span style={{ fontSize: "44px" }}>80</span><span style={{ fontSize: "22px" }}>%</span></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UjiCoba)
