import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor( 
    private productService: ProductService, //phương thức call API 
    private router: Router, //điều hướng
    private activateRoute: ActivatedRoute, //lấy các tham số trên url
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('', 
       [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        this.onValidateNameHasProduct
       ]) //formcontrol(giá trị mặc định)  //price: new formcontrol(0) 
    });
    this.productId = '';
   }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params ['_id'];
    if(this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        //cập nhật data cho form = patchValue
        this.productForm.patchValue({
          name: data.name,
        })
      })
    }
    
  }
  onValidateNameHasProduct (control: AbstractControl): ValidationErrors| null {
    const inputValue = control.value;
    if (!inputValue.includes('product')) {
      return {hasProductError:true};
    }
    
   return null;
  }
redirectToList() {
  this.router.navigateByUrl('/admin/products');
}

  onSubmit() {
    console.log(this.productForm.value);
    // 1. nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    if(this.productId !== '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.redirectToList()
      })
    }
    // 2. Call API tạo mới
    return this.productService.createProduct(data).subscribe(data => {
        // 3. Quay lại danh sách product
        this.redirectToList()
    })
    
  }
}
