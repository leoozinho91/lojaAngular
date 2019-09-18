import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute } from "@angular/router";
//https://sweetalert2.github.io/#download - Dados do alerta com estilo
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario: Usuario = new Usuario;
  private id: string;

  constructor(
    public usuarioService: UsuarioService,
    protected router: Router,
    protected activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res;
        },
        err=>{
           this.id = null
        }
      );
    } 
  }

  onsubmit(form) {
    console.log(form);
    try {
      if (this.id) {
        this.usuarioService.update(this.usuario, this.id).then(
          res => {
            //console.log(res);
            this.usuario = new Usuario;
            form.reset();
            this.router.navigate(["/"]);
            Swal.fire("Atualizado!")
          },
          err => {
            //console.log(err);
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Erro ao autalizar o usuario!\nVerifique os dados!',
            })
          }
        )
      } else {
        this.usuarioService.save(this.usuario).then(
          res => {
            console.log(res);
            this.usuario = new Usuario;
            form.reset();
            this.router.navigate(["/"]);
            Swal.fire("Cadastrado!")
          },
          err => {
            console.log(err);
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Erro ao cadastrar o usuario!\nVerifique os dados!',
            })
          }
        )
      }
    } catch (e) {
      Swal.fire({
        type: 'warning',
        title: 'Oops...',
        text: 'Algo deu errado ao acessar a base de dados.',
        footer: '<a href="/">Ligue para nosso suporte ?</a>'
      })
    }
  }

}
