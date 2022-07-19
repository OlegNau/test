import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiBadgeModule,
  TuiFieldErrorPipeModule,
  TuiInputFilesModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiStepperModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    FormsModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiInputFilesModule,
    TuiStepperModule,
    TuiBadgeModule,
    TuiIslandModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
  ],
  exports: [mainComponent],
  declarations: [mainComponent],
})
export class mainModule {}
