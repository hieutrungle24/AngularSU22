import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UserComponent } from './user/user.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard], //đưa vào để kiểm soát việc login trước khi vào admin
    children: [
      // {
      //   path: '',
      //   redirectTo: 'users', 
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'users',
      //   component: UserComponent,
      // }
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent,
          },
          {
            path: 'create',
            component: AdminProductFormComponent,
          },
          {
            path: 'edit/:_id',
            component: AdminProductFormComponent,
          },
          {
            path: ':_id',
            component: AdminProductDetailComponent,
            //đẩy adminProduct/id xuống cuối tránh việc nhầm id = 'create'
          },
          
        ]
      }

    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
  // {
  //   path: 'user',
  //    component: UserComponent,
    // 1. neu co children thi ko dung component de render nua.
    //2. neu van muon dung component(khung layout) thi trong component se phai co router-outlet
    // children: [
      // {
      //   path: '',
      //   component: UserComponent
      // },
      // {
      //   path: 'create',
      //   component: UserFormComponent
      // },
      // {
      //   path: 'edit',
      //   component: UserFormComponent
      // },
    ]
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] //đưa vào để route bên trên có thể dùng
})
export class AppRoutingModule { }
