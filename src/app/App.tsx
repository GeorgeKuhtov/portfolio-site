import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router.tsx';
import '../shared/styles/index.scss';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
