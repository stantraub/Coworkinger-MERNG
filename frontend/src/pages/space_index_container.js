import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Spinner from '../components/spinner/spinner'
import Spaces from './Spaces'

const GET_SPACES = gql`
  {
    getSpaces {
      _id
      mainPhoto
      neighborhood
      peopleCapacity
      officeCapacity
      availability
      deskDay
      name
      address
      city
      state
      cost
      openHour
      closingHour
      email
      phone
    }
  }
`;

const SpacesContainer = () => (
    <Query query={GET_SPACES}>
      {({loading, data}) => {
        if (loading) return <Spinner />
        return <Spaces spaces={data.getSpaces} />;
      }}
    </Query>
)

export default SpacesContainer