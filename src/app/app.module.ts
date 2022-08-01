import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { topPaginationModule } from './topPagination/topPagination.module';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { pageIslandModule } from './page-island/pageIsland.module';
import { mainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    topPaginationModule,
    mainModule,
    pageIslandModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
