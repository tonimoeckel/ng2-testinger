import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions} from '@angular/http';
import { InterceptorService } from 'ng2-interceptors';
import { UIRouterModule } from 'ui-router-ng2/src/ng2';
import { AppComponent } from './app.component';
import {FooModule} from "./foo/foo.module";
import {MyRootUIRouterConfig} from "./router.config";
import {MainComponent} from "./main.component";
import {MAIN_STATES} from "./app.states";
import {CommonModule} from "@angular/common";
import {DragModule} from "./drag/drag.module";
import {UploadModule} from "./upload/upload.module";
import {ToastModule} from "ng2-toastr";
import {TranslateModule} from "ng2-translate";
import {SharedModule} from "./shared.module";
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {ScrollModule} from "./scroll/scroll.module";
import { LocalStorageModule } from 'angular-2-local-storage';
import {BarModule} from "./bar/bar.module";
import { DropdownModule } from 'ng2-bootstrap/dropdown';


export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
  let service = new InterceptorService(xhrBackend, requestOptions);
  // Add interceptors here with service.addInterceptor(interceptor)
  return service;
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app', params: {} },
     configClass: MyRootUIRouterConfig
    }),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    TranslateModule.forRoot(),
    DropdownModule.forRoot(),
    SharedModule,
    BrowserModule,
    CommonModule,
    ToastModule,
    HttpModule,
    FooModule,
    BarModule,
    DragModule,
    UploadModule,
    ScrollModule
  ],
  providers: [
    { provide: MyRootUIRouterConfig, useClass: MyRootUIRouterConfig },
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
