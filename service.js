const users = require('./resources/users.json')
const orders = require('./resources/orders.json')
const products = require('./resources/products.json')


const getOrderCountForUser = name => {
  const userId = users.find(user => user.name === name).userId
  const count = orders.filter(order => order.userId === userId).length
  return count
}

const getOrderCountForProduct = product => {
  const item = products.find(name => name.productName === product)
  const count = orders.filter(order => order.productId === item.productId).length
  return count
}

const getCustomerNamesForProduct = product => {
  const items = products.find(name => name.productName === product)
  const ordersCount = orders
    .filter(order => order.productId === items.productId)
    .map(user => user.userId)
    .reduce((all, item) => all.includes(item) ? all : [...all, item], [])
    .map(x => users.filter(user => user.userId === x).map(name => name.name))
  const result = ([].concat(...ordersCount)).sort()

  return result
}

const getMostPopularProduct = () => {
  const mostProduct = orders.map(order => order.productId).reduce(
    (all, item, _, array) =>
      (array.filter(v => v === all).length >= array.filter(v => v === item).length ? all : item),
    null)
  const whichProduct = products.find(product => product.productId === mostProduct)
  return [whichProduct.productName]
}

module.exports = {
  getOrderCountForUser,
  getOrderCountForProduct,
  getCustomerNamesForProduct,
  getMostPopularProduct
}
