import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from 'src/footer/footer.component';
// import { BodyComponent } from 'src/body/body.component';
import { BodyComponent } from 'src/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
