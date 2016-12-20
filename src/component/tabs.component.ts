import {
  Directive,
  Inject,
  EventEmitter,
  Output,
  Component,
  forwardRef,
  Host,
  Attribute,
  ContentChildren,
  QueryList
} from '@angular/core';

@Component({
  selector: 'tab-content',
  styles: [`
    .tab-content {
      border: 1px solid #ccc;
      border-top: none;
      padding: 5px;
    }
  `],
  template: `
    <div class="tab-content" [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class TabContent {
  isActive: boolean = false;
}

@Component({
  selector: 'tab-title',
  styles: [`
    .tab-title {
      display: inline-block;
      cursor: pointer;
      padding: 5px;
      border: 1px solid #ccc;
    }
    .tab-title.active{
      background-color:#ffff00;
    }
  `],
  template: `
    <div class="tab-title" (click)="handleClick()" [class.active]='isActive'>
      <ng-content></ng-content>
    </div>
  `
})
export class TabTitle {
  @Output('selected')
  tabSelected: EventEmitter<TabTitle> = new EventEmitter<TabTitle>();
  isActive: boolean = false;
  handleClick() {
    this.tabSelected.emit(this);
  }
}

@Component({
  selector: 'tabs',
  styles: [
    `
      .tab {
        display: block;
      }
      .tab-nav {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    `
  ],
  template: `
    <div class="tab">
      <div class="tab-nav">
        <ng-content select="tab-title"></ng-content>
      </div>
      <ng-content select="tab-content"></ng-content>
    </div>
  `
})
export class Tabs {
  @Output('changed')
  tabChanged: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(TabTitle)
  tabTitles: QueryList<TabTitle>;

  @ContentChildren(TabContent)
  tabContents: QueryList<TabContent>;

  active: number;

  select(index: number) {
    let contents: TabContent[] = this.tabContents.toArray();
    let titles: TabTitle[] = this.tabTitles.toArray();
    contents[this.active].isActive = false;
    titles[this.active].isActive = false;
    this.active = index;
    contents[this.active].isActive = true;
    titles[this.active].isActive = true;
    this.tabChanged.emit(index);
  }
  ngAfterContentInit() {
    this.tabTitles
      .map(t => t.tabSelected)
      .forEach((t, i) => {
        t.subscribe(_ => {
          this.select(i)
        });
      });
    this.active = 0;
    this.select(0);
  }
}

