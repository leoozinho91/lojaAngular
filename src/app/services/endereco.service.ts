import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    protected http: HttpClient
  ) { }

  getEndereco(cep) {
    return this.http.get<Endereco>("https://viacep.com.br/ws/" + cep + "/json/")
  }

}