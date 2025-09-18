import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BlogPostCard from "../../components/Blog/BlogPostCard";

function inferApiBase() {
  const envBase = process.env.REACT_APP_API_BASE_URL;
  if (envBase) return envBase;
  const { protocol, hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1") return "http://localhost:5000";
  return `${protocol}//${hostname}`;
}

class BlogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, error: "", blog: null };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    try {
      const API_BASE_URL = inferApiBase();
      const res = await fetch(`${API_BASE_URL}/api/blogs/id/${id}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load blog");
      this.setState({ blog: json, loading: false });
    } catch (e) {
      this.setState({ error: e.message || "Request failed", loading: false });
    }
  }

  render() {
    const { loading, error, blog } = this.state;
    const id = this.props.match.params.id;
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
              HeaderText="Edit Blog"
              Breadcrumb={[
                { name: "Blog", navigate: "" },
                { name: "Edit", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12">
                {loading && <div className="alert alert-info">Loading...</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {!loading && blog && (
                  <BlogPostCard blogId={id} initialData={blog} />
                )}
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

export default connect(mapStateToProps, {})(BlogEdit);

