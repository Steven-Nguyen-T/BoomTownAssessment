import { useState } from 'react';
import { Box, Button, Modal, Typography } from "@mui/material";
import './styles.scss';

const ErrorPage = ({error, statusCode}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='error-page'>
      <Typography variant='h5'>There was an issue retrieving the information that you requested. Please check the details for more information. </Typography>
      <Button variant="primary" onClick={handleOpen}>
        View Details
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className='modal'>
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