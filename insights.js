function generateInsights(howMany) {
  var b = ''
  var c = 0
  var sourceIcon = ''
  if(howMany=='all') { c = insightsContent.length } 
  else { c = 3 }
  for(i=0;i<c;i++) {

    if (insightsContent[i].source == 'linkedIn') {sourceIcon = 'linked-in-icon-blue'}
    else if (insightsContent[i].source == 'web') {sourceIcon = 'web-link-icon'}
    else if (insightsContent[i].source == 'none') {sourceIcon = 'web-link-icon'}
    else {}

    a = '<div class="col-12 mt24"> <div class="box-shadow-lg border-radius-md container-fluid"> <div class="row"> <div class="col-xs-12 col-md-6 col-lg-4" style="min-height: 180px; background-image: url(\'assets/images/articles/' + insightsContent[i].ID + '.png\'); background-color: #dcdcdc; background-size: contain; background-position: 50% 50%; background-repeat: no-repeat"> </div><div class="col-xs-12 col-md-6 col-lg-8"> <div class="p32 xs-p24"> <div class="d-flex flex-row"> <a href="' + insightsContent[i].link + '" class=" flex-fill font-24 mb16 display-block text-copy-2"> <strong>' + insightsContent[i].title + ' </strong> </a> <a href="' + insightsContent[i].extlink + '" class="' + insightsContent[i].linkedin + '"> <img src="assets/images/' + sourceIcon + '.svg" class="pl24"></a> </div><div>' + insightsContent[i].body + '<br><br>' + insightsContent[i].tags + ' </div></div></div></div></div></div>'
    b = b + a
  }
  document.getElementById('insights-container').innerHTML = b
}
