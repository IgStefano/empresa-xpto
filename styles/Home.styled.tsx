import { Box, styled } from '@mui/material';

export const StyledBox = styled((props) => <Box display="flex" alignItems="center" justifyContent="center" gap="8px" {...props} />)(
    () => ({
      textTransform: 'none',
      fontWeight: 500,
      padding: "4px 12px",
      backgroundColor: "#f7f8f8",
      color: "#180f55",
      fontSize: 16,
      '& :hover': {
        backgroundColor: "#f7f8f8",
    },
      borderRadius: 8,
    }),
);