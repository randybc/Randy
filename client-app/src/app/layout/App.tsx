import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "./styles.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { IActivity } from "../models/activity";

interface Istate {
  activities: IActivity[];
}

class App extends Component<{}, Istate> {
  readonly state: Istate = {
    activities: [],
  };

  componentDidMount() {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        this.setState({
          activities: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon circular name="users" />
          <Header.Content>React Randy</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity) => (
            <List.Item Icon name="mail" key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}
export default App;
