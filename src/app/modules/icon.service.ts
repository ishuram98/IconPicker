import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Values {
  public icon: string;
  public size: number;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  public resultIcon = new Subject<Values>();
  resultI$ = this.resultIcon.asObservable();

  constructor() { }

  sendIcon(val: Values): void {
    this.resultIcon.next(val);
  }
}
