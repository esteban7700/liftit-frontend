import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Owner, Owners } from '../../../general/components/types';
import { queryOwners } from '../../../general/components/querys';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   paramsSearch: any;
   selectedSearch: string;
   stringSearch: string;
   owners: Owner[];
  @Output() searchEvent = new EventEmitter<Owner[]>();

  constructor( public apollo: Apollo) {
    this.paramsSearch = ['Placa del vehículo', 'Cedúla del propietario', 'Nombre del propietario'];
    this.selectedSearch = 'Seleccione';
  }

  ngOnInit() {
    this.getListOwners();
  }

  getListOwners() {
    this.apollo.watchQuery<Owners>({
      query: queryOwners
    }).valueChanges
      .pipe(
        map(result => result.data.owners)
      ).subscribe(
        response => {
          this.owners = response;
        }
      );
  }

  resetString() {
    this.stringSearch = '';
    this.searchEvent.emit(this.owners);
  }

  doSearch() {
    if (this.stringSearch !== '') {
      let newList;
      if (this.selectedSearch === this.paramsSearch[0]) {
        newList = _.filter(this.owners, (owner) => _.includes(owner.vehicles,
          _.find(owner.vehicles, (vehicle) => vehicle.placa.toLowerCase().startsWith(this.stringSearch.toLocaleLowerCase()))));
      } else if (this.selectedSearch === this.paramsSearch[1]) {
        newList = _.filter(this.owners, (owner) => owner.cedula.startsWith(this.stringSearch));
      } else if (this.selectedSearch === this.paramsSearch[2]) {
        newList = _.filter(this.owners, (owner) => owner.nombre.toLowerCase().startsWith(this.stringSearch.toLowerCase()));
      } else {
        newList = this.owners;
      }
      this.searchEvent.emit(newList);
    } else {
      this.searchEvent.emit(this.owners);
    }
  }
}
