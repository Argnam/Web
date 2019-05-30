function getRandom() {
    var min = parseInt(document.getElementById('a').value);
    var max = parseInt(document.getElementById('b').value);
    let c = (Math.floor(Math.random() * (max - min)) + min);
    return c;
}

function CoolFunction() {
    var arr = new Array();
    for (var i = 0; i < 8; i++) {
        arr[i] = new Array();
    }
    let chec;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            arr[i][j] = getRandom();
        }
    }
    let str = ' ';
    document.getElementById("t1").innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i][j] >= 0) {
                str += + arr[i][j] + ' ' + ' ';
            }
            else str += arr[i][j] + ' ';

        }
        document.getElementById("t1").innerText += str;
        document.getElementById("t1").innerText += "\n"
        str = '';
    }
    document.getElementById("t1").innerText += "\n"
    let check = Number;
    let checked = Number;
    let itog = Number;
    checked = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (arr[j][i] > arr[j][i-1]) {
                check = check + 1;
            }
        }
        if (checked < check) { checked = check; itog = i; }
        check = 0;
    }
    for (var i = 0; i < 8; i++) {
        check = arr[i][i];
        arr[i][i] = arr[i][itog];
        arr[i][itog] = check;
    }


    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i][j] >= 0) { str +=  + arr[i][j] + ' '; }
            else str += arr[i][j] + ' ';

        }
        document.getElementById("t1").innerText += str;
        document.getElementById("t1").innerText += "\n"
        str = '';
    }
}