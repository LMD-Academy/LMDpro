'use client';

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import React from 'react';

export interface ResumeData {
  personalInfo: {
    name: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  experience: {
    id: number;
    title: string;
    company: string;
    duration: string;
    responsibilities: string;
    bullets: string[];
  }[];
  education: {
    id: number;
    degree: string;
    institution: string;
    duration: string;
  }[];
  skills: string[];
  completedCourses: string[];
}

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, completedCourses } = data;

  return (
    <div className="bg-white text-gray-800 shadow-lg print:shadow-none w-[210mm] h-[297mm] p-8 mx-auto font-sans">
      {/* Header */}
      <header className="text-center mb-6">
        {personalInfo.name && <h1 className="text-4xl font-bold tracking-tight text-gray-900">{personalInfo.name}</h1>}
        {personalInfo.jobTitle && <p className="text-xl text-primary font-medium">{personalInfo.jobTitle}</p>}
        <div className="flex justify-center items-center gap-4 text-xs text-gray-600 mt-2">
            {personalInfo.email && <span className="flex items-center gap-1.5"><Mail size={12}/> {personalInfo.email}</span>}
            {personalInfo.phone && <span className="flex items-center gap-1.5"><Phone size={12}/> {personalInfo.phone}</span>}
            {personalInfo.location && <span className="flex items-center gap-1.5"><MapPin size={12}/> {personalInfo.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
            <h2 className="text-lg font-bold text-primary border-b-2 border-primary/30 pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
            <p className="text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].title && (
        <section className="mb-6">
            <h2 className="text-lg font-bold text-primary border-b-2 border-primary/30 pb-1 mb-2">WORK EXPERIENCE</h2>
            {experience.map(exp => exp.title && (
                <div key={exp.id} className="mb-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-md font-semibold">{exp.title}</h3>
                        <p className="text-xs text-gray-600 font-medium">{exp.duration}</p>
                    </div>
                    <p className="text-md italic text-gray-700">{exp.company}</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        {(exp.bullets && exp.bullets.length > 0 ? exp.bullets : exp.responsibilities ? exp.responsibilities.split('\n').filter(r => r.trim() !== '') : []).map((bullet, index) => (
                           <li key={index} className="text-sm leading-relaxed">{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
      )}

      {/* Skills & LMDpro Courses */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        {skills.length > 0 && skills[0] && (
          <section>
              <h2 className="text-lg font-bold text-primary border-b-2 border-primary/30 pb-1 mb-2">SKILLS</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => skill.trim() && (
                      <span key={index} className="bg-muted text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
                  ))}
              </div>
          </section>
        )}
        {completedCourses.length > 0 && (
          <section>
              <h2 className="text-lg font-bold text-primary border-b-2 border-primary/30 pb-1 mb-2">LMDPRO CERTIFICATIONS</h2>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                  {completedCourses.map((course, index) => (
                      <li key={index} className="text-sm">{course}</li>
                  ))}
              </ul>
          </section>
        )}
      </div>

      {/* Education */}
      {education.length > 0 && education[0].degree && (
        <section>
            <h2 className="text-lg font-bold text-primary border-b-2 border-primary/30 pb-1 mb-2">EDUCATION</h2>
            {education.map(edu => edu.degree && (
                <div key={edu.id} className="mb-2">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-md font-semibold">{edu.degree}</h3>
                        <p className="text-xs text-gray-600 font-medium">{edu.duration}</p>
                    </div>
                    <p className="text-md italic text-gray-700">{edu.institution}</p>
                </div>
            ))}
        </section>
      )}
    </div>
  );
};
