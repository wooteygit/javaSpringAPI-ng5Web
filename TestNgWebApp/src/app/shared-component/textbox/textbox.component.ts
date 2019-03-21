import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextboxComponent),
    multi: true
  }]
})

export class TextboxComponent implements OnInit, ControlValueAccessor {
  value: any;

  @Input() label: string = 'Text';
  @Input() placeholder: string = 'Text';
  @Input() required: boolean = true;
  @Input() strRequest: string = 'Please input';
  @Input() readonly: boolean = false;
  @Input() maxlength: number = 255;

  isRequest: boolean;
  /**
   * Invoked when the model has been changed
   */

  onChange: (_: any) => void = (_: any) => {};

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => {};

  constructor() {}

  ngOnInit() {
    if(this.required == true || this.required == false)
        this.isRequest = this.required;
  }

  ionViewDidEnter(){
    if(this.value)
      this.isRequest = false;

    console.log(""+this.isRequest);
  }

  /**
   * Method that is invoked on an update of a model.
  */
  updateChanges() {
    this.onChange(this.value);
    if(this.value)this.isRequest = false;
  }

  writeValue(value: number): void {
    this.value = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  keyChange(event: any): void{
    if(event.type == "change"){
      if((!this.value || (''+this.value).trim().length == 0) && this.required){
        this.isRequest = true;
      }else{
        this.isRequest = false;
      }
    }
  }

}
