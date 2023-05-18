import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    flexGrow: 1,
  }));