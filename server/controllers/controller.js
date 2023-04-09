//importing sources from data
const data = require('../data');

// const sources=[
//     {id:1, Name:'presbo'},
//     {id:2, Name: 'john jay mouse'},
//     {id:3, Name: 'Water Bottle Man'},
// ];


const hello = (req, res) => {
    res.json({"message": "Hello World!"});
    const { name } = req.body;
    print(name);
    //new id for source
    const id = sources.length + 1;
    const newSource = { id, name };
    //adding newSource
    sources.push(newSource);
    //returning value of newSource
};

//req= body of request, res= info you send back after receiving request
const getAllSources = (req,res) => {
    res.json(data.sources);
}

const addSource = (req,res) =>{
    //name of new source
    const { name } = req.body.name;
    const { email } = req.body.email;
    res.json({ message: name });
    // //new id for source
    const id = sources.length + 1;
    const newSource = { id, name, email };
    // //adding newSource
    sources.push(newSource);
    // //returning value of newSource
    res.json(newSource);
}

const deleteSource = (req, res) => {
    id = req.params.id;
    //res.json({ message: id});
    const remove = data.sources.filter((source) => source.id !== id);
    res.json({ message: remove });
};

module.exports = {hello,getAllSources,addSource,deleteSource};