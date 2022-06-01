// import anime1 from "./ImagesCarousel/anime1.jpeg"
// import anime2 from "./ImagesCarousel/anime2.jpeg"
// import anime3 from "./ImagesCarousel/anime3.jpeg"
import ImageUploads from "../ImageUploads/ImageUploads"
import { updateUser } from '../../utilities/api/users/users-api'
import { useState, useEffect } from "react"


export default function ProfileCarousel({ user, setUser, profileUser }){
const [image, setImage] = useState('')
const [carousel, setCarousel] = useState([''])
const [counter, setCounter ] = useState(0)
const [formData, setFormData] = useState({
  carouselImg: '',
})
const [ newUserData, SetNewUserData ] = useState(profileUser)

const updateUserOnMongoDb = async () => {
  const payload = profileUser
  payload.profileCarousel = carousel
  // console.log(payload)
  const response = await updateUser(newUserData)
  console.log(response)
  // setUser(newUserData)
}

useEffect(() => {
  if (image) {
      console.log(`loading ${image}`)
      setFormData({...formData, carouselImg: image})
      const arr = carousel
      arr[counter] = image
      setCounter(counter + 1)
      setCarousel(arr)
      SetNewUserData({ ...newUserData, profileCarousel: carousel})
      updateUserOnMongoDb()
  }
}, [image])

useEffect(() => {
  setCarousel(profileUser.profileCarousel)
},[])
  
  return(

    carousel[0] ?
    <div className="ImageContainer">
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          {
            carousel.map((pic, idx) => {
                return (
                  idx === 0 ?
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  :
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} aria-label={`Slide ${idx}`}></button>
              )
            })
          }
        </div>

        <div className="carousel-inner">
          {
            carousel.map((pic, idx) => {
                return (
                  idx === 0 ?
                  <div className="carousel-item active">
                    <img src={carousel[0]} className="d-block w-100" alt="First Image"/>
                  </div>
                  :
                  <div className="carousel-item">
                    <img src={carousel[idx]} className="d-block w-100 " alt="Other Image"/>
                  </div>
              )
            })
          }
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
      
      {user._id === profileUser._id && <ImageUploads image={image} setImage={setImage}/>}

    </div>
    :
    user._id === profileUser._id ? <ImageUploads image={image} setImage={setImage}/> : ''
  )
}