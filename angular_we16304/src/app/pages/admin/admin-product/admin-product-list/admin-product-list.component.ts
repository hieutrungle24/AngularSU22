import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  //định nghĩa service dưới tên 1 biến, đã tạo bên services
  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit(): void {
    //lắng nghe API trả về kết quả, baoh xong data có dữ liệu
    this.productService.getProducts().subscribe((data) => {
      //khi có dữ liệu sẽ gán về cho danh sách
      this.products = data;
      this.onGetList();
    })
  }

  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  
  onUpdateStatus(productId: string, newStatus: number) {
    this.productService.updateProduct(`${productId}`, {
      status: newStatus
    }).subscribe(data => {
      this.onGetList();
    });
  }

  onDelete(id: string) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');

    if (confirmDelete && id) {
      // Nếu có id thì xoá -> thực hiện call API xoá
      this.productService.deleteProduct(id).subscribe((data) => {
        console.log(data); // {}
        // Cập nhật lại dữ liệu mới
        this.onGetList();
      })
    }
  }
}

