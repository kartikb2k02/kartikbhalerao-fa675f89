
export const AboutSection = () => {
  return (
    <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          About Me <span className="text-2xl">👋</span>
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            <span className="text-2xl">👋</span> Hi, I'm Kartik. Product Manager with 1+ years of hands-on experience, 
            passionate about uncovering real customer problems and identifying unmet needs. Skilled in making data-driven decisions, 
            working closely with stakeholders, and collaborating across cross-functional teams to deliver impactful solutions.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed italic mt-6">
            When I'm not diving deep into user research or crafting product roadmaps, you'll find me exploring new technologies, 
            mentoring aspiring PMs, or experimenting with the latest design tools. I believe great products are born from the 
            perfect blend of empathy, data, and relentless curiosity. ✨
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <div className="text-2xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">Kartikbhalerao948@gmail.com</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">91+ 9561438502</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="text-2xl mb-3">📍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Pune, Maharashtra</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mt-8">
          <span className="text-3xl animate-bounce">💡</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎯</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🚀</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.3s' }}>💚</span>
        </div>
      </div>
    </section>
  );
};
