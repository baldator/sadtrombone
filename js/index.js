//update counter values
	function updateCounters(){
		$.ajax({
			url: '/webservice/web/counters',
			method: 'GET',
			success: function(data){
				var jsonData = JSON.parse(data);
				$("#count-day").html(jsonData.day);
				$("#count-week").html(jsonData.week);
				$("#count-month").html(jsonData.month);
			}
		});
	}

$(document).ready(function(){
	
	updateCounters();
	
	$("#play").click(function(){
		var $this = $(this);
	    if ($this.data("executing")) return;
	    $this.data("executing", true);
    	$this.attr("disabled", true);
		
		//increment counter
		$.post('/webservice/web/play',
			function(result) {
				// Do something with the result
			}
		);
		
		var audio = new Audio('audio/sad.mp3');
		audio.addEventListener("ended", function(){
		    $('#play').attr('checked', false);
    		$this.removeData("executing");
    		$this.removeAttr("disabled");
			updateCounters();
		});
		audio.play();
	});	
});