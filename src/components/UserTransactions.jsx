import React from "react";
import "../css/main.css";

const UserTransactions = () => {
    return (
        <section className="user-transactions">
            <div className="transactions-content">
                <h3 className="transactions-title">Argent Bank Checking (x3448)</h3>
                <p className="transactions-amount">$48,098.43</p><i class="fa-solid fa-chevron-right arrow"></i>
                <p className="transactions-amount-description">Available Balance</p>
            </div>
            <div className="transactions-content">
                <h3 className="transactions-title">Argent Bank Checking (x3448)</h3>
                <p className="transactions-amount">$48,098.43</p><i class="fa-solid fa-chevron-right arrow"></i>
                <p className="transactions-amount-description">Available Balance</p>
            </div>
            <div className="transactions-content">
                <h3 className="transactions-title">Argent Bank Checking (x3448)</h3>
                <p className="transactions-amount">$48,098.43</p><i class="fa-solid fa-chevron-right arrow"></i>
                <p className="transactions-amount-description">Available Balance</p> 
            </div>
        </section>
    )
}
export default UserTransactions;