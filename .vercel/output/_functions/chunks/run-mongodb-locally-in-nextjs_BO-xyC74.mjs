import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BPQAMZWl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Mac M2 Sonoma | Next.js 14.2.6 | MongoDB 7.0</p>\n<h2 id=\"1-install-mongodb-with-homebrew\">1. Install MongoDB with Homebrew</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">brew</span><span style=\"color:#9ECBFF\"> tap</span><span style=\"color:#9ECBFF\"> mongodb/brew</span></span>\n<span class=\"line\"></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">brew</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> mongodb-community@7.0</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"2-start-mongodb-service\">2. Start MongoDB service</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">brew</span><span style=\"color:#9ECBFF\"> services</span><span style=\"color:#9ECBFF\"> start</span><span style=\"color:#9ECBFF\"> mongodb-community@7.0</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"3-check-mongodb-service-status\">3. Check MongoDB service status</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">brew</span><span style=\"color:#9ECBFF\"> services</span><span style=\"color:#9ECBFF\"> list</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Here you should have a table like this with the status <code>started</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">Name</span><span style=\"color:#9ECBFF\">              Status</span><span style=\"color:#9ECBFF\">  User</span><span style=\"color:#9ECBFF\"> File</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">mongodb-community</span><span style=\"color:#9ECBFF\"> started</span><span style=\"color:#9ECBFF\"> user</span><span style=\"color:#9ECBFF\"> ~/Library/[...]/mongodb-community</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"4-connect-to-mongodb\">4. Connect to MongoDB</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">mongosh</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Now you can see the MongoDB shell prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">Current</span><span style=\"color:#9ECBFF\"> Mongosh</span><span style=\"color:#9ECBFF\"> Log</span><span style=\"color:#9ECBFF\"> ID:</span><span style=\"color:#79B8FF\"> 1234567890</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">Connecting</span><span style=\"color:#9ECBFF\"> to:</span><span style=\"color:#9ECBFF\"> mongodb://</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">Using</span><span style=\"color:#9ECBFF\"> MongoDB:</span><span style=\"color:#79B8FF\"> 7.0.0</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"41-show-databases\">4.1. Show databases</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">show</span><span style=\"color:#9ECBFF\"> dbs</span></span>\n<span class=\"line\"></span></code></pre>\n<p>By default you should see some databases like <code>admin</code>, <code>config</code>, <code>local</code>, <code>test</code>.</p>\n<p>Mongo places your data in the <code>test</code> (<code>test></code>) database  by default. If you want to create a new database, you can do it with the <code>use</code> command + the name of the database.</p>\n<h2 id=\"5-create-a-new-collection\">5. Create a new collection</h2>\n<p>We are going to test the connection in the terminal with a new collection called <code>myNewCollection</code>.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">db.createCollection(</span><span style=\"color:#B392F0\">'myNewCollection'</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"6-insert-a-new-document\">6. Insert a new document</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">db.myNewCollection.insertOne(</span><span style=\"color:#9ECBFF\">{</span><span style=\"color:#9ECBFF\"> name:</span><span style=\"color:#9ECBFF\"> 'Raul',</span><span style=\"color:#9ECBFF\"> age:</span><span style=\"color:#79B8FF\"> 30</span><span style=\"color:#9ECBFF\"> }</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"7-query-all-documents\">7. Query all documents</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">db.myNewCollection.find</span><span style=\"color:#E1E4E8\">()</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"note-keep-this-in-mind-before-going-to-the-next-step\"><code>Note:</code> Keep this in mind before going to the next step</h2>\n<ul>\n<li>You can have multiple databases in MongoDB.</li>\n<li>Each database can have multiple collections.</li>\n<li>Each collection can have multiple documents.</li>\n</ul>\n<p>The structure is like this:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">Database</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">  Collection</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    Document</span></span>\n<span class=\"line\"></span></code></pre>\n<p>The <code>Database</code> is the top-level container for our data. It is the container for collections. The <code>Collection</code> is a group of documents. The <code>Document</code> is a set of key-value pairs that you might be manipulating them with mongoose in your Next.js project.</p>\n<p>In the terminal when you run <code>mongosh</code> normally you are in the <code>test</code> database, thats why you see the <code>test></code> prompt. So then all the commands you run are in the <code>test</code> database.</p>\n<p>So when you run <code>test> db.myNewCollection.find()</code> you are querying the <code>myNewCollection</code> collection in the <code>test</code> database.</p>\n<hr>\n<h2 id=\"8-add-the-mongodb-uri-to-nextjs-envlocal-file\">8. Add the MongoDB URI to Next.js .env.local file</h2>\n<p>Ok so now we have MongoDB installed and running on our Mac. We need to add the MongoDB URI to our Next.js project.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">mongosh</span></span>\n<span class=\"line\"></span></code></pre>\n<p>You will see the MongoDB shell prompt of the step 4. <code>copy</code> the “Connecting to” value.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">Connecting</span><span style=\"color:#9ECBFF\"> to:</span><span style=\"color:#9ECBFF\"> mongodb://127.0.0.1:27017/...</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Go to Next.js and paste it in your <code>.env.local</code> file in your Next.js project.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">MONGODB_URI=mongodb:</span><span style=\"color:#6A737D\">//127.0.0.1:27017/...</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"9-test-the-connection\">9. Test the connection</h2>\n<p>You can forget the previous collection we created in the terminal.</p>\n<p>Run your Next.js project with <code>npm run dev</code> and test the connection with MongoDB, you first need to submit a form or make a request to the database, like registering a new user.</p>\n<p>Then in the terminal:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">mongosh</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Ensure you are in the correct database and collection in our case <code>test</code> and <code>users</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">use</span><span style=\"color:#9ECBFF\"> test</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Now check the database and collection <code>users</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">db.users.find</span><span style=\"color:#E1E4E8\">()</span><span style=\"color:#B392F0\">.pretty</span><span style=\"color:#E1E4E8\">()</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Here we are inside the DB <code>test</code> and the collection <code>users</code>. You should see the new user you just registered.</p>\n<p>Make sure you are in the correct database and collection otherwise you will not see the new user.</p>\n<hr>\n<h2 id=\"how-to-stop-mongodb-service\">How to Stop MongoDB service</h2>\n<p>(Do not forget to stop the service when you are done)</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">brew</span><span style=\"color:#9ECBFF\"> services</span><span style=\"color:#9ECBFF\"> stop</span><span style=\"color:#9ECBFF\"> mongodb-community@7.0</span></span>\n<span class=\"line\"></span></code></pre>\n<p><code>Reestart</code> MongoDB service:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">brew</span><span style=\"color:#9ECBFF\"> services</span><span style=\"color:#9ECBFF\"> restart</span><span style=\"color:#9ECBFF\"> mongodb-community@7.0</span></span>\n<span class=\"line\"></span></code></pre>\n<hr>\n<h3 id=\"references\">References</h3>\n<p><a href=\"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/\">MongoDB Doc</a></p>";

				const frontmatter = {"title":"Setting up MongoDB locally in a Next.js project [Mac]","summary":"We will see how to install MongoDB locally and add the MONGODB_URI to a Next.js project on a Mac. It is important to have your Next.js project already created.","pubDate":"2024-08-25T00:00:00.000Z","emoji":"💻","author":"Raul Cano","linkAuthor":"https://x.com/raulcanodev","image":"/thumbnails/server.webp","tags":[""],"slug":"run-mongodb-locally-in-nextjs","category":"MongoDB"};
				const file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog/run-mongodb-locally-in-nextjs.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nMac M2 Sonoma | Next.js 14.2.6 | MongoDB 7.0\r\n\r\n## 1. Install MongoDB with Homebrew\r\n\r\n```bash\r\nbrew tap mongodb/brew\r\n```\r\n\r\n```bash\r\nbrew install mongodb-community@7.0\r\n```\r\n\r\n## 2. Start MongoDB service\r\n\r\n```bash\r\nbrew services start mongodb-community@7.0\r\n```\r\n\r\n## 3. Check MongoDB service status\r\n\r\n```bash\r\nbrew services list\r\n```\r\n\r\nHere you should have a table like this with the status `started`:\r\n  \r\n```bash\r\nName              Status  User File\r\nmongodb-community started user ~/Library/[...]/mongodb-community\r\n```\r\n\r\n## 4. Connect to MongoDB\r\n\r\n```bash\r\nmongosh\r\n```\r\n\r\nNow you can see the MongoDB shell prompt:\r\n\r\n```bash\r\nCurrent Mongosh Log ID: 1234567890\r\nConnecting to: mongodb://\r\nUsing MongoDB: 7.0.0\r\n```\r\n\r\n### 4.1. Show databases\r\n\r\n```bash\r\nshow dbs\r\n```\r\nBy default you should see some databases like `admin`, `config`, `local`, `test`.\r\n\r\nMongo places your data in the `test` (`test>`) database  by default. If you want to create a new database, you can do it with the `use` command + the name of the database.\r\n\r\n\r\n## 5. Create a new collection\r\n\r\nWe are going to test the connection in the terminal with a new collection called `myNewCollection`.\r\n\r\n```bash\r\ndb.createCollection('myNewCollection')\r\n```\r\n\r\n## 6. Insert a new document\r\n\r\n```bash\r\ndb.myNewCollection.insertOne({ name: 'Raul', age: 30 })\r\n```\r\n\r\n## 7. Query all documents\r\n\r\n```bash\r\ndb.myNewCollection.find()\r\n```\r\n\r\n## `Note:` Keep this in mind before going to the next step\r\n\r\n- You can have multiple databases in MongoDB.\r\n- Each database can have multiple collections.\r\n- Each collection can have multiple documents.\r\n\r\nThe structure is like this:\r\n\r\n```bash\r\nDatabase\r\n  Collection\r\n    Document\r\n```\r\n\r\nThe `Database` is the top-level container for our data. It is the container for collections. The `Collection` is a group of documents. The `Document` is a set of key-value pairs that you might be manipulating them with mongoose in your Next.js project.\r\n\r\nIn the terminal when you run `mongosh` normally you are in the `test` database, thats why you see the `test>` prompt. So then all the commands you run are in the `test` database.\r\n\r\nSo when you run `test> db.myNewCollection.find()` you are querying the `myNewCollection` collection in the `test` database.\r\n\r\n---\r\n\r\n## 8. Add the MongoDB URI to Next.js .env.local file\r\n\r\nOk so now we have MongoDB installed and running on our Mac. We need to add the MongoDB URI to our Next.js project.\r\n\r\n```bash\r\nmongosh\r\n```\r\n\r\nYou will see the MongoDB shell prompt of the step 4. `copy` the \"Connecting to\" value.\r\n\r\n```bash\r\nConnecting to: mongodb://127.0.0.1:27017/...\r\n```\r\n\r\nGo to Next.js and paste it in your `.env.local` file in your Next.js project.\r\n\r\n```json\r\nMONGODB_URI=mongodb://127.0.0.1:27017/...\r\n```\r\n\r\n## 9. Test the connection\r\n\r\nYou can forget the previous collection we created in the terminal.\r\n\r\nRun your Next.js project with `npm run dev` and test the connection with MongoDB, you first need to submit a form or make a request to the database, like registering a new user.\r\n\r\nThen in the terminal:\r\n  \r\n  ```bash\r\n  mongosh\r\n```\r\n\r\nEnsure you are in the correct database and collection in our case `test` and `users`:\r\n\r\n```bash\r\nuse test\r\n```\r\n\r\nNow check the database and collection `users`:\r\n```bash\r\ndb.users.find().pretty()\r\n```\r\n\r\nHere we are inside the DB `test` and the collection `users`. You should see the new user you just registered.\r\n\r\nMake sure you are in the correct database and collection otherwise you will not see the new user.\r\n\r\n---\r\n\r\n## How to Stop MongoDB service \r\n(Do not forget to stop the service when you are done)\r\n\r\n```bash\r\nbrew services stop mongodb-community@7.0\r\n```\r\n`Reestart` MongoDB service:\r\n\r\n```bash\r\nbrew services restart mongodb-community@7.0\r\n```\r\n\r\n---\r\n\r\n### References\r\n[MongoDB Doc](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-install-mongodb-with-homebrew","text":"1. Install MongoDB with Homebrew"},{"depth":2,"slug":"2-start-mongodb-service","text":"2. Start MongoDB service"},{"depth":2,"slug":"3-check-mongodb-service-status","text":"3. Check MongoDB service status"},{"depth":2,"slug":"4-connect-to-mongodb","text":"4. Connect to MongoDB"},{"depth":3,"slug":"41-show-databases","text":"4.1. Show databases"},{"depth":2,"slug":"5-create-a-new-collection","text":"5. Create a new collection"},{"depth":2,"slug":"6-insert-a-new-document","text":"6. Insert a new document"},{"depth":2,"slug":"7-query-all-documents","text":"7. Query all documents"},{"depth":2,"slug":"note-keep-this-in-mind-before-going-to-the-next-step","text":"Note: Keep this in mind before going to the next step"},{"depth":2,"slug":"8-add-the-mongodb-uri-to-nextjs-envlocal-file","text":"8. Add the MongoDB URI to Next.js .env.local file"},{"depth":2,"slug":"9-test-the-connection","text":"9. Test the connection"},{"depth":2,"slug":"how-to-stop-mongodb-service","text":"How to Stop MongoDB service"},{"depth":3,"slug":"references","text":"References"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
