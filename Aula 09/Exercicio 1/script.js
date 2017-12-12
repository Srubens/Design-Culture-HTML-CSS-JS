function Boleto(valor, diaVencimento, mesVencimento) {
		this.valor = valor;
		this.diaVencimento = diaVencimento;
		this.mesVencimento = mesVencimento;
}

var person = {
	nome: "Diogo",
	valorDisponivel: 300,
	pagarBoleto: function(boleto){
		this.valorDisponivel -= boleto.valor;
		return "Boleto de valor " + boleto.valor + " foi pago por " + this.nome + " e agora restam " + this.valorDisponivel + ". #TaPago";
	}
}


person.pagarBoleto(new Boleto(200, "10", "Fevereiro"));
