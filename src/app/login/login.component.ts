import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    constructor(private router: Router, private formBuilder: FormBuilder) {}

    email: string;
    password: string;

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    // convenience getter for easy access to form fields
    get f(): any {
        return this.loginForm.controls;
    }

    onSubmit(): void {
        // this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.valid) {
            // Call login API
            console.log('the form is valid');
            this.router.navigate(['profile']);
        }
    }
}
