import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateUri } from './utilites';
@Injectable({
    providedIn: 'root',
})
export class AuthServiceService {
    constructor(private httpClient: HttpClient) {}

    loginUserUrl = 'login';
    registerUserUrl = 'register';

    public loginUser(loginData: any): any {
        return this.httpClient.post(generateUri(this.loginUserUrl), loginData);
    }

    public registerUser(registerData: any): any {
        return this.httpClient.post(
            generateUri(this.registerUserUrl),
            registerData
        );
    }
}
