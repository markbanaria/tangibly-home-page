videoOpen = function (video) {
  $('#main-video').remove()
  $('#video-container').prepend($('<video controls class="video-player" id="main-video" controlsList="nodownload"><source src="assets/videos/video-1.mp4" type="video/mp4">Your browser does not support the video tag.</video>'))
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