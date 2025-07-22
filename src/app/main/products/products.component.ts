import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private productService: ProductService,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.GetAllProducts();
  }

  GetAllProducts() {
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
    this.formRef.reset();
  }


  addProduct() {
    const { productName, productDescription, productPrice } = this.formRef.value;

    if (!productName || !productDescription || !productPrice) {
      this.toastr.warning("All fields are required...");
      return;
    }

    this.productService.AddProduct({ Id: 0, Name: productName, Description: productDescription, Price: productPrice }).subscribe((res: any) => {
      console.log(res);
      if (res.Name == productName) {
        this.hideModal();
        this.GetAllProducts();
        this.toastr.success("Product " + res.Name + " Added Successfully.");
      } else {
        this.toastr.error("Some Error Occured.");
      }
    });
    // Add product to backend or local array
    // this.products.push({ ...this.newProduct });
    // this.closeAddProductDialog();
  }

  // deleteProduct(product_id: number){

  //   this.productService.deleteProduct(product_id).subscribe((res: { message: string }) => {
  //     console.log(res);
  //   });

  //   this.GetAllProducts();
  // }


  deleteProduct(product_id: number) {

    this.productService.deleteProduct(product_id).subscribe({
      next: (res: { message: string }) => {
        this.toastr.success(res.message);
        this.GetAllProducts();
      },

      error: (err) => {
        console.error("Error", err);
        this.toastr.error("Failed to delete the p0roduct.")
      }
    })
  }



  // addDummyProducts(count: number = 20): void {
  //   const productNames = [
  //     'Wireless Mouse', 'Bluetooth Speaker', 'Gaming Keyboard', 'Smartwatch', 'USB-C Charger',
  //     'LED Monitor', 'Laptop Stand', 'Noise Cancelling Headphones', 'External Hard Drive',
  //     'Phone Tripod', 'Action Camera', 'Power Bank', 'Smart LED Bulb', 'Portable Fan',
  //     'Fitness Tracker', 'Mini Projector', 'VR Headset', 'Wi-Fi Router', 'Electric Kettle', 'Smart Plug'
  //   ];

  //   const productDescriptions = [
  //     'High-quality and durable.', 'Best for daily use.', 'Top-rated performance.', 'Value for money.',
  //     'Sleek and portable.', 'Lightweight and powerful.', 'User-friendly design.', 'Energy efficient.',
  //     'Perfect for work and travel.', 'Reliable and stylish.'
  //   ];

  //   for (let i = 0; i < count; i++) {
  //     const name = productNames[i % productNames.length];
  //     const description = productDescriptions[Math.floor(Math.random() * productDescriptions.length)];
  //     const price = parseInt((Math.random() * 5000 + 500).toFixed(2)); // Price between 500 - 5500

  //     this.productService.AddProduct({
  //       Id: 0,
  //       Name: name,
  //       Description: description,
  //       Price: price
  //     }).subscribe({
  //       next: (res: any) => {
  //         console.log('Added:', res.Name);
  //         if (i === count - 1) {
  //           this.GetAllProducts();
  //           this.toastr.success(`${count} Products Added Successfully.`);
  //         }
  //       },
  //       error: (err) => {
  //         console.error('Error adding product:', err);
  //         this.toastr.error(`Error adding product ${name}`);
  //       }
  //     });
  //   }
  // }

}
