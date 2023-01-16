import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalBaseComponent } from './internal-base.component';

describe('InternalBaseComponent', () => {
  let component: InternalBaseComponent;
  let fixture: ComponentFixture<InternalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
