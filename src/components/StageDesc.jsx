import React, { useState } from "react";
import "./StageDesc.css";

const StageDesc = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  return (
    <div className="event-details-container">
      <div className="buttons">
        <button onClick={() => setActiveSection('Stage-1')} className='content-button'>Stage - I</button>
        <button onClick={() => setActiveSection('registration')} className='content-button'>Stage - II</button>
        <button onClick={() => setActiveSection('competition')} className='content-button'>Stage - III</button>
        <button onClick={() => setActiveSection('highlights')} className='content-button'>Stage IV</button>
        
      </div>
      <div className="button-content">
        {activeSection === 'Stage-1' && (
          <div>
            <h2 className="typewrite">Rachna</h2>
            <p>
              <p> Rachna signifies creation and initiation, marking the beginning of a remarkable venture. At INNOVISION 2024, we believe that every great idea deserves a solid foundation, and that foundation begins with a Pitch Deck. </p>
              <br />
              <p>A Pitch Deck is more than just a presentation; it symbolizes the start of your entrepreneurial journey. It is the first step in transforming your innovative ideas into a thriving venture. Rachna is the first stage of INNOVISION 2024, where participants will showcase their creativity, vision, and strategic thinking through their Pitch Decks.</p>
              <br />
              <span id='boldkaro'>Why a Pitch Deck?</span>
              <p>A well-crafted Pitch Deck serves as a powerful tool to communicate your business idea, strategy, and potential to investors, mentors, and stakeholders. It is your opportunity to make a compelling case for your venture and set the stage for future success.</p>
            </p>
            <span id='boldkaro'>Guidelines for Rachna</span>
            <p>To help you create an impactful Pitch Deck, we have outlined specific guidelines that you need to follow. These guidelines will ensure that your presentation is clear, concise, and effective in conveying your vision.</p>

            <p>You can download the complete guidelines in a document format <a  id="guidelines" href="https://drive.google.com/uc?export=download&id=1N1bY-o2TbAXYNwlT4xiw4oZ5uXyv2CRI">here.</a></p>
          </div>
        )}
        <div><div></div></div>
        {activeSection === 'registration' && (
          <div>
            <h3>Coming Soon!</h3>
          </div>
        )}
        {activeSection === 'competition' && (
          <div>
            <h3>Coming Soon!</h3>
          </div>
        )}
        {activeSection === 'highlights' && (
          <div>
            <h3>Coming Soon!</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default StageDesc;