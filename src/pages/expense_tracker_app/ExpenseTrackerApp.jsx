import React from "react";
import { useState } from "react";
import "../../../dist/style.css";
import Header from "./Header";
import History from "./History";
import PageTitle from "../../components/PageTitle";
import AddTransaction from "./AddTransaction";
import { Link } from "react-router-dom";

function ExpenseTracker() {
  const [transaction, setTransaction] = useState([]);

  return (
    <PageTitle title="Expense Tracker App">
      <div className="app" id="expense_tracker">
        <div className="app-main">
          <Header transaction={transaction} />

          <div className="history">
            <div className="header-sm">
              <h3>History</h3>
            </div>
          </div>
          {transaction.length === 0 && <div className="no-transaction">No transaction yet.</div>}
          <ul className={`history-transaction ${transaction.length > 3 && "history-scroll"}`}>
            {transaction.map(transactions => (
              <History setTransaction={setTransaction} transaction={transaction} transactionType={transactions.transactionType} id={transactions.id} amount={transactions.amount} title={transactions.title} key={transactions.id} />
            ))}
          </ul>
          <AddTransaction setTransaction={setTransaction} />
          <Link to="/" className="expense_tracker_home_button">
            Home
          </Link>
        </div>
      </div>
    </PageTitle>
  );
}

export default ExpenseTracker;
