//button/function name is what the highlighted number is already
//will provide

//suppose to get the string highlighted 
function get_input() {
  return document.getElementById("inputNumber").value;
}

//display result of conversions to the page
function display_string(text) {
  document.getElementById("output").innerHTML = text;
}

//replacing onclick function (cause Chrome is stupid and won't let us use it)
document.getElementById('hex').addEventListener('click',hex); 
document.getElementById('binary').addEventListener('click',binary);
document.getElementById('decimal').addEventListener('click',decimal);

function hex()      //maybe deal with 0x if it shows up,,,,,,,,, maybe,,,,, idk,,,,,  
{
  //print statement saying this is binary form
  hexToDecimal();
  //print statment saying this is hex form
  hexToBinary();
}

function hexToDecimal()
{
  var nums = "0123456789";
  var arr = get_input.split('');
  var sum = 0;
  for(var i = arr.length - 1; i>=0; ++i){

  }
  

}


function binary()
{
  binaryToDecimal();
  binaryToHex(binaryt)
}


function binaryToDecimal()
{
  var n = parseInt(get_input());       

  var toDecSum = 0;
  var exp = 1;

  for(var i = n.length - 1; i >= 0; i++){
    toDecSum += n.charAt(i) * base;
    base *= 2;
  }
}

function decimal()
{
  //print statement saying this is binary form
  decimalToBinary();
  //print statment saying this is hex form
  decimalToHex();
}

function decimalToBinary()
{
  var n = parseInt(get_input());          
  var toBinArr = [];
  while(n > 0){
    var x = n % 2;
    toBinArr.unshift(x);
    if(x == 1){
      n = (n - 1)/2;
    }
    else{
      n = n/2;
    }
  }
  //insert print to extension here, will need to print toBinArr 
}

function decimalToHex()
{
  var n = parseInt(get_input());
  var toHexArr = [];
  while(n > 20){           //may not be n idk
    var x = n % 16;
    if(x < 10){
      toHexArr.unshift(x);
    }
    else{
      switch(x){
        case 10:
          toHexArr.unshift('A');
          break;
        case 11:
          toHexArr.unshift('B');
          break;
        case 12:
          toHexArr.unshift('C');
          break;
        case 13:
          toHexArr.unshift('D');
          break;
        case 14:
          toHexArr.unshift('E');
          break;
        case 15:
          toHexArr.unshift('F');
          break;
      }
    }
    n = Math.floor(n/16);
  }
  //insert print to extension here, will need to print toBinArr 
}
