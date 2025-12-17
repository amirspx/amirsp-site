import { PenTool, TrendingUp, Users, Search } from 'lucide-react';

const skills = [
  {
    category: 'Marketing Strategy',
    icon: TrendingUp,
    items: ['Digital Marketing', 'Brand Strategy', 'Market Research', 'Campaign Management', 'Lead Generation'],
  },
  {
    category: 'Content & Journalism',
    icon: PenTool,
    items: ['Copywriting', 'Editing', 'Storytelling', 'Press Releases', 'Blog Writing', 'Social Media Content'],
  },
  {
    category: 'Communications',
    icon: Users,
    items: ['Public Relations', 'Internal Comms', 'Crisis Management', 'Stakeholder Engagement', 'Media Relations'],
  },
  {
    category: 'Digital & Tech',
    icon: Search, // Using Search for SEO/Analytics representation
    items: ['SEO/SEM', 'Google Analytics', 'Social Media Analytics', 'Email Marketing', 'CMS Management'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Skills & Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Professional Toolkit
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                <skillGroup.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center justify-center text-gray-600 text-sm">
                   <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
