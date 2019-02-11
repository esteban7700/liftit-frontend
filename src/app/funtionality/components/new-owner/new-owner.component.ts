import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../../general/components/modal/modal.component';
import { FormNewOwnerComponent } from '../form-new-owner/form-new-owner.component';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.css']
})
export class NewOwnerComponent implements OnInit {

  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  @ViewChild(FormNewOwnerComponent) formNewOwnerComponent: FormNewOwnerComponent;
  @Output() saveEventModal = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  saveOwner() {
    this.formNewOwnerComponent.saveInDB().subscribe(
      response => {
        this.saveEventModal.emit(true);
      },
      error => {
        this.saveEventModal.emit(false);
      }
    );
  }
}
