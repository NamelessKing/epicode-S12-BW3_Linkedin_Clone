import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../config/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Wrapper component che protegge le route richiedendo autenticazione
 * Se l'utente non è autenticato, viene reindirizzato alla pagina di login
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
