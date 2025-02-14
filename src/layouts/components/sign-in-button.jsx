import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }) {
  return (
    <Button
      data-slot="purchase"
      variant="contained"
      rel="noopener"
      target="_blank"
      component={RouterLink}
      href={CONFIG.auth.redirectPath}
      sx={sx}
      {...other}
    >
      Sign in
    </Button>
  );
}
