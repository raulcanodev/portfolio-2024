const id = "add-your-folder-path-to-your-file-in-visual-studio-code.md";
						const collection = "blog";
						const slug = "add-your-folder-path-to-your-file-in-visual-studio-code";
						const body = "\r\nThis is a brief guide on how to add your folder path to your file in Visual Studio Code. This will help you to quickly identify the location of your file in the folder view. \r\n\r\n---\r\n\r\n## 1. Open the settings.json\r\nOpen the command palette by pressing `Ctrl + Shift + P` in Windows or `Cmd + Shift + P` in MacOS, and type `Preferences: Open Settings (JSON)`.\r\n\r\nYou can also open the command palette on MacOS by clicking on View > Command Palette.\r\n\r\n\r\n![Open the settings.json](/images/blog/screenshots/open-settings-json.png)\r\n\r\n\r\n## 2. Add the following code\r\nAdd the following code to the `settings.json` file:\r\n\r\n```json\r\n\"workbench.editor.customLabels.patterns\": {\r\n    \"**/pages/**\": \"${filename}.${extname} - Pages 📑\",\r\n    \"**/components/**\": \"${filename}.${extname} - Components 🧩\",\r\n    \"**/styles/**\": \"${filename}.${extname} - Styles 🎨\",\r\n    \"**/utils/**\": \"${filename}.${extname} - Utils 🛠️\",\r\n    \"**/hooks/**\": \"${filename}.${extname} - Hooks 🪝\",\r\n    \"**/services/**\": \"${filename}.${extname} - Services 🚀\",\r\n    \"**/context/**\": \"${filename}.${extname} - Context 🧠\",\r\n    \"**/assets/**\": \"${filename}.${extname} - Assets 🖼️\",\r\n    \"**/public/**\": \"${filename}.${extname} - Public 📂\",\r\n    \"**/config/**\": \"${filename}.${extname} - Config ⚙️\",\r\n    \"**/constants/**\": \"${filename}.${extname} - Constants 📦\",\r\n}\r\n```\r\n\r\nYou can also customize the patterns to match your project structure, for example if you have an api folder inside /pages/api, you can add the following pattern:\r\n\r\n```json\r\n\"**/pages/api/**\": \"${filename}.${extname} - API 🚀\",\r\n```\r\n\r\n## 3. Done!\r\n![Add the following code](/images/blog/screenshots/vsc-filename.png)\r\n";
						const data = {title:"Add your folder path to your file in Visual Studio Code",summary:"I have a file open in Visual Studio Code, but I don't know where it is located in my project. I want to see the file path in the folder view. How can I do that?",pubDate:new Date(1720656000000),emoji:"💻",author:"Raul Cano",linkAuthor:"https://x.com/raulcanodev",image:"/thumbnails/code.webp",tags:["life","career","tech"],slug:"add-your-folder-path-to-your-file-in-visual-studio-code",category:"tools"};
						const _internal = {
							type: 'content',
							filePath: "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog/add-your-folder-path-to-your-file-in-visual-studio-code.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
