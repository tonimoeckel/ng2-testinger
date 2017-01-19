import {TabConfig} from "./tab.factory";
export class TabModel implements TabConfig{

  id: string;
  title: string;
  href: string;
  uiSRef: string;
  uiParams: any;
  callback: Function;
  iconClass: string;
  cssClass: string;

  constructor() {



  }

}
