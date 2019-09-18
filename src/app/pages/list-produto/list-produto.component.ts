import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  protected produtos: any;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll();
  }

  editar(produto) {
    this.ngOnInit()
    this.router.navigate(['addProduto', produto.key])
  }

  apagar(produto) {
    // if (confirm("Apagar o produto?"))
    //   this.produtoService.remove(produto.key)
    Swal.fire({
      title: 'Apagar produto?',
      text: "Você não poderá reverter esta ação!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!'
    }).then(res=> {
        if (res.value) {
        this.produtoService.remove(produto.key).then(
          res => {
              Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Produto apagado!',
                showConfirmButton: false,
                timer: 1500
              })
            }
          )
        }
    })
  }

}
