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
        // $('#out').html(searchStr2);
    } else if (searchProtocol2 != -1) {
        var searchStr2 = searchStr1.slice(searchProtocol2 + 1, searchStr1.length);
        // $('#out').html(searchStr2);
    } else if (searchProtocol2 == -1) {
        var searchStr2 = searchStr1.slice(searchProtocol2 + 1, searchStr1.length);
        // $('#out').html(searchStr2);
    }

    $('#out').html(searchStr2);

    var out = $('#out').text();



}