import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GradingPitch from "./GradingPitch";
import CompetitorsDisplay from "./Competitors";
import Loader from "./Loader";

const PitchForm = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [style, setStyle] = useState("corporate");
    const [refine, setRefine] = useState(false);
    const [includeCompetitors, setIncludeCompetitors] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [exportformat, setExportformat] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null); // reset old result

        const payload = {
            title,
            description: desc,
            style,
            refine,
            feedback,
            export_format: exportformat,
            include_competitors: includeCompetitors,
        };

        try {
            const res = await axios.post("http://localhost:5000/generate-pitch", payload);
            setResult(res.data);
        } catch (err) {
            console.error(err);
            alert("Something went wrong! Check console.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <StyledWrapper>
            <div className="top-section">
                <div className="left">
                    <div className="card">
                        <div className="card2">
                            <form className="form" onSubmit={handleSubmit}>
                                <p id="heading">Pitch Generator 🎤</p>

                                <input className="input-field" type="text" placeholder="Startup Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                                <textarea className="input-field" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} />

                                <select className="input-field" value={style} onChange={(e) => setStyle(e.target.value)}>
                                    <option value="corporate">Corporate</option>
                                    <option value="sharktank">Shark Tank</option>
                                    <option value="casual">Casual</option>
                                    <option value="inspirational">Inspirational</option>
                                </select>

                                <label className="checkbox">
                                    <input type="checkbox" checked={refine} onChange={() => setRefine(!refine)} /> Refine Pitch
                                </label>

                                {refine && (
                                    <input className="input-field" type="text" placeholder="Feedback for refinement" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                                )}

                                <label className="checkbox">
                                    <input type="checkbox" checked={includeCompetitors} onChange={() => setIncludeCompetitors(!includeCompetitors)} /> Include Competitor Analysis
                                </label>

                                <select className="input-field" value={exportformat} onChange={(e) => setExportformat(e.target.value)}>
                                    <option value="">No Export</option>
                                    <option value="pdf">Export as PDF</option>
                                    <option value="ppt">Export as PPT</option>
                                </select>

                                <button type="submit" className="button1">Generate Pitch 💥</button>
                            </form>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                        <Loader />
                    </div>
                ) : result && (
                    <div className="right">
                        <div className="result-main">
                            <h3 color="#00c2ff">🚀 Generated Pitch</h3>
                            <p className="pitch-main">{result.pitch}</p>
                        </div>
                    </div>
                )}

            </div>

            {result && (
                <>
                    <div className="headline-card">
                        <h3>💰 Headline</h3>
                        <p>{result.Headline}</p>
                    </div>

                    <div className="bottom-grid">
                        <div className="assessment">
                            <h3>🧠 Assessment</h3>
                            <GradingPitch grading={result.grading} />
                            <div className="differentiator">
                                <h3>🌟 Differentiator</h3>
                                <p>{result.difference}</p>
                            </div>
                        </div>
                        <div className="competitor">
                            <h3>📌 Competitors</h3>
                            <CompetitorsDisplay competitors={result.competitors} />

                        </div>
                    </div>
                </>
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #000000, #2c2c2c);
  display: flex;
  flex-direction: column;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #171717;
    border-radius: 25px;
    padding: 2rem;
  }

  .card {
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  #heading {
    text-align: center;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  .input-field,
  select,
  textarea {
    padding: 0.75rem;
    border-radius: 10px;
    background: #252525;
    color: white;
    border: none;
    outline: none;
  }

  .checkbox {
    color: white;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .button1 {
    background: #00ff75;
    color: #171717;
    font-weight: bold;
    padding: 0.75rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .button1:hover {
    background: #00d967;
  }

  .top-section {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .left,
  .right {
    flex: 1;
    min-width: 320px;
  }

  .result-main {
    background: #1c1c1c;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0, 255, 117, 0.1);
    color: #e6e6e6;
  }

  .pitch-main {
    font-size: 1.1rem;
    font-weight: 500;
    background: #2a2a2a;
    padding: 1rem;
    border-radius: 10px;
    color: #ffffff;
  }

  .headline-card {
    margin-top: 2rem;
    width: 100%;
    max-width: 800px;
    background: #252525;
    padding: 1.5rem;
    border-radius: 15px;
    color: #e6e6e6;
  }

  .headline-card h3 {
    color: #00c2ff;
    margin-bottom: 0.5rem;
  }
  .bottom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
    max-width: 1000px;
  }

  .bottom-grid > div {
    background: #252525;
    padding: 1rem;
    border-radius: 12px;
    color: #e6e6e6;
  }

  .bottom-grid h3 {
    color: #00c2ff;
    margin-bottom: 0.5rem;
  }
`;

export default PitchForm;
