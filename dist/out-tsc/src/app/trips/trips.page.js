import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var TripsPage = /** @class */ (function () {
    function TripsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TripsPage.prototype.ngOnInit = function () {
    };
    TripsPage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("explore");
    };
    TripsPage = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: './trips.page.html',
            styleUrls: ['./trips.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], TripsPage);
    return TripsPage;
}());
export { TripsPage };
//# sourceMappingURL=trips.page.js.map