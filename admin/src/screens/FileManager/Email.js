import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";

// List of company emails to display
const emailAddresses = [
  {
    email: "ceo@centuryfinancelimited.com",
    name: "CEO",
    department: "Executive",
    icon: "fa-user-tie"
  },
  {
    email: "hrishant@centuryfinancelimited.com", 
    name: "Hrishant",
    department: "Management",
    icon: "fa-user"
  },
  {
    email: "hr@centuryfinancelimited.com",
    name: "HR Department",
    department: "Human Resources",
    icon: "fa-users"
  },
  {
    email: "deepak.kumar@centuryfinancelimited.com",
    name: "Deepak Kumar",
    department: "Operations",
    icon: "fa-user"
  }
];

class FileEmail extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      alert(`Email copied: ${email}`);
    });
  };

  render() {
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
              HeaderText="Email Directory"
              Breadcrumb={[
                { name: "File Manager", navigate: "" },
                { name: "Email", navigate: "" },
              ]}
            />

            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      <strong>Company</strong> Email Addresses
                    </h2>
                  </div>
                  <div className="body">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Department</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {emailAddresses.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <i className={`fa ${item.icon} mr-2`}></i>
                                {item.name}
                              </td>
                              <td>
                                <a href={`mailto:${item.email}`} className="text-primary">
                                  {item.email}
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-info">{item.department}</span>
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-primary mr-1"
                                  onClick={() => this.handleEmailClick(item.email)}
                                  title="Send Email"
                                >
                                  <i className="fa fa-envelope"></i>
                                </button>
                                <button
                                  className="btn btn-sm btn-secondary"
                                  onClick={() => this.handleCopyEmail(item.email)}
                                  title="Copy Email"
                                >
                                  <i className="fa fa-copy"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Cards View */}
            <div className="row clearfix">
              {emailAddresses.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card">
                    <div className="body text-center">
                      <div className="mb-3">
                        <i className={`fa ${item.icon} fa-3x text-primary`}></i>
                      </div>
                      <h6 className="mb-1">{item.name}</h6>
                      <span className="badge badge-info mb-2">{item.department}</span>
                      <p className="text-muted small mb-2" style={{ wordBreak: "break-all" }}>
                        {item.email}
                      </p>
                      <div className="mt-2">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => this.handleEmailClick(item.email)}
                        >
                          <i className="fa fa-envelope mr-1"></i> Send Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default connect(mapStateToProps, {})(FileEmail);
