videoOpen = function (video) {
  $('#main-video').remove()
  $('#modal-section').prepend($('<video controls class="video-player" id="main-video"><source src="assets/videos/video-1.mp4" type="video/mp4">Your browser does not support the video tag.</video>'))
  $('#main-video source').attr('src','assets/videos/' + video)
  $('#modal-section').addClass('open')
  a = $('#main-video')[0].play()
  $('body').addClass('modal-open')
}

videoClose = function () {
  $('body').removeClass('modal-open')
  $('#modal-section').removeClass('open')
  $('#main-video')[0].pause()
  $('#main-video')[0].currentTime = 0
}

ctr=0

setInterval(function(){
  if(ctr==4) { ctr = 0 }
  $( ".rolled" ).eq((ctr + 1) % 4).removeClass('rolled-over').removeClass('rolled-under')
  $( ".rolled" ).eq((ctr + 2) % 4).removeClass('rolled-over')
  $( ".rolled" ).eq((ctr + 3) % 4).removeClass('rolled-over').addClass('rolled-under')
  $( ".rolled" ).eq(ctr).addClass('rolled-over')
  ctr+=1
}, 3000);