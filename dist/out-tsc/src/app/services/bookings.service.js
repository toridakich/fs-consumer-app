import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var BookingsService = /** @class */ (function () {
    function BookingsService(http) {
        this.http = http;
    }
    BookingsService.prototype.createBooking = function (newBooking) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            // headers.append("Accept","http://localhost:5000/api/auth/login");
            _this.http.post(environment.BaseUrl + '/api/bookings', newBooking, { headers: headers }).subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    BookingsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BookingsService);
    return BookingsService;
}());
export { BookingsService };
//# sourceMappingURL=bookings.service.js.map