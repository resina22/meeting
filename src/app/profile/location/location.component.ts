import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @ViewChild('searchLocation', {static: false}) inputSearchLocation: ElementRef<HTMLInputElement>;
  locationControl = new FormControl();
  filteredLocations: Observable<string[]>;
  allLocations: string[] = ['One', 'Two', 'Three'];
  locations: any[] = [];
  fakeInterests = ['One', 'Two', 'Three'];

  ngOnInit() {
    this.filteredLocations = this.locationControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLocations.filter(option => option.toLowerCase().includes(filterValue));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = (event.option.viewValue || '').trim().toLocaleLowerCase();
    if (value) {
      return;
    }
  }

  associat(value: string) {
    const inputLocation = this.inputSearchLocation.nativeElement.value.trim();
    this.fakeInterests = this.fakeInterests.filter(i => i !== value);
    if (!this.locations.length) {
      this.locations.push({ locale: inputLocation, interests: [value] });
      return;
    }

    this.locations.map(location => {
      if (location.locale.toUpperCase() === inputLocation.toUpperCase()) {
        if (location.interests.includes(value) ) {
          return;
        }
        location.interests.push(value);
      }
    });
  }

  disassociate(value: string, location: string) {
    const inputLocation = location;
    this.locations.map( (loc, idx) => {
      if (loc.locale.toUpperCase() === inputLocation.toUpperCase()) {
        loc.interests = loc.interests.filter(i => i !== value);
        if (!loc.interests.length) {
          this.locations = this.locations.slice(idx + 1);
        }
      }
    });
  }
}
