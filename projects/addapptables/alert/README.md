# ADDAPPTABLES alert

[See demo](http://addapptables.com/admin/components/modals-alerts)

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/alert --S
```

Install peer dependencies

```
npm i
@addapptables/perfect-scrollbar
@ngx-translate/core
@angular/material
@angular/cdk
@angular/animations --S
```

## Configuration

Configure @ngx-translate/core see [link](https://github.com/ngx-translate/core)

## How to use

```typescript
import { AlertModule } from '@addapptables/alert';
@NgModule({
  imports: [AlertModule.forRoot()]
})
export class AppModule { }
```

```typescript
@Component()
export class AlertComponent {

  constructor(private _alertService: AlertService) { }

  openDialog() {
    this._alertService.showSimple('Alert', 'Simple alert');
    // this._alertService.showSuccess('Success', 'Saved successfully');
    // this._alertService.showWarning('Warn', 'Warning');
    // this._alertService.showInfo('Info', 'Information');
    // this._alertService.showError('Error', 'Error');
  }

  openDialodgConfirmation(){
    const dialog = this._alertService.showConfirmation('Confirmation', 'Are you sure delete alert?');
    dialog.beforeClose().subscribe((result) => {
      if (!result) { return; }
      switch (result.result) {
        case 'ok':
          console.log('ok');
          break;
        case 'cancel':
          console.log('cancel');
          break;
      }
    });
  }
}
```

```html
    <button type="button" mat-raised-button color="primary" (click)="openDialog()">Alert warning</button>
```

```scss
@import '~@addapptables/alert/_addapptables-alert.theme.scss';

$addapptable-theme-variables: (
    color-blue: #20a9d2,
    color-success: #5cb85c,
    color-danger: #d43934,
    color-warning: #e09d3d
);

body.theme-default {
    @include addapptable-alert($addapptable-theme-variables);
}
```