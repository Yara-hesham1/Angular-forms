import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator():ValidatorFn{
    return (control:AbstractControl) :ValidationErrors | null => {
        const value=control.value;
        if(!value){
            return null; // No error if the control is empty
        } 

        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);       
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && value.length >= 8;
        return !passwordValid ? {passwordStrength: true} : null;


    }
}
