import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from './my-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MyInputComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [MyInputComponent]
})
export class MyInputModule { }
