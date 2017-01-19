import {TranslateModule} from "ng2-translate";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
