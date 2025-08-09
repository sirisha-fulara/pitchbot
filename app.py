import os
from flask import Flask, request, jsonify, send_from_directory
from gemini_config import generate_pitch, grade_pitch, refine_pitch, competitor_extraction, differentiaiting_factor, generate_headline
from export_utils import create_ppt, create_pdf
from flask_cors import CORS
from custom_nlp import audience_alignment, buzzword_density, rewrite_in_persona

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

@app.route("/generate-pitch", methods=["POST"])
def generate():
    data = request.get_json()

    title = data.get("title")
    description = data.get("description")
    style = data.get("style", "corporate")
    refine = data.get("refine", False)
    feedback = data.get("feedback", "Make it more concise and impactful")
    export_format = data.get("export_format", None)

    if not title or not description:
        return jsonify({"error": "Title and Description are required!"}), 400

    # Generate pitch
    pitch = generate_pitch(title, description, style)

    # Grade pitch
    grading = grade_pitch(pitch)

    # Refine pitch if requested
    if refine:
        pitch = refine_pitch(pitch, feedback)
        grading = grade_pitch(pitch)

    #competitors
    competitors = competitor_extraction(pitch)
    difference= differentiaiting_factor(pitch, competitors)

    #custom nlp features
    audience = audience_alignment(pitch)
    buzzword = buzzword_density(pitch)
    headline = generate_headline(title,description,pitch)
    persona = rewrite_in_persona(pitch)
    
    # Export if requested
    filename = None
    if export_format == "ppt":
        filename = create_ppt(title, pitch)
    elif export_format == "pdf":
        filename = create_pdf(title, pitch)

    response = {
        "pitch": pitch,
        "grading": grading,
        "competitors": competitors,
        "difference":difference,
        "Audience Type": audience,
        "Buzzwords": buzzword,
        "Headline": headline,
        "persona": persona,
        "download_link": f"/download/{os.path.basename(filename)}" if filename else None,
    }
    return jsonify(response)

@app.route("/download/<filename>")
def download_file(filename):
    directory = os.path.abspath("generated_decks")
    return send_from_directory(directory, filename, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
