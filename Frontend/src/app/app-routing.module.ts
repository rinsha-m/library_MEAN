import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component'
import { NewProductComponent } from './newproduct/newproduct.component';
import {LoginComponent} from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'authors',
    component:AuthorsComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewProductComponent,
},
{
  path:'update',
  component:UpdateProductComponent
},
{path:'addauthor', 
  canActivate: [AuthGuard],
  component: NewauthorComponent,
},
{
  path:'updateauthor ',
  component:UpdateAuthorComponent
}


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
