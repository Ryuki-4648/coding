var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var day = now.getDay();

// today message
$('#currentDay').text(`${year}年${month}月${date}日`);

// date message
if( month === 1 ) {
  if( date === 2 ) {
    $('.special').addClass('is-active');
    $('#specialDay').text('櫻坂46・守屋麗奈さんのお誕生日');
  }
} else if ( month === 2 ) {
  $('#month').text('乃木坂46が結成された');
} else if ( month === 3 ) {

} else if ( month === 4 ) {

} else if ( month === 5 ) {
  if ( day === 16 ) {
    $('.special').addClass('is-active');
    $('#specialDay').text('櫻坂46・渡辺梨加さんのお誕生日');
  } else if ( day === 5 ) {
    $('.special').addClass('is-active');
    $('#specialDay').text('乃木坂46・与田祐希さんのお誕生日');
  }
} else if ( month === 6 ) {

} else if ( month === 7 ) {

} else if ( month === 8 ) {

} else if ( month === 9 ) {

} else if ( month === 10 ) {

} else if ( month === 11 ) {
  if ( day === 27 ) {
    $('.special').addClass('is-active');
    $('#specialDay').text('櫻坂46・菅井友香さんのお誕生日');
  }
} else if ( month === 12 ) {
  $('#month').text('櫻坂46が結成された');
}

// day message
if ( day === 0 ) {
  $('#schedule').text('乃木坂工事中、そこを曲がると櫻坂、日向坂で会いましょう');
} else if ( day === 1 ) {
  $('#schedule').text('レコメン!');
} else if ( day === 5 ) {
  $('#schedule').text('沈黙の金曜日');
}

// bio - modal window
$(function(){
  $('.is-open').on('click',function(){
    $('#overlay, .bio__open').fadeIn();
  });
  $('.is-close, #overlay').on('click',function(){
    $('#overlay, .bio__open').fadeOut();
  });
});

// words
let random01 = Math.floor( Math.random() * wordsList.name.length );
//let randomWords = Math.floor( Math.random() * wordsList.words.length );
/*console.log(randomName);
console.log(wordsList.name[randomName]);
console.log(randomWords);
console.log(wordsList.words[randomName]);*/
$('#memberName').text(wordsList.name[random01]);
$('#memberWord').text(wordsList.words[random01]);


// oshimen
let random02 = Math.floor( Math.random() * oshiList.member.length );
$('#oshiName').text(oshiList.member[random02]);
$('#oshiYomi').text(oshiList.yomi[random02]);
$('#oshiNick').text(oshiList.nick[random02]);
$('#oshiGroup').text(oshiList.group[random02]);
$('#oshiBirth').text(oshiList.birth[random02]);
$('#oshiRemarks').text(oshiList.remarks[random02]);

// recommended
let random03 = Math.floor( Math.random() * songsList.lyric.length );
$('#songLyric').text(songsList.lyric[random03]);
$('#songName').text(songsList.title[random03]);