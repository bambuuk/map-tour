import React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Link to="/vegas">
          <Paper elevation={3}>
            <img src={tour?.image} alt={tour?.name} className="img" />
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour?.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: "12.5px" }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour?.duration}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <Rating
                  size="small"
                  name="read-only"
                  value={tour?.rating}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour?.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>
                  {tour?.numberOfReviews}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" component="h3">
                  From C ${tour?.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
