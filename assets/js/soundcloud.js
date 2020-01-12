var listSound = [{
        option: "90-Music",
        url: "https://soundcloud.com/bogdan-donisa/sets/90-music"
    },
    {
        option: "Electrify",
        url: "https://soundcloud.com/soundcloud-the-peak/sets/edm-crossovers"
    },
    {
        option: "Hip-hop",
        url: "https://soundcloud.com/soundcloud-hustle/sets/hip-hop-party-starters"
    },
    {
        option: "Ariana-Grande",
        url: "https://soundcloud.com/user-743471153/sets/ariana-grande"
    },
    {
        option: "Rock",
        url: "https://soundcloud.com/fabricio-fuentes-302345651/sets/rock"
    }

];

var songP; // for storage the current value of select

$(document).ready(function () {

 
    searchParam = (listSound[3].url)
    //create select html
    $("#divSelect").append('<div class="select "> <select id="comboBox"> <option value=""></option>' + '<option value="Electrify">Electrify</option>' +
        '<option value="Hip-hop">Hip-hop</option> ' +
        '<option value="90-Music">90-Music</option>' +
        '<option value="Ariana-Grande">Ariana-Grande</option>' +
        '<option value="Rock">Rock</option>' +
        '</select></div>');

    $("#comboBox").change(function () {

        songP = $(this).val();
        if (songP === ""){
            return false,
            $("iframe").remove();
        }
        var x = listSound.find(findUrl);
        searchParam = (x.url);

        // check if iframe is already created
        if ($("iframe").length) {
            $("iframe").remove();
        }
        

        createWid();
    });
}); //ready


function findUrl(song) {
    return song.option === songP;
 
}


function createWid() {
    $("#divSound").append(' <iframe id="sc-widget"  width="50%" height="100" scrolling="no" ' + 'frameborder="no" src="https://w.soundcloud.com/player/?url=' + searchParam + '&auto_play=false&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&hide_related=false&visual=false&start_track=0&callback=true" ' + '</iframe> ');
} //createWid