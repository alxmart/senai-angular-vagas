import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteluizComponent } from './testeluiz.component';

describe('TesteluizComponent', () => {
  let component: TesteluizComponent;
  let fixture: ComponentFixture<TesteluizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteluizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteluizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
