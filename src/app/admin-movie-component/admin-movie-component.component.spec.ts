import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieComponentComponent } from './admin-movie-component.component';

describe('AdminMovieComponentComponent', () => {
  let component: AdminMovieComponentComponent;
  let fixture: ComponentFixture<AdminMovieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
