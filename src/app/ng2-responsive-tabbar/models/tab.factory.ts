import {TabModel} from "./tab.model";
export class TabFactory {

  constructor() {

  }

  public createFromConfig(config:TabConfig): TabModel{

    let tab = new TabModel();
    for (let key of Object.keys(config)){
      tab[key] = config[key];
    }

    if (!tab.id){
      tab.id = config.title;
    }
    return tab;

  }

}

export interface TabConfig {
  title: string;
  href?: string;
  uiSRef?: string;
  uiParams?: any;
  callback?: Function;
  iconClass?: string;
  cssClass?: string;
}
