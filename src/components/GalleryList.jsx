
// import App from "./App/App";
import GalleryItem from "./GalleryItem";


function GalleryList({ galleryList, updateLikes }) {
  console.log('galleryList: The Prop:', galleryList);
  return (
    <ul>
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            updateLikes={updateLikes}
            galleryItem={galleryItem} />
        )
      })}
    </ul>
  )
}

export default GalleryList;