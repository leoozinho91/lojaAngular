
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
protected produto: Produto = new Produto

  constructor(
    public produtoService: ProdutoService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(form);
    try {
      this.produtoService.save(this.produto).subscribe(
        res => {
          console.log(res);
          this.produto = new Produto;
          form.reset();
          this.router.navigate(["/"]);
          Swal.fire("Cadastrado!")
        },
        err => {
          console.log(err);
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Erro ao cadastrar o produto!\nVerifique os dados!',
          })
        }
      )
    }catch (e) {
      Swal.fire({
        type: 'warning',
        title: 'Oops...',
        text: 'Algo deu errado ao acessar a base de dados.',
        footer: '<a href="/">Ligue para nosso suporte ?</a>'
      })
    }
  }

}
