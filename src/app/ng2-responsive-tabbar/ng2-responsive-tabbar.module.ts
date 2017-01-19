import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  declarations: [
    TabbarComponent
  ],
  exports: [
    TabbarComponent
  ]
})
export class Ng2ResponsiveTabbarModule { }
