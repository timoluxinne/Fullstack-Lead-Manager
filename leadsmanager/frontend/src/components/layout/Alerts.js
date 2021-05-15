import React, { Fragment, useEffect } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

const Alerts = ({ alert, error, message }) => {
  useEffect(() => {
    if (error) {
      error.msg.name && alert.error(`NAME: ${error.msg.name}`);
      error.msg.email && alert.error(`EMAIL: ${error.msg.email}`);
      error.msg.message && alert.error(`MESSAGE: ${error.msg.message}`);
    }
    if(message){
        message.leadDeleted && alert.success(message.leadDeleted)
        message.leadAdded && alert.success(message.leadAdded)
    }
  }, [error, message]);
  return <Fragment />;
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
