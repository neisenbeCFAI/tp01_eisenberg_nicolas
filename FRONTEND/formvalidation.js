var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

(function () {
    'use strict'
    var form = $(".needs-validation")[0]
    form.addEventListener('submit', function (event) {
        var isPassValid = strongRegex.test($("#passwd").value)
        if (!form.checkValidity() || !isPassValid) {
            event.preventDefault()
            event.stopPropagation()
        }
        if (!isPassValid) {
            var element = $("#passwd")
            element[0].setCustomValidity("Wrong format")
            $("#passwd~.invalid-feedback").show()
        }

        form.classList.add('was-validated')
    }, false)
})()