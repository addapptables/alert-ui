import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertModel } from '../models/alert.model';
import { AlertEnum } from '../models/alert-enum.model';
import { AddapptableDialogAlertComponent } from '../components/addapptable-dialog-alert/addapptable-dialog-alert.component';

@Injectable()
export class AlertService {

  constructor(private _dialog: MatDialog) { }

  showSimple(title: string, message: string) {
    return this._open(<AlertModel>{
      title: title,
      text: message
    });
  }

  showSuccess(title: string, message: string) {
    return this._open({
      title: title,
      text: message,
      type: AlertEnum.success
    });
  }

  showError(title: string, message: string) {
    return this._open({
      title: title,
      text: message,
      type: AlertEnum.error
    });
  }

  showInfo(title: string, message: string) {
    return this._open({
      title: title,
      text: message,
      type: AlertEnum.info
    });
  }

  showWarning(title: string, message: string) {
    return this._open({
      title: title,
      text: message,
      type: AlertEnum.warning
    });
  }

  showConfirmation(title: string, message: string) {
    return this._open({
      title: title,
      text: message,
      type: AlertEnum.warning,
      showCancelButton: true
    });
  }

  private _open(alertModel: AlertModel) {
    return this._dialog.open(AddapptableDialogAlertComponent, {
      width: '500px',
      data: alertModel
    });
  }
}
