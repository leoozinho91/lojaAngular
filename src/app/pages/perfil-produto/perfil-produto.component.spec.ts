import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProdutoComponent } from './perfil-produto.component';

describe('PerfilProdutoComponent', () => {
  let component: PerfilProdutoComponent;
  let fixture: ComponentFixture<PerfilProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
