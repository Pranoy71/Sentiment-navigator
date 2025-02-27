# Sentiment navigator

Sentiment navigator is a web application that allows users to predict the sentiment of a given text using pre-trained machine learning models. Users can input their text, choose a machine learning model, and receive sentiment predictions such as "joy", "anger", "fear", "love", "sadness", and "surprise".

## Features

- **Multiple Models**: Choose between Logistic Regression, Random Forest, and Support Vector Machine (SVM) models.
- **Real-Time Predictions**: Get sentiment predictions instantly upon submitting your text.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.
- **Clear Text**: Easily clear your input text with a dedicated button.
- **Smooth Animations**: Enjoy a modern and engaging user interface with smooth animations.


## To see the live demo, click the link 

[Sentiment navigator](https://sentiment-navigator.onrender.com/)

or paste the link in the browser "https://sentiment-navigator.onrender.com/"

## Project Structure


- `app.py`: Main application file.
- `models/`: Directory containing sentiment analysis models.
  - `sentiment_model.joblib`
  - `sentiment_model_rf.joblib`
  - `sentiment_model_svm.joblib`
- `static/`: Static files (CSS, JavaScript).
  - `styles.css`
  - `scripts.js`
- `templates/`: HTML templates.
  - `index.html`

## File explanation


- `app.py`: Main Flask application file.
- `models/`: Directory containing the pre-trained sentiment models.
- `static/`: Directory for CSS and JavaScript files.
  - `styles.css`: Custom CSS file for styling the web app.
  - `scripts.js`: JavaScript file for adding interactivity and animations.
- `templates/`: Directory for HTML templates.
  - `index.html`: Main HTML template for the web app.



### Prerequisites

- Python 3.7 or higher
- Flask
- Joblib


## Usage

1. **Enter your text** in the provided text area.
2. **Choose a model** from the dropdown menu located at the upper right corner.
3. **Click "Predict Sentiment"** to get the sentiment prediction.
4. **Clear the text** using the "Clear" button if needed.

## Customization

### Adding More Models

1. **Train and save your model** using `joblib`:
    ```python
    from joblib import dump
    # Assuming `model` is your trained model
    dump(model, 'models/model_name.joblib')
    ```

2. **Update `app.py`** to include the new model in the models list:
    ```python
    models = ['Logistic Regression', 'Random Forest', 'Support Vector Machine', 'Your Model Name']
    ```

3. **Update the HTML template** if needed to handle the new model.

### Modifying Styles and Scripts

- Edit `static/styles.css` to change the styles.
- Edit `static/scripts.js` to change the behavior and animations.



## Contact

For any inquiries or suggestions, please contact [bishalchdebnath@gmail.com].

