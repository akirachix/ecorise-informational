const form = document.getElementById('myForm');
form.addEventListener('submit',function(event){
event.preventDefault();
const inputData = document.getElementById('feedback').value;
console.log('Input value:',inputData);
});

function scrollGallery(direction) {
  const gallery = document.getElementById('gallery');
  const scrollAmount = 400; 
  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
