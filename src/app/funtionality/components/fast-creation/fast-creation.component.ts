import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewOwnerAndVehicleComponent } from '../new-ownerandvehicle/new-ownerandvehicle.component';

@Component({
  selector: 'app-fast-creation',
  templateUrl: './fast-creation.component.html',
  styleUrls: ['./fast-creation.component.css']
})
export class FastCreationComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  addVehicleAndOwner() {
    const modalRef = this.modalService.open(NewOwnerAndVehicleComponent);
    modalRef.componentInstance.saveEventModal.subscribe(
      response => {
        if (response) {
          modalRef.close();
        } else {
          modalRef.componentInstance.formNewOwnerAndVehicleComponent.cannotSave = true;
        }
      }
    );
  }
}
