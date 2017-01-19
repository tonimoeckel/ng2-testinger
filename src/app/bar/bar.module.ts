import {NgModule} from "@angular/core";
import {SharedModule} from "../shared.module";
import {BarComponent} from "./components/bar/bar.component";
import {UIRouterModule} from "ui-router-ng2/src/ng2";
import {BAR_STATES} from "./bar.states";
import {Ng2ResponsiveTabbarModule} from "../ng2-responsive-tabbar/ng2-responsive-tabbar.module";
import { DropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
  imports: [
    SharedModule,
    Ng2ResponsiveTabbarModule,
    UIRouterModule.forChild({ states: BAR_STATES }),
  ],
  declarations: [BarComponent]
})
export class BarModule { }
