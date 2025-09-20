
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg hover:shadow-[#B57170]/20 transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#B57170] mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
);


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard title="Education">
          Bachelor of Science in Computer Science from the University of Technology. Graduated with honors, focusing on software development and artificial intelligence.
        </InfoCard>
        <InfoCard title="Certifications">
          Certified in Machine Learning by Stanford University (Coursera) and a certified TensorFlow Developer. Continuously learning and staying updated with the latest industry trends.
        </InfoCard>
        <InfoCard title="Career Objective">
          To leverage my skills in front-end development and my passion for AI/ML to create innovative, intelligent, and user-friendly web applications that solve real-world problems.
        </InfoCard>
      </div>
    </section>
  );
};

export default AboutSection;
