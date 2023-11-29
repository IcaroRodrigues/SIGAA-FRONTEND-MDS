import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListaOfertaPage } from './lista-oferta.page';

describe('ListaOfertaPage', () => {
  let component: ListaOfertaPage;
  let fixture: ComponentFixture<ListaOfertaPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ListaOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
