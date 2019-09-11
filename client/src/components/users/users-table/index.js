import React from "react"
import './index.css'

const usersTable = (props) => (
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {props.users.map(user => (
                <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default usersTable
