import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  protected usuarios: any;

  constructor(
    public usuarioService: UsuarioService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }

  editar(usuario) {
    this.ngOnInit()
    this.router.navigate(['addUsuario', usuario.key])
  }

  apagar(usuario) {
    // if (confirm("Apagar o Usuario?"))
    //   this.usuarioService.remove(usuario.key)
    Swal.fire({
      title: 'Apagar produto?',
      text: "Você não poderá reverter esta ação!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(res => {
        if (res.value) {
        this.usuarioService.remove(usuario.key)
          .then(
            res => {
              Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Usuario apagado!',
                showConfirmButton: false,
                timer: 1500
              })
            }
          )   
        }
    })
  }

}
