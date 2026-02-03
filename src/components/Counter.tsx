import { ButtonGroup, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment, reset, toggleDisable } from '../store/counterSlice';

export default function Counter() {
  const dispatch = useAppDispatch();
  const { count, isDisabled } = useAppSelector((state) => state.counter);

  const disableButtonText = isDisabled ? 'ABLE' : 'DISABLE'

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
      <Button onClick={() => dispatch(increment())}>
        CLICK:{count}
      </Button>
      <Button onClick={() => dispatch(reset())}>CLEAR</Button>
      <Button onClick={() => dispatch(toggleDisable())}>
        {disableButtonText}
      </Button>
    </ButtonGroup>
  )
}