import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSponsorsBannerComponent } from './home-sponsors-banner.component';

describe('HomeSponsorsBannerComponent', () => {
  let component: HomeSponsorsBannerComponent;
  let fixture: ComponentFixture<HomeSponsorsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSponsorsBannerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSponsorsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
