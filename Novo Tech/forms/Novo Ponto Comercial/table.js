$("#btnAddss").click(function () {
    var produto = $("#inptName").val();
    var descricao = $("#inptDesc").val();
    var unMedida = $("#inptUnMedida").val();
    var quantidade = parseFloat($("#inptQtd").val());
    var valorUnitario = parseFloat($("#inptUnit").val());
    var valorTotal = quantidade * valorUnitario;
    var necessidade = $("#inptNecessidade").val();
    var centroCusto = $("#inptCusto").val();

    if (
      !produto ||
      !descricao ||
      !unMedida ||
      isNaN(quantidade) ||
      isNaN(valorUnitario) ||
      !necessidade ||
      !centroCusto
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    var novaLinha =
      "<tr>" +
      "<td>" +
      produto +
      "</td>" +
      "<td>" +
      descricao +
      "</td>" +
      "<td>" +
      unMedida +
      "</td>" +
      "<td>" +
      quantidade +
      "</td>" +
      "<td>" +
      valorUnitario.toFixed(2) +
      "</td>" +
      "<td>" +
      valorTotal.toFixed(2) +
      "</td>" +
      "<td>" +
      necessidade +
      "</td>" +
      "<td>" +
      centroCusto +
      "</td>" +
      "</tr>";

    $("#tableProduct").append(novaLinha);

    $("#inptName").val("");
    $("#inptDesc").val("");
    $("#inptUnMedida").val("");
    $("#inptQtd").val("");
    $("#inptUnit").val("");
    $("#inptTotal").val("");
    $("#inptNecessidade").val("");
    $("#inptCusto").val("");
  });

  $(document).on("click", ".btnExcluir", function () {
    $(this).closest("tr").remove();
  });

  $("#inptUnit").blur(function(){
	  	var quantidade = parseFloat($("#inptQtd").val());
	    var valorUnitario = parseFloat($("#inptUnit").val());
	    var valorTotal = quantidade * valorUnitario;
	    
	    $("#inptTotal").val(valorTotal.toFixed(2));
	});