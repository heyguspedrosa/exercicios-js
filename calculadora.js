function calcularPagamento() {
    const teste = document.getElementById('teste');

    teste.addEventListener('click', (event) => {
        const horas = Number(document.getElementById('horas').value);
        const valorHora = Number(document.getElementById('valorHora').value);
        let resultado = '';

        const total = horas * valorHora;
        resultado = `Total a receber: R$${total}`;
        resultado = total >= 2000 ? 'Parabéns! Projeto premium.' : resultado;
        resultado = horas <= 0 ? 'Hora inválida' : resultado;
        resultado = valorHora <= 0 ? 'Valor hora inválida' : resultado;
        
        document.getElementById('resultado').innerHTML = resultado;
    }

    
}