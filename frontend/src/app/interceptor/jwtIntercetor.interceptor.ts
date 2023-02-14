import { Injectable } from '@angular/core'
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http'

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Injectable()
export class JwtIntercetor implements HttpInterceptor {

	constructor(private __cookies: CookieService, private __router: Router) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const token: string = this.__cookies.get('token')
		let req: any = request

		if(token){

			req = request.clone({
				setHeaders: {
				  	authorization: `Bearer ${ token }`
				}
			})
		}

		return next.handle(req)
	}
}
