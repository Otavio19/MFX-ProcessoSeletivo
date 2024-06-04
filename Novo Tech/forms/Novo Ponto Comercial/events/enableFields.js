function enableFields(form){
	var numAtividade = getValue("WKNumState");
	
	if(numAtividade == 4 || numAtividade == 13 || numAtividade == 18){
		form.setEnabled("filial", false);
		form.setEnabled("departamento", false);
		form.setEnabled("centCusto", false);
		form.setEnabled("tipoPagamento", false);
		form.setEnabled("email", false);
		form.setEnabled("telefone", false);
		form.setEnabled("ramal", false);
		form.setEnabled("cep", false);
		form.setEnabled("endereco", false);
		form.setEnabled("cidade", false);
		form.setEnabled("estado", false);
		form.setEnabled("cpf", false);
		form.setEnabled("rzSocial", false);
		form.setEnabled("banco", false);
		form.setEnabled("agencia", false);
		form.setEnabled("tipoPag", false);
		form.setEnabled("conta", false);
		form.setEnabled("texto", false);
	}
	
	if(numAtividade == 18){
		form.setEnabled("observacaoRh", false);
		form.setEnabled("observacaoGestor", false);
	}
}