import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './general/components/footer/footer.component';
import { HeaderComponent } from './general/components/header/header.component';
import { HomeComponent } from './general/components/home/home.component';
import { SearchComponent } from './funtionality/components/search/search.component';
import { ContentComponent } from './funtionality/components/content/content.component';
import { BrandComponent } from './funtionality/components/brand/brand.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './general/components/modal/modal.component';
import { NewOwnerComponent } from './funtionality/components/new-owner/new-owner.component';
import { FormNewOwnerComponent } from './funtionality/components/form-new-owner/form-new-owner.component';
import { NewVehicleComponent } from './funtionality/components/new-vehicle/new-vehicle.component';
import { FormNewVehicleComponent } from './funtionality/components/form-new-vehicle/form-new-vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { FastCreationComponent } from './funtionality/components/fast-creation/fast-creation.component';
import { NewOwnerAndVehicleComponent } from './funtionality/components/new-ownerandvehicle/new-ownerandvehicle.component';
import { FormNewOwnerAndVehicleComponent} from './funtionality/components/form-new-ownerandvehicle/form-new-ownerandvehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ContentComponent,
    BrandComponent,
    ModalComponent,
    NewOwnerComponent,
    FormNewOwnerComponent,
    NewVehicleComponent,
    FormNewVehicleComponent,
    FastCreationComponent,
    NewOwnerAndVehicleComponent,
    FormNewOwnerAndVehicleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [NewOwnerComponent, NewVehicleComponent, NewOwnerAndVehicleComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://liftit-backend.herokuapp.com/graphql' }),
      cache: new InMemoryCache()
    });
  }
}
