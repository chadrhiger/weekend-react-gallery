function GalleryItem({gallery}) {

  // let classToApply;

  return (
    <li>
      console.log({gallery.path});
    </li>
  )
}

export default GalleryItem;


// function CreatureItem({creature}) {

//   let classToApply;

//   if (creature.name === 'Todd') {
//     classToApply = 'toddBackground'
//   }

//   return (
//     <li
//       className={classToApply}>
//       {creature.name} is from {creature.origin}
//     </li>
//   )

// }

// export default CreatureItem;