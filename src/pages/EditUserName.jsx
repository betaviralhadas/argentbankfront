import React from "react";
import UserHeader from "../components/UserHeader";
import UserNameForm from "../components/UserNameForm";
import UserTransactions from "../components/UserTransactions";

const EditUserName = () => {
    return (
        <>
            {<UserHeader />}
            <main>
                {<UserNameForm />}
                {<UserTransactions />}
            </main>
        </>
    )
}
export default EditUserName;