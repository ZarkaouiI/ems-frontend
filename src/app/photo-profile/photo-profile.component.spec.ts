import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProfileComponent } from './photo-profile.component';

describe('PhotoProfileComponent', () => {
  let component: PhotoProfileComponent;
  let fixture: ComponentFixture<PhotoProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoProfileComponent]
    });
    fixture = TestBed.createComponent(PhotoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
