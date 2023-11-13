import React from "react";
import UserHeader from "../components/UserHeader";
import UserNameForm from "../components/UserNameForm";
import UserTransactions from "../components/UserTransactions";
import FooterUser from "../components/FooterUser";

const EditUserName = () => {
    return (
        <>
            {<UserHeader />}
            <main>
                {<UserNameForm />}
                {<UserTransactions />}
            </main>
            {<FooterUser />}
        </>
    )
}
export default EditUserName;