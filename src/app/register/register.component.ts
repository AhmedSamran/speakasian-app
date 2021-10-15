import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private router: Router, private formBuilder: FormBuilder) {}

    email: string;
    password: string;

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            birthDate: ['', [Validators.required]],
            level: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get registerF(): any {
        return this.registerForm.controls;
    }

    onSubmit(): void {}
}
