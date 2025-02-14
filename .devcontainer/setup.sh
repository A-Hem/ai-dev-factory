#!/bin/bash

# Install core tools
sudo apt-get update && sudo apt-get install -y \
    git curl wget python3-pip nodejs npm

# Configure AI CLI tools
npm install -g askai
pip install openai

# Clone your AI assistant (example)
git clone https://github.com/your-ai-assistant-repo.git /workspace/assistant
