// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal

document.getElementById("reiko").onclick = function(){
  console.log('dad')
  modal.style.display = "block";
  document.getElementById("img01").src = this.src;
}

document.getElementById("reiko1").onclick = function(){
  modal.style.display = "block";
  document.getElementById("img01").src = document.getElementById("reikoimg1").src;
}

document.getElementById("reiko2").onclick = function(){
  modal.style.display = "block";
  document.getElementById("img01").src = document.getElementById("reikoimg2").src;
}

document.getElementById("reiko3").onclick = function(){
  modal.style.display = "block";
  document.getElementById("img01").src = document.getElementById("reikoimg3").src;
}

// close  function
document.getElementById("myModal").onclick = function() {
  modal.style.display = "none";
}
