import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from 'src/footer/footer.component';
// import {BrowserModule} from '@angular/platform-browser'
import { RouterModule} from "@angular/router";
import { BodyComponent } from 'src/body/body.component';
import {ProductsComponent} from 'src/products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component'
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "login", component:LoginComponent },
      {path: "register", component:RegisterComponent },
      {path: "forgot-password", component: ForgotpasswordComponent },
      {path: "reset", component:ResetpasswordComponent },
      {path: "profile", component:ProfileComponent },
      {path: "home", component:HomeComponent },
      {path: "", component:HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
