
const codeText = `

  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 40px;
      background-color: #f9f9f9;

      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    section {
      margin-bottom: 40px;
    }
    a {
      color: #2980b9;
    }
  </style>
  <h1>🛠️ How to Use the Code Editor</h1>
  <p>Welcome to the Code Editor! This guide will help you get started writing and customizing crafting recipes using JavaScript.</p>

  <section>
    <h2>📄 Overview</h2>
    <p>This code editor allows you to define <strong>resources</strong>, <strong>processes</strong>, and <strong>recipes</strong> in a crafting system using JavaScript. Your script is executed in a sandboxed environment (your browser) using <code>eval()</code>, with an input object (<code>arguments[0]</code>) that serves as the connection to the rest of the application.</p>
  </section>

  <section>
    <h2>🧩 Default/Example Template</h2>
    <pre><code>// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

let resources = {
    "Stick": new Resource("Stick"),
    "Iron Ingot": new Resource("Iron Ingot"),
    ...
}

resources["Oak Log"].isBase = true;
...

let processes = {
    "Crafting Table": new Process("Crafting Table"),
    ...
}

let recipes = [
    new Recipe("Furnace", [new Stack("Iron Ore")], [new Stack("Iron Ingot")]),
    ...
]

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "Pickaxe"};
</code></pre>
</section>

<section>
  <h2>🧦 Key Concepts</h2>
  The exact details which are guarenteeded to be up to date with the latest version of the site can be found in the <a href="` + process.env.githubRepoUrl + `/blob/master/app/crafting/units.ts">units.ts</a> file in the CraftingCalc repository.

  <p>BaseThing is the foundation for all resources and processes, providing common properties found in anything that extends <code>BaseThing</code>. 
    It is not meant to be used directly. As of writing, <code>imgUrl</code>, <code>sourceUrl</code>, and <code>tags</code> are not used in the calculator.</p>
  <pre><code>class BaseThing {
  name: string;
  imgUrl?: string;
  sourceUrl?: string;
  isBase: boolean = false;
  isDisabled: boolean = false;
  durability: number = -1;
  value: number = 1;
  tags: Array<string> = [];
    
    constructor(name: string, config = {}) {
      this.name = name;
      if (config) Object.assign(this, config);
    }
  }
  </code></pre>
  
  <h3>🔹 Resources</h3>
  This class is a resource or item in the game. This can include items such as "Iron Ingots" or more ethereal things such as "Energy". 
  <pre><code>
class Resource extends BaseThing {
  baseQuantity: number = 1;
  constructor(name: string, config = {}) {
    super(name, config);
  }
}

// Example usages:
// Building by hand
let ironIngot = {
  name: "Iron Ingot",
  isBase: false,
  durability: -1,
  value: 1,
  tags: [],
};

// Shortend versions
let ironIngot = new Resource("Iron Ingot");
let oakLogResource = new Resource("Oak Log", { isBase: true, value: 2});
</code></pre>
  <ul>
    <li><code>name</code>: The name of the resource.</li>
    <li><code>imgUrl?</code>: Optional image URL.</li>
    <li><code>sourceUrl?</code>: Optional source or reference link.</li>
    <li><code>isBase</code>: True if the item exists naturally.</li>
    <li><code>isDisabled</code>: True if the item is blocked from use.</li>
    <li><code>durability</code>: Tool durability, if applicable (default -1).</li>
    <li><code>value</code>: General worth (default 1).</li>
    <li><code>tags</code>: Custom categories or filters.</li>
    <li><code>baseQuantity</code>: Quantity produced in basic form (default 1).</li>
  </ul>

  <h3>🔸 Processes</h3>
  <p>Processes represent crafting stations or other methods to transform resources. Under the hood, it works the same as <code>BaseThing</code>, with no added fields.</p>
  <pre><code>class Process extends BaseThing {
  constructor(name: string, config = {}) {
    super(name, config);
  }
}

// Example usages following the same pattern as Resource:
let craftingTable = new Process("Crafting Table");
let furnace = new Process("Furnace", { imgUrl: "furnace.png" });
let solarPanel = new Process("Solar Panel", { isBase: true, isDisabled: true });
</code></pre>

  <h3>📦 Stacks</h3>
  <p>Defines quantities of a specific resource. There is no restriction on how large amount can be. (for modded reasons)</p>
  <pre><code>class Stack {
  constructor(
    public resourceName: string,
    public amount: number = 1
  ) {}
}

// Example usage:
let singlePickaxe = new Stack("Wooden Pickaxe");
let ingots = new Stack("Iron Ingot", 128); // 128 Iron Ingots
</code></pre>

  <h3>📜 Recipes</h3>
  <p>Defines how resources can be transformed. Bonus outputs are not implemented yet.</p>
  <pre><code>class Recipe {
  constructor(
    public processUsed: string,
    public inputResources: Stack[],
    public outputResources: Stack[],
    public outputBonusChances: [string, ProbabilityStyle][] = [],
    public timeSpent: number = 0,
    public id?: number, // This should not be set by the user, it is set by the system.
    public isDisabled: boolean = false
  ) {}
}

// Example usages:
// Simple recipe constructor is recomended
let simpleRecipe = new Recipe(
  "Crafting Table",
  [new Stack("Wooden Plank", 4)], // Stacks are used because order does not matter, net input -> output does.
  [new Stack("Crafting Table")]
);

let solarPanelEnergyRecipe = new Recipe(
  "Solar Panel",
  [],
  [new Stack("Energy", 1000)],
);
</code></pre>

<h3>Meta Object</h3>
<p>The <code>meta</code> object contains metadata about the preset, such as its version and name. It is not used in the crafting calculator but can be useful for organization. It exists as a bit of a sanity check for the calculator.</p>
<pre><code>data.meta = {
  dataVersion: 1, // Version of the data format
  name: "Pickaxe" // Name of the preset
};
</section>

<section>
  <h2>🧪 Live Editing</h2>
  <p>You can modify this code to:</p>
  <ul>
    <li>Add new materials</li>
    <li>Create new recipes</li>
    <li>Disable or enable resources</li>
    <li>Add new processes (e.g., "Smelter", "Grinder")</li>
  </ul>
  <p>All changes are applied dynamically through the <code>data</code> object passed in.</p>
</section>

<section>
  <h2>⚠️ Notes</h2>
  <ul>
    <li>JavaScript errors will prevent your code from running.</li>
    <li>Ensure all variables are properly declared and added to <code>data</code>.</li>
    <li>Do not redeclare <code>data</code> itself.</li>
  </ul>
</section>

<section>
  <h2>🧱 Example: Add a New Recipe</h2>
  <p>Add a recipe to turn <strong>Plank Dust</strong> into <strong>Plank</strong> using a <code>Dryer</code>:</p>
  <pre><code>processes["Dryer"] = new Process("Dryer");
recipes.push(
new Recipe("Dryer", [new Stack("Plank Dust")], [new Stack("Plank")])
);</code></pre>
</section>

<section>
  <h2>📚 See Also</h2>
  <ul>
    <li><a href="` + process.env.githubRepoUrl + `">Source code</a></li>
  </ul>
</section>
`

export default function Main() {
    return (
    <div dangerouslySetInnerHTML={{__html: codeText}} className="light w-screen absolute top-0 left-0 h-screen overflow-y-scroll">

    </div>
    )
}