function tabuada(){
  var num = parseFloat(document.getElementById("v1").value);
  var resposta = document.getElementById('res');
  var tabuada='';
  for(var count=1; count<=num ; count++)
   tabuada += num+" x "+count+" = "+
               num*count+"<br />";
  resposta.innerHTML = tabuada;
  

}
alert(tabuada())

