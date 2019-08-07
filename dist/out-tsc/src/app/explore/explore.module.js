import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExplorePage } from './explore.page';
var routes = [
    {
        path: '',
        component: ExplorePage
    }
];
var ExplorePageModule = /** @class */ (function () {
    function ExplorePageModule() {
    }
    ExplorePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ExplorePage]
        })
    ], ExplorePageModule);
    return ExplorePageModule;
}());
export { ExplorePageModule };
//# sourceMappingURL=explore.module.js.map