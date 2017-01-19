import { Component, OnInit } from '@angular/core';
import {TabModel} from "../../../ng2-responsive-tabbar/models/tab.model";
import {TabFactory} from "../../../ng2-responsive-tabbar/models/tab.factory";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit {

  tabs: TabModel[] = [];

  constructor() { }

  ngOnInit() {

     let ipsum:string[] = "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat".split(" ");
     let tabFactory = new TabFactory();

     for (let title of ipsum){
       let tab = tabFactory.createFromConfig({
         title: this.capitalizeFirstLetter(title)
       });
       this.tabs.push(tab);
     }

  }

  private capitalizeFirstLetter(string):string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



}
