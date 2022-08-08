import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import SignUp from '../pages/SignUp';
import '../styles/app.css'
import Layout from './Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {AuthProvider} from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
function App() {
  return (

           
            <Router>
              <AuthProvider>
                <Layout>
                <Routes>
                      <Route   path="/" element={<Home />} />
                      <Route path="/quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute> } />
                      <Route path="/result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
                      <Route path="/login" element={<PublicRoute><LogIn /></PublicRoute> } />
                      <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
                  </Routes>
                  </Layout>
                </AuthProvider>
              </Router>
           

      
  );
}

export default App;
