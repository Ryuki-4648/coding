'use strict';

var select = document.querySelector('#select'); //select要素の取得
var option = document.querySelectorAll('#select option'); //option要素の取得（配列）
//console.log(select); // 出力結果: select#select.select-area
//console.log(option); // 出力結果: NodeList(数字) [option, option, option, ...] 配列の形

select.addEventListener('change', function(){
  var index = this.selectedIndex; //選択されたoption番号を取得
  //console.log(index); // 出力結果: 選択した値の番号がでる　1,2,..

  //console.log( option[ index ].value, option[ index ].innerHTML );
  // 出力結果: option[ index ].valueはoption value="この値"
  // 出力結果: option[ index ].innerHTMLは「2021年」などの期間

  document.querySelector("#term").innerHTML = option[ index ].innerHTML;
  document.querySelector("#termValue").innerHTML = option[ index ].value;
  var termValue = option[index].value;
});



var cat = document.querySelector('#category');
var catOpt = document.querySelectorAll('#category option');
//console.log(cat);
//console.log(catOpt);

cat.addEventListener('change', function(){
  var index = this.selectedIndex;
  //console.log(catOpt[ index ].innerHTML);

  document.querySelector("#categoryName").innerHTML = catOpt[ index ].innerHTML;
  document.querySelector("#categoryValue").innerHTML = catOpt[ index ].value;
});

var list = document.getElementById('list');
var item = list.getElementsByTagName('li');
var span = list.getElementsByTagName('span');
var time = list.getElementsByTagName('time');
//console.log(list);
//console.log(item);
//console.log(span);
//console.log(time);

//console.log(item.length + ':item.lengthの出力結果');

for(var i=0; i< item.length; i++) {
  //console.log(time[i]);
  //console.log(span[i]);

  /*let spanId = document.querySelector('span.list-01__cat');
  console.log(spanId.id);
  let timeId = document.querySelector('time');
  console.log(timeId.id);
  最初の要素しか取得できない方法↑　*/

  /*var id = element.getAttribute('id');
  console.log(id);*/

  var timeId = time[i].id;
  var spanId = span[i].id;
  //console.log(timeId);
  //console.log(spanId);
  //console.log(timeElm.parentElement.parentElement);
  
  var timeElm = document.getElementById(timeId);
  var timePar = timeElm.parentElement.parentElement;
  //console.log(timePar);
}