import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, navCtrl, userService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.user = new User();
        // this.users = userService.users;
    }
    HomePage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("explore");
    };
    HomePage.prototype.login = function () {
        var _this = this;
        //  let authUser = new User(); 
        // -- I would do this (add user model)
        var authUser = {
            id: this.id,
            email: this.email,
            password: this.password
        };
        this.userService.userLogIn(authUser).then(function (user) {
            localStorage.setItem('userId', authUser.id);
            _this.navCtrl.navigateForward('explore');
        }).catch(function (err) {
            console.log(err);
            _this.presentAlert(err);
        });
    };
    HomePage.prototype.register = function () {
        //alert("Feature coming soon!")
        // This should navigate to the register page:
        this.navCtrl.navigateForward("registration");
    };
    HomePage.prototype.presentAlert = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Failed to login',
                            message: err,
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
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            NavController,
            UserService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map