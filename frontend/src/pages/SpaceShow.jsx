import React, { useState } from 'react';
// import PicsCarousel from '../modals/pics_carousel';
// import AmenitiesModal from '../modals/amenities_modal';


const SpaceShow = ({ space }) => {
  // const spaceId = props.match.params.postId
  // console.log(spaceId)
  console.log(space)
  const [picsCarousel, setPicsCarousel] = useState(false)
  const [amenitiesModal, setAmenitiesModal] = useState(false)

  // function togglePicsCarousel() {
  //   setPicsCarousel(!picsCarousel)
  // }

  // function toggleAmenitiesModal() {
  //   setAmenitiesModal(!amenitiesModal)

  // }

  return (
    <div>
      <h1>Hi</h1>
    </div>
  )

}

export default SpaceShow