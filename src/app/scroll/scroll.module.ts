import {UIRouterModule} from "ui-router-ng2/src/ng2";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared.module";
import { ScrollComponent } from './components/scroll/scroll.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {SCROLL_STATES} from "./scroll.states";

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: SCROLL_STATES }),
    InfiniteScrollModule,
    SharedModule
  ],
  declarations: [ScrollComponent]
})
export class ScrollModule { }
