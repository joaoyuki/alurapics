import { Photo } from './../../photo/photo';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  //Recebe as mudanças das inbound properties (@Input()) do componente
  ngOnChanges(changes: SimpleChanges) {

    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }

  }

  groupColumns(phothos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < phothos.length; index += 3 ) {
      newRows.push(phothos.slice(index, index + 3));
    }

    return newRows;
  }

}
