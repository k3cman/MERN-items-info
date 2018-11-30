import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Typography,
  IconButton,
  Paper
} from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={8}>
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
        </Grid>
      </main>
    );
  }
}

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(Main);
