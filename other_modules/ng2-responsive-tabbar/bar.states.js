"use strict";
var bar_component_1 = require("./components/tabbar/bar.component");
/**
 * This file defines the states for the `foo` module.
 * The states are exported as an array and imported in the FooModule.
 */
exports.BAR_STATES = [
    // A state for the 'app.foo' submodule,
    // It fills the unnamed <ui-view> ($default) (in the AppComponent from the `app` state) with `FooComponent`
    {
        name: 'app.bar',
        url: '/bar',
        views: {
            $default: { component: bar_component_1.BarComponent }
        }
    }
];
//# sourceMappingURL=bar.states.js.map