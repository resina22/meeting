import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  visible = false;
  private behaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly observable: Observable<boolean> = this.behaviorSubject.asObservable();
  constructor() {}

  get isVisible(): boolean {
    return this.visible;
  }

  toggle() {
    this.visible = !this.visible;
    this.behaviorSubject.next(this.visible);
  }
}
