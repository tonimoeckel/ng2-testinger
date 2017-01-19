import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragulaModule} from "ng2-dragula";
import { DragComponent } from './components/drag/drag.component';
import {DRAG_STATES} from "./drag.states";
import {UIRouterModule} from "ui-router-ng2/src/ng2";
import {SharedModule} from "../shared.module";


@NgModule({
  imports: [
    UIRouterModule.forChild({ states: DRAG_STATES }),
    SharedModule,
    DragulaModule
  ],
  declarations: [DragComponent]
})
export class DragModule { }
