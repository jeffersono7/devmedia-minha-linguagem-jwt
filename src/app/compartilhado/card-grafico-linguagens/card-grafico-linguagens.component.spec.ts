import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficoLinguagensComponent } from './card-grafico-linguagens.component';

describe('CardGraficoLinguagensComponent', () => {
  let component: CardGraficoLinguagensComponent;
  let fixture: ComponentFixture<CardGraficoLinguagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGraficoLinguagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGraficoLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
