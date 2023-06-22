/* eslint-disable camelcase */
import React from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { styled } from '@mui/system';

interface Category {
  id: number;
  name: string;
}

interface FilterComponentProps {
  categories: Category[];
  onCategorySelect: (category_id: number) => void;
}

const StyledButton = styled(Button)`
  color: black;
  font-family: 'Poppins', sans-serif;
  background-color: #f3f1f1;
  border: none;
  text-transform: none;
  font-size: 16px;
  border-radius: 4px;
  padding: 10px;
  margin-left: 10px;

  &:hover {
    background-color: #fe724c;
    border: none;
  }

  &:active {
    background-color: #fe724c;
    border: none;
  }
`;

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  onCategorySelect,
}) => {
  const handleCategorySelect = (category_id: number) => {
    onCategorySelect(category_id);
  };

  return (
    <ButtonGroup
      sx={{
        display: 'inline-flex',
        height: 70,
        width: '100%',
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {categories.map(category => (
        <Grid item key={category.id} spacing={5}>
          <StyledButton onClick={() => handleCategorySelect(category.id)}>
            {category.name}
          </StyledButton>
        </Grid>
      ))}
    </ButtonGroup>
  );
};

export default FilterComponent;
