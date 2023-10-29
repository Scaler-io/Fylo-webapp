import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarlyAccessComponent } from './early-access.component';
import { ButtonModule } from 'src/app/shared/button/button.module';

@NgModule({
  declarations: [EarlyAccessComponent],
  imports: [CommonModule, ButtonModule],
  exports: [EarlyAccessComponent],
})
export class EarlyAccessModule {}
