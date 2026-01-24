import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    private Products: Product[] = [];
    private nextId = 1;
    create(dto: CreateProductDto): Product {
        const newProduct: Product = {
            id: this.nextId++,
            fullName: dto.fullName,
            price: dto.price,
        };
        this.Products.push(newProduct);
        return newProduct;
    }

    findAll(): Product[] {
        return this.Products;
    }

    findOne(id: number): Product {
        const found = this.Products.find(c => c.id === id);
        if (!found) throw new NotFoundException(`Product ${id} no existe`);
        return found;
    }

    update(id: number, dto: UpdateProductDto): Product {
        const Product = this.findOne(id);
        Object.assign(Product, dto);
        return Product;
    }
    
    remove(id: number): void {
        const idx = this.Products.findIndex(c => c.id === id);
        if (idx === -1) throw new NotFoundException(`Product ${id} no existe`);
        this.Products.splice(idx, 1);
    }
}