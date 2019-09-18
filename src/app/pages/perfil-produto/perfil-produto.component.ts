import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.css']
})
export class PerfilProdutoComponent implements OnInit {
  
  protected produto: Produto = new Produto;
  protected id: string;

  constructor(
    public produtoService: ProdutoService,
    protected router:Router,
    protected activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.get(this.id).subscribe(
        res => {
          console.log(res);
          this.produto = res
          // this.produto.nome = res.nome;
          // this.produto.descricao = res.descricao;
          // this.produto.valor = res.valor;
          // this.produto.quant = res.quant;
        },
        err=>{
           this.id = null
        }
      );
    } 
  }

}
