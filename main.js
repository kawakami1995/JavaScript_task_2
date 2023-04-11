//変数を定義
let display;//画面の表示内容を格納
let operator;//「+」「-」「*」「/」の演算子を格納
let number;//数字を格納
let AC;//「AC」ボタンの引数を格納
let equal;//「=」ボタンの引数を格納
let period;//「.」ボタンの引数を格納
let usePeriod;//「.」ボタンの使用を制限するための変数


//計算機能
function cal(element){
  
  
   //電卓画面の内容を取得
  display = document.getElementById("display"); 
  
  
  //引数が「+」「-」「*」「/」の演算子だった場合
  if(element == "+" || element == "-" || element == "*" || element == "/"){
    
    //operatorに格納
    operator = element;
    
  //引数が「.」だった場合  
  }else if(element == "."){
    
    //periodに格納
    period = element;
    
  //引数が「AC」だった場合  
  }else if(element == "AC"){
    
    //ACに格納
    AC = element;
    
    //usePeriodをfalseにする（「.」を使用できるようにする）
    usePeriod = false;
    
  //引数が「=」だった場合   
  }else if(element == "="){
    
    //equalに格納
    equal = element;
    
    //画面の値に「.」が含まれている場合
    if(display.value.match(/./)){
      
      //usePeriodをtrueにする（「.」を使用できないようにする（これをしないと「10.5.3」みたいになってしてしまう場合がある））
      usePeriod = true;
    }
    
  //引数が数字だった場合     
  }else{
    
    //numberに格納
    number = element;
  }
  
  
  //「AC」ボタン押下時
  if(element == AC){
    
    //画面の表示を0にする
    display.value = 0;
  
    
  //「=」ボタン押下時
  }else if(element == equal){
    
    //画面に表示されている式の計算結果を表示する
    display.value = eval(display.value);
  
  
  //「AC」または「=」以外の押下時
  }else{
    
    //末尾が「.」の場合
    if(display.value.endsWith(period)){
      
      //引数が「+」「-」「*」「/」の演算子または「.」の場合
      if(element == operator || element == period){
        
        //何もしない
        return;
        
      //引数が数字の場合;  
      }else{
        
        //画面に追加
        display.value += number;
      }
    
    //末尾が「+」「-」「*」「/」の演算子の場合
    }else if((display.value.endsWith("+") || display.value.endsWith("-") || display.value.endsWith("*") || display.value.endsWith("/"))){
      
       //引数が「+」「-」「*」「/」の演算子の場合（「+」「-」「*」「/」の演算子が連続で入力された場合）
      if(element == operator){
        
        //末尾の演算子の手前までの値を切り取る（末尾の演算子は残らない）
        display.value = display.value.slice(0,display.value.length - 1);
        
        //2つめの演算子を画面に追加（これにより演算子が上書きされる）
        display.value += operator;
        
        //usePeriodをfalseにする（「.」を使用できるようにする）
        usePeriod = false;
        
      //引数が「.」の場合  
      }else if(element == period){
        
        //何もしない
        return;
        
      //引数が00の場合  
      }else if(number == "00"){
        
        //何もしない
        return;
        
      //引数が数字の場合  
      }else{
        
        //画面に数字を追加する
        display.value += number;
      }
    
    //画面の表示が0の場合
    }else if(display.value == 0){
      
      //引数が0または00の場合
      if(element == "0" || element == "00"){
        
        //画面の値が0.0以上の場合
        if(display.value >= "0.0"){
          
          //画面に引数を追加する
          display.value += element;
          
        //それ以外の場合  
        }else{
          
          //何もしない
          return;
        }
        
      //引数が「.」の場合
      }else if(element == period){
        
        //画面に「.」を追加する
        display.value += period;
       
      //引数が「+」「-」「*」「/」の演算子の場合  
      }else if(element == operator){  
        
        //画面に演算子を追加する
        display.value += operator;
      
      //それ以外の場合  
      }else{
        
        //画面の表示が0.0以上の場合
        if(display.value >= "0.0"){
          
          //画面に引数を追加する
          display.value += element;
          
        //それ以外の場合  
        }else{
          
          //初期値の0を消す
          display.value = null;
          
          //引数を追加する
          display.value += element;
        }
      }
    
    //画面の表示が0以外の場合
    }else{
      
      //引数が「.」の場合
      if(element == period){
        
        //既に「.」が使用されている場合
        if(usePeriod == true){
          
          //何もしない
          return;
          
        //まだ「.」が使用されていない場合  
        }else{
          
          //画面に「.」を追加する
          display.value += period;
          
          //usePeriodをtrueにする（「.」を使用できないようにする）
          usePeriod = true;
        }
      
      //引数が「+」「-」「*」「/」の演算子の場合
      }else if(element == operator){
        
        //画面に演算子を追加する
        display.value +=operator;
        
        //usePeriodをfalseにする（「.」を使用できるようにする）
        usePeriod = false;
        
      //引数が数字の場合  
      }else{
        
        //画面に数字を追加する
        display.value += number;
      }
    }
  }
};

$(document).ready(function(){
  
  //各ボタンが押下された場合
    //ボタンの枠線の色を消す（これにより直前に使用したボタンの枠線の色が消える）
    //押下したボタンの枠線に色をつける
  $('#button1').click(function() {
    $('.button').css('border','');
    $('#button1').css('border','solid 1px blue');
  })
  
  $('#button2').click(function() {
    $('.button').css('border','');
    $('#button2').css('border','solid 1px blue');
  })
  
  $('#button3').click(function() {
    $('.button').css('border','');
    $('#button3').css('border','solid 1px blue');
  })
  
  $('#button4').click(function() {
    $('.button').css('border','');
    $('#button4').css('border','solid 1px blue');
  })
  
  $('#button5').click(function() {
    $('.button').css('border','');
    $('#button5').css('border','solid 1px blue');
  })
  
  $('#button6').click(function() {
    $('.button').css('border','');
    $('#button6').css('border','solid 1px blue');
  })
  
  $('#button7').click(function() {
    $('.button').css('border','');
    $('#button7').css('border','solid 1px blue');
  })
  
  $('#button8').click(function() {
    $('.button').css('border','');
    $('#button8').css('border','solid 1px blue');
  })
  
  $('#button9').click(function() {
    $('.button').css('border','');
    $('#button9').css('border','solid 1px blue');
  })
  
  $('#button10').click(function() {
    $('.button').css('border','');
    $('#button10').css('border','solid 1px blue');
  })
  
  $('#button11').click(function() {
    $('.button').css('border','');
    $('#button11').css('border','solid 1px blue');
  })
  
  $('#button12').click(function() {
    $('.button').css('border','');
    $('#button12').css('border','solid 1px blue');
  })
  
  $('#button13').click(function() {
    $('.button').css('border','');
    $('#button13').css('border','solid 1px blue');
  })
  
  $('#button14').click(function() {
    $('.button').css('border','');
    $('#button14').css('border','solid 1px blue');
  })
  
  $('#button15').click(function() {
    $('.button').css('border','');
    $('#button15').css('border','solid 1px blue');
  })
  
  $('#button16').click(function() {
    $('.button').css('border','');
    $('#button16').css('border','solid 1px blue');
  })
  
  $('#button17').click(function() {
    $('.button').css('border','');
    $('#button17').css('border','solid 1px blue');
  })
  
  $('#button18').click(function() {
    $('.button').css('border','');
    $('#button18').css('border','solid 1px blue');
  })

});
  