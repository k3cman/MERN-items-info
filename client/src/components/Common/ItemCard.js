import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

function ItemCard(props) {
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
            TITLE
          </Typography>
          <Typography variant="caption" style={{ paddingLeft: 8 }}>
            subtitle
          </Typography>
        </div>

        <IconButton style={{ padding: 4 }} variant="fab" color="primary">
          <ArrowDownward fontSize="small" />
        </IconButton>
      </div>
    </Grid>
  );
}

export default ItemCard;
