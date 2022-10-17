import { NgModule } from '@angular/core';
import { MyInputModule } from '../public-api';
import { MyInputComponent } from './my-input/my-input.component';



@NgModule({
  declarations: [
    
  ],
  imports: [MyInputModule
  ],
  exports: [
    MyInputModule
  ]
})
export class MyLibModule { }
