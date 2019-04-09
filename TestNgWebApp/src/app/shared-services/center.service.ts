import { Injectable } from '@angular/core';

@Injectable()
export class CenterService {

  title: string;
  formID: string;

  constructor() { }

  public set setTitle(str: string) {
    this.title = str;
  }

  public get getTitle(): string {
    return this.title;
  }

  public set setFormID(str: string) {
    this.formID = str;
  }

  public get getFormID(): string {
    return this.formID;
  }
}
