import React from 'react';
import { Link } from 'react-router-dom'
import {
  Button, Jumbotron
} from 'react-bootstrap'

const MyJobsJumbotron = (props) => {
  return (
    <div>
      {props.jobs!==null && props.jobs.length === 0 &&
        <Jumbotron>
          <h1>{props.title}</h1>
          <p>To book a job, please click the button below.</p>
          <p>
            <Link to={`/clients/${props.id}`}>
            <Button bsStyle="primary">Book Job</Button>
          </Link>
        </p>
      </Jumbotron>
    }
    </div>
  )
}

export default MyJobsJumbotron;
