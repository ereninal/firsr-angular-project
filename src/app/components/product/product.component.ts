import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = { productId: 1, productName: "Laptop", categoryId: 2, unitPrice: 200 }
  product2 = { productId: 2, productName: "Klavye", categoryId: 2, unitPrice: 200 }
  produc3 = { productId: 3, productName: "Masaüstü Pc", categoryId: 2, unitPrice: 200 }
  produc4 = { productId: 4, productName: "Mouse", categoryId: 2, unitPrice: 200 }
  produc5 = { productId: 5, productName: "Ekran", categoryId: 2, unitPrice: 200 }
  produc6 = { productId: 6, productName: "İşlemci", categoryId: 2, unitPrice: 200 }
  produc7 = { productId: 7, productName: "Router", categoryId: 2, unitPrice: 200 }

  products = [this.product2, this.produc3, this.produc4, this.produc5, this.produc6, this.produc7]
  constructor() { }

  ngOnInit(): void {
  }

}
