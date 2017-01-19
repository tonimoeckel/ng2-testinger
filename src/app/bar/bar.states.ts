import {Ng2StateDeclaration} from "ui-router-ng2/src/ng2";
import {BarComponent} from "./components/bar/bar.component";
/**
 * This file defines the states for the `foo` module.
 * The states are exported as an array and imported in the FooModule.
 */
export let BAR_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.foo' submodule,
  // It fills the unnamed <ui-view> ($default) (in the AppComponent from the `app` state) with `FooComponent`
  {
    name: 'app.bar',
    url: '/bar',
    views: {
      $default: {component: BarComponent},
    }
  }

];
