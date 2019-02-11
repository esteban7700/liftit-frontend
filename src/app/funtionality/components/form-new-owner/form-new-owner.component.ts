import { Component, OnInit, EventEmitter } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { mutationOwner, queryOwners, } from '../../../general/components/querys';
import { Output } from '../../../../../node_modules/@angular/core';

@Component({
  selector: 'app-form-new-owner',
  templateUrl: './form-new-owner.component.html',
  styleUrls: ['./form-new-owner.component.css']
})
export class FormNewOwnerComponent implements OnInit {

   newName: string;
   newCedula: string;
  @Output() saveEvent = new EventEmitter<void>();
   cannotSave: boolean;

  constructor(public apollo: Apollo) {
  }

  ngOnInit() {
  }

  addOwner() {
    this.newName.trim();
    this.cannotSave = false;
    this.saveEvent.emit();
  }

  canShowSave() {
    return this.newName != null && this.newCedula != null && this.newName !== undefined
      && this.newCedula !== undefined && this.newName.trim() !== '';
  }

  saveInDB() {
    return this.apollo.mutate({
      mutation: mutationOwner,
      variables: {
        cedula: this.newCedula,
        nombre: this.newName
      },
      refetchQueries: [{ query: queryOwners }]
    });
  }
}

