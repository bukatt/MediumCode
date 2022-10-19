import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
var nextId = 0;

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit, ControlValueAccessor {
  _value: string = "";
  get value(){
    return this._value;
  }
  set value(val: string){
    this._value = val;
    this.onChange(val);
    
  }

  disabled: boolean = false;
  invalid: boolean = false;
  id: string = `input-${nextId++}`;

  onChange = (_: any) => {};
  onTouch = () => {};

  constructor(private control: NgControl) {
    this.control.valueAccessor = this;
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  ngOnInit(): void {
    this.control.statusChanges?.subscribe(status => {
      this.invalid = (status === 'INVALID' && ((this.control.touched ?? false) || (this.control.dirty ?? false)))
    })
  }
}
