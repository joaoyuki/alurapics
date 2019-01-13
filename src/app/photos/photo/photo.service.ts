import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor (private http: HttpClient) {

  }

  listFromUser(userName: String) {

    return this.http
    .get<Photo[]>(API + '/' + userName + '/photos');

  }

  listFromUserPaginated(userName: string, page: number) {
    console.log('listFromUser');
    const parametros = new HttpParams()
      .append('page', page.toString());
    return this.http
      .get<Photo[]>(API + '/' + userName + '/photos', { params: parametros });
    }

}
