import { useEffect } from 'react';
export function HomePage() {
  useEffect(() => {
    document.title = 'Главная - Моё портфолио';
  }, []);

  return (
    <div className="home-page">
      <h1>Добро пожаловать в моё портфолио</h1>
      <p>Здесь будет главная страница с кратким описанием</p>
    </div>
  );
}
