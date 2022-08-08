import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';
// export default function PrivateRoute({component:Component,...rest}) {
export default function PrivateRoute({children }) {
    const {currentUser} = useAuth();
//   return currentUser ? (
//     <Route {...rest}>{(props)=> <Component {...props}/> }</Route>
//   ) : ( <Navigate  to="/login" />);
// }


return currentUser ? children: <Navigate  to="/login" />;
}