import { styled } from '@mui/material/styles';
import { Box, CircularProgress } from '@mui/material';

const RootBox = styled(Box)(() => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  opacity: 0.3,
}));

function Fallback() {
  return (
    <RootBox>
      <CircularProgress size={80} color="primary" sx={{ position: 'absolute' }} />
    </RootBox>
  );
}

export default Fallback;
