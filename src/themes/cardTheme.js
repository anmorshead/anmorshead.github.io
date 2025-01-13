import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.6)', 
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)', 
          },
        },
      },
    },
  },
});

export default theme;
