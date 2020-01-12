function ajaxFrom() {
    $('button').click(function (e) {
        e.preventDefault();
        const url = $(this).attr('data-url');
        console.log(url);
        const email = $('#email').val();
        console.log(email);
        const passWord = $('#password').val();
        console.log(passWord);
        const checkboxfrom = $("#checkboxfrom").val();
        console.log(checkboxfrom);

        $.ajax({
            type: "POST",
            url: url,
            data: {
                email: email,
                passWord: passWord,
                checkboxfrom: checkboxfrom
            },

        });
    });

};
$(document).ready(function () {
    ajaxFrom();
});
