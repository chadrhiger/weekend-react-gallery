
// import App from "./App/App";
import GalleryItem from "./GalleryItem";


function GalleryList({ galleryList, updateLikes }) {
  console.log('galleryList: The Prop:', galleryList);
  return (
    <div>
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            updateLikes={updateLikes}
            galleryItem={galleryItem} />
        )
      })}
    </div>
  )
}

export default GalleryList;