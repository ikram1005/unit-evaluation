//store the products array in localstorage as "products"
document.querySelector("#add_product").addEventListener("click",myfunction);
function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

let arr=JSON.parse(localStorage.getItem("data"))||[];
function myfunction(event){
    event.preventDefault()
    let type=document.querySelector("#type").value;
    let desc=document.querySelector("#desc").value;
    let price=document.querySelector("#price").value;
    let image=document.querySelector("#image").value;

    let ans=new product(type,desc,price,image);
    arr.push(ans);
    console.log(arr);
    localStorage.setItem("data",JSON.stringify(arr));
    
}
