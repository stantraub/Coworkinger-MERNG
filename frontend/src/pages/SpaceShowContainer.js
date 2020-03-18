import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Spinner from '../components/spinner/spinner'
import SpaceShow from './SpaceShow'

const FETCH_SPACE = gql`
  query getSpace($spaceId: ID!) {
    getSpace(spaceId: $spaceId) {
      _id
      name
      address
      city
      state
      zipcode
      description
      email
      cost
      phone
      website
      openHour
      closingHour
      neighborhood
      officeCapacity
      peopleCapacity
      availability
      deskDay
      sharedDesk
      meetingRooms
      hours24Access
      transitStationMiles
      wellnessRoom
      phoneBooths
      eventSpace
      bikeParking
      petFriendly
      snacksDrinksIncluded
      teaCoffeeIncluded
      pingPong
      billiards
      foosball
      showers
      onsiteGym
      printersIncluded
      bocceBall
      napRoom
      mainPhoto
    }
  }
`

const SpaceShowContainer = ({ match }) => (
    <Query 
      query={FETCH_SPACE} 
      variables={{ spaceId: match.params.spaceId}}>
        {({ loading, data}) => {
            if (loading) return <Spinner />
            const { getSpace } = data
            return <SpaceShow space={getSpace} />;
        }}
    </Query>
)

export default SpaceShowContainer