import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {


  photos: Photo[] = [];
  filter: string = 'Dado inicial';
  debounce: Subject<string> = new Subject<string>();

  constructor(
    // private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // const userName = this.activatedRoute.snapshot.params.userName;

    // this.photoService
    // .listFromUser(userName)
    // .subscribe(photos => this.photos = photos);

    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);

  }

  //É chamado toda vez que um objeto é destruido
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
