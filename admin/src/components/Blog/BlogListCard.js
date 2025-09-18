import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BlogListCard extends React.Component {
  render() {
    const {
      ImageUrl,
      HeaderText,
      Details,
      Category,
      PublishedAt,
      IsAdmin,
      id,
      onDelete,
      onEdit,
    } = this.props;

    const imgSrc = ImageUrl || require("../../assets/images/blog/blog-page-1.jpg");
    const published = PublishedAt ? new Date(PublishedAt).toLocaleString() : null;

    return (
      <div className="card single_post">
        <div className="body">
          <div className="img-post">
            <img className="d-block img-fluid" src={imgSrc} alt={HeaderText || "Blog"} />
          </div>
          <h3>
            <a href="blogdetails">{HeaderText}</a>
          </h3>
          <p>{Details}</p>
        </div>
        <div className="footer">
          <div className="actions">
            {IsAdmin ? (
              <>
                <button onClick={() => onEdit ? onEdit(id) : null} className="btn btn-primary mr-2">Edit</button>
                <button onClick={() => onDelete && onDelete(id)} className="btn btn-danger">Delete</button>
              </>
            ) : (
              <Link to="#" className="btn btn-outline-secondary">Continue Reading</Link>
            )}
          </div>
          <ul className="stats">
            <li>
              <span>{Category || "General"}</span>
            </li>
            {published && (
              <li>
                <span>{published}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BlogListCard);
