import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './pages/signin/signin.component';
import { materialModules } from 'src/app/types/material-modulces';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,FormsModule,...materialModules,
  ],
  exports:[SigninComponent]
})
export class AuthModule { }
