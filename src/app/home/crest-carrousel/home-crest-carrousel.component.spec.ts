import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestCarrouselComponent } from './home-crest-carrousel.component';

describe('CrestCarrouselComponent', () => {
  let component: CrestCarrouselComponent;
  let fixture: ComponentFixture<CrestCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrestCarrouselComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrestCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
