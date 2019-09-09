import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient
  ) { }

  save(produto: Produto) {
    //this.usuarios.push(usuario);
    return this.http.post(this.db + "produtos", produto);
  }

  getAll() {
    return this.http.get(this.db + "produtos");
  }
}
