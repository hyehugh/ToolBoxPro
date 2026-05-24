// Test Transformers.js pipeline loading
const { pipeline, env } = require("@huggingface/transformers");

async function main() {
  console.log("Testing pipeline loading...");
  console.log("env.remoteHost:", env.remoteHost);
  
  try {
    console.log("Creating pipeline...");
    const pipe = await pipeline("text2text-generation", "Xenova/t5-base-grammar-correction", {
      dtype: "q4",
      progress_callback: (p) => {
        console.log("Progress:", JSON.stringify(p).slice(0, 200));
      },
    });
    console.log("Pipeline ready!");
    
    const result = await pipe("grammar: He go to school yesterday", {
      max_new_tokens: 50,
    });
    console.log("Result:", JSON.stringify(result));
  } catch (e) {
    console.error("Error:", e.message);
    console.error("Stack:", e.stack?.slice(0, 500));
  }
}

main();
