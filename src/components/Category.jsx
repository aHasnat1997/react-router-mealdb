import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
  const { categories } = useLoaderData();
  // console.log(categories);
  return (
    <>
      <div className='my-20 grid grid-cols-3 gap-16'>
        {
          categories.map(category => <div key={category.idCategory} className='cursor-pointer'>
            <img src={category.strCategoryThumb} alt="category image" />
            <h1 className='text-center text-2xl'>{category.strCategory}</h1>
          </div>)
        }
      </div>
    </>
  );
};

export default Category;
