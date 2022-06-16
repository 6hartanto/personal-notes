import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      component="form"
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"

    >
      <div>
        <TextField
          fullWidth
          id="outlined-textarea"
          label="Judul Catatan"
          placeholder="Judul Catatan"
          margin='normal'
        />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Isi Catatan"
          multiline
          rows={6}
          margin='normal'
        />
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Buat Catatan
          </Button>
        </Box>

      </div>
    </Box>
  );
}

export default Form;