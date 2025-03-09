import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then((response) => response.json())
            .then((data) => setUsers(data.results))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h2>Random Users</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {users.map((user, index) => (
                    <li key={index} style={{ margin: "10px 0" }}>
                        <img
                            src={user.picture.thumbnail}
                            alt="User"
                            style={{ borderRadius: "50%", marginRight: "10px" }}
                        />
                        {user.name.first} {user.name.last}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <UserList />
        </div>
    );
};

export default App;
