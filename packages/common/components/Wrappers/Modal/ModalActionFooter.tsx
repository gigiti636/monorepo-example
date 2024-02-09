import type { StackProps, SxProps } from '@mui/material';
import { Button, Stack } from '@mui/material';
import { MouseEventHandler } from 'react';

interface ModalActionFooterProps extends StackProps {
  cancelAction?: MouseEventHandler | undefined;
  cancelActionLabel?: string;
  action: string;
  callToAction: () => void;
  callToActionIsDelete: boolean;
  disabled?: boolean;
  sx?: SxProps;
}

const ModalActionFooter = ({
  cancelAction,
  cancelActionLabel,
  action,
  callToAction,
  disabled = false,
  callToActionIsDelete = false,
  sx,
  ...rest
}: ModalActionFooterProps) => {
  return (
    <Stack flexDirection={'row'} justifyContent={'end'} mt={6} sx={sx} {...rest}>
      {cancelAction && (
        <Button
          color={!callToActionIsDelete ? 'secondary' : 'inherit'}
          sx={{ fontSize: (theme) => theme.typography.fontSize * 1.35, borderRadius: '11px' }}
          onClick={cancelAction}
        >
          {cancelActionLabel ? cancelActionLabel : 'Cancel'}
        </Button>
      )}

      <Button
        onClick={callToAction}
        disabled={disabled}
        color={!callToActionIsDelete ? 'secondary' : 'error'}
        variant={'contained'}
        sx={{ fontSize: (theme) => theme.typography.fontSize * 1.35, borderRadius: '11px' }}
      >
        {action}
      </Button>
    </Stack>
  );
};

export default ModalActionFooter;
