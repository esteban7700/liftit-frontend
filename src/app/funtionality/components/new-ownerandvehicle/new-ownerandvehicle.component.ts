import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../../../general/components/modal/modal.component';
import { FormNewOwnerAndVehicleComponent } from '../form-new-ownerandvehicle/form-new-ownerandvehicle.component';

@Component({
  selector: 'app-new-ownerandvehicle',
  templateUrl: './new-ownerandvehicle.component.html',
  styleUrls: ['./new-ownerandvehicle.component.css']
})
export class NewOwnerAndVehicleComponent implements OnInit {

  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  @ViewChild(FormNewOwnerAndVehicleComponent) formNewOwnerAndVehicleComponent: FormNewOwnerAndVehicleComponent;
  @Output() saveEventModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  saveOwnerAndVehicle() {
    this.formNewOwnerAndVehicleComponent.saveInDB().subscribe(
      response => {
        this.saveEventModal.emit(true);
      },
      error => {
        this.saveEventModal.emit(false);
      }
    );
  }


}
