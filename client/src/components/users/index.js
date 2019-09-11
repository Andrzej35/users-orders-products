import React, { useState, useEffect } from "react"
import UsersTable from './users-table'
import Orders from '../orders'

function Users() {
    const [data, setData] = useState({ results: [] })

    useEffect(() => {
        const fetchData = async () => {
            await fetch("http://localhost:3007/users", {
                method: "GET",
                dataType: "JSON",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                }
            })
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => console.log('Error occurred: ', err))

        }
        fetchData()
    }, [])

    return (!data.results) ? (<div>loading...</div>)
        : (<div>
            <UsersTable users={data.results} />
            <Orders />
        </div>)
}


export default Users

