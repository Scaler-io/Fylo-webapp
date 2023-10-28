import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ButtonModule } from 'src/app/shared/button/button.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, ButtonModule],
  exports: [HeroComponent],
})
export class HeroModule {}
