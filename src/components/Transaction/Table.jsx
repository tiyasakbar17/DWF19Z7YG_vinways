import React from 'react'

function Table(props) {
    const { user } = props
    return (
        <tr className="white">
            <th>{props.counter}</th>
            <td>{user.name}</td>
            <td>{user.bukti}</td>
            <td>{user.activeDay}</td>
            <td>{(user.activeDay > 0) ? <span className="green">Active</span> : <span className="text-danger">Not Active</span>}</td>
            <td>{user.payed}</td>
            <td className="d-flex justify-content-around">{(user.activeDay === 0) ? <button className="btn btn-success mr-2">Approved</button> : ""} <button className="btn btn-danger">Cancel</button></td>
        </tr>
    )
}

export default Table
