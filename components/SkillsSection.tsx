
import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
    const { name, level, icon: Icon } = skill;
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    <Icon className="w-6 h-6 mr-3 text-[#B57170]" />
                    <span className="font-medium text-lg text-gray-200">{name}</span>
                </div>
                <span className="text-sm font-medium text-gray-400">{level}%</span>
            </div>
            <div className="w-full bg-[#1E1E1E] rounded-full h-2.5">
                <div 
                    className="bg-[#B57170] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#121212]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Skills
        </h2>
        <div>
          {SKILLS.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
