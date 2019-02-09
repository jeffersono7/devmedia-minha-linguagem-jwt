import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaLinguagensComponent } from './card-lista-linguagens.component';

describe('CardListaLinguagensComponent', () => {
  let component: CardListaLinguagensComponent;
  let fixture: ComponentFixture<CardListaLinguagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListaLinguagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
