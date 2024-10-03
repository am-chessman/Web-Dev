from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/auth", methods=["POST"])
def authentication():
    user_input = request.form.get("username")
    print(user_input)
    if len(user_input) != 0:
        return redirect(url_for("var_name", name=user_input))

@app.route("/<name>")
def var_name(name):
    return render_template("greetings.html", rendered_name=name)

if __name__ == "__main__":
    app.run(debug=True)