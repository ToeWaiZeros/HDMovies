import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadvideosComponent } from './loadvideos/loadvideos';
@NgModule({
	declarations: [LoadvideosComponent],
	imports: [],
	exports: [LoadvideosComponent],
	schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
