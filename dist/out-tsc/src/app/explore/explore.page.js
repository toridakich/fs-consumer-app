import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, toastCtrl, propertyService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.propertyService = propertyService;
        // const user = this.userService.getLoggedInUser();
        // if (user) {
        //   this.presentToast((user.name + ' ' + user.lastName));
        // } else {
        //   this.navCtrl.navigateForward('home');
        // }
    }
    ExplorePage.prototype.presentToast = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Welcome ' + name + '!',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExplorePage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    ExplorePage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    ExplorePage.prototype.navToInbox = function () {
        this.navCtrl.navigateForward("inbox");
    };
    ExplorePage.prototype.navToTrips = function () {
        this.navCtrl.navigateForward("trips");
    };
    ExplorePage.prototype.ngOnInit = function () {
        var _this = this;
        this.propertyService.getListItems().then(function (res) {
            console.log(res);
            _this.properties = res;
        }).catch(function (err) {
            console.log(err);
        });
    };
    ExplorePage.prototype.viewProperty = function (property) {
        localStorage.setItem("id", property.id);
        this.navCtrl.navigateForward('property-info', {
            queryParams: { property: property.id }
        });
    };
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: './explore.page.html',
            styleUrls: ['./explore.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ToastController,
            PropertyService])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map