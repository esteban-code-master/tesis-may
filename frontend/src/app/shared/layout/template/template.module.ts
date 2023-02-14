import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavegationComponent } from '../navegation/navegation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'

import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';

import { MenuRoleDirective } from 'src/app/directives/menu-role/menu-role.directive';

@NgModule({
	declarations: [
		NavegationComponent,
		TemplateComponent,
		MenuRoleDirective
	],
	imports: [
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		RouterModule

	]
})
export class TemplateModule { }
