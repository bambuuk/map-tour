import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import QuiltedImageList from "../components/QuiltedImageList";
import CustomizedAccordions from '../components/Accordian';
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: "100%", maxWidth: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'  }}>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/180313182911-01-las-vegas-travel-strip.jpg?q=w_3418,h_2556,x_0,y_0,c_fill"
          alt=""
          height='325px'
        />
        <QuiltedImageList />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolore id soluta in. Possimus iusto beatae eos inventore, minima asperiores consequatur numquam voluptate vitae, placeat exercitationem facere assumenda debitis consequuntur.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Ask Questions
        </Typography>
        <CustomizedAccordions />
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
