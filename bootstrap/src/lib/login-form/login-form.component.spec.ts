import {
  FormsModule,
  ReactiveFormsModule,
  NgControl,
  FormControl
} from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login-form.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        {
          provide: NgControl,
          useValue: { control: new FormControl('') }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
