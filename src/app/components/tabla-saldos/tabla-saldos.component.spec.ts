import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSaldosComponent } from './tabla-saldos.component';

describe('TablaSaldosComponent', () => {
  let component: TablaSaldosComponent;
  let fixture: ComponentFixture<TablaSaldosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaSaldosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
