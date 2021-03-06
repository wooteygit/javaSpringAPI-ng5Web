import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CenterService } from '../../shared-services/center.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit, ControlValueAccessor {

  value: any;

  @Input() ctrID: string;
  @Input() label: string = 'Email';
  @Input() placeholder: string = 'Email';
  @Input() required: boolean = true;
  @Input() strRequest: string = 'Please input';
  @Input() readonly: boolean = false;
  @Input() maxlength: number = 255;
  @Input() validate: {invalid: boolean, msg: string};

  isRequest: boolean;
  /**
   * Invoked when the model has been changed
   */

  onChange: (_: any) => void = (_: any) => {};

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => {};

  constructor(public center: CenterService) {}

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
