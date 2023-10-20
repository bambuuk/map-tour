import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Calendar from './Calendar';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>BOOK NOW</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Calendar /> 
          <Button color="success" variant="outlined" sx={{fontSize: '18px', padding: '10px', borderRadius: '8px', }}>Book</Button>
        </Box>
      </Modal>
    </div>
  );
}