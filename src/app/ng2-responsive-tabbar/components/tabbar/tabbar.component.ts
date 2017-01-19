import {Component, OnInit, Input, ElementRef, AfterViewInit} from '@angular/core';
import {TabModel} from "../../models/tab.model";
declare var jQuery: any;

@Component({
  selector: 'ng2-responsive-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit, AfterViewInit {

  @Input()
  toolMargin: Number = 5;

  @Input()
  tabs: TabModel[];


  private toolWidth: Number = 0;

  constructor(private _elementRef:ElementRef) { }

  ngOnInit() {
    console.log('toolWidth ngOnInit',this.toolWidth);
  }

  ngAfterViewInit(): void {

    this.updateToolMargin();

  }

  private updateToolMargin() {

    this.toolWidth = jQuery(this._elementRef.nativeElement).find('.tabbar-tools').width();
    console.log('toolWidth updateToolMargin',this.toolWidth);

  }
}
