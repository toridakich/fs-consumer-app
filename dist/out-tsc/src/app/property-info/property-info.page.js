import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { Property } from '../models/property';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
// import { runInThisContext } from 'vm';
var PropertyInfoPage = /** @class */ (function () {
    function PropertyInfoPage(alertCtrl, navCtrl, listingService, bookingService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.bookingService = bookingService;
        this.property = new Property();
        this.booking = new Booking();
        // this.listingService.getPropertyID(this.id).then(res=>{
        //   console.log("test: ")
        //   console.log(res);
        //   this.property=res;
        //   }).catch(err=>{
        //     console.log(err);
        //   })
        this.id = { 'id': localStorage.getItem('id') };
    }
    PropertyInfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.listingService.getPropertyID(this.id).then(function (res) {
            console.log("test: ");
            console.log(res);
            _this.property = res;
        }).catch(function (err) {
            console.log(err);
        });
    };
    PropertyInfoPage.prototype.back = function () {
        this.navCtrl.navigateForward('explore');
    };
    PropertyInfoPage.prototype.createBooking = function () {
        var _this = this;
        // this.user=localStorage.getItem('userid');
        this.booking = {
            dateFrom: this.start.slice(0, 10),
            dateTo: this.end.slice(0, 10),
            userId: localStorage.getItem('userid'),
            propertyId: this.property.id,
            status: "new"
        };
        this.bookingService.createBooking(this.booking).then(function (res) {
            _this.presentAlert("Booking successful!");
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    PropertyInfoPage.prototype.presentAlert = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertyInfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-property-info',
            templateUrl: './property-info.page.html',
            styleUrls: ['./property-info.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, NavController, PropertyService, BookingsService])
    ], PropertyInfoPage);
    return PropertyInfoPage;
}());
export { PropertyInfoPage };
//# sourceMappingURL=property-info.page.js.map