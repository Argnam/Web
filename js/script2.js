function square(min, max){
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            if (i >= min) {
                primes.push(i);
            }
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function result(min, max) {
    min = parseInt(min);
    max = parseInt(max)
    var number = document.getElementById('result');
    number.innerHTML = "";
    if (min == "" || max == "") {
        customAlert("¬ведены неверные данные");
        return;
    }
    if (min == 0 || max == 0) {
        if (min < 0 && max == 0 || min == 0 && max < 0) {
            customAlert("¬ведены неверные данные");
            return;
        }
        if (isWaste) {
            number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + 0 + '</span>'
        }
    }
    else {
        if (min < 0 || max < 0) {
            customAlert("¬ведены неверные данные");
            return;
        }
        number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + square(min, max) + '</span>';
    }
}