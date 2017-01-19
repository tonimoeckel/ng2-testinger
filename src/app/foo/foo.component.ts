import {Component} from '@angular/core';
import {DynamicFormService, DynamicFormControlModel} from "@ng2-dynamic-forms/core";
import {FOO_MODEL} from "./foo.model";
import {FormGroup} from "@angular/forms";
import {ToastsManager} from "ng2-toastr";

/**
 * This is a simple component which provides two uiSref (links) to two nested states
 * and a <ui-view> viewport for the child states to fill in
 */
let template = `
<h3>Foo Component</h3>

<a uiSref=".nest1" uiSrefActive="active">Nested state 1</a>
<a uiSref=".nest2" uiSrefActive="active">Nested state 2</a>

<ng-switch [(ngModel)]="value"></ng-switch>

<form [formGroup]="formGroup">

    <dynamic-form-bootstrap-control *ngFor="let controlModel of formModel" 
                                    [controlGroup]="formGroup"
                                    [model]="controlModel"></dynamic-form-bootstrap-control>
</form>

<ui-view></ui-view>
`;

@Component({
    selector: 'foo',
    template: template
})
export class FooComponent {

  formModel: Array<DynamicFormControlModel> = FOO_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService, public toastr: ToastsManager) {}

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.showInfo();

  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

}
