import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public toastr: ToastsManager, vRef: ViewContainerRef, private localStorageService: LocalStorageService) {
    this.toastr.setRootViewContainerRef(vRef);
  }
}
