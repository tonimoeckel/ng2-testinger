import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlTabsComponent } from './components/owl-tabs/owl-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OwlTabsComponent],
  exports: [OwlTabsComponent]
})
export class Ng2OwlTabsModule { }
