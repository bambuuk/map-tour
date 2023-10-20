import { Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import { Fragment } from "react";
import cities from "../data.json";

const Home = () => {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {cities?.map((city) => (
          <Fragment key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour, id) => (
                <TourCard tour={tour} key={id} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default Home;
