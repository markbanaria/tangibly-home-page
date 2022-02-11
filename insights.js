function generateInsights(howMany) {
  var b = ''
  var c = 0
  if(howMany=='all') { c = insightsContent.length } 
  else { c = 3 }
  for(i=0;i<c;i++) {
    a = '<div class="col-12 mt24"><div class="box-shadow-lg border-radius-md container-fluid"><div class="row"><div class="col-xs-12 col-md-6 col-lg-4" style="min-height: 180px; background-image: url(\'assets/images/articles/' + insightsContent[i].ID + '.png\'); background-color: #dcdcdc; background-size: contain; background-position: 50% 50%; background-repeat: no-repeat"></div><div class="col-xs-12 col-md-6 col-lg-8"><div class="p32 xs-p24"><a href="' + insightsContent[i].link + '" class="font-24 mb16 display-block"><strong>' + insightsContent[i].title + '</strong></a><div>' + insightsContent[i].body + '<br><br>' + insightsContent[i].tags + '</div></div></div></div></div></div>'
    b = b + a
  }
  document.getElementById('insights-container').innerHTML = b
}
