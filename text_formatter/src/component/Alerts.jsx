import React from 'react'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
export default function Alerts(props) {
    return (
        <div>
          <Alert onClose={() => {}}>{props.alert}</Alert>
        </div>
    )
}
