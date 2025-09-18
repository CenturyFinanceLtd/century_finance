import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BlogListCard from "../../components/Blog/BlogListCard";
import SearchCard from "../../components/Blog/SearchCard";
import BlogAdsCard from "../../components/Blog/BlogAdsCard";
import { getApiBaseUrl } from "../../utils/apiBase";
import { blogAdsCardData } from "../../Data/BlogData";

// Helper to infer API base URL similar to BlogPostCard
function inferApiBase() {
  return getApiBaseUrl();
}

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, error: "", blogs: [] };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchBlogs();
  }
  fetchBlogs = async () => {
    this.setState({ loading: true, error: "" });
    try {
      const API_BASE_URL = inferApiBase();
      const res = await fetch(`${API_BASE_URL}/api/blogs`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load blogs");
      this.setState({ blogs: json, loading: false });
    } catch (e) {
      this.setState({ error: e.message || "Request failed", loading: false });
    }
  };

  handleEdit = (id) => {
    const base = process.env.PUBLIC_URL || '';
    const withSlash = base.endsWith('/') ? base.slice(0, -1) : base;
    this.props.history.push(`${withSlash}/blogedit/${id}`);
  };

  handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      const API_BASE_URL = inferApiBase();
      const res = await fetch(`${API_BASE_URL}/api/blogs/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Delete failed");
      this.setState((s) => ({ blogs: s.blogs.filter((b) => b._id !== id) }));
    } catch (e) {
      alert(e.message || "Delete failed");
    }
  };
  render() {
    const { loading, error, blogs } = this.state;
    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Blog List"
              Breadcrumb={[
                { name: "Blog", navigate: "" },
                { name: "Blog List", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 left-box">
                {loading && <div className="alert alert-info">Loading blogs...</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {!loading && blogs.length === 0 && (
                  <div className="alert alert-warning">No blogs found.</div>
                )}
                {blogs.map((b) => (
                  <BlogListCard
                    key={b._id}
                    IsAdmin={true}
                    id={b._id}
                    ImageUrl={b.coverImageUrl}
                    HeaderText={b.title}
                    Details={b.excerpt}
                    Category={b.category}
                    PublishedAt={b.publishedAt}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                  />
                ))}
              </div>
              <div className="col-lg-4 col-md-12 left-box">
                <SearchCard />
                {blogAdsCardData.map((data, i) => {
                  return (
                    <BlogAdsCard
                      key={i}
                      HeaderText={data.HeaderText}
                      RefLink={data.RefLink}
                      PostList={data.PostList}
                      ImageList={data.ImageList}
                      EmailFeedbackBar={data.EmailFeedbackBar}
                      HeaderDetails={data.HeaderDetails}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(BlogList);
