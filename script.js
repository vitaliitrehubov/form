'use strict';

$(document).ready(function () {
    $('#bsn').mask('000000000');
    $('#code').mask('000-000-000');

    const API_URL = 'https://conduit.productionready.io/api/articles';

    $('#form').submit(function (e) {
        e.preventDefault();

        $('#bsn').val(null);
        $('#code').val(null);
        $('#response').html('Loading...');

        $.get(API_URL, function ({ articles }) {
            let articlesList = '';
            for (const article of articles) {
                articlesList += `
                <li>
                    <h4>${article.title}</h4>
                    <p>${article.body.slice(0, 50)}&hellip;</p>
                </li>`;
            }
            $('#response').html(articlesList);
        });
    });
});