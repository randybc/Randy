import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = {
    values: []
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then ((response) => {
      this.setState({
        values: response.data
      })
    })
  }
  
  render() {
    return (
      <div>
      <Header as='h2' icon textAlign='center'>
      <Icon circular name='users'/>
      <Header.Content>React Randy</Header.Content>
      </Header>
      <List >
      {this.state.values.map((value: any) => (
        <List.Item Icon name='mail' key={value.id} >{value.name}</List.Item>
        ))}
        </List>
        </div>
        );
      }
    }
    export default App;
    