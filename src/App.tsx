
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import NogueiraEsquadrias from '@/pages/NogueiraEsquadrias';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nogueira-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route path="/" element={<NogueiraEsquadrias />} />
            <Route path="*" element={<NogueiraEsquadrias />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
