import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { product } from '../Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: product[] = [];
  isModelOpen: boolean = false;

  imageUrls: string[] = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1011/600/400',
  'https://picsum.photos/id/1019/600/400',
  'https://picsum.photos/id/1025/600/400',
  'https://picsum.photos/id/1035/600/400',
  'https://picsum.photos/id/1043/600/400',
  'https://picsum.photos/id/1049/600/400',
  'https://picsum.photos/id/1052/600/400',
  'https://picsum.photos/id/1056/600/400',
  'https://picsum.photos/id/1060/600/400',
  'https://picsum.photos/id/1067/600/400',
  'https://picsum.photos/id/1070/600/400',
  'https://picsum.photos/id/1080/600/400',
  'https://picsum.photos/id/1084/600/400',
  'https://picsum.photos/id/1082/600/400',
  'https://picsum.photos/id/1081/600/400',
  'https://picsum.photos/id/109/600/400',
  'https://picsum.photos/id/110/600/400',
  'https://picsum.photos/id/111/600/400',
  'https://picsum.photos/id/112/600/400'
];

  @ViewChild("f") formRef!: NgForm;
  constructor(private productService: ProductService){}
  

  ngOnInit(): void {
    this.products = [];
    this.productService.GetAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    });
  }


  showModal(): void {
    this.isModelOpen = true;
  }

  hideModal(): void {
    this.isModelOpen = false;
  }


  addProduct() {
    // Add product to backend or local array
    // this.products.push({ ...this.newProduct });
    // this.closeAddProductDialog();
  }

}
