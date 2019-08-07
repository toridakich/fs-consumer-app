import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        // this.users = [
        //   {
        //     name: 'John',
        //     lastName: 'Doe',
        //     email: 'john@mail.com',
        //     password: '123'
        //   },
        //   {
        //     name: 'Samantha',
        //     lastName: 'Right',
        //     email: 'sam@mail.com',
        //     password: '123'
        //   },
        //   {
        //     name: 'Julia',
        //     lastName: 'Richards',
        //     email: 'julia@mail.com',
        //     password: '123'
        //   },
        // ];
        this.httpClient = httpClient;
    }
    UserService.prototype.userLogIn = function (Authuser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            // Please note that this will call the API noce we have created it - But for now:
            // const user: any = this.users.filter(dbUser => {
            //   return dbUser.email === Authuser.email;
            _this.httpClient.post(environment.BaseUrl + '/api/auth/userLogin', Authuser, { headers: headers }).subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem('userId', response.id);
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err);
            });
            // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
            // if (user.length) {
            //   if (Authuser.password === user[0].password) {
            //     this.setLoggedInUser(user[0]);
            //     resolve(user[0]);
            //   } else {
            //     reject(new Error('Incorrect password'));
            //   }
            // } else {
            //   reject(new Error("User doesn't exist"));
            // }
        });
    };
    UserService.prototype.addUser = function (newUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            // Please note that this will call the API noce we have created it - But for now:
            // const user: any = this.users.filter(dbUser => {
            //   return dbUser.email === Authuser.email;
            _this.httpClient.post(environment.BaseUrl + '/api/auth/userRegister', newUser, { headers: headers }).subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem('userId', response.id);
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    UserService.prototype.setLoggedInUser = function (user) {
        this.loggedInUser = user;
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map