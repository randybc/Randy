import React, { useState, useEffect, Fragment } from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import "./styles.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { IActivity } from "../models/activity";
import { NavBar } from "../../features/nav/NavBar";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <List>
          {activities.map((activity) => (
            <List.Item Icon name="mail" key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </Container>

    </Fragment>
  );
};

export default App;
