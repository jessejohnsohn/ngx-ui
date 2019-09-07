import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, TestBed } from '@angular/core/testing';
import { SharedUiBootstrapModule } from './shared-ui-bootstrap.module';

describe('SharedUiBootstrapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiBootstrapModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiBootstrapModule).toBeDefined();
  });
});
