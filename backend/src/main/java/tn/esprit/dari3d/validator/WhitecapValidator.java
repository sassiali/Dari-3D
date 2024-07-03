package tn.esprit.dari3d.validator;

import org.springframework.validation.annotation.Validated;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class WhitecapValidator implements ConstraintValidator<Whitecap, String> {

    @Override
    public void initialize(Whitecap constraintAnnotation) {
    }
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.isEmpty()) {
            return false;
        }
        return value.matches("\\d{8}");
    }
}
