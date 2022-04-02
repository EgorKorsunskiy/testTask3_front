import { makeAutoObservable } from "mobx"

export class Product{
    constructor(SKU, name, price, id, type, additionalInfo){

        this._SKU = SKU
        this._name = name
        this._price = price
        this._id = id
        this._type = type
        this._additionalInfo = additionalInfo

        makeAutoObservable( this )
    }

    get SKU(){
        return this._SKU
    }

    get name(){
        return this._name
    }

    get price(){
        return this._price
    }

    get id(){
        return this._id
    }

    get type(){
        return this._type
    }

    get additionalInfo(){
        return this._additionalInfo
    }
}