import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosApComponent } from './iconos-ap.component';

describe('IconosApComponent', () => {
  let component: IconosApComponent;
  let fixture: ComponentFixture<IconosApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
