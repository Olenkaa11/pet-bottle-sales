import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Страница не найдена | ПЭТ Тара";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    const previous = robots.getAttribute("content");
    robots.setAttribute("content", "noindex, follow");
    document.querySelector('link[rel="canonical"]')?.remove();
    return () => {
      robots?.setAttribute("content", previous ?? "index, follow");
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Упс! Страница не найдена</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
