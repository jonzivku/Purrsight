import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';


export function AlertDismissible(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>No noooo noooooo</Alert.Heading>
        <p>
          { props.message }
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

AlertDismissible.defaultProps = {
  message: "No idea what could've gone wrong"
}

// export default AlertDismissible;