import React from 'react';
import styled from 'styled-components';

import Page from './Components/Page';
import Header from './Components/Header';
import CareerObjective from './Components/CareerObjective';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import TechnicalSkills from './Components/TechnicalSkills';
import Certification from './Components/Certification';
import Languages from './Components/Languages';
import Hobbies from './Components/Hobbies';
import PersonalProfile from './Components/PersonalProfile';

const Resume = styled.div`
  background-color: ${(props) => props.theme.palette.secondary};
`;

function App() {
  return (
    <Resume>
      <Page
        gridLayout={`
        "header header header"
        "career career career"
        "education education education" 
        "experience experience experience" 
        "projects projects projects" 
        "technicalSkills technicalSkills technicalSkills" 
        "certification certification certification" 
        "conference conference conference"
        "languages hobbies personalProfile"
        "declaration declaration declaration"
        `}
      >
        <Header />
        <CareerObjective />
        <Education />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Certification />
        <Languages />
        <Hobbies />
        <PersonalProfile />
      </Page>
    </Resume>
  );
}

export default App;
