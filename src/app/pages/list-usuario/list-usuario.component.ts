import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  protected usuarios: any;

  constructor(
    public usuarioService: UsuarioService,
    protected router:Router
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }

  editar(usuario) {
    this.ngOnInit
    this.router.navigate(['addUsuario', usuario.key])
  }
  apagar(usuario:Usuario) {
    console.log(usuario);
  }
}
