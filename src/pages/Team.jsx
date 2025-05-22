import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    {
      name: 'Aïssatou Diallo',
      role: 'Experte en développement personnel',
      img: '/assets/mm.jpg',
      bio: 'Plus de 10 ans d\'expérience dans l\'accompagnement et le développement personnel.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'aissatou@keba-consulting.com',
      },
    },
    {
      name: 'Mamadou Fall',
      role: 'Spécialiste en coaching et leadership',
      img: '/assets/co.jpg',
      bio: 'Expert en leadership transformationnel et coaching d\'équipe.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mamadou@keba-consulting.com',
      },
    },
    {
      name: 'Sophie Ndiaye',
      role: 'Consultante en stratégie RH',
      img: '/assets/ceo.jpg',
      bio: 'Spécialiste en gestion des talents et transformation organisationnelle.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sophie@keba-consulting.com',
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">Des experts passionnés à votre service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="card">
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-200 text-sm">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={member.social.linkedin}
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-2xl"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-2xl"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;