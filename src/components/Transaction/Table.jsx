import React, { useState } from 'react'
import { connect } from 'react-redux'
import { approvePayment } from '../../Redux/Actions/TransactionActions'
import PopUpContainer from '../PopUps/PopUpContainer';

function Table({ user, counter, approvePayment }) {

    const [state, setstate] = useState(false)

    const today = Date.now();

    const accountActiveDay = new Date(user.user.activeDay).getTime();

    const activeDays = Math.round(((accountActiveDay - today) / (24 * 60 * 60 * 1000)))

    const approveHandler = () => {
        const data = {
            id: user.id,
            status: true
        }
        approvePayment(data)
    }

    const cancelHandler = () => {
        const data = {
            id: user.id,
            status: false
        }
        approvePayment(data)
    }

    const styles = {
        height: "80%",
        width: "70%",
        margin: "auto",
    }
    const Image = () => {
        return (
            <img src={user.proofOfTransfer} alt="Zoomed Picture" className="CardIMG" />
        )
    }

    return (
        <>
            {state ? <PopUpContainer style={styles} item={<Image />} onClick={() => setstate(!state)} /> : null}
            <tr className="white">
                <th>{counter}</th>
                <td>{user.user.fullName}</td>
                <td>{user.bankAccountNumber}</td>
                <td><img onClick={() => setstate(!state)} src={user.proofOfTransfer} alt={user.proofOfTransfer} className="img-thumbnail img-fluid showThumbnail CardIMG pointer" /></td>
                <td>{activeDays > 0 ? activeDays : 0}</td>
                <td>{(accountActiveDay > today) ? <span className="green">Active</span> : <span className="text-danger">Not Active</span>}</td>
                <td>{user.paymentStatus ? (<span className="text-success">Approved</span>) : (user.paymentStatus === false ? <span className="text-danger">Cancel</span> : <span className="text-warning">Pending</span>)}</td>
                <td className="d-flex justify-content-around">{(user.paymentStatus === null) ? <button onClick={approveHandler} className="btn btn-success mr-2">Approve</button> : ""} {(user.paymentStatus !== false) ? <button onClick={cancelHandler} className="btn btn-danger">Cancel</button> : <span className="text-light">none</span>}</td>
            </tr>
        </>
    )
}

export default connect(null, { approvePayment })(Table);
