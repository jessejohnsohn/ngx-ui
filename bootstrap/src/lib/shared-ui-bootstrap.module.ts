import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FixedNavBarComponent } from './fixed-nav-bar/fixed-nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register-form/register-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [FixedNavBarComponent, LoginComponent, RegisterComponent],
  exports: [FixedNavBarComponent, LoginComponent, RegisterComponent]
})
export class SharedUiBootstrapModule {}
