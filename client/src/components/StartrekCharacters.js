import React from 'react'
import {
  Header,
  Segment,
  List,
} from 'semantic-ui-react';
import axios from 'axios';
import {fetchCharacters} from '../reducers/characters';
import {connect} from 'react-redux'
import Character from './Character'

class StartrekCharacters extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch (fetchCharacters("startrek"))
  }

  displayCharacters = () => {
        return this.props.characters.map( character => {
          return(
            <Character character={character} resetCharacters={this.resetCharacterState} />
          )
        })
      }


  render() {
    return(
      <Segment>
        <Header as='h2'>Star Trek</Header>
        <List bulleted>
          {this.displayCharacters()}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(StartrekCharacters);

