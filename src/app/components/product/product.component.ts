import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  products:Product[] = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  dataLoaded = false;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    console.log("Response: "+ this.products)
  }
  getProducts() {

    this.httpClient
        .get<Product[]>(this.apiUrl)
        .subscribe((response) =>{
          this.products = response
          this.dataLoaded = true;
        })
  }
}
