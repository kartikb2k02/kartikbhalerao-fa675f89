
export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          About Me
        </h2>
        <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            Product Manager with <span className="text-blue-600 dark:text-blue-400 font-semibold">1+ years</span> of hands-on experience, 
            passionate about uncovering real customer problems and identifying unmet needs. 
            Skilled in making data-driven decisions, working closely with stakeholders, 
            and collaborating across cross-functional teams to deliver impactful solutions.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center">
            When I'm not diving deep into user research or crafting product roadmaps, 
            you'll find me exploring new technologies, mentoring aspiring PMs, 
            or experimenting with the latest design tools. I believe great products 
            are born from the perfect blend of empathy, data, and relentless curiosity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm break-all">Kartikbhalerao948@gmail.com</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">+91 9561438502</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">Location</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
