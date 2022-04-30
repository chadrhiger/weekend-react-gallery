import GalleryItem from "./GalleryItem.jsx";

function GalleryList({galleryList}) {
  console.log('galleryList: The Prop:', galleryList);
  return (
    <ul>
      {galleryList.map((gallery) => {
        return (
          <GalleryItem
            key={gallery.id}
            creature={gallery} />
        )
      })}
    </ul>
  )
}

export default GalleryList;