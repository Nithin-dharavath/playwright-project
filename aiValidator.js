const ollama_url = process.env.ollama_url || "https://localhost/11434";
const ollama_model = process.env.ollama_model || "lama 3:2" ;


async function classifyDreams(names) {

    const systemPrompt = `given the deatils of the dreams names and its data {${names.map(dream => dream.name)}} classify it into the "' good or bad'" - only those classification`;

    const Body = JSON.stringify({
        model: ollama_model, messages : [{ role : "user", content : systemPrompt}], format : "json", Stream : false, Option : {temperature : 0}
    });

    const response = await fetch(`${ollama_url}/api/chat`, {
        method : "POST",
        headers : {'Content-Type': 'application/json'},
        body: Body
    });

};

const data = await response.json();
const content = data.message.content;

const parsed_data = JSON.parse(content);

if(parsed_data !== names.length){
    throw new error("dreams name length are incorrect")
};

if(!Array.isArray(parsed_data.results)){
    throw new error("structure is incorrect")
};

for (const res of parsed_data.results){
    if (res.type !== "Good" && res.type !== "Bad"){
        throw new error("not classifyed in the good or bad ")
    }
};

//validation//

for (let i=0; i< names.length; i++){
    const value = parsed_data[i];
    if(value.name !== names[i].name){
        throw new error("incorrect")
    }

    return parsed_data.results;
};

export default classifyDreams;