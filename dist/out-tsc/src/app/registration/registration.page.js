import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertController, NavController } from '@ionic/angular';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(alertCtrl, navCtrl, userService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.submit = function () {
        var _this = this;
        var newUser = {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            cellPhone: this.cellPhone,
            email: this.email,
            password: this.password,
            role: this.role
        };
        this.userService.addUser(newUser).then(function (res) {
            localStorage.setItem('userId', newUser.id);
            console.log(res);
            _this.navCtrl.navigateForward('explore', {
                queryParams: { user: res }
            });
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    RegistrationPage.prototype.presentAlert = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Failed to register',
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
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            NavController,
            UserService])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map