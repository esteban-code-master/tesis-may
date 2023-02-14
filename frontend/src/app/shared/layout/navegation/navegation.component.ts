import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import NavegationRegister from './navegation.register.json'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})

export class NavegationComponent {

	protected navegation_register

  	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  	constructor(
		private breakpointObserver: BreakpointObserver,
		private __cookies: CookieService,
		private __route: Router
	) {
		this.navegation_register = NavegationRegister
	}

	close_session(){
		this.__cookies.deleteAll()
		this.__route.navigate(['/login'])
	}

}
