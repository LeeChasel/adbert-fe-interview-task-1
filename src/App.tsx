import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const disableButtonText = isDisabled ? 'ABLE' : 'DISABLE'

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleClear = () => {
    setCount(0);
  };

  const handleToggleDisable = () => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <ButtonGroup
      orientation="vertical"
      variant="outlined"
      sx={(theme) => ({
        '& .MuiButtonGroup-grouped': {
          fontWeight: 'bold',
        },
        '& .MuiButtonGroup-firstButton': {
          ...(isDisabled && {
            pointerEvents: 'none',
            opacity: theme.palette.action.disabledOpacity,
            color: theme.palette.action.disabled,
            backgroundColor: theme.palette.action.disabledBackground,
          })
        },
      })}
      >
      <Button onClick={handleClick}>
        CLICK:{count}
      </Button>
      <Button onClick={handleClear}>CLEAR</Button>
      <Button onClick={handleToggleDisable}>
        {disableButtonText}
      </Button>
    </ButtonGroup>
  );
}

export default App;
