import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewOwnerComponent } from '../new-owner/new-owner.component';
import { NewVehicleComponent } from '../new-vehicle/new-vehicle.component';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Brand, Brands } from '../../../general/components/types';
import { queryBrands } from '../../../general/components/querys';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  private brands: Brand[];
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getListBrands();
  }

  getListBrands() {
    this.apollo.watchQuery<Brands>({
      query: queryBrands
    }).valueChanges
      .pipe(
        map(result => result.data.brands)
    ).subscribe(
      response => {
        this.brands = response;
      }
    );
  }

}
