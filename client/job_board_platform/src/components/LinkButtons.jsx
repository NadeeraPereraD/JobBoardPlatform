import React from 'react';
import Button from "react-bootstrap/Button";

export default function LinkButtons(props) {
  return (
    <div>
        <Button variant="link" style={{color: props.color, textDecoration: 'none', fontSize: props.fSize}}>{props.title}</Button>
    </div>
  )
}
