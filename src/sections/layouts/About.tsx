import React from 'react';
import useAuthorConfig from '../../hooks/use-author-config';
import { AboutSection } from '../../interfaces/Section';

const About: React.FC<AboutSection> = (details) => {
  const author = useAuthorConfig();

  return (
    <div>
      <p className="py-2">
        I am
        <span className="font-bold capitalize"> {author.name}</span>, and I am a
        <span className="font-bold capitalize"> {author.jobTitle}</span>
      </p>
      {details.textArray.map((text) => (
        <p key={text} className="py-2">
          {text}
        </p>
      ))}
    </div>
  );
};

export default About;
