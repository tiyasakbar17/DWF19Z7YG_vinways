import React from 'react'
import { connect } from 'react-redux';
import Table from '../components/Transaction/Table';
import { loadTransactions } from '../Redux/Actions/TransactionActions'

function Transaction({ TransactionsState, loadTransactions }) {

    React.useEffect(() => {
        loadTransactions()
    }, [])

    if (TransactionsState.loading) {
        return (
            <div>
                <div className="row">
                    <div className="showBox">
                        <h1 className="white">Loading...</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="kontens">
                <div className="container transactions">
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
                                <th>Rekening</th>
                                <th>Bukti Transfer</th>
                                <th>Remaining Active /Days</th>
                                <th>Status User</th>
                                <th>Status Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                TransactionsState.transactions.map((user, i) => {
                                    i += 1;
                                    return (<Table user={user} counter={i} key={i} />)
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        TransactionsState: state.Transactions
    }
}

export default connect(mapStateToProps, { loadTransactions })(Transaction);
