import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


function PrivateRoute ({ children }) {
    const token = localStorage.getItem("token")
    
    if (!token) {
        return <Navigate to="/signin" />
    }
    
    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;