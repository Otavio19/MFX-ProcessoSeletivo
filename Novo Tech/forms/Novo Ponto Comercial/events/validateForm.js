function validateForm(form){
	var msg = "";
	
	if(form.getValue("#caixa1") == ""){
        msg = 'Este campo está vazio!';
    }
	
	if(msg !== '') throw msg;
}