const initSlider = () => {
  
  const imageList = document.querySelector(".explore-container .image_list");
  const slideButtons = document.querySelectorAll(".explore-container .slide-button");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  

  slideButtons.forEach(button => {
      button.addEventListener("click",()=>{
          const direction = button.id === "prev-slide"? -1: 1;
          const scrollAmount = (imageList.clientWidth/2)*direction;
          console.log(imageList.scrollLeft >= maxScrollLeft? 1 : 0)
          console.log(maxScrollLeft)
          imageList.scrollBy({left:scrollAmount, behaviour:"smooth"});
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      })
  })

  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0? "none" : "block";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft? "none" : "block";
  }

  

  imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      
  });
 
}

window.addEventListener("load",initSlider);