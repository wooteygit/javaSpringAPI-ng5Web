import { Injectable } from '@angular/core';

@Injectable()
export class CenterService {

  title: string;
  formID: string;
  fullName: string;

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

  public set setFullName(str: string) {
    this.fullName = str;
  }

  public get getFullName(): string {
    return this.fullName;
  }
}
