# NABARD Schemes Chatbot

Team Name - Convai Innovations

Problem Statement - Financial Inclusion in Remote Areas: Digital Financial Services for Unconnected Regions

Team Leader Email - nandakishor@convaiinnovations.com

This project involves an offline, AI-powered chatbot application called **Cuty** specifically designed for farmers. It provides information on NABARD schemes to farmers via an easy-to-use chat interface.

![Chatbot Interface](https://github.com/NandhaKishorM/National-Agrifunds-Hackathon/blob/main/convai%20innovations/screenshots/1.png)

## Features

- **Offline Functionality**: The app can operate without internet connectivity, making it suitable for rural settings with limited internet access.
- **AI-Powered**: Uses a quantized transformer-based language model to generate responses to user queries.
- **User-Friendly Interface**: The chat interface allows farmers to easily interact with the app and get the information they need.
- **Multilingual Support (Planned)**: The app aims to support multiple native languages in future updates.

## Technology Used

- AI: Quantized transformer-based language model. Fine-tuned OpenLLaMA 3B parameter model on curated dataset and converted to GGML 4 bit quantization format
- GGML AI models - ggml is a tensor library for machine learning to enable large models and high performance on commodity hardware. It is used by llama.cpp and whisper.cpp

1. Written in C
2. 16-bit float support
3. Integer quantization support (e.g. 4-bit, 5-bit, 8-bit)
4. Automatic differentiation
5. Built-in optimization algorithms (e.g. ADAM, L-BFGS)
6. Optimized for Apple Silicon
7. On x86 architectures utilizes AVX / AVX2 intrinsics
8. Web support via WebAssembly and WASM SIMD
9. No third-party dependencies
10. Zero memory allocations during runtime
11. Guided language output support
- Natural Language Processing: User input processing and conversational output generation.
- Mobile Application Development: The solution is packaged into a mobile application using Flutter

![Technology Used](https://github.com/NandhaKishorM/National-Agrifunds-Hackathon/blob/main/convai%20innovations/screenshots/technology.jpg)

## Installation

1. Install the apk file from

[![Download APK](https://img.shields.io/badge/download-APK-blue.svg)](https://github.com/NandhaKishorM/National-Agrifunds-Hackathon/releases/download/debug/app-release.apk)

2. Download the AI model file from

[Download AI Model](https://github.com/NandhaKishorM/National-Agrifunds-Hackathon/releases/download/debug/ggml-model.bin)

after downloading the model copy the AI model file to your smart phones files

3. Run the app and choose the AI model.

https://github.com/NandhaKishorM/National-Agrifunds-Hackathon/assets/48623612/e5e3b965-0b08-45a3-8fd4-c3ffd28c8d5f

or Clone the repository and use android studio to build and install apk.

## What I Learned

This project has been a significant learning experience for me, and I've gained valuable insights in several areas:

1. **Artificial Intelligence**: Implementing the AI model in the chatbot was a challenging task that allowed me to delve deeper into AI technology, specifically with the quantized transformer-based language model.

2. **Natural Language Processing**: This project gave me a better understanding of how Natural Language Processing can be used to interpret user queries and generate meaningful responses.

3. **Mobile Application Development**: Developing a mobile application and ensuring it is user-friendly and intuitive was a valuable experience. It helped me refine my skills in UI/UX design and overall app development.

4. **Offline Functionality**: Implementing an offline functionality in the app was a complex task that gave me a deeper understanding of how to design and develop applications for rural settings with limited internet access.

5. **Collaborative Work**: Working on this project also taught me the importance of collaboration and effective communication within a team, especially when dealing with complex tasks and tight deadlines.

6. **Project Management**: Managing different aspects of the project, such as planning, organizing, and executing tasks within a set timeline, was a valuable learning experience.

## License

This project is licensed under the terms of the MIT license.
