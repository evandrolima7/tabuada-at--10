function tabuada() {
  var txnum = document.getElementById('txtnum');
  var num = Number(txnum.value);
  var res = document.getElementById('res');
  
  var tabuada = '';
  for (var c1 = 1; c1 <= 10; c1++) {
    var resultado = num * c1;
    tabuada += `${num} x ${c1} = ${resultado}<br>`;
  }
  res.innerHTML = tabuada;
}