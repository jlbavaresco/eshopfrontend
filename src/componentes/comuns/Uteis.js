export const formatoMoeda = (valor) => {
    let vrl = Number(valor);
    let valorFormatado = vrl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' , minimumFractionDigits: 2});
    return valorFormatado;
}