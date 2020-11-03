import React from 'react'
import "./style.css"
import Image1 from '../../assets/image-1.jpg'
import Image2 from '../../assets/image-2.jpg'
import Image3 from '../../assets/image-3.jpg'

const Carosel = () => {
    const [currentImage, setCurrentImage] = React.useState(1)
    const [images, setImages] = React.useState([
        {
            src:Image1, 
            alt:"Winter",
            text: "Rest is not the answer Activity and therapy help healing most"
        },
        {
            src:Image2, 
            alt:"Sea",
            text: 'Do something today your future self will thank you for'
        },
        {  
            src:Image3, 
            alt:"Night", 
            text: "Take care of your body It's the only place you have to live."
        },
   ])

/**
 * Switch header carousel to next image (swipe right)
 */
function carouselSwipe(pos) {
    let value = currentImage
	if(pos==='l'){
        value = value === 0 ? images.length -1 : value -1
        setCurrentImage(value)
    }else{
        value = value === images.length -1 ? 0 : value +1
        setCurrentImage(value)
    }
    
	// Disparition progressive de l'ancienne image
    // document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-hidden';
	
    // // Apparition progressive de la nouvelle image
    // var displayedCarousel = document.getElementById('carousel-'+newImg);
	// displayedCarousel.className = 'carousel-img carousel-img-hidden';
	// setTimeout(function() {
	// 	displayedCarousel.className = 'carousel-img carousel-img-displayed';
	// },20);
    
    // // Disparition totale de l'ancienne image
	// setTimeout(function() {
	// 	document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img';
	// },520);
    
}


    return (
        <div class="wrapper">

  <div class="carousel">

    <button type="button" id="carousel-arrow-prev" className="carousel-arrow carousel-arrow-prev" arial-label="Image précédente" onClick={() => carouselSwipe('l')}></button>
    <button type="button" id="carousel-arrow-next" className="carousel-arrow carousel-arrow-next" arial-label="Image suivante" onClick={() => carouselSwipe('r')}></button>
    {images.map((image,index) => (
        <div key={index} className={`carousel-img carousel-img${currentImage === index? '-displayed': ''}`} >
            <img 
                id={`carousel-${index}`} 
                src={image.src} 
                alt={image.alt} />
            <span>{image.text}</span>
        </div>
    ))}
  </div>

</div>
    )
}

export default Carosel
