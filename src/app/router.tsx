import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/index';
import { AboutPage } from '../pages/about/index';
import { ProjectsPage } from '../pages/projects/index';
import { ContactsPage } from '../pages/contacts/index';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}
