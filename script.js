const cepSearch = document.getElementById("cepSearch");
const btnSearch = document.getElementById ("btnSearch");
const results = document.getElementById ("results");


btnSearch.addEventListener("click" , search ) 


async function search (e) {e.preventDefault()

 //conditions 
 if (cepSearch.value.length === 8) {  





let url = `https://viacep.com.br/ws/${cepSearch.value}/json/`

getUrl = await fetch(url)
info = await getUrl.json()
console.log(info)

if (info.erro !== true) {




let cep = cepSearch.value
let estado = info.uf
let cidade = info.localidade
let logradouro = info.logradouro


document.getElementById ("cep").innerHTML = `<strong> CEP: </strong> ${cep}`
document.getElementById ("estado").innerHTML = `<strong> ESTADO: </strong> ${estado}`
document.getElementById ("cidade").innerHTML = `<strong> CIDADE: </strong> ${cidade}`
document.getElementById ("logradouro").innerHTML = `<strong> LOGRADOURO: </strong> ${logradouro}`

results.setAttribute ("id" , "resultsActive")

document.getElementById("warning").innerHTML = ""
   
}

else{warning.innerHTML = "CEP não Encontrado"}
    warning.style.color = "red"
} 
else {document.getElementById("warning").innerHTML = "CEP Invalido!"
        document.getElementById("warning").style.color="red"
        results.setAttribute ("id" , "results")
}

}