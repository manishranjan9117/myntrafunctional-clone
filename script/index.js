let bagitem;
onload();
function onload(){
    let bagitemstr=localStorage.getItem('bagitem');
    bagitem=bagitemstr?JSON.parse(bagitemstr):[];
    displayItemOnHomePage();
        displaybagitem();

}

function addtobag(itemid){
    bagitem.push(itemid);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    displaybagitem();
    
     
}
function displaybagitem(){
    let bagitemcountelement=document.querySelector('.bag-item-count');
    if(bagitem.length>0){
        bagitemcountelement.style.visibility='visible';
        bagitemcountelement.innerText=bagitem.length;

    }
    else{
        bagitemcountelement.style.visibility='hidden';
        
    }
    
}






function displayItemOnHomePage(){
    let elemenet_container = document.querySelector('.items-container');
    
    if(!elemenet_container){
        return;
    }


let innerHTML="";
items.forEach(item=>{
    innerHTML+=`
    <div class="item-container">
    <img src="${item.item_image}" alt="item-image" class="item-image">
    <div class="rating">
        ${item.rating.stars} ⭐| ${item.rating.noOfReview}
         
    </div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}l</div>
    <div class="price">
        <span class="current-price">RS ${item.current_price}</span>
        <span class="original-price">RS${item.original_price}</span>
        <span class="discount">(${item.discount}% OFF)</span>
    </div>
    <button class="Addtobag" onclick="addtobag(${item.id})">Add to Bag</button>
    </div>`;

})
elemenet_container.innerHTML =innerHTML;

}










