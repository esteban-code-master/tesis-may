import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { PagesModule } from './pages/pages.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtIntercetor } from './interceptor/jwtIntercetor.interceptor'


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		PagesModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtIntercetor,
			multi: true
		}
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
