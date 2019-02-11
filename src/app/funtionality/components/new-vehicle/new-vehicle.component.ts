import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormNewVehicleComponent } from '../form-new-vehicle/form-new-vehicle.component';
import { ModalComponent } from '../../../general/components/modal/modal.component';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  @ViewChild(FormNewVehicleComponent) formNewVehicleComponent: FormNewVehicleComponent;
  @Output() saveEventModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  saveVehicle() {
    this.formNewVehicleComponent.saveInDB().subscribe(
      response => {
        this.saveEventModal.emit(true);
      },
      error => {
        this.saveEventModal.emit(false);
      }
    );
  }

}
