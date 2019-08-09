import $ from 'jquery';
import recommendationList from './recommendation-list';

$(function() {
    $('.get-recommendation').click(function (event) {
        event.preventDefault();

        if($('#question-4__answer-1') == true) {
            alert('Выбрано: "Да, каждая"');
        } else {
            alert(recommendationList[0].recommendations[0].offer);
        }
    });
});