import { Linkedin } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    window.location.href = '/about';
  };
  const scrollToCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="text-gray-900 dark:text-white">Kartik </span>
          <span className="animate-gradient-text">Bhalerao</span>
        </h1>

        {/* Role + Status */}
        <div className="flex flex-col items-center gap-4">

          {/* PM Tag */}
          <span className="px-6 py-2.5 text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 rounded-lg bg-blue-50 dark:bg-blue-950/50 shadow-sm">
            Product Manager
          </span>

        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="text-gray-800 dark:text-gray-200 font-medium">Building Products That </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
            Customers Truly Love
          </span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://linkedin.com/in/kartik-bhalerao"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </a>

          <a
            href="https://medium.com/@kartikbhalerao948"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="w-5 h-5 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
              <span className="text-white dark:text-gray-900 text-xs font-bold">M</span>
            </div>
          </a>

          <a
            href="https://github.com/kartikbh6614"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-900 dark:text-gray-200">
              <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 rounded-xl font-semibold text-base bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white shadow-sm transition-colors cursor-pointer"
          >
            About Me
          </button>

          <button
            onClick={scrollToCaseStudies}
            className="px-8 py-3 rounded-xl font-semibold text-base bg-violet-600 hover:bg-violet-700 text-white shadow-sm transition-colors cursor-pointer"
          >
            Explore My Builds
          </button>
        </div>

      </div>
    </section>
  );
};
