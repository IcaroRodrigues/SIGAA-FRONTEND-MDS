import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatriculaListPage } from './matricula-list.page';

describe('MatriculaListPage', () => {
  let component: MatriculaListPage;
  let fixture: ComponentFixture<MatriculaListPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(MatriculaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
