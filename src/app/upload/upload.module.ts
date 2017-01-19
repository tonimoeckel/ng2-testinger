import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import {UPLOAD_STATES} from "./upload.states";
import {UIRouterModule} from "ui-router-ng2/src/ng2";
import {FileUploadModule} from "ng2-file-upload";
import {SharedModule} from "../shared.module";

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: UPLOAD_STATES }),
    FileUploadModule,
    SharedModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
