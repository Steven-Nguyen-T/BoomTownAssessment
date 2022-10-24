import { useState } from 'react';
import { Box, Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const ErrorPage = ({error, statusCode}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Typography variant='h5'>There was an issue retrieving the information that you requested. Please check the details for more information. </Typography>
      <Button variant="primary" onClick={handleOpen}>
        View Details
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>Error Details</Typography>
          <Typography>
            <div>{`Error Text: ${error}`}</div>
            <div>{`Status Code: ${statusCode}`}</div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ErrorPage;