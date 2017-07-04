

'use strict';

// $('.msg-box').scrollHeight

// $(".chat-footer").height($('.msg-box').height() + 10)  



function resizeMsgBox_newline(e) {

	 if (e.keyCode == 13 && e.shiftKey){

		$(".chat-footer").height(   $(".chat-footer").height()  + 10)  

		$(".msg-box").height(   $(".msg-box").height()  + 10)  
	}

}

function resizeMsgBox_onpast(e) {
	var contentHeight = $('.msg-box')[0].scrollHeight

	$(".chat-footer").height(contentHeight + 25)  
	$(".msg-box").height(contentHeight + 10)  

	console.log(contentHeight)
}



// TODO
	// resizeMsgBox_ondelet()