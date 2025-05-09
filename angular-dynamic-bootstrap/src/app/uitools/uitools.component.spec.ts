import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIToolsComponent } from './uitools.component';

describe('UIToolsComponent', () => {
  let component: UIToolsComponent;
  let fixture: ComponentFixture<UIToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
