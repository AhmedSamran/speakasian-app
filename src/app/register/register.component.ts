import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    Languages: any = ['Japanese', 'Korean', 'Chinese'];

    firstName = new FormControl('', [Validators.required]);
    lastName = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);
    passwordCheck = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private service: AuthServiceService
    ) {}

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            passwordCheck: ['', [Validators.required, Validators.minLength(8)]],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            // birthDate: ['', [Validators.required]],
            // level: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get registerF(): any {
        return this.registerForm.controls;
    }

    onSubmit(): void {
        // this.submitted = true;
        // Call login API
        console.log('the form is valid');
        // this.router.navigate(['profile']);
        const body = {
            email: 'email@gmail.com',
            password: 'password',
        };
        this.service.registerUser(body);
    }
}
