import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const AboutPage = (props) => {
  const { user } = props;

  return (
    <div className="flex flex-col gap-3 px-2">
      <h2 className="font-bold text-2xl">Hello, {user.email}</h2>
      <p>
        Account created at: {new Date(user.createdAt).toLocaleDateString()}{" "}
      </p>
      <Link to="/notes" className="border-2 py-1 px-2 text-xl">
        Check notes
      </Link>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(AboutPage);
