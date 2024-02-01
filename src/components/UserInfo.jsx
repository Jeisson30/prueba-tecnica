import React from "react";

const UserInfo = ({ name, age, email }) => {

    return(
        <div>
            <h2>Información:</h2>
                <p>Name: {name}</p>
                <p>age: {age}</p>
                <p>email: {email}</p>
        </div>
    )
}
export default UserInfo