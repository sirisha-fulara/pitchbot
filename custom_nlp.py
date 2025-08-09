from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

#audience alignment
audience_profiles={
    "investor": "ROI, market size, scalability, monetization, exit strategy",
    "customer": "usability, features, pricing, benefits, pain points",
    "partner": "collaboration, integrations, long-term value, synergy"
}
def audience_alignment(pitch):
    tfidf= TfidfVectorizer().fit( [pitch] + list(audience_profiles.values()) )
    vectors= tfidf.transform( [pitch]+ list(audience_profiles.values()) )
    scores= cosine_similarity(vectors[0:1], vectors[1:])[0]
    return dict(zip(audience_profiles.keys(), [round(score * 100, 2) for score in scores]))

#buzzwords detection
buzzwords= {"synergy", "innovative", "disruptive", "cutting-edge", "revolutionary", "scalable"}
def buzzword_density(pitch):
    words= pitch.lower().split()
    buzz_count = sum(1 for word in words if word in buzzwords)
    return round((buzz_count / len(words)) * 100, 2)

#headline generator
def generate_headline(title, desc):
    return f"{title}: Solving {desc.split()[0]} Like Never Before!"

#pitch refining part
def rewrite_in_persona(pitch, persona="vc"):
    if persona == "genz":
        return f"Yo! Here's the lowdown 👉 {pitch.lower().replace('solution', 'fix')} 😎"
    elif persona == "jobs":
        return f"It’s not just a pitch. It’s a revolution. {pitch}"
    elif persona == "vc":
        return f"From a funding lens: {pitch}. Scalable, with solid exit ops."
    return pitch

