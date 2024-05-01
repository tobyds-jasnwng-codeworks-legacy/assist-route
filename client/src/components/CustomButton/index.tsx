
import { Button } from '@mui/material';


function CustomButton({ content, sxCustom }) {
  

  const sxDefault = {
    textTransform: 'none',
    fontFamily: 'Josefin Sans',
    boxShadow: 0,
    borderRadius: 5,
    fontSize: 24,
  };
    
  const sx = { ...sxDefault, ...sxCustom };

  return (
    <>
      <Button size="large" className="customButtom" sx={sx} variant="contained">{content}</Button>
    </>
  );
}

export default CustomButton;
