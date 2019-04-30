$( function() {
    $.ajax({
        type: "GET",
    url: "Таблица.xml",
    dataType: "xml",
    success: myHandler(xml) {
    }
    });
});