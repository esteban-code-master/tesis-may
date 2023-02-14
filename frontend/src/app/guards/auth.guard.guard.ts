import { Injectable } from '@angular/core'
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { AuthenticationService } from '../services/auth/authentication.service'

@Injectable({
  	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private __cookies: CookieService, private __auth: AuthenticationService){}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		const cookies = this.__cookies.check('token')

		if(cookies) {
			return this.check_route_roles(route)
		}

		this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
		return false
	}

	private check_route_roles(route: ActivatedRouteSnapshot){
		const token = this.__cookies.get('token')
		const payload = token.split('.')[1]
		const values = atob(payload)
		const decode_token = JSON.parse(values)
		const roles  = route.data["roles"]

		if(roles.includes(decode_token.role)){
			return true
		}

		this.router.navigate(['/question'])
		return false
	}
}
