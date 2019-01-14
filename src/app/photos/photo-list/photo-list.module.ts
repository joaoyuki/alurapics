import { DarkingOnHoverModule } from './../../shared/components/directives/darkOnHover/darking-on-hover.module';
import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkingOnHoverModule
  ]
})
export class PhotoListModel {

}
