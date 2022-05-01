import { useState, useEffect } from 'react';


function GalleryItem({ galleryItem, updateLikes }) {
  const [pictureSideUp, updatePictureSideUp]  = useState(true);
  
  const flipPic = () => {
    updatePictureSideUp(!pictureSideUp)
  }

  const renderFlipPic = () => {
    if (pictureSideUp) {
      return <img src={galleryItem.path} width="100" height="100" />
    } else {
      return <div className='flipDescription'>{galleryItem.description} </div> 

    }
  }


  const handleLikes = (e) => {
    e.preventDefault();
    updateLikes(galleryItem.id);
  };


  return (
    <div key={galleryItem.id} >
      <li onClick={flipPic}>
      {renderFlipPic()}
      </li>
      <button onClick={handleLikes}>LIKE</button>
      Likes: {galleryItem.likes}
      
    </ div>
  )
}

export default GalleryItem;


// return (
//   <div>
//     {renderToddText()}
//     <button onClick={flipTodd}>Flip Todd</button>
//   </div>
// )
// }

