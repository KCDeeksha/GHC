"use client";

import React, { useEffect, useState } from 'react';
import Data from "@/utils/productData";
import ProductCard, { IProduct } from './ProductCard';

const BestSellers = () => {
  const shuffleArray = (array: any) => {
    return array.map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  const [data, setData] = useState<IProduct[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 4));
  }, []);

  const tabsData = ["common", "haircare"];

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArray(Data).slice(0, 4));
      return;
    }

    const filteredData = Data.filter((item: IProduct) =>
      item.category.includes(category)
    );
    setData(shuffleArray(filteredData).slice(0, 4));
  };

  return (
    <div className='container pt-32'>
      <div className='text-center'>
        <h3 className='font-semibold text-5xl'>Best Sellers</h3>

        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl'>
          {tabsData.map((text, index) => (
            <li
              key={text}
              className={`${
                selectedTab === index && "text-accent"
              } cursor-pointer hover:text-accent`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8'>
          {data?.map((item: IProduct, index: number) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
