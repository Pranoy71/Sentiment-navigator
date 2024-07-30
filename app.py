from flask import Flask, request, render_template
from joblib import load

app = Flask(__name__)

# Load models
models = {
    'Logistic Regression': load('models/sentiment_model.joblib'),
    'Random Forest': load('models/sentiment_model_rf.joblib'),
    'Support Vector Machine': load('models/sentiment_model_svm.joblib')
}

@app.route('/')
def home():
    return render_template('index.html', models=models.keys(), selected_model='Logistic Regression', input_text='')

@app.route('/predict', methods=['POST'])
def predict():
    text = request.form['text']
    model_name = request.form['model']
    model = models[model_name]
    prediction = model.predict([text])[0]
    return render_template('index.html', prediction=prediction, models=models.keys(), selected_model=model_name, input_text=text)

if __name__ == '__main__':
    app.run(debug=True)
