import React from "react";
import "../css/main.css";
import UserHeader from "./UserHeader";

const TransactionDetails = () => {
    return(
        <>
        {<UserHeader />}
        <main>
            <div className="transactions-content">
                    <h3 className="transactions-title">Argent Bank Checking (x3448)</h3>
                    <p className="transactions-amount">$48,098.43</p><i class="fa-solid fa-chevron-right arrow"></i>
                    <p className="transactions-amount-description">Available Balance</p>
            </div>
            <div>
                <article>
                    <p>Date</p>
                    <p>Description</p>
                    <p>Amount</p>
                    <p>Balance</p>
                </article>
            </div>
        </main>
        </>
    )
}
export default TransactionDetails;