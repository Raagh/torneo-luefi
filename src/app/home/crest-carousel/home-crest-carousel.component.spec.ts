import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestCarouselComponent } from './home-crest-carousel.component';

describe('CrestCarrouselComponent', () => {
  let component: CrestCarouselComponent;
  let fixture: ComponentFixture<CrestCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrestCarouselComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrestCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
