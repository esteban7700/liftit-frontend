import { Component, OnInit, ViewChild } from '@angular/core';
import { Owner } from '../../../general/components/types';
import { ContentComponent } from '../../../funtionality/components/content/content.component';
import { SearchComponent } from '../../../funtionality/components/search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ContentComponent) contentComponent: ContentComponent;
  @ViewChild(SearchComponent) searchComponent: SearchComponent;

  constructor() { }

  ngOnInit() {
  }

  changeListOwners(newList: Owner[]) {
    this.contentComponent.setOwners(newList);
  }
}
