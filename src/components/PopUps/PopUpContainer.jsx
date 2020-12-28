import React from 'react'
import { createPortal } from 'react-dom'

function PopUpContainer({ onClick, style, item }) {
    return createPortal(
        <div className="clickableBackground" onClick={onClick}>
            <div style={{ ...style }}>{item}</div>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PopUpContainer
