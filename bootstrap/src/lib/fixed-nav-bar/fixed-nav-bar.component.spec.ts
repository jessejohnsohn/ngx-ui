import { NgxUiBootstrapModule } from './../ngx-ui-bootstrap.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedNavBarComponent } from './fixed-nav-bar.component';

describe('FixedNavBarComponent', () => {
  let component: FixedNavBarComponent;
  let fixture: ComponentFixture<FixedNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxUiBootstrapModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
