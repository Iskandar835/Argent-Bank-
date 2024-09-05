import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute ({ children }) {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to="/signin" />
    }
    return children
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute