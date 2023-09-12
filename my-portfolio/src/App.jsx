import React from 'react';
import {
  Box,
  Grid,
} from '@chakra-ui/react';

// Import the BannerPanel component
import LandingPanel from './LandingPanel.jsx';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        {/* Add the BannerPanel component */}
        <LandingPanel />
      </Grid>
    </Box>
  );
}

export default App;
