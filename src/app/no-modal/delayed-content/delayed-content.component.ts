import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delayed-content',
  templateUrl: './delayed-content.component.html',
  styleUrls: ['./delayed-content.component.scss'],
})
export class DelayedContentComponent  implements OnInit {
  @Input() public loading = false;

  constructor() { }

  ngOnInit() {}

}
