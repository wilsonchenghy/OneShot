from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os
from langchain_openai import ChatOpenAI

app = Flask(__name__)
CORS(app)

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def generate_video_from_image(image_path, duration):
    try:
        subprocess.run([
            'ffmpeg', '-loop', '1', '-i', image_path,
            '-c:v', 'libx264', '-preset', 'ultrafast', '-t', str(duration), 'output.mp4'
        ])
        return 'output.mp4'
    except Exception as e:
        print('Error generating video:', e)
        return None

@app.route('/generate_video', methods=['POST'])
def handle_generate_video():
    data = request.get_json()
    image_path = data.get('imagePath')
    duration = data.get('duration')
    if not image_path or not duration:
        return 'Missing imagePath or duration', 400

    video_path = generate_video_from_image(image_path, duration)
    if video_path:
        return video_path
    else:
        return 'Failed to generate video', 500
    
@app.route('/AI_Command_Box', methods=['POST'])
def generate_response():
    data = request.json
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400
    
    try:
        print("hey")
        llm = ChatOpenAI(
            model="gpt-4o-mini",
            temperature=0,
            max_tokens=None,
            timeout=None,
            max_retries=2,
            api_key=OPENAI_API_KEY,
        )

        messages = [
            (
                "system",
                " ",
            ),
            ("human", prompt),
        ]

        ai_msg = llm.invoke(messages)

        return jsonify(ai_msg.content), 200
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    


if __name__ == '__main__':
    app.run(port=5001, debug=True)