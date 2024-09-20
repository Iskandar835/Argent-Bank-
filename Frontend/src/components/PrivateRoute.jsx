import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


function PrivateRoute ({ children }) {
    const token = useSelector((state) => state.postReducer.body.token);
    
    if (!token) {
        return <Navigate to="/signin" />
    };
    
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;