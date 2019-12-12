// JavaScript Document
$(document).ready(function(){
	var nav = $('.nav-bar');
	$('.mobile-nav').click(function(){
		nav.slideToggle();
	});

	$(window).resize(function(){
		if($(window).width() >= 680){
			nav.show();
		}
		else
		{
			nav.hide();
		}
	});
});

//Menampilkan preview dan info gambar
$.fn.uploadGambar = function () { //extending jquery
	this.change(function(event) {
    	if(this.files.length > 0){
    		console.log(this.files[0]);
 			var name = this.files[0].name;
 			var size = this.files[0].size;

 			var ukuran = "";
 			if (size >= 1000000 ) { //MB
 				size = Math.ceil(size/1000000);
 				ukuran = size + "MB";
 			}
 			else if (size >= 1000) { //KB
 				size = Math.ceil(size/1000);
 				ukuran = size + "KB";
 			}
 			else if(size < 1000){
 				ukuran = size + "Byte";
 			}

 			$("#file_info").html(`
 				<p>Nama File : `+name+`</p>
 				<p>Ukuran File : `+ukuran+`</p>
 				`
 			);

    		if (this.files && this.files[0]) {
    		  var reader = new FileReader();

    		  reader.onload = function(e) {
    		    $('#gambar_wraper').show();
    		    $('#avatar_img').attr('src', e.target.result);
    		  }

    		  reader.readAsDataURL(this.files[0]);
    		}
    	}
	});
}

$.fn.validasiLogin = function () {
	var form = this;

	this.on("submit", function(event) {
		event.preventDefault();
		var email = $("input[name='email']").val();
		var password = $("input[name='password']").val();

		if(email == "" || password == ""){
			show_error('Harap isi email dan password untuk login');
		}
		else if (email != "email" && password != "password") {
			show_error('Email atau Password salah. Coba lagi');
		}
		else{
			// document.location.href = "dashboard.html";
			$(this).off("submit").trigger("submit");
		}
	});
}
//buka
function modalShow() {
	$("#id_modal").show();
	$("#id_modal").css('animation-name', 'show_modal');
	// $(".modal-content:first").css('animation-name', 'show_modal');
}
//nutup
function modalHide() {
	// $(".modal-content:first").css('animation-name', 'hide_modal');
	$("#id_modal").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 300);
}
