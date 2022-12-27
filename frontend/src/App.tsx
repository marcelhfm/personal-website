import { ThemeProvider } from "@mui/system";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { theme } from "./common/theme";
import { PageLayout } from "./common/page-layout/PageLayout";
import { HomePage } from "./pages/home-page/HomePage";
import { BlogPage } from "./pages/blog-page/BlogPage";
import { MePage } from "./pages/me-page/MePage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/me" element={<MePage />} />
    </Routes>
  );
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <PageLayout>
            <Pages />
          </PageLayout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
