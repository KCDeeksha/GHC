import React from 'react'
import CategoryCard from './CategoryCard';

const data = [
    {
        img: "Group19540.svg",
        type: "common",
        quantity: "(4 items)",
    },
    {
        img: "Group19559.svg",
        type: "common",
        quantity: "(8 items)",
    },
    {
        img: "Group19560.svg",
        type: "common",
        quantity: "(6 items)",
    },
    {
        img: "Group19561.svg",
        type: "common",
        quantity: "(6 items)",
    },

];

const category = () => {

}

const Category = () => {
  return (
    <div className='bg-[url(/group19540.jpg)] bg-no-repeat py-16 mt-32'>
        <div className='container text-center text-black'>
            <h3 className="text-[40px] font-medium">Understanding Hair</h3>

            <div className="flex justify-center gap-4 mg:gap-16 pt-8">
                {data.map((item) => (
                    <CategoryCard
                        key={item.type}
                        img={item.img}
                        type={item.type}
                        quantity={item.quantity}
                        />
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Category
