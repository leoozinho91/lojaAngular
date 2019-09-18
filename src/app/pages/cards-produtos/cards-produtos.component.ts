import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-produtos',
  templateUrl: './cards-produtos.component.html',
  styleUrls: ['./cards-produtos.component.css']
})
export class CardsProdutosComponent implements OnInit {
 
  protected produtos: any;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll();
  }

  
}
