import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
    }
    PropertyService.prototype.setProperty = function (prop) {
        console.log({ "Prop:": prop });
        this.property = prop;
    };
    PropertyService.prototype.getProperty = function () {
        return this.property;
    };
    PropertyService.prototype.getListItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.http.get('http://localhost:5000/api/property', { headers: headers })
                .subscribe(function (response) {
                //localStorage.setItem('userid', response);
                console.log(response);
                resolve(response);
            }, function (err) {
                reject("err " + err);
            });
        });
    };
    PropertyService.prototype.getPropertyID = function (propertyID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            console.log("New run");
            _this.http.post('http://localhost:5000/api/property/view', propertyID, { headers: headers })
                .subscribe(function (response) {
                localStorage.setItem('propertyID', response.id);
                console.log({ "help": response });
                resolve(response[0]);
            }, function (err) {
                reject("err " + err);
            });
        });
    };
    PropertyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PropertyService);
    return PropertyService;
}());
export { PropertyService };
//# sourceMappingURL=property.service.js.map