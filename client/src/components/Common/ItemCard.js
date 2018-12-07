import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

function ItemCard(props) {
  const { title, newsletter, cat } = props.item;
  return (
    <Grid item xs={3}>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <Typography variant="button" style={{ paddingLeft: 8 }}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            style={{ paddingLeft: 8, textTransform: "lower-case" }}
          >
            {cat.toLowerCase()}
          </Typography>
        </div>
        <a rel="noopener noreferrer" href={newsletter} target="_blank">
          <IconButton style={{ padding: 4 }} variant="fab" color="primary">
            <ArrowDownward fontSize="small" />
          </IconButton>
        </a>
      </div>
    </Grid>
  );
}

export default ItemCard;
