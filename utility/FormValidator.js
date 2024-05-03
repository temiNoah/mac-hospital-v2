import React from 'react';

class FormValidator {
    constructor() {
        this.errors = {};
        this.validations = {
            'required': (value) => value.trim() !== '',
            'email': (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            'minlength': (value, minLength) => value.trim().length >= minLength,
            'maxlength': (value, maxLength) => value.trim().length <= maxLength
        };
    }

    validateField(fieldName, value, rules) {
        console.log("validating..... field:", fieldName, " value:", value)
        this.errors[fieldName] = [];
        rules.split('|').forEach(rule => {
            const [ruleName, param] = rule.split(':');
            if (!this.validations[ruleName](value, param)) {
                this.errors[fieldName].push(this.getErrorMessage(ruleName, param));
            } else {
                console.log("field :", fieldName, " valid")
            }

        });

        if (this.errors[fieldName].length === 0)
            delete this.errors[fieldName]
    }

    getErrorMessage(rule, param) {
        const messages = {
            'required': 'This field is required.',
            'email': 'Please enter a valid email address.',
            'minlength': `Please enter at least ${param} characters.`,
            'maxlength': `Please enter no more than ${param} characters.`
        };
        return messages[rule];
    }

    validateForm(formData, validationRules) {
        this.errors = {};
        for (const field in formData) {
            if (formData.hasOwnProperty(field) && validationRules.hasOwnProperty(field)) {
                this.validateField(field, formData[field], validationRules[field]);
            }
        }
        return Object.keys(this.errors).length === 0;
    }
}

export default FormValidator;