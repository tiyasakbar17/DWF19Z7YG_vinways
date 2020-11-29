import React from 'react'
import Actions from '../../Context/Actions'

function Table({ user, counter, action }) {

    const approveHandler = () => {
        action.APPROVEPAYMENT({
            id_u: user.id_u,
            id_b: user.bukti.id_b
        })
    }

    const cancelHandler = () => {
        action.CANCELPAYMENT({
            id_u: user.id_u,
            id_b: user.bukti.id_b
        })
    }

    return (
        <tr className="white">
            <th>{counter}</th>
            <td>{user.name}</td>
            <td><img src={`/img/${user.bukti.img}`} alt={user.bukti.img} className="img-thumbnail img-fluid showThumbnail" /></td>
            <td>{user.activeDay}</td>
            <td>{(user.activeDay > 0) ? <span className="green">Active</span> : <span className="text-danger">Not Active</span>}</td>
            <td>{user.bukti.approved ? (<span className="text-success">Approved</span>) : (user.bukti.approved === false ? <span className="text-danger">Cancel</span> : <span className="text-warning">Pending</span>)}</td>
            <td className="d-flex justify-content-around">{(user.bukti.approved === null) ? <button onClick={approveHandler} className="btn btn-success mr-2">Approve</button> : ""} {(user.bukti.approved !== false) ? <button onClick={cancelHandler} className="btn btn-danger">Cancel</button> : <span className="text-light">none</span>}</td>
        </tr>
    )
}

export default Actions(Table);
