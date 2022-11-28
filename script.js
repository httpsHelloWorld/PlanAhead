var presentDate = moment().format('dddd, MMMM Do, YYYY');

$('#currentDay').html(presentDate);

$(document).ready(function(){
    $('.saveBtn').on('click',function(){
        var theTask = $(this).siblings('.description').val();
        var theTime = $(this).parent().attr('id');
        localStorage.setItem(theTime,theTask);
    });

    $('#firstRowNine .description').val(localStorage.getItem('firstRowNine'));
    $('#secondRowTen .description').val(localStorage.getItem('secondRowTen'));
    $('#thirdRowEleven .description').val(localStorage.getItem('thirdRowEleven'));
    $('#fourthRowTwelve .description').val(localStorage.getItem('fourthRowTwelve'));
    $('#fifthRowOne .description').val(localStorage.getItem('fifthRowOne'));
    $('#sixthRowTwo .description').val(localStorage.getItem('sixthRowTwo'));
    $('#seventhRowThree .description').val(localStorage.getItem('seventhRowThree'));
    $('#eighthRowFour .description').val(localStorage.getItem('eighthRowFour'));
    $('#ninthRowFive .description').val(localStorage.getItem('ninthRowFive'));

    function presentTime(){
        var timePresent = moment().hour();
        $('.time-block').each(function(){
            var theHour = parseInt($(this).attr('id').split('')[1]);
            if(theHour < timePresent){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if(theHour === timePresent){
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else{
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        });
    };

    presentTime();
})