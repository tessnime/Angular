import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponentComponent,
    HeaderComponent,
    ArticlesComponentComponent,
    TemplateDrivenFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
