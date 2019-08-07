import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PropertyInfoPage } from './property-info.page';
var routes = [
    {
        path: '',
        component: PropertyInfoPage
    }
];
var PropertyInfoPageModule = /** @class */ (function () {
    function PropertyInfoPageModule() {
    }
    PropertyInfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PropertyInfoPage]
        })
    ], PropertyInfoPageModule);
    return PropertyInfoPageModule;
}());
export { PropertyInfoPageModule };
//# sourceMappingURL=property-info.module.js.map