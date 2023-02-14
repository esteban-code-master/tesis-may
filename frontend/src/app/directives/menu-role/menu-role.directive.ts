import { Directive, HostListener, Renderer2, ElementRef,TemplateRef, ViewContainerRef, OnInit,Input } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

@Directive({
  	selector: '[appRole]'
})

export class MenuRoleDirective implements OnInit {

	private role_current!: number
	private permission !: Array<number>

 	constructor(
		private __templateRef: TemplateRef<any>,
		private __viewContainer: ViewContainerRef,
		private __cookies: CookieService
	) { }


	ngOnInit() {

		const token = this.__cookies.get('token')
		const payload = token.split('.')[1]
		const values = atob(payload)
		const decode_token = JSON.parse(values)
		this.role_current = decode_token.role
		this.updateView()
	}


	@Input()
	set appRole(value: Array<number>){
		this.permission =  value
		this.updateView()
	}


	private updateView(){
		this.__viewContainer.clear()

		if(this.check_permission()){
			this.__viewContainer.createEmbeddedView(this.__templateRef)
		}
	}

	private check_permission(): boolean{

		if(this.role_current && this.permission){
			return this.permission.includes(this.role_current)
		}

		return true
	}
}
