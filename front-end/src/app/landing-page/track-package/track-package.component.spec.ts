import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPackageComponent } from './track-package.component';

describe('TrackPackageComponent', () => {
  let component: TrackPackageComponent;
  let fixture: ComponentFixture<TrackPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
