import {UIRouterModule} from "ui-router-ng2/src/ng2";
import {FOO_STATES} from "./foo.states";
import {NgModule} from "@angular/core";
import {FooComponent} from "./foo.component";
import {FooFooterComponent} from "./fooFooter.component";
import {Nest1Component} from "./nest1.component";
import {Nest2Component} from "./nest2.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormsBootstrapUIModule} from "@ng2-dynamic-forms/ui-bootstrap";
import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
import {CommonModule} from "@angular/common";
import { NgSwitchModule } from '../../../node_modules/ng2-switch/src/ng2-switch';
import {ToastModule} from "ng2-toastr";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared.module";

/** The Foo NgModule */
@NgModule({
  imports: [
    UIRouterModule.forChild({ states: FOO_STATES }),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    NgSwitchModule,
    ToastModule
  ],
  declarations: [
    FooComponent,
    FooFooterComponent,
    Nest1Component,
    Nest2Component,
  ]
})
export class FooModule { }
