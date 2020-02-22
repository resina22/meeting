import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class TopbarService {
  private dataSource = new BehaviorSubject<string>(null);
  observable = this.dataSource.asObservable();

  constructor() {}

  title(title: string) {
    this.dataSource.next(title);
  }

}
