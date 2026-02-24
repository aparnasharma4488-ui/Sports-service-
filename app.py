from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return "Flask API is running"

@app.route("/send-otp", methods=["POST"])
def send_otp():
    data = request.get_json()

    if not data or "email" not in data:
        return jsonify({"error": "Email is required"}), 400

    email = data["email"]

    # TODO: send OTP here
    print("OTP requested for:", email)

    return jsonify({"message": "OTP sent successfully"}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
