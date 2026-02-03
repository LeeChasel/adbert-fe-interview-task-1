import { ButtonGroup, Button, type SxProps, type Theme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increment, reset, toggleDisable } from '../../store/counterSlice';
import { selectCount, selectIsDisabled } from '../../store/selectors';
import { BUTTON_LABELS } from '../../constants';
import { counterButtonGroupStyles, getCounterButtonStyles } from './styles';

export default function Counter() {
  const dispatch = useAppDispatch();

  const count = useAppSelector(selectCount);
  const isDisabled = useAppSelector(selectIsDisabled);

  const disableButtonText = isDisabled ? BUTTON_LABELS.ENABLE : BUTTON_LABELS.DISABLE;

  const buttonGroupSx = {
    ...counterButtonGroupStyles,
    ...getCounterButtonStyles(isDisabled),
  } as SxProps<Theme>;

  return (
    <ButtonGroup
      orientation="vertical"
      variant="outlined"
      sx={buttonGroupSx}
    >
      <Button onClick={() => dispatch(increment())}>
        {BUTTON_LABELS.CLICK_PREFIX}{count}
      </Button>
      <Button onClick={() => dispatch(reset())}>
        {BUTTON_LABELS.CLEAR}
      </Button>
      <Button onClick={() => dispatch(toggleDisable())}>
        {disableButtonText}
      </Button>
    </ButtonGroup>
  );
}