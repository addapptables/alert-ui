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
  imports: [AlertModule]
})
export class YourModule { }
```

```typescript
@Component()
export class AlertWarningComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddapptableDialogAlertComponent, {
      width: '478px',
      data: <AlertModel>{
        type: AlertEnum.warning,
        title: 'Warn',
        text: 'Warning'
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