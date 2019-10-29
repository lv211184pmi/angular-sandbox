import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory-component/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';
import { StockInventoryRoutingModule } from './stock-inventory-routing.module';


@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockSelectorComponent,
        StockProductsComponent,
        StockCounterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StockInventoryRoutingModule
    ],
    exports: [StockInventoryComponent]
})

export class StockInventoryModule {}
