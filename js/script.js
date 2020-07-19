$("#boton-add").on("click",function(e){
	e.preventDefault();
	var entradaValor = $("#entrada").val();
	var lista = $("#listaItems");
	lista.append(`<ol style="border: 1px solid black;margin: 10px 0px;" > <p> ${entradaValor} </p> <button type="submit" id="nuevoBoton" style="margin: 10px 0px;"> check </button> <button  type="submit" id="nuevoBoton">Delete</button> </ol>`);
	$("#entrada").set = '';
	$("#entrada").val('');
	//alert('f');
})

$( "#listaItems").on( "click", "#nuevoBoton",function(e){
    e.preventDefault();
	var entradaValor = $(this).text();
	
	//console.log(entradaValor);
	var txt = " check ";
	//console.log(txt);
	if(entradaValor === txt){
		if($(this).parent().find("p").css("text-decoration-line") == "line-through")
			$(this).parent().find("p").css("text-decoration", "none");
		else
			$(this).parent().find("p").css("text-decoration", "line-through");
	}
	else{
        $(this).parent().remove();
	}
	
});
