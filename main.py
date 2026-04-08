from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Welcome to my website 🚀</h1><p>This is built with Flask!</p>"

@app.route("/about")
def about():
    return "<h1>About Page</h1><p>This is the about page.</p>"

if __name__ == "__main__":
    app.run(debug=True)
