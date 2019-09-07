import { async, TestBed } from '@angular/core/testing';
import { NgxUiMaterialModule } from './ngx-ui-material.module';

describe('SharedUiMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxUiMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxUiMaterialModule).toBeDefined();
  });
});
