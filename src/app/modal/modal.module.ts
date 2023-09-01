import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';
import { ModalDelayedContentComponent } from './modal-delayed-content/modal-delayed-content.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CompComponent, ModalDelayedContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CompComponent, ModalDelayedContentComponent]
})
export class ModalModule { }
