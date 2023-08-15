class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
          };
        
          const descontoDinheiro = 0.05;
          const acrescimoCredito = 0.03;
        
          let valorTotal = 0;
        
          if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
          }
        
          for (const item of itens) {
            if (!cardapio.hasOwnProperty(item.codigo)) {
              return "Item inválido!";
            }
        
            if (item.extras) {
              for (const extra of item.extras) {
                if (!cardapio.hasOwnProperty(extra)) {
                  return "Item extra não pode ser pedido sem o principal";
                }
              }
            }
        
            valorTotal += cardapio[item.codigo];
        
            if (item.extras) {
              for (const extra of item.extras) {
                valorTotal += cardapio[extra];
              }
            }
          }
        
          if (metodoDePagamento === "dinheiro") {
            valorTotal -= valorTotal * descontoDinheiro;
          } else if (metodoDePagamento === "credito") {
            valorTotal += valorTotal * acrescimoCredito;
          } else if (metodoDePagamento !== "debito") {
            return "Forma de pagamento inválida!";
          }
        
          return valorTotal.toFixed(2);
        }
    }

const itens = [
  { codigo: "cafe" },
  { codigo: "chantily", extras: ["cafe"] },
  { codigo: "suco" }
];
const metodoDePagamento = "dinheiro";

const valorTotal = calcularValorDaCompra(itens, metodoDePagamento);
console.log(`Valor total da compra: R$ ${valorTotal}`);



export { CaixaDaLanchonete };
