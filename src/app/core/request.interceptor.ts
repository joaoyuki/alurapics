import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent,
  HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token/token.service';

@Injectable()
export class RequestInterceptior implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
    ) {

  }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
   | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {


    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      req = req.clone({ //Crio um novo request, clonando o original
        setHeaders: {
          'x-access-token': token
        }
      });
    }
    return next.handle(req); //Estamos retornando o request sem alterar nada
  }

}
