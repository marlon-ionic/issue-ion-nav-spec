import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IMyModel } from 'src/app/dto/imymodel';

@Component({
  selector: 'app-no-modal-comp',
  templateUrl: './no-modal-comp.component.html',
  styleUrls: ['./no-modal-comp.component.scss'],
})
export class NoModalCompComponent  implements OnInit {
  myModel?: IMyModel;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.myModel = this.navParams.get('myModel');
  }

}
