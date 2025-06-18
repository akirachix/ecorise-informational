function scrollGallery(direction) {
  const gallery = document.getElementById('gallery');
  const scrollAmount = 400; 
  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}