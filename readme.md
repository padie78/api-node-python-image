# Node.js + Python Image Cropping API (Clean Architecture)

This project is a backend API built in **Node.js** that allows uploading an image via `/upload-image`, sends it to a **Python script** to crop it, and returns the processed image. The architecture follows **Clean Architecture principles**.

---

## Project Structure

project_structure: |
  node-python-image-api/
  ├── src/
  │   ├── application/
  │   │   └── usecases/
  │   │       └── process-image.use-case.ts
  │   ├── config/
  │   │   └── express.config.ts
  │   ├── infrastructure/
  │   │   └── multer/
  │   │       └── multer.config.ts
  │   │   └── services/
  │   │       └── python-image-processor.service.ts
  │   ├── models/
  │   │   └── image.model.ts
  │   ├── presentation/
  │   │   └── controllers/
  │   │       └── upload.controller.ts
  ├── scripts/
  │   └── crop_image.py
  ├── uploads/
  │   └── (temporary uploaded files)
  ├── .gitignore
  ├── package.json
  └── README.md
  └── tsconfig.json
  


environment:
  node_version: ">=18"
  python_version: ">=3.7"
  python_packages:
    - pillow
  npm_packages:
    - cors
    - express
    - multer
    - typescript
    - ts-node
    - @types/cors
    - @types/node
    - @types/express
    - @types/multer

setup_steps:
  - step: Install Node.js and Python
    description: |
      Make sure you have Node.js (v18 or higher) and Python 3.7+ installed on your machine.
  - step: Install Python dependencies
    command: "pip install pillow"
  - step: Install Node.js dependencies
    command: "npm install"
  - step: Build TypeScript (if applies)
    command: "tsc"
  - step: Run Node.js backend
    command: "npm run start" 
  - step: Test API endpoint
    description: "Use curl or Postman to POST image to http://localhost:3000/upload-image"

run_commands:
  start_node: "npm run start"
  test_curl: |
    curl -X POST http://localhost:3000/upload-image \
      -F \"image=@./example.jpg\" \
      --output cropped.jpg

notes:
  - The Python script `crop_image.py` must be executable and in the correct `scripts/` folder.
  - Node.js backend will call the Python script as a child process to process images.
  - Make sure your paths and permissions are correctly set.
  - No Docker is used in this setup.

author:
  name: Diego Liascovich
  contact: padie78@gmail.com.com