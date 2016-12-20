import {Component, Directive, ViewChildren, ContentChildren, QueryList} from '@angular/core';

@Component({
  selector: 'user-badge',
  template: '<h2>View child</h2>'
})
export class UserBadge {}

@Component({
  selector: 'user-rating',
  template: '<h2>Content child</h2>'
})
export class UserRating {}

@Component({
  selector: 'user-panel',
  template: '<user-badge></user-badge>',
})
export class UserPanel {
  @ViewChildren(UserBadge)
  viewChildren: QueryList<UserBadge>;

  @ContentChildren(UserRating)
  contentChildren: QueryList<UserRating>;

  ngAfterViewInit() {
    // view children are initialized
    console.log('view children are initialized');
  }

  ngAfterContentInit() {
    // content children are initialized
    console.log('content children are initialized');
  }
}