import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmeirasComponent } from './palmeiras.component';

describe('PalmeirasComponent', () => {
  let component: PalmeirasComponent;
  let fixture: ComponentFixture<PalmeirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmeirasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
