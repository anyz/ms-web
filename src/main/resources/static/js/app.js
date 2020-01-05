$(document).ready(function(){
	var newDate = $.datepicker.formatDate('mm-dd-yy', new Date());
	$("#todaysdate").html(newDate);
	$("#footertext").html("&copy; " + $.datepicker.formatDate('yy', new Date()) + " <a href='http://www.masjidsahabah.com'>masjidsahabah.com</a>. All rights reserved.");

	//figureout month counter
	var date = new Date();
	var firstMonthCounter = $.datepicker.formatDate('mm', date);
	var firstHalfCounter = 1;
	var secondMonthCounter=firstMonthCounter;
	var secondHalfCounter = 2;
	
	var startDate1 = $.datepicker.formatDate('mm-dd-yy', new Date(date.getFullYear(), date.getMonth(), 1));
	var startDate2 = $.datepicker.formatDate('mm-dd-yy', new Date(date.getFullYear(), date.getMonth(), 16));
	
//	if($.datepicker.formatDate('dd', new Date()) > 15){
//		secondMonthCounter = $.datepicker.formatDate('mm', new Date(date.getFullYear(), date.getMonth()+1, 1));
//		firstHalfCounter = 2;
//		secondHalfCounter = 1;
//		startDate1 = startDate2;
//		startDate2 = $.datepicker.formatDate('mm-dd-yy', new Date(date.getFullYear(), date.getMonth()+1, 1));
//	}
	
	$.getJSON('js/iqama.json', function(data) {
		prepareIqamaTimes(data["times"]);
    });
	
	
	
	function prepareIqamaTimes(data){
		$("#iqamaTimesHeader").html("<h4>Iqama Times - " + $.datepicker.formatDate('MM, yy', new Date()) +" </h4>");
		$.each(data, function(i, item){
			if(item["monthCounter"] == firstMonthCounter && item["halfCounter"] == firstHalfCounter){
				$('#iqamatimestable > tbody:last-child').append('<tr><td>'+ startDate1 +'</td><td>'+ item.times[0]["fajar"] +'</td><td>'+ item.times[0]["zohar"] +'</td><td>'+ item.times[0]["asar"] +'</td><td>'+ item.times[0]["magrib"] +'</td><td>'+ item.times[0]["isha"] +'</td></tr>');
			};
			if(item["monthCounter"] == secondMonthCounter && item["halfCounter"] == secondHalfCounter){
				$('#iqamatimestable > tbody:last-child').append('<tr><td>'+ startDate2 +'</td><td>'+ item.times[0]["fajar"] +'</td><td>'+ item.times[0]["zohar"] +'</td><td>'+ item.times[0]["asar"] +'</td><td>'+ item.times[0]["magrib"] +'</td><td>'+ item.times[0]["isha"] +'</td></tr>');
			};
		});
		
	}

	
	setCarouselHeight('#carousel-example');

    function setCarouselHeight(id)
    {
        var slideHeight = [];
        $(id+' .item').each(function()
        {
            // add all slide heights to an array
            slideHeight.push($(this).height());
        });

        // find the tallest item
        max = Math.max.apply(null, slideHeight);

        // set the slide's height
        $(id+' .carousel-content').each(function()
        {
            $(this).css('height',max+'px');
        });
    }
	
});
