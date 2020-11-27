import React from 'react'
import Table from '../components/Transaction/Table';
import { AppContext } from '../Context/AppContext'

function Transaction() {

    const [globalState] = React.useContext(AppContext);
    const payerData = globalState.filter((user) => (user.bukti))

    return (
        <div className="kontens">
            <div className="container formAdd">
                <div className="row">
                    <h1 className="white mt-5 mb-5">
                        Incoming Transaction
                    </h1>
                </div>
                <table className="table table-striped text-left align-middle">
                    <thead className="green">
                        <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Bukti Transfer</th>
                            <th>Remaining Active /Days</th>
                            <th>Status User</th>
                            <th>Status Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payerData.users.map((user, i) => {
                                i += 1;
                                return (<Table user={user} counter={i} key={user.id} />)
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transaction
