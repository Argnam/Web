function square(a, b) {
    return a * b;
}

function result(a, b) {
    a = parseInt(a);
    b = parseInt(b)
    var number = document.getElementById('result');
    number.innerHTML = "";
    if (a == "" || b == "") {
        customAlert("Введены неверные данные");
        return;
    }
    if (a == 0 || b == 0) {
        if (a < 0 && b == 0 || a == 0 && b < 0) {
            customAlert("Введены неверные данные");
            return;
        }
        if (isWaste) {
            number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + 0 + '</span>'
        }
    }
    else {
        if (a < 0 || b < 0) {
            customAlert("Введены неверные данные");
            return;
        }
        number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + square(a, b) + '</span>';
    }
}
