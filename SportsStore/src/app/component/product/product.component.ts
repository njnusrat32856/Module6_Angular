import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  private products: any;
  private categories: string[] = [];


  constructor(
    private productService: ProductService
  ) {}


  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
