
export const AboutSection = () => {
  return (
    <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          About Me <span className="text-2xl">👋</span>
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            I'm a passionate Product Manager with over 5 years of experience transforming complex problems into elegant solutions. 
            My journey began in engineering, but I discovered my true calling lies in understanding customer needs and building 
            products that create meaningful impact. 
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed italic mt-6">
            When I'm not diving deep into user research or crafting product roadmaps, you'll find me exploring new technologies, 
            mentoring aspiring PMs, or experimenting with the latest design tools. I believe great products are born from the 
            perfect blend of empathy, data, and relentless curiosity. ✨
          </p>
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
