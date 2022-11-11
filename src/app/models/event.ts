export class Event{
  private _id!: string;
  private _name!: string;
  private _date!: Date;
  get name (){
    return this._name;
  }
  set name(name:string){
    this._name = name;
  }
  get date ():Date{
    return this._date;
  }
  set date(date:Date){
    this._date = date;
  }
}
