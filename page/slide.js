let lastResFind = ""; // последний удачный результат
let copy_page = ""; // копия страницы в ихсодном видеon TrimStr(s) {
function TrimStr(s) {
    s = s.replace(/^\s+/g, '');
    return s.replace(/\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
    let obj = window.document.getElementById(inputId);
    let textToFind;
    if (obj) {
        textToFind = TrimStr(obj.value);//обрезаем пробелы
    } else {
        alert("Введенная фраза не найдена");
        return;
    }
    if (textToFind == "") {
        alert("Вы ничего не ввели");
        return;
    }
    if (textToFind.length < 2) {
        alert("Слишком короткий текст")
        return;
    }
    if (copy_page.length > 0)
    document.body.innerHTML = copy_page;
else copy_page = document.body.innerHTML;
    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");//стираем предыдущие якори для скрола
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:#E6E6FA; font-size:1em'>" + textToFind + "</a>"); //Заменяем найденный текст ссылками с якорем;
    lastResFind = textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
    window.location = '#' + textToFind;//перемещаем скрол к последнему найденному совпадению
}


function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500); //500 speed
}

$(document).on("scroll", function () {
    if ($(window).scrollTop() === 0)
        $("header").removeClass("fixed");
    else
        $("header").attr("class", "fixed");
});

