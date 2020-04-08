
const btn = document.querySelectorAll(".fa-heart-o");
var i=0
for (var j =0 ;j<btn.length;j++){
btn[j].addEventListener('click',(e)=>{
  i=i+1
  if (i%2!=0){
    e.target.classList.remove("fa-heart-o");
    e.target.classList.add("fa-heart");
  }
  else{
   
   e.target.classList.remove("fa-heart");
   e.target.classList.add("fa-heart-o");
  }
});
}
console.log(btn)


 