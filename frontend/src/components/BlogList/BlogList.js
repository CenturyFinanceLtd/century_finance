import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // For Edit/Delete links

// The URL for your live backend server
const API_BASE_URL = "https://api.centuryfinancelimited.com";

const AllBlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/blogs/all`);
        setBlogs(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blog posts. Please try again later.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty array means this effect runs only once on mount

  if (loading) {
    return (
      <div className="text-center p-5">
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="row gy-4">
      <div className="col-lg-12">
        <div className="card mt-24">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="text-xl mb-0">All Blog Posts</h6>
            <Link to="/add-blog" className="btn btn-primary-600 radius-8">
              Add New Post
            </Link>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Date Published</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <tr key={blog._id}>
                        <td>
                          {blog.thumbnail ? (
                            <img
                              src={`${API_BASE_URL}/${blog.thumbnail.replace(
                                /\\/g,
                                "/"
                              )}`}
                              alt={blog.title}
                              style={{
                                width: "100px",
                                height: "auto",
                                borderRadius: "4px",
                              }}
                            />
                          ) : (
                            "No Image"
                          )}
                        </td>
                        <td>{blog.title}</td>
                        <td>{blog.category}</td>
                        <td>{blog.slug}</td>
                        <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                        <td>
                          {/* These links are placeholders for now */}
                          <Link
                            to={`/edit-blog/${blog.slug}`}
                            className="btn btn-sm btn-outline-secondary me-2">
                            Edit
                          </Link>
                          <button className="btn btn-sm btn-outline-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No blog posts found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsList;
