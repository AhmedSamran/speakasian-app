import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateUri } from './utilites';
@Injectable({
    providedIn: 'root',
})
export class AuthServiceService {
    constructor(private httpClient: HttpClient) {}

    private loginUserUrl = 'login';
    private registerUserUrl = 'register';

    public loginUser(loginData: any): any {
        const loginurl = generateUri(this.loginUserUrl);
        return this.httpClient.post(loginurl, loginData);
    }

    public registerUser(body: any): any {
        const registerurl = generateUri(this.registerUserUrl);
        console.log('URL is ' + registerurl);
        return this.httpClient.post(registerurl, body);
    }
}
