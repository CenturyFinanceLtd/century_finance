import React, { useRef, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const API_URL = "https://api.centuryfinancelimited.com/api/blogs/add";

const AddBlogLayer = () => {
  // ... all your state and other functions remain the same ...
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [authorImageFile, setAuthorImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState(null);
  const [editorValue, setEditorValue] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "Stock Market",
    slug: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
    authorName: "",
    authorDescription: "",
  });
  const quillRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAuthorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAuthorImageFile(file);
      setAuthorImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setThumbnailFile(null);
    setImagePreview(null);
  };

  const handleRemoveAuthorImage = () => {
    setAuthorImageFile(null);
    setAuthorImagePreview(null);
  };

  // --- FORM SUBMISSION ---
  const handleSave = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const editorContent = quillRef.current.getEditor().root.innerHTML;

    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("slug", formData.slug);
    data.append("metaTitle", formData.metaTitle);
    data.append("metaKeywords", formData.metaKeywords);
    data.append("metaDescription", formData.metaDescription);
    data.append("authorName", formData.authorName);
    data.append("authorDescription", formData.authorDescription);
    data.append("description", editorContent);

    if (thumbnailFile) data.append("thumbnail", thumbnailFile);
    if (authorImageFile) data.append("authorImage", authorImageFile);

    try {
      await axios.post(API_URL, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog post submitted successfully!");
    } catch (error) {
      // --- 👇 NEW: IMPROVED ERROR HANDLING ---
      console.error("Error submitting the form:", error.response || error);

      // Check for the specific 'slug already exists' error
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message); // Show the specific message from the server
      } else {
        // Show a generic message for all other errors
        alert(
          "Failed to submit blog post. Please check the console for details."
        );
      }
      // --- END OF NEW HANDLING ---
    }
  };

  // ... rest of the component (modules, formats, and JSX) remains the same ...
  const modules = {
    toolbar: { container: "#toolbar-container" },
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "list",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    // Your entire JSX form goes here
    <div className="row gy-4">
      <div className="col-lg-12">
        <div className="card mt-24">
          <div className="card-header border-bottom">
            <h6 className="text-xl mb-0">Add New Post</h6>
          </div>
          <div className="card-body p-24">
            <form onSubmit={handleSave} className="d-flex flex-column gap-20">
              {/* Post Title */}
              <div>
                <label
                  className="form-label fw-bold text-neutral-900"
                  htmlFor="title">
                  Post Title:
                </label>
                <input
                  type="text"
                  className="form-control border border-neutral-200 radius-8"
                  id="title"
                  placeholder="Enter Post Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Post Category */}
              <div>
                <label
                  className="form-label fw-bold text-neutral-900"
                  htmlFor="category">
                  Post Category:
                </label>
                <select
                  id="category"
                  className="form-control border border-neutral-200 radius-8"
                  value={formData.category}
                  onChange={handleInputChange}>
                  <option value="Stock Market">Stock Market</option>
                  <option value="Equity">Equity</option>
                  <option value="Commodity">Commodity</option>
                  <option value="Forex Market">Forex Market</option>
                </select>
              </div>

              {/* Path (Slug) */}
              <div>
                <label
                  className="form-label fw-bold text-neutral-900"
                  htmlFor="slug">
                  Path (Slug):
                </label>
                <input
                  type="text"
                  className="form-control border border-neutral-200 radius-8"
                  id="slug"
                  placeholder="enter-a-unique-path"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Meta Title */}
              <div>
                <label
                  className="form-label fw-bold text-neutral-900"
                  htmlFor="metaTitle">
                  Meta Title:
                </label>
                <input
                  type="text"
                  className="form-control border border-neutral-200 radius-8"
                  id="metaTitle"
                  placeholder="Enter Meta Title"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                />
              </div>

              {/* Meta Keywords */}
              <div>
                <label
                  className="form-label fw-bold text-neutral-900"
                  htmlFor="metaKeywords">
                  Meta Keywords:
                </label>
                <input
                  type="text"
                  className="form-control border border-neutral-200 radius-8"
                  id="metaKeywords"
                  placeholder="Enter Meta Keywords (comma-separated)"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                />
              </div>

              {/* Meta Description */}
              <div>
                <label
                  className="form-label fw-bold text-neutral-900"
                  htmlFor="metaDescription">
                  Meta Description:
                </label>
                <textarea
                  className="form-control border border-neutral-200 radius-8"
                  id="metaDescription"
                  rows="3"
                  placeholder="Enter Meta Description"
                  value={formData.metaDescription}
                  onChange={handleInputChange}></textarea>
              </div>

              {/* Post Description (Quill Editor) */}
              <div>
                <label className="form-label fw-bold text-neutral-900">
                  Post Description
                </label>
                <div className="border border-neutral-200 radius-8 overflow-hidden">
                  <div id="toolbar-container">
                    <span className="ql-formats">
                      <select className="ql-font"></select>
                      <select className="ql-size"></select>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-bold"></button>
                      <button className="ql-italic"></button>
                      <button className="ql-underline"></button>
                      <button className="ql-strike"></button>
                    </span>
                    <span className="ql-formats">
                      <select className="ql-color"></select>
                      <select className="ql-background"></select>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-script" value="sub"></button>
                      <button className="ql-script" value="super"></button>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-header" value="1"></button>
                      <button className="ql-header" value="2"></button>
                      <button className="ql-header" value="3"></button>
                      <button className="ql-header" value="4"></button>
                      <button className="ql-blockquote"></button>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-list" value="ordered"></button>
                      <button className="ql-list" value="bullet"></button>
                      <button className="ql-indent" value="-1"></button>
                      <button className="ql-indent" value="+1"></button>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-direction" value="rtl"></button>
                      <select className="ql-align"></select>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-link"></button>
                      <button className="ql-image"></button>
                      <button className="ql-video"></button>
                      <button className="ql-formula"></button>
                    </span>
                    <span className="ql-formats">
                      <button className="ql-clean"></button>
                    </span>
                  </div>
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={editorValue}
                    onChange={setEditorValue}
                    modules={modules}
                    formats={formats}
                    placeholder="Compose an epic..."
                  />
                </div>
              </div>

              {/* Author Details Card */}
              <div className="card">
                <div className="card-header border-bottom">
                  <h6 className="text-xl mb-0">Author Details</h6>
                </div>
                <div className="card-body p-24 d-flex flex-column gap-20">
                  <div>
                    <label
                      className="form-label fw-bold text-neutral-900"
                      htmlFor="authorName">
                      Author Name:
                    </label>
                    <input
                      type="text"
                      className="form-control border border-neutral-200 radius-8"
                      id="authorName"
                      placeholder="Enter Author Name"
                      value={formData.authorName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="form-label fw-bold text-neutral-900"
                      htmlFor="authorDescription">
                      Author Description:
                    </label>
                    <textarea
                      className="form-control border border-neutral-200 radius-8"
                      id="authorDescription"
                      rows="3"
                      placeholder="Enter Author Description"
                      value={formData.authorDescription}
                      onChange={handleInputChange}></textarea>
                  </div>
                  <div>
                    <label className="form-label fw-bold text-neutral-900">
                      Author Image
                    </label>
                    <div className="upload-image-wrapper">
                      {authorImagePreview ? (
                        <div className="uploaded-img position-relative h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                          <button
                            type="button"
                            className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex bg-danger-600 w-40-px h-40-px justify-content-center align-items-center rounded-circle"
                            onClick={handleRemoveAuthorImage}>
                            <span className="text-2xl text-white">&times;</span>
                          </button>
                          <img
                            id="uploaded-author-img__preview"
                            className="w-100 h-100 object-fit-cover"
                            src={authorImagePreview}
                            alt="Uploaded Author"
                          />
                        </div>
                      ) : (
                        <label
                          className="upload-file h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                          htmlFor="upload-author-file">
                          <span className="fw-semibold text-secondary-light">
                            Upload Image
                          </span>
                          <input
                            id="upload-author-file"
                            type="file"
                            hidden
                            onChange={handleAuthorImageChange}
                            accept="image/*"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="form-label fw-bold text-neutral-900">
                  Upload Thumbnail
                </label>
                <div className="upload-image-wrapper">
                  {imagePreview ? (
                    <div className="uploaded-img position-relative h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                      <button
                        type="button"
                        className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex bg-danger-600 w-40-px h-40-px justify-content-center align-items-center rounded-circle"
                        onClick={handleRemoveImage}>
                        <span className="text-2xl text-white">&times;</span>
                      </button>
                      <img
                        id="uploaded-img__preview"
                        className="w-100 h-100 object-fit-cover"
                        src={imagePreview}
                        alt="Uploaded"
                      />
                    </div>
                  ) : (
                    <label
                      className="upload-file h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                      htmlFor="upload-file">
                      <span className="fw-semibold text-secondary-light">
                        Upload Thumbnail
                      </span>
                      <input
                        id="upload-file"
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary-600 radius-8">
                Submit Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogLayer;
