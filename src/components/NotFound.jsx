function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-4">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-300">The page you're looking for doesn't exist.</p>
      {/* Placeholder for future cool image */}
      <div className="mt-6">
        <img src="/moon.svg" alt="Lost in Space" className="w-32 h-32 opacity-70" />
      </div>
    </div>
  );
}

export default NotFound;
