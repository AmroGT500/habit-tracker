# app.py

from flask import Flask, jsonify
from supabase import create_client
from decouple import config 

app = Flask(__name__)

supabase_url = config('DATABASE_CONNECTION_STRING')

supabase = create_client(supabase_url)

@app.route('/get_habits', methods=['GET'])
def get_habits():
    habits = supabase.from_('habits').select('*').execute().get('data', [])
    return jsonify(habits)

if __name__ == '__main__':
    app.run(debug=True)
