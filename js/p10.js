var items= Array.from(document.querySelectorAll(".item-img img"))
var layer=document.getElementById("layer")
var close=document.getElementById("close")
var contentImg=document.getElementById("content")
var indexItem
var prev=document.querySelector("#prev")
var next=document.querySelector("#next")
for(i=0;i<items.length;i++){

items[i].addEventListener("click",function(e){



dData(e)

})
}


function dData(e){
indexItem=items.indexOf(e.target)
console.log(indexItem)
 
var src=e.target.src    
contentImg.style.backgroundImage=`url(${src})`
layer.style.display="flex"
}
close.addEventListener("click",function(){
layer.style.display="none"

})
next.addEventListener("click",function(){

indexItem++
if(indexItem==items.length)indexItem=0


contentImg.style.backgroundImage=`url(${items[indexItem].src})`
}



)


prev.addEventListener("click",function(){

indexItem--
if(indexItem<0)indexItem=items.length-1
    
    
contentImg.style.backgroundImage=`url(${items[indexItem].src})`
}
    
    
    
)

 