import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ExampleComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExampleModule { }
