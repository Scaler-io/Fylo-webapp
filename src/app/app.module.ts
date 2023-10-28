import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.state';
import { SharedEffects } from './state/shared/shared.effect';
import { HeroModule } from './feature/hero/hero.module';
import { FyloFeatureModule } from './feature/fylo-feature/fylo-feature.module';
import { ProductiveFeatureModule } from './feature/productive-feature/productive-feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HeroModule,
    FyloFeatureModule,
    ProductiveFeatureModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    EffectsModule.forRoot([SharedEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
