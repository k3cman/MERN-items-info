import React, { Fragment } from "react";
import ItemCard from "./ItemCard";
import BrandHeading from "./BrandHeading";
import { Grid } from "@material-ui/core";

function RenderItemCards() {
  return (
    <Fragment>
      <BrandHeading img={null} title="HansGrohe" />
      <Grid container spacing={8}>
        <ItemCard />
      </Grid>
    </Fragment>
  );
}

export default RenderItemCards;
