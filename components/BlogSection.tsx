import React from 'react';
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/Group19540.svg",
    title: "Loreum ipsum dolor sit amet",
    date: "Sep 27, 2023",
    comment: 8,
  },
  {
    img: "/Group19560.svg",
    title: "Loreum ipsum dolor sit amet",
    date: "Dec 27, 2023",
    comment: 1,
  },
  {
    img: "/Group19561.svg",
    title: "Loreum ipsum dolor sit amet",
    date: "Sep 27, 2023",
    comment: 6,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-32">
      <h2 className="font-bold text-2xl">Skin Talk</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
