import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {


  photos: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(fotosDoServidor => {
      this.filter = '';
      //this.photos.push(...this.photos); //Os ... seria o mesmo de um FOR, ele pega todos os itens de photos e adiciona no push
      this.photos = this.photos.concat(fotosDoServidor);

      console.log(fotosDoServidor.length);
    if (fotosDoServidor.length == 0) {
      this.hasMore = false;
    }
    });
  }

}
