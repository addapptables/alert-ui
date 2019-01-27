import { NgModule, ModuleWithProviders } from '@angular/core';
import { AddapptableDialogAlertComponent } from './components/addapptable-dialog-alert/addapptable-dialog-alert.component';
import { AlertSucessComponent } from './components/addapptable-dialog-alert/components/alert-sucess/alert-sucess.component';
import { AlertInfoComponent } from './components/addapptable-dialog-alert/components/alert-info/alert-info.component';
import { WarningComponent } from './components/addapptable-dialog-alert/components/warning/warning.component';
import { ErrorComponent } from './components/addapptable-dialog-alert/components/error/error.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { AlertOkButtonComponent } from './components/addapptable-dialog-alert/components/buttons/alert-ok-button/alert-ok-button.component';
import {
  AlertCancelButtonComponent
} from './components/addapptable-dialog-alert/components/buttons/alert-cancel-button/alert-cancel-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AddapptablePerfectScrollbarModule } from '@addapptables/perfect-scrollbar';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    AddapptablePerfectScrollbarModule,
    MatDialogModule
  ],
  declarations: [
    AddapptableDialogAlertComponent,
    AlertSucessComponent,
    AlertInfoComponent,
    WarningComponent,
    ErrorComponent,
    AlertOkButtonComponent,
    AlertCancelButtonComponent
  ],
  exports: [
    AddapptableDialogAlertComponent
  ],
  entryComponents: [
    AddapptableDialogAlertComponent,
    AlertSucessComponent,
    AlertInfoComponent,
    WarningComponent,
    ErrorComponent
  ]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertModule,
      providers: [
        AlertService
      ]
    };
  }
}
