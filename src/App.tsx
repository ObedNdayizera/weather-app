import { Grid } from "@mui/material";
import { Header, Navbar } from "./components";

function App() {
  return (
    <Grid p={2.6} container columnSpacing={2.5} className="appContainer">
      <Navbar />
      <Header />
    </Grid>
  );
}

export default App;
