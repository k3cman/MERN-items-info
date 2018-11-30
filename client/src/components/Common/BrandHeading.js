import React from "react";
import { Typography } from "@material-ui/core";

function BrandHeading(props) {
  if (props.img === "" || props.img === null) {
    return <Typography variant="h5">{props.title}</Typography>;
  } else {
    return <img src={props.img} height="30" />;
  }
}

export default BrandHeading;
