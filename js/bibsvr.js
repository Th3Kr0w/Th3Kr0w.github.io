detectar_mobile();

function detectar_mobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        var body = document.getElementById("body");
        var header = document.getElementById("header");
        var main = document.getElementById("main");
        var footer = document.getElementById("footer");
        var input = document.getElementById("saldo");
        var result = document.getElementById("result");
        var ftText = document.getElementById("ftText");

        input.style.fontSize = "5vw";
        input.style.width = "80vw";
        ftText.style.fontSize = "3vw";
        result.style.fontSize = "6vw";

        main.style.height = body.offsetHeight - header.offsetHeight - footer.offsetHeight;
    }
    else {
        var input = document.getElementById("saldo");
        input.style.fontSize = "5vh";
        var ftText = document.getElementById("ftText");
        ftText.style.fontSize = "2vh";
        var result = document.getElementById("result");
        result.style.fontSize = "8vh";
    }
}

function vr() {
    var saldo = document.getElementById("saldo").value;
    var result = document.getElementById("result");

    var today = new Date();

    if (today.getHours() >= 14)
        today.setDate(today.getDate() + 1);

    var endOfMonth = new Date(today);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(1);

    var bibsFood = 0;
    var daysOfWork = 0;

    for (var day = new Date(today); day < endOfMonth; day.setDate(day.getDate() + 1)) {
        if (day.getDay() < 2 || day.getDay() == 6)
            bibsFood += 15;
        else
            daysOfWork += 1;
    }

    if (daysOfWork)
        var moneyAlmoco = (saldo - bibsFood) / daysOfWork;
    else
        var moneyAlmoco = saldo - bibsFood;

    result.innerHTML = 'Restam ' + daysOfWork + ' dias de trabalho e ' + bibsFood / 15 + ' dias de preguiça.<br />'
        + 'Considerando R$15,00 de gasto por dia de preguiça, deve-se gastar em média <b>R$' + moneyAlmoco.toFixed(2)
        + '</b> por dia de trabalho.';

}