import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovieComponentComponent } from './user-movie-component.component';

describe('UserMovieComponentComponent', () => {
  let component: UserMovieComponentComponent;
  let fixture: ComponentFixture<UserMovieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMovieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMovieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
