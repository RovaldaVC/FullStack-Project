from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")
db = client["todoDB"]
collection = db["tasks"]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/addActionPage")
def add_action_page():
    return render_template("addActionPage.html")

@app.route("/add", methods=["POST"])
def add_task():
    data = request.get_json()
    collection.insert_one({"time": data["time"], "action": data["action"]})
    return jsonify({"status": "added"})

@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = list(collection.find({}, {"_id": 0}))
    return jsonify(tasks)

if __name__ == "__main__":
    app.run(debug=True)