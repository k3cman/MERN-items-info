import React, { Fragment } from "react";
import ItemCard from "./ItemCard";
import BrandHeading from "./BrandHeading";
import { Grid } from "@material-ui/core";

function RenderItemCards(props) {
  const { items, brand } = props;
  const renderItems = items.map(item => <ItemCard key={item.id} item={item} />);
  return (
    <div className="render-items">
      <BrandHeading style={{ textAlign: "center" }} title={brand} />
      <Grid container spacing={8}>
        {renderItems}
      </Grid>
    </div>
  );
}

export default RenderItemCards;
