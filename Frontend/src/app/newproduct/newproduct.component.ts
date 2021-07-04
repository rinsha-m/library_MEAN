import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
  bookItem = {
    book:'',
    author:'',
    genre:'',
    description:'',
    imageUrl:''}
  ngOnInit() {
  }
  AddProduct()
  {    
    this.productService.newProduct(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/products']);
  }
}
