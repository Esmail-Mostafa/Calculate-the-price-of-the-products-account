let addAllProdect = document.querySelectorAll("#add")
let totalPrise = 0;
let controlGred = document.querySelector("#controlGred")
let priceBtn = document.querySelector("#priceBtn")
let TotalPriceModel = document.querySelector("#TotalPriceModel")



addAllProdect.forEach(function (item){
    item.onclick = function(){
     let divops =document.createElement("div")
    let priceText = document.createElement("p")
    let nameText = document.createElement("p")
    divops.className="col"
    controlGred.appendChild(divops)
    divops.appendChild(nameText)
    divops.appendChild(priceText)
    nameText.textContent += item.getAttribute("mobileName")
    priceText.textContent += "Price :"+ item.getAttribute("price") + " "
    totalPrise +=parseInt(item.getAttribute("price"))
    priceBtn.style.display="block"

    }

 
})


priceBtn.onclick = function(){
    TotalPriceModel.innerHTML="Total Price Is : " + totalPrise +" LE"
}