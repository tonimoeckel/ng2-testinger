import {Component} from '@angular/core';

/**
 * The top level application component.
 *
 * This component renders three uiSref "links" and has a viewport for a child to fill in.
 */

let template = `
<h1>My App</h1>
<a uiSref="app.foo" [uiOptions]="{ inherit: false }" uiSrefActive="active">Foo</a>
<a uiSref="app.drag" [uiOptions]="{ inherit: false }" uiSrefActive="active">Drag</a>
<a uiSref="app.upload" [uiOptions]="{ inherit: false }" uiSrefActive="active">Upload</a>
<a uiSref="app.scroll" [uiOptions]="{ inherit: false }" uiSrefActive="active">Scroll</a>
<ui-view></ui-view>
<ui-view name="footer"></ui-view>
`;

@Component({
  selector: 'main',
  template: template
})
export class MainComponent { }
