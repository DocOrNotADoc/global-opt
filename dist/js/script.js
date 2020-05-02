$(document).ready(function(){

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {                
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите {0} символa!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введён адрес почты"
                }
            }
        });
    };
    // validateForms('#consult-form');
    validateForms('#form-consult');
    // validateForms('#order form');

    


});