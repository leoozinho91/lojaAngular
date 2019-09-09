import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';
import { ListProdutoComponent } from './pages/list-produto/list-produto.component';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { EnderecoComponent } from './pages/add-endereco/endereco.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    AddProdutoComponent,
    ListProdutoComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageNavComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
