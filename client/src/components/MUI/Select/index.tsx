
import { Select, FormControl, InputLabel, MenuItem} from '@mui/material';
import { useState } from 'react';

function MuiSelect ({ sxCustom, placeholder }) {
  
  const [route, setRoute] = useState('');

  const sxDefault = {
    borderRadius: 5,
    '&:hover': {
      border: 1,
      fontWeight: 600,
    }
  };
  
  const sxForm = { ...sxDefault, ...sxCustom };
  
  const sxInput = {
    fontFamily: 'Josefin Sans',
    fontSize: 24,
    align: 'right',
  };

  function handleChange (event: SelectChangeEvent) {
    setRoute(event.target.value as string);
  }

  return (
    <>
      <FormControl fullWidth sx={sxForm}>
        <InputLabel sx={sxInput}>{placeholder}</InputLabel>
        <Select
          value={route}
          onChange={handleChange}
        >
          <MenuItem value={1}>Route 1</MenuItem>
          <MenuItem value={2}>Route 2</MenuItem>
          <MenuItem value={3}>Route 3</MenuItem>
        </Select>
      </FormControl>

    </>
  );
}

export default MuiSelect;
