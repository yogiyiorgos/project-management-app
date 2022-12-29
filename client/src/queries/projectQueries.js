import { gql } from '@apollo/client'

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`

/* $id: ID! is defining a variable called $id that is of type ID. The exclamation mark (!) after the type indicates that the variable is required.*/
const GET_PROJECT = gql`
    query getProject($id: ID!) {
        project(id: $id) {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`

export { GET_PROJECTS, GET_PROJECT }