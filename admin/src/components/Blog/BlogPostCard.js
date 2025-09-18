import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import JoditEditor from "jodit-react";

class BlogPostCard extends React.Component {
  constructor(props) {
    super(props);
    const init = props.initialData || {};
    this.state = {
      title: init.title || "",
      category: init.category || "",
      coverFile: null,
      content: init.content || "",
      excerpt: init.excerpt || "",
      slug: init.slug || "",
      tagsInput: Array.isArray(init.tags) ? init.tags.join(", ") : "",
      posting: false,
      message: "",
      error: "",
      existingCover: init.coverImageUrl || "",
      previewUrl: "",
    };
    this.lastEditorValue = "";
    this.editorConfig = {
      readonly: false,
      // Disable paste confirmation popups that can be hidden by theme CSS
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      defaultActionOnPaste: 'insert_clear_html',
      // Keep toolbar static to avoid layout shifts
      toolbarSticky: false,
    };
    this.fileInputRef = React.createRef();
  }

  stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  inferApiBase = () => {
    // CRA inlines REACT_APP_* at build time; this avoids touching global `process` at runtime.
    const envBase = process.env.REACT_APP_API_BASE_URL;
    if (envBase) return envBase;
    const { protocol, hostname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return 'http://localhost:5000';
    return `${protocol}//${hostname}`;
  }

  handleSubmit = async () => {
    const API_BASE_URL = this.inferApiBase();
    const { title, category, coverFile, content, excerpt, slug, tagsInput, existingCover } = this.state;
    const contentToUse = content || this.lastEditorValue || "";
    if (!title || !contentToUse) {
      if (!title) return this.setState({ error: "Title is required." });
      if (!contentToUse) return this.setState({ error: "Content is required." });
      return;
    }
    this.setState({ posting: true, error: "", message: "" });
    try {
      let coverImageUrl = "";
      if (coverFile) {
        const fd = new FormData();
        fd.append("image", coverFile);
        const upRes = await fetch(`${API_BASE_URL}/api/blogs/upload`, {
          method: "POST",
          body: fd,
        });
        if (!upRes.ok) throw new Error("Image upload failed");
        const upJson = await upRes.json();
        coverImageUrl = upJson.fullUrl || `${API_BASE_URL}${upJson.url}`;
      } else if (this.props.blogId) {
        // keep existing cover when editing if no new file chosen
        coverImageUrl = existingCover || "";
      }

      const author = (() => {
        try {
          const user = JSON.parse(localStorage.getItem("user") || "null");
          return (user && (user.email || user.name)) || "Admin";
        } catch (_) {
          return "Admin";
        }
      })();

      const generatedExcerpt = excerpt || this.stripHtml(contentToUse).slice(0, 180);
      const tags = Array.from(new Set(
        (tagsInput || '')
          .split(',')
          .map(t => t.trim())
          .filter(Boolean)
      ));

      const payload = {
        title,
        slug: slug || undefined,
        category: category || "General",
        coverImageUrl,
        content: contentToUse,
        excerpt: generatedExcerpt,
        tags,
        author,
        status: 'published',
      };
      let res, json;
      if (this.props.blogId) {
        res = await fetch(`${API_BASE_URL}/api/blogs/${this.props.blogId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to update blog");
        // Navigate back to blog list after successful edit
        const base = process.env.PUBLIC_URL || "";
        const trimmed = base.endsWith("/") ? base.slice(0, -1) : base;
        if (this.props.history && this.props.history.push) {
          this.props.history.push(`${trimmed}/bloglist`);
        } else {
          window.location.href = `${trimmed}/bloglist`;
        }
      } else {
        res = await fetch(`${API_BASE_URL}/api/blogs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to create blog");
        this.setState({
          message: "Blog posted successfully.",
          title: "",
          category: "",
          coverFile: null,
          content: "",
          excerpt: "",
          slug: "",
          tagsInput: "",
          existingCover: "",
          previewUrl: "",
        });
        if (this.fileInputRef && this.fileInputRef.current) {
          this.fileInputRef.current.value = "";
        }
      }
      // Optionally navigate to list
      // window.location.href = `${process.env.PUBLIC_URL || ''}/bloglist`;
    } catch (e) {
      this.setState({ error: e.message || "Request failed" });
    } finally {
      this.setState({ posting: false });
    }
  };

  render() {
    const { title, category, content, posting, message, error, excerpt, slug } = this.state;
    return (
      <div className="card">
        <div className="body">
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Custom slug (optional, e.g. my-post)"
              value={slug}
              onChange={(e) => this.setState({ slug: e.target.value })}
            />
          </div>

          <select className="form-control show-tick" value={category} onChange={(e) => this.setState({ category: e.target.value })}>
            <option value="">Select Category</option>
            <option>Web Design</option>
            <option>Photography</option>
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Sports</option>
            <option>News</option>
            <option>General</option>
          </select>

          <div className="form-group mt-3">
            <input
              type="file"
              className="form-control-file"
              id="coverImageFile"
              aria-describedby="fileHelp"
              accept="image/*"
              ref={this.fileInputRef}
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                this.setState({ coverFile: file });
                if (file) {
                  const url = URL.createObjectURL(file);
                  this.setState({ previewUrl: url });
                } else {
                  this.setState({ previewUrl: "" });
                }
              }}
            />
            <small id="fileHelp" className="form-text text-muted">
              Upload a cover image (optional). If not selected, the existing image will be kept.
            </small>
            {(this.state.previewUrl || this.state.existingCover) && (
              <div className="mt-2">
                <img
                  src={this.state.previewUrl || this.state.existingCover}
                  alt="Cover preview"
                  style={{ maxWidth: 300, borderRadius: 6 }}
                />
              </div>
            )}
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Short excerpt (optional)"
              value={excerpt}
              onChange={(e) => this.setState({ excerpt: e.target.value })}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tags (comma-separated, e.g. finance, trading, news)"
              value={this.state.tagsInput}
              onChange={(e) => this.setState({ tagsInput: e.target.value })}
            />
          </div>

          <JoditEditor
            value={content}
            config={this.editorConfig}
            tabIndex={1}
            onBlur={(newContent) => {
              this.setState({ content: newContent });
            }}
            onChange={(newContent) => {
              this.setState({ content: newContent });
            }}
          />
          <button disabled={posting} onClick={this.handleSubmit} type="button" className="btn btn-block btn-primary m-t-20">
            {posting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isEventModal: mailInboxReducer.isEventModal,
});

export default withRouter(connect(mapStateToProps, {})(BlogPostCard));
