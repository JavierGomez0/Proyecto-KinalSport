import { AppRoutes } from "./router/AppRoutes.jsx";
import { Toaster, toast } from "react-hot-toast"
// App.jsx
function App() {
  return (
    <>

    <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "8px",
          },
        }}
      />
      <AppRoutes />
    </>
  );
}
 
export default App;