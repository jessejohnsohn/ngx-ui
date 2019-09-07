import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, TestBed } from '@angular/core/testing';
import { NgxUiBootstrapModule } from './ngx-ui-bootstrap.module';

describe('SharedUiBootstrapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxUiBootstrapModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxUiBootstrapModule).toBeDefined();
  });
});
