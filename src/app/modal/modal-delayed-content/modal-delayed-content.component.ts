import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delayed-content',
  templateUrl: './modal-delayed-content.component.html',
  styleUrls: ['./modal-delayed-content.component.scss'],
})
export class ModalDelayedContentComponent implements OnInit {
  @Input() public loading = false;

  constructor() { }

  ngOnInit() {}

}
