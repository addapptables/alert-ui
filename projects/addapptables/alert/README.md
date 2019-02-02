# ADDAPPTABLES alert

ADAPTABLES alert is a library for angular

[See demo](http://addapptables.com/admin/components/modals-alerts)

## Getting Started
To get started, let's install the package through npm:

```
npm i @addapptables/alert --S
```

Install peer dependencies

```
npm i
@addapptables/core
@ngx-translate/core
@angular/material
@angular/cdk
@angular/animations --S
```

## Configuration

- First, you have to configure the library @ngx-translate/core to have the translation into the alert

The library is configured as follows:

```typescript
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ]
})
export class AppModule { }
```

## How to use

- Import the module AlertModule into the AppModule

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

- Finaly, it is important to import the styles to the application

```scss
@import '~@addapptables/alert/addapptables-alert.theme';

$addapptable-theme-variables: (
    color-info: #20a9d2,
    color-success: #5cb85c,
    color-danger: #d43934,
    color-warning: #e09d3d
);

body.theme-default {
    @include addapptable-alert($addapptable-theme-variables);
}
```

- Do not forget to put the theme-default class in the html body

```html
<body class="theme-default"></body>
```