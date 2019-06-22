/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import propTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = (WrappedComponent) => {
class ConnectedAlert extends React.Component {
    render() {
        const { alert } = this.context;
        const { alertWithType } = this.context;
    return (
        <WrappedComponent
        {...this.props}
        alertWithType={alertWithType}
        alert={alert}
        />
    );
    }
}

ConnectedAlert.contextTypes = {
    alertWithType: propTypes.func,
    alert: propTypes.func,
};

return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
