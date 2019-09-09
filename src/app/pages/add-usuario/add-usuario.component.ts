import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from "@angular/router";
//https://sweetalert2.github.io/#download - Dados do alerta com estilo
import Swal from 'sweetalert2';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario: Usuario = new Usuario;
  // @Input() usuarios:Usuario[] = []

  public endereco: Endereco = new Endereco;

  constructor(
    public usuarioService: UsuarioService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(form);
    try {
      this.usuario.endereco = this.endereco
      this.usuarioService.save(this.usuario).subscribe(
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
