import os
from dotenv import load_dotenv
from google.generativeai import GenerativeModel, configure

load_dotenv()

configure(api_key=os.getenv("GEMINI_API_KEY"))
model = GenerativeModel("models/gemini-2.5-flash")

PITCH_STYLES = {
    "corporate": "Formal and professional tone.",
    "sharktank": "Exciting and persuasive like Shark Tank pitches.",
    "casual": "Friendly and informal style.",
    "inspirational": "Motivational, visionary tone."
}

def generate_pitch(title, description, style="corporate"):
    style_prompt = PITCH_STYLES.get(style, PITCH_STYLES["corporate"])
    prompt = f"""
    You are a startup pitch expert.
    Generate a 2-paragraph compelling startup pitch based on:
    Title: {title}
    Description: {description}
    Style: {style_prompt}
    Keep it energetic, persuasive, and investor-friendly.
    """
    
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"
    
def grade_pitch(pitch_text):
    prompt= f"""
    Grade this startup compulsorily higher than 1 pitch based on a scale of 1-10 for:
    1. Clarity
    2. Emotional Impact
    3. Market Fit
    Provide short explanation.

    Pitch: {pitch_text}
    """
    
    try:
        response= model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return f"Error grading pitch:{str(e)}"
    
def refine_pitch(original_pitch, feedback="Make it more concise and impactful"):
    prompt = f"""
    Original pitch:{original_pitch}
    Refine this pitch by applying the following feedback:{feedback}

    Return the improved version.
    """
    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return f"Error refining pitch: {str(e)}"
    

def generate_headline(title, desc, pitch_text):
    prompt = f"""
    You're a creative copywriter for a startup incubator.
    Write a short, unique and catchy headline (1 sentence max) for this startup idea.

    Title: {title}
    Description: {desc}
    pitch: {pitch_text}

    Make sure it sounds exciting and startup-y.
    """
    
    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return "Couldn't generate headline. Error: " + str(e)
    
def competitor_extraction(pitch_text):
    prompt = f"Given this pitch:\n\n{pitch_text}\n\nList 2–3 well-known competitors in the same space. Keep competitor description 1-2 liner and done leave any one line spaces between the lines."
    
    response = model.generate_content(prompt)  # Using Gemini/OpenAI
    return response.text.strip().split("\n")

def differentiaiting_factor(pitch, competitors):
    comp_str = ", ".join(competitors)
    prompt= f"""
I have built a product with this pitch: "{pitch}"

Now compare it to these competitors: {comp_str}

Based on this, tell me:
1. What is the main differentiating factor that sets my product apart?
2. Why is this a strong differentiator?
3. Mention features the competitors are already known for.
4. Output in 5–6 lines only, like a mini pitch.
"""
    response= model.generate_content(prompt)
    return response.text

