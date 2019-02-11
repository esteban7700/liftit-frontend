import { Component, OnInit, EventEmitter } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { mutationVehicle, queryOwners, queryBrands } from '../../../general/components/querys';
import { Output } from '../../../../../node_modules/@angular/core';

@Component({
  selector: 'app-form-new-vehicle',
  templateUrl: './form-new-vehicle.component.html',
  styleUrls: ['./form-new-vehicle.component.css']
})
export class FormNewVehicleComponent implements OnInit {

  private newPlaca: string;
  private newMarca: string;
  private newTipo: string;
  private newOwnerId: string;
  private cannotSave: boolean;
  @Output() saveEvent = new EventEmitter<boolean>();

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  canShowSave() {
    return this.newPlaca != null && this.newMarca != null &&  this.newTipo != null
    && this.newPlaca !== undefined && this.newMarca !== undefined && this.newTipo !== undefined
    && this.newPlaca.trim() !== '' && this.newMarca.trim() !== '' && this.newTipo.trim() !== '';
  }

  addVehicle() {
    this.newPlaca.trim(); this.newMarca.trim(); this.newTipo.trim();
    this.cannotSave = false;
    this.saveEvent.emit();
  }

  saveInDB() {
    return this.apollo.mutate({
      mutation: mutationVehicle,
      variables: {
        placa: this.newPlaca,
        marca: this.newMarca,
        tipo: this.newTipo,
        ownerid: this.newOwnerId
      },
      refetchQueries: [{query: queryOwners}, {query: queryBrands }]
    });
  }
}
