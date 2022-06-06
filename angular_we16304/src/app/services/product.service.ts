import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //khai báo http để có đối tượng HttpClient tuong tác với các phương thức của API
  constructor(private http:HttpClient) {}
  // kiểu dữ liệu Observable sẽ giúp lắng nghe API trả về kq
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }
  getProduct (id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${id}`);
  }  
  deleteProduct (id: number|string): Observable<any> {
    return this.http.delete(`${environment.products}/${id}`);
  }
  createProduct (data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`,data);
  }  
  updateProduct (_id: string, data: ProductCreate ): Observable<Product> {
    return this.http.put<Product>(`${environment.products}/${_id}`, data);
  }
    
}
