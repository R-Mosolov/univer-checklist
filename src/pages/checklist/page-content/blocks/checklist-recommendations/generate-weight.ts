import $ from 'jquery';

let checklistWeight: number = 0;

function generateWeight(): number {
    function addWeight(): number {
        return checklistWeight += 1.5;
    }

    if ($('#question-5__answer-2').is(':checked')) addWeight();
    if ($('#question-6__answer-1').is(':checked')) addWeight();
    if ($('#question-7__answer-1').is(':checked')) addWeight();

    if ($('#question-8__answer-1').is(':checked')) addWeight();
    if ($('#question-9__answer-1').is(':checked')) addWeight();
    if ($('#question-10__answer-1').is(':checked')) addWeight();

    if ($('#question-11__answer-2').is(':checked')) addWeight();
    if ($('#question-12__answer-2').is(':checked')) addWeight();
    if ($('#question-13__answer-1').is(':checked')) addWeight();

    if ($('#question-14__answer-1').is(':checked')) addWeight();
    if ($('#question-15__answer-1').is(':checked')) addWeight();
    if ($('#question-16__answer-1').is(':checked')) addWeight();

    return checklistWeight;
}

export default generateWeight;
