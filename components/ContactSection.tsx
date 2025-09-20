
import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
      </p>
      <div className="flex items-center justify-center space-x-6">
        {CONTACT_INFO.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-transparent text-[#B57170] border-2 border-[#B57170] py-3 px-6 rounded-full transition-all duration-300 ease-in-out hover:bg-[#B57170] hover:text-black"
          >
            <contact.icon className="w-6 h-6 mr-3 transition-colors duration-300 group-hover:text-black" />
            <span className="font-semibold text-lg">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
