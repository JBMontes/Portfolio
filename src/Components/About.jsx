import React from 'react';
import '../Styles/About.css'
import TypeWriterEffect from 'react-typewriter-effect';

const About = () => {
    return (
        <div className='about'>
            <div className='bio'>

            <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
            'Hey, welcome to my portfolio!',
            'The name is Jeremy B. Montes.',
            'I am a first-generation Haitian American',
            'who is passionate about art, gaming, traveling, and science.',
            'Thanks for visiting!'
            


          
        ]}
        multiTextDelay={4000}
        typeSpeed={40}
      />
                {/* <h2>👋🏿 Hey, the name is Jeremy B. Montes.</h2> */}
            </div>

            <div className="image">
                <img src="/Peru9.jpeg" alt="Photo taken during trip in Peru" />
            </div>
        </div>

    );
};

export default About;