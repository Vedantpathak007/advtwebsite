import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvtComponent } from './my-advt.component';

describe('MyAdvtComponent', () => {
  let component: MyAdvtComponent;
  let fixture: ComponentFixture<MyAdvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAdvtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAdvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
