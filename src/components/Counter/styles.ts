import type { SxProps, Theme } from '@mui/material';

export const counterButtonGroupStyles: SxProps<Theme> = {
  '& .MuiButtonGroup-grouped': {
    fontWeight: 'bold',
  },
};

export const getCounterButtonStyles = (isDisabled: boolean): SxProps<Theme> => ({
  '& .MuiButtonGroup-firstButton': {
    ...(isDisabled && {
      pointerEvents: 'none',
      opacity: (theme) => theme.palette.action.disabledOpacity,
      color: (theme) => theme.palette.action.disabled,
      backgroundColor: (theme) => theme.palette.action.disabledBackground,
    }),
  },
});
