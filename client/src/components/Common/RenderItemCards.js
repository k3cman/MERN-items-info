import React, { Fragment } from "react";
import ItemCard from "./ItemCard";
import BrandHeading from "./BrandHeading";
import { Grid } from "@material-ui/core";

function RenderItemCards(props) {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <BrandHeading img={null} title={props.brand} />
      <Grid container spacing={8}>
        <ItemCard />
      </Grid>
    </div>
  );
}

export default RenderItemCards;
