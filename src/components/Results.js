import React from 'react';

const Results = ({correctResults, wrongResults, countCorrect}) => {
    return (
        <div className="results">
            <div className="title">
                <p>Correct Answers: {countCorrect}</p>
            </div>
            <div className="resultsContainer">
                <div className="correctResults">
                    <p>Correct</p>
                    {correctResults.map((correctWord, index) => (
                        <div key={index} className="row">
                            <p>{correctWord}</p>
                        </div>
                    ))}
                </div>
                <div className="wrongResults">
                    <p>Wrong</p>
                    {wrongResults.map((wrongWord, index) => (
                        <div className="row">
                            <p>{wrongWord}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
