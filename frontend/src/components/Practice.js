import React, { useState } from "react";
import BaseLayout from './BaseLayout';
import './practice.css';

const languages = [
    { name: "German", code: "de", flag: "/static/img/de_flag.png" },
    { name: "Romanian", code: "ro", flag: "/static/img/ro_flag.png" },
    { name: "Coming Soon", code: "", flag: "/static/img/coming-soon.png", comingSoon: true },
];

const topics = [
    { name: "Animals", id: "animals" },
    { name: "Food & Drink", id: "food" },
    { name: "Household Items", id: "household" },
    { name: "Nature & Environment", id: "nature" },
    { name: "Professions", id: "professions" },
    { name: "Common Nouns", id: "common_nouns" },
]

const ENPractice = ({ user }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null); // For storing the selected language
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedModes, setSelectedModes] = useState([]);
    const modes = ['Gender Mode', 'Plural Mode', 'Article Mode'];
    const [randomOption, setRandomOption] = useState(false);

    const handleLanguageClick = (lang) => {
        if (selectedLanguage && selectedLanguage.code === lang.code) {
            setSelectedLanguage(null);
        } else {
            setSelectedLanguage(lang);
            setSelectedTopics([]);
            setSelectedModes([]);
            setRandomOption(false);
        }
    };

    const handleTopicChange = (topicId) => {
        if (selectedTopics.include(topicId)) {
            setSelectedTopics(selectedTopics.filter((id) => id !== topicId));
        } else {
            setSelectedTopics([...selectedTopics, topicId]);
        }
    };

    const handleModeClick = (mode) => {
            if (selectedModes.includes(mode)) {
              setSelectedModes(selectedModes.filter((m) => m !== mode));
            } else {
              setSelectedModes([...selectedModes, mode]);
            }
    };

    const handleRandomSelect = () => {
        setRandomOption(!randomOption);
        setSelectedTopics([]); // Clear selected topics when random is selected
      };
    
      const startPractice = () => {
        if (selectedLanguage && selectedModes) {
          // Construct the path with practice mode and topics selected
          const topicsQuery = selectedTopics.length ? `?topics=${selectedTopics.join(",")}` : "";
          window.location.href = `/en/practice/${selectedLanguage.code}?mode=${selectedModes}${topicsQuery}`;
        }
      };

    return (
        <BaseLayout currentLan="EN">
            <div className="practice-page">
                {user && (
                    <div className="my-languages">
                        <h2>Your Languages</h2>
                        <div className="container container-language-selector">
                            <div className="languages-grid">
                                {user.languages.map((lang) => (
                                    <div key={lang.code} className="language-card">
                                        <img src={`/static/img/${lang.code}_flag.png`} alt={lang.name} className="flag-icon-practice" />
                                        <h3>{lang.name}</h3>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <h2>Select a Language</h2>
                <div className="container container-language-selector">
                    <div className="languages-grid">
                        {languages.map((lang) => (
                            <div key={lang.name} className={`language-card ${selectedLanguage === lang ? 'selected' : ''} ${lang.comingSoon ? 'coming-soon' : ''}`} onClick={() => !lang.comingSoon && handleLanguageClick(lang)}>
                                <img src={lang.flag} alt={lang.name} className="flag-icon-practice" />
                                <h3>{lang.name}</h3>
                                {lang.comingSoon && <p>Coming Soon</p>}
                            </div>
                        ))}
                    </div>
                </div>
                {selectedLanguage && !selectedLanguage.comingSoon && (
                    <div className="language-config">
                        <div className="mode-selector">
                            <h4>Choose your Practice Mode:</h4>
                            <div className="practice-mode-container">
                                {modes.map((mode) => (
                                    <div key={mode}
                                    className={`practice-mode-btn ${selectedModes.includes(mode) ? 'selected' : ''}`}
                                    onClick={() => handleModeClick(mode)}
                                    >
                                    {mode}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="topic-selector">
                        <h4>Choose the Topics:</h4>
                        <div className="topics-grid">
                            {topics.map((topic) => (
                            <div key={topic.id} className="topic-item">
                                <label>
                                <input
                                    type="checkbox"
                                    disabled={randomOption}
                                    checked={selectedTopics.includes(topic.id)}
                                    onChange={() => handleTopicChange(topic.id)}
                                />
                                {topic.name}
                                </label>
                            </div>
                            ))}
                        </div>
                        </div>

                        <div className="random-option">
                        <label>
                            <input
                            type="checkbox"
                            checked={randomOption}
                            onChange={handleRandomSelect}
                            />
                            Random Words (from all topics)
                        </label>
                        </div>

                        <button className="start-button" onClick={startPractice} disabled={!selectedModes}>
                        Start Practice
                        </button>
                    </div>
                )}
            </div>
        </BaseLayout>
    );
};

    

  
export default ENPractice;