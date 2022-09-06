import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';


@Injectable()
export class InterceptInterceptor implements HttpInterceptor {


  constructor(private authservice:AuthserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //add jwt token from localstotage to every request
    let authreq=request;
    const token=this.authservice.gettoken();
    if(token!=null)
    {
      authreq=authreq.clone({setHeaders:{Authorization: `Bearer ${token}`},
    });
    }
    return next.handle(authreq);
  }
}


export const authInterceptorProvider=[
{
  provide:HTTP_INTERCEPTORS,
  useClass:InterceptInterceptor,
  multi: true,
  
}];