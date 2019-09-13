import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';
import { ListProdutoComponent } from './pages/list-produto/list-produto.component';

const routes: Routes = [
  {path:"", component:ListProdutoComponent},
  {path:"addUsuario", component:AddUsuarioComponent},
  {path:"addUsuario/:id", component:AddUsuarioComponent},
  {path:"addProduto", component:AddProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
