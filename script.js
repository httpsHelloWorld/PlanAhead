var presentDate = moment().format()('ddddd, MM Do YYYY');

$('#currentDay').html(presentDate);

$(document).ready(function(){
    $('.saveBtn').on('click',function(){
        var theTask = $(this).siblings('.description').val();
        var theTime = $(this).parent().attr('id');
        localStorage.setItem(theTime,theTask);
    });

    function presentTime(){
        var timePresent = moment().hour();
        $('.time-block').each(function(){
            var theHour = parseInt($(this).attr('id').split('hour')[1]);
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

        
    }
})