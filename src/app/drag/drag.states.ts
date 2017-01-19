import {Ng2StateDeclaration} from "ui-router-ng2/src/ng2";
import {DragComponent} from "./components/drag/drag.component";
/**
 * This file defines the states for the `foo` module.
 * The states are exported as an array and imported in the FooModule.
 */
export let DRAG_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.foo' submodule,
  // It fills the unnamed <ui-view> ($default) (in the AppComponent from the `app` state) with `FooComponent`
  {
    name: 'app.drag',
    url: '/drag',
    views: {
      $default: {component: DragComponent},
    }
  }

];
