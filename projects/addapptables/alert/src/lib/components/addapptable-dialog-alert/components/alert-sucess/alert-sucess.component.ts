import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'addapptable-alert-sucess',
  templateUrl: './alert-sucess.component.html',
  styleUrls: ['./alert-sucess.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'alert-icon alert-icon-success'
  }
})
export class AlertSucessComponent { }
