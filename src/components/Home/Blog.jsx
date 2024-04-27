import { Stack } from "@mui/material";
import React from "react";

const blogData = [
  {
    id: 1,
    title: "Top 10 Tips for Hiring the Best Talent",
    author: "John Smith",
    date: "2024-04-01",
    category: "Recruitment",
    excerpt:
      "Discover the most effective strategies for attracting and retaining top talent in today's competitive job market...",
  },
  {
    id: 2,
    title: "The Future of Remote Work: Trends and Predictions",
    author: "Jane Doe",
    date: "2024-03-15",
    category: "Technology",
    excerpt:
      "Explore the evolving landscape of remote work and learn how organizations can adapt t...",
  },
  {
    id: 3,
    title: "How to Optimize Your Resume for Applicant Tracking Systems",
    author: "David Johnson",
    date: "2024-02-28",
    category: "Career Advice",
    excerpt:
      "Learn valuable tips for optimizing your resume to increase your chances of getting noticed by applicant...",
  },
];

const Blog = () => {
  return (
    <div className="blogs-container">
      <div className="body-content">
        <span className="heading-text">Our Latest Insights</span>
        <span className="subheading-text">
          Stay updated with our informative blog posts.
        </span>
        <Stack direction="row" className="blog-cards-container">
          {blogData.map((blog, index) => (
            <SingleBlog key={index} blog={blog} />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Blog;

const SingleBlog = ({ blog }) => {
  return (
    <div className="singleBlog">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <label className="title">{blog.title}</label>
        <label className="excerpt">{blog.excerpt}</label>

        <div className="extra-details">
          <span className="author">By {blog.author}</span>
          <span className="category">{blog.category}</span>
        </div>
      </Stack>
    </div>
  );
};
