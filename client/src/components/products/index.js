import React from 'react'

class Products extends React.Component {
    state = {
        product: ''
    }

    async fetchMostPopularProduct() {
        await fetch(`http://localhost:3007/orders/product/popular`)
            .then(res => res.json())
            .then(res => this.setState({ product: res }))
            .catch(err => console.log('something went wrong please try again', err))

    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <button className="btn btn-outline-success" onClick={() => this.fetchMostPopularProduct()}>Most popular</button>
                {this.state.product.length < 1 ?
                    null :
                    (<p>Product <strong>{this.state.product[0].toUpperCase()}</strong> was the most popular among our clients.</p>)}
            </div>
        )
    }
}

export default Products


