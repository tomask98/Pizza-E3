const resultado = document.querySelector("#Resultado")
const  formulario = document.querySelector("#Formulario")
const btnBusqueda=document.querySelector("#Boton")
const NomPizza= document.querySelector("#NombrePizza")

const precPizza= document.querySelector("#PrecioPizza")
const ingredientesPizza= document.querySelector("#ingredientesPizza")

document.addEventListener('DOMContentLoaded', () =>
{
    MostarPizzas()
})


function MostarPizzas(){
    
    const dato= parseInt(formulario.value)
    pizzas.forEach(pizza =>{
        if(pizza.id === dato){
            NomPizza.textContent =  pizza.nombre
            precPizza.textContent =`${pizza.precio}`
            ingredientesPizza.textContent = `${pizza.ingredientes}`
        }
        

        // const pizzaHtml = document.createElement('p')
        // pizzaHtml.textContent = `Pizza: ${pizza.nombre}`
               
        // resultado.appendChild(pizzaHtml)
        
    })
}

btnBusqueda.addEventListener('click', MostarPizzas)


