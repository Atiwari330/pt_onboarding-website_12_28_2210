export const FeaturedLogos = () => {
  const logos = [
    { name: "Healthcare Org 1", url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=100&q=80" },
    { name: "Healthcare Org 2", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=100&q=80" },
    { name: "Healthcare Org 3", url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=100&q=80" },
  ];

  return (
    <div className="mt-12 border-t border-gray-100 pt-8">
      <p className="text-sm text-muted-foreground text-center mb-6">Featured In</p>
      <div className="flex justify-center items-center gap-12 opacity-50">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.url}
            alt={logo.name}
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </div>
  );
};