import { Box, type SxProps, type Theme } from '@mui/material';
import Counter from './components/Counter/Counter';

const appContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
};

function App() {
  return (
    <Box sx={appContainerStyles}>
      <Counter />
    </Box>
  );
}

export default App;
