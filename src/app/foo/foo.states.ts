import {FooComponent} from "./foo.component";
import {Nest1Component} from "./nest1.component";
import {Nest2Component} from "./nest2.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2/src/ng2";
import {FooFooterComponent} from "./fooFooter.component";
/**
 * This file defines the states for the `foo` module.
 * The states are exported as an array and imported in the FooModule.
 */

export function resolveTest(trans){
  return {foo: 'bar'};
}

export let FOO_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.foo' submodule,
  // It fills the unnamed <ui-view> ($default) (in the AppComponent from the `app` state) with `FooComponent`
  {
    name: 'app.foo',
    url: '/foo',
    views: {
      $default: {component: FooComponent},
      footer: {component: FooFooterComponent}
    },
    resolve: [
      {
        token: 'test',
        deps: [Transition],
        resolveFn: resolveTest
      }
    ]
  },

  // A child state of app.foo; it fills the <ui-view> in app.foo with Nest1Component
  {
    name: 'app.foo.nest1',
    url: '/nest1',
    component: Nest1Component
  },

  // A child state of app.foo; it fills the <ui-view> in app.foo with Nest2Component
  {
    name: 'app.foo.nest2',
    url: '/nest2',
    component: Nest2Component
  }
];
