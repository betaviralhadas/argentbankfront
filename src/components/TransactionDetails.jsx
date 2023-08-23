import React from "react";
import "../css/main.css";
import UserHeader from "./UserHeader";

const TransactionDetails = () => {
    return(
        <>
        {<UserHeader />}
        <main>
            <div className="content-transaction">
                    <h3 className="transactions-title">Argent Bank Checking (x3448)</h3>
                    <p className="transactions-amount">$48,098.43</p><i class="fa-solid fa-chevron-right arrow"></i>
                    <p className="transactions-amount-description">Available Balance</p>
            </div>
            <table className="content-block">
                <thead>
                    <tr className="content-title">
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Balance</th>
                    </tr>
                    
                </thead>
               
                <tr className="content-description">
                    <td>27/02/20</td>
                    <p>Golden Sun Bakery</p>
                    <p>$8.00</p>
                    <p>$298.00</p>
                    <i class="fa-solid fa-angle-down"></i>
                </tr>
                <div className="content-description">
                    <p>27/02/20</p>
                    <p>Golden Sun Bakery</p>
                    <p>$8.00</p>
                    <p>$298.00</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="detailed-content">
                    <article className="detailer-content2">
                        <p>27/02/20</p>
                        <p>Golden Sun Bakery</p>
                        <p>$8.00</p>
                        <p>$298.00</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </article>
                    <article className="detailer-content2">
                        <p>Transaction type</p>
                        <p>Electronic</p>
                    </article>
                    <article className="detailer-content2">
                        <p>Category</p>
                        <p>Food</p>
                        <i class="fa-solid fa-pen"></i>
                    </article>
                    <article className="detailer-content2">
                        <p>Note</p>
                        <p>lorem ipsum</p>
                        <i class="fa-solid fa-pen"></i>
                    </article>
                </div>
                <div className="content-description">
                    <p>27/02/20</p>
                    <p>Golden Sun Bakery</p>
                    <p>$8.00</p>
                    <p>$298.00</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="content-description">
                    <p>27/02/20</p>
                    <p>Golden Sun Bakery</p>
                    <p>$8.00</p>
                    <p>$298.00</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </table>
        </main>
        </>
    )
}
export default TransactionDetails;