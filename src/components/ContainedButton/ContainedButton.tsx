import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { Button } from './ContainedButton.css';

const ContainedButton = (props: ButtonProps) => {
  const { color = 'primary' } = props;
  return <Button variant="contained" {...props} color={color} />;
};

export default ContainedButton;