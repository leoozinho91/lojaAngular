import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  protected usuarios:any;

  constructor(
    public usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }

}
