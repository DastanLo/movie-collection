import React from 'react';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Alert from '@material-ui/lab/Alert';

const ErrorMessage = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Something went wrong <strong>Please reload the page!</strong>
    </Alert>
  );
};

export default ErrorMessage;
