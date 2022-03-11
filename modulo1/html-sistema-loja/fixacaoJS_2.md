```
function calculaPrecoTotal(quantidade) {
  
  let valorCompra;
  
  if(quantidade < 12){
    valorCompra = quantidade * 1.30
  }else{
    valorCompra = quantidade * 1
  }
  
  return valorCompra
}
```