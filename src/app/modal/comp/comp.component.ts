import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IMyModel } from 'src/app/dto/imymodel';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent  implements OnInit {
  myModel?: IMyModel;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.myModel = this.navParams.get('myModel');
  }

}
