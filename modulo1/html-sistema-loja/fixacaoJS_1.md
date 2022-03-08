```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

  let comissaoPorcento = valorTotalVendas * 0.05
  let comissaoCem = qtdeCarrosVendidos * 100 
  let salario = 2000 + comissaoCem + comissaoPorcento
  
  return salario
}
```