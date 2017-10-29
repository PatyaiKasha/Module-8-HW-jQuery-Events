$(document).ready(function() {
    $('#res-btn').on('click', inputRes);
});

function inputRes(argument) {
    var innStr = $('#url').val();

    // Удаляем локальную зону
    var searchLocalZone = innStr.lastIndexOf('.');
    var searchStr1 = innStr.slice(0, searchLocalZone);

    // Удаляем все варианты протоколов

    var searchProtocol1 = searchStr1.lastIndexOf('.');
    var searchProtocol2 = searchStr1.lastIndexOf('/');

    if (searchProtocol1 != -1) {
        var searchStr2 = searchStr1.slice(searchProtocol1 + 1, searchStr1.length);
    } else if (searchProtocol2 != -1) {
        var searchStr2 = searchStr1.slice(searchProtocol2 + 1, searchStr1.length);
    } else if (searchProtocol2 == -1) {
        var searchStr2 = searchStr1.slice(searchProtocol2 + 1, searchStr1.length);
    }

    // Замена символов при помощи регулярных выражений
    var searchStr3 = searchStr2.replace(/o/gi, '0').replace(/l/gi, '1').replace(/i/gi, '3').replace(/s/gi, '5');

    $('#out').html(searchStr3);
}