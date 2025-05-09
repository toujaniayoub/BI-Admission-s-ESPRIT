from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from sqlalchemy import create_engine
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import numpy as np
from prophet import Prophet
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, render_template, request
from flask_cors import CORS  # <-- import
from sqlalchemy import create_engine

app = Flask(__name__)
CORS(app)


# Load the CSV file containing job and skill data
try:
    jobs_df = pd.read_csv('data.csv')
except FileNotFoundError:
    print("Error: 'data.csv' not found. Please make sure the file exists in the same directory.")
    exit()

# Preprocess the skills data (example: converting to lowercase and splitting)
jobs_df['Skills'] = jobs_df['Skills'].str.lower().str.split(', ')

# Sample user skills (in a real application, this would come from user input or database)
user_skills = ['python', 'machine learning', 'data analysis', 'communication']

def create_skill_vector(skills, all_unique_skills):
    """Creates a binary vector for a list of skills based on all unique skills."""
    vector = np.zeros(len(all_unique_skills))
    for skill in skills:
        if skill in all_unique_skills:
            vector[all_unique_skills.index(skill)] = 1
    return vector

@app.route('/')
def index():
    return render_template('index.html')
from flask import jsonify

@app.route('/skills', methods=['POST'])
def get_skills():
    user_position = request.form.get('position').lower()

    matched_skills = None
    for idx, row in jobs_df.iterrows():
        if row['Position'].lower() == user_position:
            matched_skills = row['Skills']
            break

    if matched_skills is None:
        return jsonify({"error": "No skills found"}), 404

    return jsonify({"position": user_position, "skills": matched_skills})

@app.route('/api/forecast', methods=['GET'])
def forecast():
    try:
        # Connect to DB
        engine = create_engine("postgresql+psycopg2://postgres:root@localhost:5432/DW_2")
        query = """
        SELECT 
            d.full_date::date AS ds,  
            COUNT(*) AS y
        FROM "Fact_Admission" f
        JOIN "dim_date" d ON f.datefk = d.datekey
        GROUP BY d.full_date
        ORDER BY d.full_date;
        """
        df = pd.read_sql(query, engine)
        df['ds'] = pd.to_datetime(df['ds'])

        # Prophet
        model = Prophet()
        model.fit(df)

        future = model.make_future_dataframe(periods=7, freq='D')
        forecast = model.predict(future)
        result = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(7)

        # Return JSON
        return jsonify(result.to_dict(orient='records'))

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
