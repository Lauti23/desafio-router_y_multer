const express = require('express')
const router = express.Router()

let products = []

//OBTENER TODOS LOS PRODUCTOS
router.get('/', (req, res) => {
    res.send({products})
})

//OBTENER UN SOLO PRODUCTO POR SU ID
router.get('/:id', (req, res) => {
    let param = req.params.id
    if ((param > products.length) || param <= 0) return res.send({err: "Out of bound!"})
    if (isNaN(param)) return res.send({err: 'Not a number!'})
    res.send(products[param - 1])
})

//POSTEAR UN PRODUCTO NUEVO
router.post('/', (req, res) => {
    let product = req.body
    let newId = products.length + 1
    product.id = newId 
    products.push(product)
    res.send({message: 'Product sold', product})
})

//MODIFICAR UN PRODUCTO
router.put('/:id', (req, res) => {
    res.send({message: 'Product modified', products})
})

//ELMIINAR UN PRODUCTO POR SU ID
router.delete('/:id', (req, res) => {
    let id = req.params.id
    products = products.filter(product => product.id != id)
    res.send({message: 'Product deleted', products})
})

module.exports = router