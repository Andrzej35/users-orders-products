import React from 'react'

class Orders extends React.Component {

    state = {
        orders: {},
        user: ''
    }

    async fetchUserOrders(e) {
        e.preventDefault()
        await fetch(`http://localhost:3007/orders/user/${this.state.user.toLowerCase()}`)
            .then(res => res.json())
            .then(res => this.setState({ orders: res }))
            .catch(err => console.log('something went wrong please try again', err))

    }

    render() {
        const { user, orders } = this.state

        return (
            <div>
                <h2>Check how many orders users has:</h2>
                <form className="form-inline" onSubmit={(e) => this.fetchUserOrders(e)}>
                    <label>Please type user name: </label>
                    <input className="form-control" type="search" placeholder="Search" onChange={e => this.setState({ user: e.target.value })} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                {Object.keys(orders).length === 0 ? null : (<h3>{[...user].map((x, i) => {
                    return (i === 0) ? x.toUpperCase() : x
                }).join('')} has ordered {orders.ordersByCustomer <= 1 ? `${orders.ordersByCustomer} product` : `${orders.ordersByCustomer} products`}</h3>)}
            </div>
        )
    }
}

export default Orders
