$(document).ready(function(){
	$("#play").click(function(){
		var $this = $(this);
	    if ($this.data("executing")) return;
	    $this.data("executing", true);
    	$this.attr("disabled", true);
		
		var audio = new Audio('audio/sad.mp3');
		audio.addEventListener("ended", function(){
		    $('#play').attr('checked', false);
    		$this.removeData("executing");
    		$this.removeAttr("disabled");
		});
		audio.play();
	});	
});