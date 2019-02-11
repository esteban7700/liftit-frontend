import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Apollo } from '../../../../../node_modules/apollo-angular';
import { mutationVehicleAndOwner, queryOwners, queryBrands } from '../../../general/components/querys';

@Component({
  selector: 'app-form-new-ownerandvehicle',
  templateUrl: './form-new-ownerandvehicle.component.html',
  styleUrls: ['./form-new-ownerandvehicle.component.css']
})
export class FormNewOwnerAndVehicleComponent implements OnInit {
  private newName: string;
  private newCedula: string;
  private newPlaca: string;
  private newMarca: string;
  private newTipo: string;
  private cannotSave: boolean;
  @Output() saveEvent = new EventEmitter<void>();
  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  canShowSave() {
    return this.newName != null && this.newCedula != null && this.newName !== undefined
      && this.newCedula !== undefined && this.newName.trim() !== '' && this.newPlaca != null 
      && this.newMarca != null &&  this.newTipo != null
      && this.newPlaca !== undefined && this.newMarca !== undefined && this.newTipo !== undefined
      && this.newPlaca.trim() !== '' && this.newMarca.trim() !== '' && this.newTipo.trim() !== '';
  }

  addOwnerAndVehicle() {
    this.newName.trim(); this.newPlaca.trim(); this.newMarca.trim(); this.newTipo.trim();
    this.cannotSave = false;
    this.saveEvent.emit();
  }

  saveInDB() {
    return this.apollo.mutate({
      mutation: mutationVehicleAndOwner,
      variables: {
        placa: this.newPlaca,
        marca: this.newMarca,
        tipo: this.newTipo,
        cedula: this.newCedula,
        nombre: this.newName
      }, refetchQueries: [{query: queryOwners}, {query: queryBrands}]
    });
  }
}
