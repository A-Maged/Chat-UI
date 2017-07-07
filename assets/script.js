

'use strict';

// $('.msg-box').scrollHeight

// $(".chat-footer").height($('.msg-box').height() + 10)  



function handleEnter(e){
	if (e.keyCode == 13 && !e.shiftKey){
		e.preventDefault()
		console.log('sent')
	}
}




$('.menu-icon').on('click', function() {

	// if on mobile
	if (Modernizr.mq('(max-width: 776px)')) {
		$('aside').toggleClass('show-menu')
	}

})



// TODO
	// resizeMsgBox_input()
	// resizeMsgBox_onDelete()