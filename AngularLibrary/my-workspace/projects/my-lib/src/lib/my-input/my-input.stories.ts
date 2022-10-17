
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MyLibModule } from '../my-lib.module';
import { MyInputComponent } from './my-input.component';

export default {
  title: 'Input',
  decorators: [
    moduleMetadata({
      imports: [MyLibModule, FormsModule, ReactiveFormsModule],
    }),
  ],
};

const fb = new FormBuilder();
let fc= new FormControl("Hello");

let fg = fb.group({
 inputControl: fc
})

//fc.valueChanges.subscribe(val => {console.log(val)})

const Template: Story = (args: any) => ({
    props: { ...args, formGroup: fg},
    template: `
    <form [formGroup]="formGroup">
     <my-input formControlName="inputControl"></my-input>
    </form>`
})

export const Input = Template.bind({});

Input.args = {
};