import { Box, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
      <Box
        component="footer"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          py: 2, // Padding Y-axis
          px: 3, // Padding X-axis
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" gutterBottom>
          Connect with me on the Web!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4, // Space between icons
          }}
        >
          {/* GitHub Link */}
          <Link href="https://github.com/anmorshead" target="_blank" rel="noopener" color="inherit">
            <IconButton sx={{ color: '#ff63d8' }}>
              <GitHubIcon />
            </IconButton>
          </Link>
          {/* LinkedIn Link */}
          <Link href="https://www.linkedin.com/in/andreamorshead/" target="_blank" rel="noopener" color="inherit">
            <IconButton sx={{ color: '#8ff0fb' }}>
              <LinkedInIcon />
            </IconButton>
          </Link>
          {/* Email Link */}
          <Link href="mailto:andrea.morshead@gmail.com" color="inherit">
            <IconButton sx={{ color: '#Fbd90b' }}>
              <EmailIcon />
            </IconButton>
          </Link>
        </Box>
        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Andrea Morshead
        </Typography>
      </Box>
    );
}

