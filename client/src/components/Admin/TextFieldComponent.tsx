import { TextField } from '@mui/material';
import { FC } from 'react';
import { TextFieldComponentProps } from '../../utils';

const TextFieldComponent: FC<TextFieldComponentProps> = ({
  dishToUpdate,
  handleChangeInput,
  labelValue,
}) => {
  return (
    <TextField
      label={labelValue}
      value={dishToUpdate[labelValue]}
      name={labelValue}
      onChange={handleChangeInput}
      fullWidth
      margin="normal"
      sx={{ mt: 2, borderRadius: '20%' }}
    />
  );
};

export default TextFieldComponent;
