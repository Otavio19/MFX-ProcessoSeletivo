function displayFields(form,customHTML){ 
    var numAtividade = getValue("WKNumState");
    
    if(numAtividade == '0' ){
        form.setVisibleById("aprovGestor", false)
        form.setVisibleById("aprovRh", false)
    
    }

    if(numAtividade == '4' ){
        form.setVisibleById("aprovRh", false)
    }

    if(numAtividade == '13' ){
        form.setVisibleById("aprovGestor", false)
    }
}