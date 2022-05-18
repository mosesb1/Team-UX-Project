// import anime1 from "./ImagesCarousel/anime1.jpeg"
// import anime2 from "./ImagesCarousel/anime2.jpeg"
// import anime3 from "./ImagesCarousel/anime3.jpeg"
import ImageUploads from "../ImageUploads/ImageUploads"
import { useState, useEffect } from "react"

export default function ProfileCarousel(){
const [image, setImage] = useState('')
const [carousel, setCarousel] = useState([
  "",
  "",
  "",
])

const [counter, setCounter ] = useState(0)
const [formData, setFormData] = useState({
  profileImageUrl: '',
})

useEffect(() => {
  if (image) {
      console.log(`loading ${image}`)
      setFormData({...formData, profileImageUrl: image})
      const arr = carousel
      arr[counter] = image
      setCounter(counter + 1)
      setCarousel(arr)
  }
}, [image])

    return(
      
      
        <div className="ImageContainer">
       <ImageUploads image={image} setImage={setImage}/>
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  


    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item active">

      <img src={carousel[0] ? carousel[0] : ""} className="d-block w-100" alt="First Image"/>
    
    </div>
    <div className="carousel-item">
      <img src={carousel[1] ? carousel[1] : ""} className="d-block w-100 " alt="Second Image"/>
    </div>
    <div className="carousel-item">
      <img src={carousel[2] ? carousel[2] : ""}  className="d-block w-100" alt="Third Image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    )
}

