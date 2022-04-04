import { makeAutoObservable } from "mobx"
import { Product } from "./product"

export class ProductState{
    _products = []
    _getProductsURL = "http://localhost:3001/product/products"
    _addProductURL = "http://localhost:3001/product/create"
    _deleteProductsURL = "http://localhost:3001/product/delete"
    _isRequetsEnded = true

    constructor(){
        makeAutoObservable( this )
    }

    fetchProducts(){
        new Promise((resolve, reject) => {
            setInterval(() => {
                if(this._isRequetsEnded) resolve()
            }, 300)
        })
        .then(() => {
            fetch(this._getProductsURL)
            .then(response => {
                    return response.json()
                }
            )
            .then(data => {
                console.log(2, data)
                this._products = []
                    for(let product of data){
                        this._products.push(new Product(product.SKU, product.name, product.price, product.id, product.type, product.additionalInfo))
                    }
                }
            )
        })
    }

    addProduct(SKU, name, price, type, additionalInfo){
        this._addProductLocally(SKU, name, price, type, additionalInfo)

        this._isRequetsEnded = false
        fetch(this._addProductURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                SKU,
                name,
                price,
                type,
                additionalInfo
            })
        })
        .finally(() => this._isRequetsEnded = true)
    }

    deleteProducts(ids){
        
        fetch(this._deleteProductsURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ids
            })
        })

        this._deleteProductsLocaly(ids)
    }

    _addProductLocally(SKU, name, price, type, additionalInfo){
        this._products.push(new Product(SKU, name, price, 1, type, additionalInfo))
    }

    _deleteProductsLocaly(ids){
        if(!ids.length) return

        this._products = this._products.filter(product => {
            for(let id of ids){
                if(product.id === id) return false
            }
            return true
        })
    }

    get products(){
        return this._products
    }
}