---
title: "Add your folder path to your file in Visual Studio Code"
summary: "I have a file open in Visual Studio Code, but I don't know where it is located in my project. I want to see the file path in the folder view. How can I do that?"
pubDate: 2024-07-11
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/blog/add-your-folder-path-to-your-file-in-visual-studio-code.webp"
tags: ["life", "career", "tech"]
slug: add-your-folder-path-to-your-file-in-visual-studio-code
category: "tools"
---

This is a brief guide on how to add your folder path to your file in Visual Studio Code. This will help you to quickly identify the location of your file in the folder view. 

---

## 1. Open the settings.json
Open the command palette by pressing `Ctrl + Shift + P` in Windows or `Cmd + Shift + P` in MacOS, and type `Preferences: Open Settings (JSON)`.

You can also open the command palette on MacOS by clicking on View > Command Palette.


![Open the settings.json](/images/blog/screenshots/open-settings-json.png)


## 2. Add the following code
Add the following code to the `settings.json` file:

```json
"workbench.editor.customLabels.patterns": {
    "**/pages/**": "${filename}.${extname} - Pages 📑",
    "**/components/**": "${filename}.${extname} - Components 🧩",
    "**/styles/**": "${filename}.${extname} - Styles 🎨",
    "**/utils/**": "${filename}.${extname} - Utils 🛠️",
    "**/hooks/**": "${filename}.${extname} - Hooks 🪝",
    "**/services/**": "${filename}.${extname} - Services 🚀",
    "**/context/**": "${filename}.${extname} - Context 🧠",
    "**/assets/**": "${filename}.${extname} - Assets 🖼️",
    "**/public/**": "${filename}.${extname} - Public 📂",
    "**/config/**": "${filename}.${extname} - Config ⚙️",
    "**/constants/**": "${filename}.${extname} - Constants 📦",
}
```

You can also customize the patterns to match your project structure, for example if you have an api folder inside /pages/api, you can add the following pattern:

```json
"**/pages/api/**": "${filename}.${extname} - API 🚀",
```

## 3. Done!
![Add the following code](/images/blog/screenshots/vsc-filename.png)
