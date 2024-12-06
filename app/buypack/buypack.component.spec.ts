import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypackComponent } from './buypack.component';

describe('BuypackComponent', () => {
  let component: BuypackComponent;
  let fixture: ComponentFixture<BuypackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuypackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuypackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
