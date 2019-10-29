import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null);
  }
}

const routes: Routes = [{
  path: 'stock-inventory',
  data: { preload: true },
  loadChildren: () => import('./stock-inventory/stock-inventory.module').then(m => m.StockInventoryModule)
}];

@NgModule({
  providers: [ CustomPreload ],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreload
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
