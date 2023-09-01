import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelayedContentComponent } from './delayed-content/delayed-content.component';
import { NoModalCompComponent } from './no-modal-comp/no-modal-comp.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DelayedContentComponent, NoModalCompComponent],
  imports: [
    CommonModule, IonicModule
  ], exports: [
    DelayedContentComponent, NoModalCompComponent
  ]
})
export class NoModalModule { }
