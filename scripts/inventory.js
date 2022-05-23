let productData=JSON.parse(localStorage.getItem("data"))||[];

productData.map(function(elem,ind){
    var div=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.image;
    let type=document.createElement("h1")
    type.innerText=elem.type;
    let desc=document.createElement("h2");
    desc.innerText=elem.desc;
    let price=document.createElement("h3");
    price.innerText=elem.price;

    let remove=document.createElement("button");
    remove.innerText="Remove"
    remove.setAttribute("id","remove_btn");
    remove.addEventListener("click",function(){
        removeProducts(elem,ind)
        location.reload();
    })
    div.append(img,type,desc,price,remove);
    document.querySelector("#all_products").append(div);
});
function removeProducts(ind){
    console.log(ind);
    productData.splice(ind,1);
    localStorage.setItem("data",JSON.stringify(productData));
}