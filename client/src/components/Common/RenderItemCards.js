import React, { Fragment } from "react";
import ItemCard from "./ItemCard";
import BrandHeading from "./BrandHeading";
import { Grid } from "@material-ui/core";

function RenderItemCards(props) {
  const { items, brand } = props;
  const renderItems = items.map(item => <ItemCard key={item.id} item={item} />);
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <BrandHeading title={brand} />
      <Grid container spacing={8}>
        {renderItems}
      </Grid>
    </div>
  );
}

export default RenderItemCards;
