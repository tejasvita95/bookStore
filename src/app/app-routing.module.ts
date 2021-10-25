import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DisplaybookComponent } from './component/displaybook/displaybook.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ShowBooksComponent } from './admin/show-books/show-books.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { EditBookComponent } from './admin/edit-book/edit-book.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewComponent } from './admin/manage-user/view/view.component';
import { DeleteComponent } from './admin/manage-user/delete/delete.component';
import { EditComponent } from './admin/manage-user/edit/edit.component';
import { AddComponent } from './admin/manage-user/add/add.component';
import { ViewCategoryComponent } from './admin/category/view-category/view-category.component';
import { DeleteCategoryComponent } from './admin/category/delete-category/delete-category.component';
import { EditCategoryNewComponent } from './admin/category/edit-category-new/edit-category-new.component';
 


const routes: Routes = [
  {
    path: '', redirectTo: 'books',
    pathMatch: 'full'
  },
  { path: 'books', component: DisplaybookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'admin', component: NavbarComponent },
  { path: 'manage-category', component: ManageCategoryComponent, canActivate:[AuthGuard] },
  { path: 'edit-category', component: EditCategoryComponent, canActivate:[AuthGuard] },
  { path: 'manage-user', component: ManageUserComponent, canActivate:[AuthGuard] },
  { path: 'show-books', component: ShowBooksComponent,canActivate:[AuthGuard] },
  { path: 'add-book', component: AddBookComponent,canActivate:[AuthGuard] },
  { path: 'edit-book', component: EditBookComponent,canActivate:[AuthGuard] },
  {path: 'view/:Id',component:ViewComponent},
  {path:'delete',component:DeleteComponent},
  {path:'edit/:Id',component:EditComponent},
  {path:'add',component:AddComponent},
  {path:'viewCategory/:Id',component:ViewCategoryComponent},
  {path:'editCategory/:Id',component:EditCategoryNewComponent},
  {path:'deleteCategory',component:DeleteCategoryComponent}
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
