import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";

// API base URL - adjust based on your backend
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

class FileEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      selectedAccount: null,
      selectedFolder: "inbox",
      emails: [],
      selectedEmail: null,
      loading: false,
      error: null,
      showCompose: false,
      composeData: {
        to: "",
        cc: "",
        subject: "",
        body: "",
      },
      sending: false,
      searchQuery: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchAccounts();
  }

  fetchAccounts = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/emails/accounts`);
      const data = await response.json();
      if (data.success) {
        this.setState({ accounts: data.accounts });
        // Auto-select first configured account
        const configuredAccount = data.accounts.find((a) => a.configured);
        if (configuredAccount) {
          this.selectAccount(configuredAccount);
        }
      }
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
      this.setState({ error: "Failed to load email accounts" });
    }
  };

  selectAccount = (account) => {
    this.setState(
      { selectedAccount: account, selectedEmail: null, emails: [] },
      () => {
        this.fetchEmails("inbox");
      }
    );
  };

  fetchEmails = async (folder) => {
    const { selectedAccount } = this.state;
    if (!selectedAccount) return;

    this.setState({ loading: true, selectedFolder: folder, error: null });

    try {
      const response = await fetch(
        `${API_BASE}/api/emails/${selectedAccount.id}/${folder}`
      );
      const data = await response.json();
      if (data.success) {
        this.setState({ emails: data.emails, loading: false });
      } else {
        this.setState({ error: data.error, loading: false });
      }
    } catch (error) {
      console.error("Failed to fetch emails:", error);
      this.setState({ error: "Failed to load emails", loading: false });
    }
  };

  selectEmail = async (email) => {
    const { selectedAccount, selectedFolder } = this.state;
    this.setState({ selectedEmail: email, loading: true });

    try {
      const folderParam = selectedFolder === "sent" ? "Sent" : "INBOX";
      const response = await fetch(
        `${API_BASE}/api/emails/${selectedAccount.id}/message/${email.uid}?folder=${folderParam}`
      );
      const data = await response.json();
      if (data.success) {
        this.setState({ selectedEmail: data.email, loading: false });
      }
    } catch (error) {
      console.error("Failed to fetch email:", error);
      this.setState({ loading: false });
    }
  };

  handleCompose = () => {
    this.setState({
      showCompose: true,
      composeData: { to: "", cc: "", subject: "", body: "" },
    });
  };

  handleComposeChange = (field, value) => {
    this.setState((prev) => ({
      composeData: { ...prev.composeData, [field]: value },
    }));
  };

  handleSendEmail = async () => {
    const { selectedAccount, composeData } = this.state;
    if (!selectedAccount || !composeData.to || !composeData.subject) {
      alert("Please fill in recipient and subject");
      return;
    }

    this.setState({ sending: true });

    try {
      const response = await fetch(
        `${API_BASE}/api/emails/${selectedAccount.id}/send`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: composeData.to,
            cc: composeData.cc,
            subject: composeData.subject,
            text: composeData.body,
            html: `<p>${composeData.body.replace(/\n/g, "<br>")}</p>`,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
        this.setState({
          showCompose: false,
          sending: false,
          composeData: { to: "", cc: "", subject: "", body: "" },
        });
      } else {
        alert("Failed to send email: " + data.error);
        this.setState({ sending: false });
      }
    } catch (error) {
      console.error("Send email error:", error);
      alert("Failed to send email");
      this.setState({ sending: false });
    }
  };

  handleDeleteEmail = async (email) => {
    const { selectedAccount, selectedFolder } = this.state;
    if (!window.confirm("Are you sure you want to delete this email?")) return;

    try {
      const folderParam = selectedFolder === "sent" ? "Sent" : "INBOX";
      await fetch(
        `${API_BASE}/api/emails/${selectedAccount.id}/message/${email.uid}?folder=${folderParam}`,
        { method: "DELETE" }
      );
      this.fetchEmails(selectedFolder);
      this.setState({ selectedEmail: null });
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  render() {
    const {
      accounts,
      selectedAccount,
      selectedFolder,
      emails,
      selectedEmail,
      loading,
      error,
      showCompose,
      composeData,
      sending,
      searchQuery,
    } = this.state;

    const filteredEmails = emails.filter(
      (email) =>
        email.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.from?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div className="container-fluid">
          <PageHeader
            HeaderText="Email"
            Breadcrumb={[
              { name: "File Manager", navigate: "" },
              { name: "Email", navigate: "" },
            ]}
          />

          <div className="row clearfix">
            {/* Left Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="card">
                <div className="body">
                  {/* Compose Button */}
                  <button
                    className="btn btn-primary btn-block mb-3"
                    onClick={this.handleCompose}
                    style={{
                      borderRadius: "24px",
                      padding: "12px 24px",
                      fontWeight: "500",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    <i className="fa fa-plus mr-2"></i> Compose
                  </button>

                  {/* Folders */}
                  <ul className="list-unstyled mb-4">
                    <li
                      className={`p-2 rounded ${
                        selectedFolder === "inbox"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => this.fetchEmails("inbox")}
                    >
                      <i className="fa fa-inbox mr-2"></i> Inbox
                      {selectedFolder === "inbox" && emails.length > 0 && (
                        <span className="badge badge-light float-right">
                          {emails.length}
                        </span>
                      )}
                    </li>
                    <li
                      className={`p-2 rounded ${
                        selectedFolder === "sent"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => this.fetchEmails("sent")}
                    >
                      <i className="fa fa-paper-plane mr-2"></i> Sent
                    </li>
                    <li
                      className={`p-2 rounded ${
                        selectedFolder === "drafts"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => this.fetchEmails("drafts")}
                    >
                      <i className="fa fa-file mr-2"></i> Drafts
                    </li>
                  </ul>

                  {/* Account Switcher */}
                  <h6 className="text-muted mb-2">
                    <small>ACCOUNTS</small>
                  </h6>
                  <ul className="list-unstyled">
                    {accounts.map((account) => (
                      <li
                        key={account.id}
                        className={`p-2 rounded mb-1 ${
                          selectedAccount?.id === account.id
                            ? "bg-light border-left border-primary"
                            : ""
                        }`}
                        style={{
                          cursor: "pointer",
                          borderLeft:
                            selectedAccount?.id === account.id
                              ? "3px solid #007bff"
                              : "3px solid transparent",
                        }}
                        onClick={() =>
                          account.configured && this.selectAccount(account)
                        }
                      >
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mr-2"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "12px",
                            }}
                          >
                            {account.name.charAt(0).toUpperCase()}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              className="font-weight-bold"
                              style={{ fontSize: "13px" }}
                            >
                              {account.name}
                            </div>
                            <div
                              className="text-muted text-truncate"
                              style={{ fontSize: "11px" }}
                            >
                              {account.email}
                            </div>
                          </div>
                          {account.configured ? (
                            <span
                              className="badge badge-success"
                              style={{ fontSize: "9px" }}
                            >
                              ✓
                            </span>
                          ) : (
                            <span
                              className="badge badge-secondary"
                              style={{ fontSize: "9px" }}
                            >
                              ?
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="col-lg-4 col-md-4">
              <div className="card">
                <div className="header">
                  {/* Search Box */}
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white border-right-0">
                        <i className="fa fa-search text-muted"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0"
                      placeholder="Search mail"
                      value={searchQuery}
                      onChange={(e) =>
                        this.setState({ searchQuery: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div
                  className="body p-0"
                  style={{ maxHeight: "600px", overflowY: "auto" }}
                >
                  {loading && (
                    <div className="text-center p-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="alert alert-danger m-3">{error}</div>
                  )}

                  {!loading && !error && filteredEmails.length === 0 && (
                    <div className="text-center p-4 text-muted">
                      <i className="fa fa-inbox fa-3x mb-3"></i>
                      <p>No emails found</p>
                    </div>
                  )}

                  {filteredEmails.map((email, index) => (
                    <div
                      key={email.uid || index}
                      className={`p-3 border-bottom ${
                        selectedEmail?.uid === email.uid ? "bg-light" : ""
                      } ${!email.isRead ? "font-weight-bold" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => this.selectEmail(email)}
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="text-truncate"
                            style={{ fontSize: "13px" }}
                          >
                            {selectedFolder === "sent"
                              ? `To: ${email.to}`
                              : email.from}
                          </div>
                          <div
                            className="text-truncate"
                            style={{
                              fontWeight: !email.isRead ? "600" : "normal",
                            }}
                          >
                            {email.subject || "(No Subject)"}
                          </div>
                          <div
                            className="text-muted text-truncate"
                            style={{ fontSize: "12px" }}
                          >
                            {email.snippet}
                          </div>
                        </div>
                        <div className="text-muted" style={{ fontSize: "11px" }}>
                          {this.formatDate(email.date)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Preview */}
            <div className="col-lg-5 col-md-4">
              <div className="card">
                {selectedEmail ? (
                  <>
                    <div className="header d-flex justify-content-between align-items-center">
                      <h2
                        className="mb-0"
                        style={{
                          fontSize: "18px",
                          fontWeight: "400",
                          flex: 1,
                        }}
                      >
                        {selectedEmail.subject || "(No Subject)"}
                      </h2>
                      <div>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => this.handleDeleteEmail(selectedEmail)}
                          title="Delete"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="body">
                      {/* Email Header Info */}
                      <div className="d-flex align-items-start mb-4">
                        <div
                          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            flexShrink: 0,
                          }}
                        >
                          {(selectedEmail.from || "?").charAt(0).toUpperCase()}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div className="font-weight-bold">
                            {selectedEmail.from}
                          </div>
                          <div className="text-muted" style={{ fontSize: "12px" }}>
                            To: {selectedEmail.to}
                          </div>
                          {selectedEmail.cc && (
                            <div
                              className="text-muted"
                              style={{ fontSize: "12px" }}
                            >
                              Cc: {selectedEmail.cc}
                            </div>
                          )}
                          <div
                            className="text-muted"
                            style={{ fontSize: "12px" }}
                          >
                            {selectedEmail.date &&
                              new Date(selectedEmail.date).toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Email Body */}
                      <div
                        style={{
                          maxHeight: "400px",
                          overflowY: "auto",
                          wordBreak: "break-word",
                        }}
                      >
                        {selectedEmail.html ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: selectedEmail.html,
                            }}
                          />
                        ) : (
                          <pre
                            style={{
                              whiteSpace: "pre-wrap",
                              fontFamily: "inherit",
                            }}
                          >
                            {selectedEmail.text}
                          </pre>
                        )}
                      </div>

                      {/* Attachments */}
                      {selectedEmail.attachments?.length > 0 && (
                        <div className="mt-4 border-top pt-3">
                          <h6>
                            <i className="fa fa-paperclip mr-2"></i>
                            Attachments ({selectedEmail.attachments.length})
                          </h6>
                          {selectedEmail.attachments.map((att, i) => (
                            <span key={i} className="badge badge-light mr-2">
                              {att.filename}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="body text-center text-muted p-5">
                    <i className="fa fa-envelope-open fa-4x mb-3"></i>
                    <h5>Select an email to read</h5>
                    <p>Click on an email from the list to view its contents</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Compose Modal */}
        {showCompose && (
          <div
            className="modal show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">New Message</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.setState({ showCompose: false })}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="To"
                      value={composeData.to}
                      onChange={(e) =>
                        this.handleComposeChange("to", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Cc"
                      value={composeData.cc}
                      onChange={(e) =>
                        this.handleComposeChange("cc", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={composeData.subject}
                      onChange={(e) =>
                        this.handleComposeChange("subject", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="10"
                      placeholder="Write your message here..."
                      value={composeData.body}
                      onChange={(e) =>
                        this.handleComposeChange("body", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => this.setState({ showCompose: false })}
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleSendEmail}
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <span className="spinner-border spinner-border-sm mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fa fa-paper-plane mr-2"></i> Send
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(FileEmail);
