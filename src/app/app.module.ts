import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tooltip } from '../directive/tooltip.directive';
import { InputBox } from '../component/inputbox.component';
import { Tabs,TabContent,TabTitle } from '../component/tabs.component';
import { UserPanel,UserBadge,UserRating } from '../component/userpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    Tooltip,
    InputBox,
    Tabs,
    TabContent,
    TabTitle,
    UserPanel,
    UserRating,
    UserBadge
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
