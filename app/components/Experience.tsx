const experiences = [
    {
      role: 'Communications Manager',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading internal and external communications strategies. Managed a team of 3 writers. Increased media coverage by 40% year-over-year.',
    },
    {
      role: 'Digital Marketing Specialist',
      company: 'Creative Solutions Agency',
      period: '2018 - 2021',
      description: 'Executed multi-channel digital marketing campaigns (SEO, SEM, Social). Improved client ROI by an average of 25%. Managed monthly ad spend of $50k.',
    },
    {
      role: 'Journalist / Content Writer',
      company: 'The Daily News & Freelance',
      period: '2015 - 2018',
      description: 'Covered local business and technology news. Produced high-quality articles, features, and interviews. Developed a strong network of industry contacts.',
    },
  ];
  
  const Experience = () => {
    return (
      <section id="experience" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Experience</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Work History
            </p>
          </div>
  
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h3 className="text-xl leading-6 font-bold text-gray-900">{exp.role}</h3>
                        <p className="mt-1 text-sm text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {exp.period}
                        </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  