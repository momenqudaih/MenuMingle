/* eslint-disable consistent-return */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import DishList from './dishList';
import FilterComponent from './filter';
import Navbar from './Nav';

interface Category {
  id: number;
  name: string;
}

interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  count: number;
  category_id: number;
}

const categories: Category[] = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Drinks',
  },
  {
    id: 2,
    name: 'Appetizers',
  },
  {
    id: 3,
    name: 'Main Course',
  },
  {
    id: 4,
    name: 'Desserts',
  },
  {
    id: 5,
    name: 'Salads',
  },
];

const Menu = () => {
  const [cat, setCat] = useState<number>(1);
  const [dishes, setDishes] = useState<Dish[]>([]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/dishes');
      setDishes(response.data.data);
      return response.data.data as Dish[];
    } catch (error) {
      throw new Error('Error fetching dishes');
    }
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['dishes'],
    queryFn: fetchDishes,
  });

  if (isLoading) return 'loading...';
  if (isError) return `Error: ${error}`;

  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <FilterComponent
        categories={categories}
        onCategorySelect={e => {
          setCat(e);
        }}
      />
      {dishes && <DishList dishes={dishes} cat={cat} />}
    </div>
  );
};

export default Menu;
