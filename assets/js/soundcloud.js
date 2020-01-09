
var listSound =[ 
  {
    option:"90-Music", url:"https://soundcloud.com/bogdan-donisa/sets/90-music"
  },  
  {
    option:"Electrify", url:"https://soundcloud.com/soundcloud-the-peak/sets/edm-crossovers"
  },
  { 
    option:"Hip-hop", url:"https://soundcloud.com/soundcloud-hustle/sets/hip-hop-party-starters"
  },
  { 
    option:"Ariana-Grande", url:"https://soundcloud.com/user-743471153/sets/ariana-grande"
  },
  { 
    option:"Rock", url:"https://soundcloud.com/fabricio-fuentes-302345651/sets/rock"
  }
  
];

var songP;// for storage the cuurent value of select

$(document).ready(function () {
 
  searchParam=(listSound[3].url)
  //create select html
  $("#divSelect").append('<select id="comboBox" > <option value="Electrify">Electrify</option>'+
                                  '<option value="Hip-hop">Hip-hop</option> '+ 
                                  '<option value="90-Music">90-Music</option>'+
                                  '<option value="Ariana-Grande">Ariana-Grande</option>'+
                                  '<option value="Rock">Rock</option>'+
                        '</select>');

  $("#comboBox").change(function(){      

    songP=$(this).val();
    var x = listSound.find(findUrl);
    searchParam= (x.url);

      // check if is create the element iframe
    if ($("iframe").length) {          
      $("iframe").remove();
    } 
   
     createWid();
  });
                         
 


});//ready


function findUrl(song) { 
  return song.option === songP; 
}


function createWid() {  


$("#divSound").append(' <iframe id="sc-widget"  width="50%" height="166" scrolling="no" '+ 'frameborder="no" src="https://w.soundcloud.com/player/?url='+searchParam+'&auto_play=true&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&hide_related=false&visual=false&start_track=0&callback=true" ' +



// "https://w.soundcloud.com/player/?url='+
// searchParam+'&auto_play=true&show_artwork=true&start_track=0&callback=true">'+
'</iframe> ');
}//createWid