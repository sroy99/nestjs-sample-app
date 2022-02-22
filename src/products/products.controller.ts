import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AddProductDto } from "./dto/add-product.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('products')
@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Post()
    addProduct(@Body() addProductDto: AddProductDto): {message: string,name: string}{
        return this.productsService.insertProduct(addProductDto)
    }

    @Get()
    getAllProducts(): any{
        return this.productsService.getProducts()
    }
}