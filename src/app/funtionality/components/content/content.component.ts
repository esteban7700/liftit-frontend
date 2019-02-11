import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewOwnerComponent } from '../new-owner/new-owner.component';
import { NewVehicleComponent } from '../new-vehicle/new-vehicle.component';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Owner, Owners } from '../../../general/components/types';
import { queryOwners } from '../../../general/components/querys';
import * as _ from 'lodash';
import {Aigle} from 'aigle';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    owners: Owner[];
   currentOwner;

  constructor( public modalService: NgbModal, public apollo: Apollo) {
  }

  ngOnInit() {
    this.getListOwners();
  }

  selectOwner(owner) {
    this.currentOwner = owner;
  }

  addOwner() {
    const modalRef = this.modalService.open(NewOwnerComponent);
    modalRef.componentInstance.saveEventModal.subscribe(
      response => {
        if (response) {
          modalRef.close();
        } else {
          modalRef.componentInstance.formNewOwnerComponent.cannotSave = true;
        }
      }
    );
  }

  addVehicle() {
    const modalRef = this.modalService.open(NewVehicleComponent);
    modalRef.componentInstance.formNewVehicleComponent.newOwnerId = this.currentOwner.cedula;
    modalRef.componentInstance.saveEventModal.subscribe(
      async response => {
        if (response) {
          modalRef.close();
          this.currentOwner = null;
        } else {
          modalRef.componentInstance.formNewVehicleComponent.cannotSave = true;
        }
      }
    );
  }

  reset() {
    this.currentOwner = null;
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
        console.log(this.owners);
      }
    );
  }

  setOwners(newList) {
    this.owners = newList;
  }

}
