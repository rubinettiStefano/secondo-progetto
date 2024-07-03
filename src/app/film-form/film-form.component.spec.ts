import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFormComponent } from './film-form.component';

describe('FilmFormComponent', () => {
  let component: FilmFormComponent;
  let fixture: ComponentFixture<FilmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
