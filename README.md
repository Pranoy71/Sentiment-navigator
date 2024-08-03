# Sentiment Insight

Sentiment Insight is a web application that allows users to predict the sentiment of a given text using pre-trained machine learning models. Users can input their text, choose a machine learning model, and receive sentiment predictions such as "joy", "anger", "fear", "love", "sadness", and "surprise".

## Features

- **Multiple Models**: Choose between Logistic Regression, Random Forest, and Support Vector Machine (SVM) models.
- **Real-Time Predictions**: Get sentiment predictions instantly upon submitting your text.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.
- **Clear Text**: Easily clear your input text with a dedicated button.
- **Smooth Animations**: Enjoy a modern and engaging user interface with smooth animations.

## Project Structure


-├── app.py
-├── models
-│ ├── sentiment_model.joblib
-│ ├── sentiment_model_rf.joblib
-│ └── sentiment_model_svm.joblib
-├── static
-│ ├── styles.css
-│ └── scripts.js
-└── templates
-└── index.html


- `app.py`: Main Flask application file.
- `models/`: Directory containing the pre-trained sentiment models.
- `static/`: Directory for CSS and JavaScript files.
  - `styles.css`: Custom CSS file for styling the web app.
  - `scripts.js`: JavaScript file for adding interactivity and animations.
- `templates/`: Directory for HTML templates.
  - `index.html`: Main HTML template for the web app.

## Installation

### Prerequisites

- Python 3.7 or higher
- Flask
- Joblib

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/sentiment-insight.git
    cd sentiment-insight
    ```

2. **Install dependencies**:
    ```bash
    pip install flask joblib
    ```

3. **Run the application**:
    ```bash
    python app.py
    ```

4. **Open your browser and visit**:
    ```
    http://127.0.0.1:5000/
    ```

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
    dump(model, 'models/your_model_name.joblib')
    ```

2. **Update `app.py`** to include the new model in the models list:
    ```python
    models = ['Logistic Regression', 'Random Forest', 'Support Vector Machine', 'Your Model Name']
    ```

3. **Update the HTML template** if needed to handle the new model.

### Modifying Styles and Scripts

- Edit `static/styles.css` to change the styles.
- Edit `static/scripts.js` to change the behavior and animations.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various sentiment analysis projects and web design tutorials.

## Contact

For any inquiries or suggestions, please contact [yourname@example.com].

