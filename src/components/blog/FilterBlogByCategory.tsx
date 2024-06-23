import { useState, useEffect } from "react";
import Preview from "./Preview.astro";

interface Blog {
  data: {
    title: string;
    category: string;
    emoji: string;
  };
  slug: string;
}

export default function FilterBlogByCategory({ blogs }: { blogs: Blog[] }) {
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    if (category) {
      window.history.pushState({}, '', `${category}`);
    } else {
      window.history.pushState({}, '', '/blogs');
    }
  }, [category]);

  const updateUrl = (value:any) => {
    setCategory(value);
  }


  return (
    <>
      <h1>Filter Blog By Category</h1>
      <select
        value={category}
        onChange={(e) => updateUrl(e.target.value)}
      >
        <option value="/">Select Category</option>
        {blogs.map((blog) => {
          return (
            <option key={blog.slug} value={`${blog.data.category}`}>
              {blog.data.category}
            </option>
          );
        })}
      </select>
      <h2>Selected Category: {category}</h2>
    </>
  );
}
