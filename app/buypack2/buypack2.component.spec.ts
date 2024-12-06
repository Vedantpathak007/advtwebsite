import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buypack2Component } from './buypack2.component';

describe('Buypack2Component', () => {
  let component: Buypack2Component;
  let fixture: ComponentFixture<Buypack2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buypack2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buypack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
