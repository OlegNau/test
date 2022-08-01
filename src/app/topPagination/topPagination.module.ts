import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { topPaginationComponent } from './topPagination.component';
import { TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  imports: [CommonModule, TuiLinkModule, TuiSvgModule],
  exports: [topPaginationComponent],
  declarations: [topPaginationComponent],
})
export class topPaginationModule {}
