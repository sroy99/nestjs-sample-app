import { Injectable } from "@nestjs/common";
import { Product } from "./interfaces/products.interface";

@Injectable()
export class ProductsService{
    private readonly products: Product[]=[]

    insertProduct(product: Product) : any{
        this.products.push(product)
        return {message:"Pushed succesfully",name: product.name}
    }

    getProducts(): any{
        return this.products
    }
}