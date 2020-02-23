import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  @ViewChild('interestInput', {static: false}) interestInput: ElementRef<HTMLInputElement>;
  interestControl = new FormControl();
  filteredInterests: Observable<string[]>;
  allInterests: string[] = ['One', 'Two', 'Three'];
  interests: string[] = [];

  ngOnInit() {
    this.filteredInterests = this.interestControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  private filter(value: string): string[] {
    const filterValue = (value || '').trim().toLowerCase();
    return this.allInterests.filter(option => option.toLowerCase().includes(filterValue));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = (event.option.viewValue || '').trim().toLocaleLowerCase();
    if (!value) {
      return;
    }

    const [interest]  = this.allInterests.filter(i => i.toLocaleLowerCase() === value);
    if (!interest) {
      return;
    }

    this.interests.push(interest);
    this.allInterests = this.allInterests.filter(i => i !== interest);
    this.interestControl.setValue(null);
  }

  removeInterest(value: string) {
    this.interests = this.interests.filter(i => i !== value);
    this.allInterests.push(value);
    this.interestControl.setValue(null);
  }

}
