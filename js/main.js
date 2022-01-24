function consultaCep(){
   var cep = document.getElementById("cep").value;
   console.log(cep)
   var url = `https://viacep.com.br/ws/${cep}/json/`
   console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("cidade").innerHTML = response.localidade;
            document.getElementById("UF").innerHTML = response.uf;
        }
    });
}