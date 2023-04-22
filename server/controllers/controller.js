const data = require('../data');
const sources = require('../models/SourceModel')

module.exports = {
    add_source: (req, res) => {
        sources.create(req.body)
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message": "OK2", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    sources: (req,res)=>{
        sources.find({})
        .then(sourcesData => {
            console.log(sourcesData);
            res.json({"message": "HELLO", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
        
    },
    testing: (req,res) =>{
        res.json({"message": "WORKING"})
    },
    delete_source: (req, res) => {
        sources.findOneAndDelete({id: req.params.id})
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message":"WORKING", data: sourcesData})
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
};

//module.exports = {add_source, sources, testing, delete_source};


// //importing sources from data
// const data = require('../data');

// // const sources=[
// //     {id:1, Name:'presbo'},
// //     {id:2, Name: 'john jay mouse'},
// //     {id:3, Name: 'Water Bottle Man'},
// // ];


// const hello = (req, res) => {
//     res.json({"message": "Hello World!"});
//     const { name } = req.body;
//     print(name);
//     //new id for source
//     const id = sources.length + 1;
//     const newSource = { id, name };
//     //adding newSource
//     sources.push(newSource);
//     //returning value of newSource
// };

// //req= body of request, res= info you send back after receiving request
// const getAllSources = (req,res) => {
//     res.json(data.sources);
// }

// const addSource = (req,res) =>{
//     //name of new source
//     const { name } = req.body.name;
//     const { email } = req.body.email;
//     res.json({ message: name });
//     // //new id for source
//     const id = sources.length + 1;
//     const newSource = { id, name, email };
//     // //adding newSource
//     sources.push(newSource);
//     // //returning value of newSource
//     res.json(newSource);
// }

// const deleteSource = (req, res) => {
//     id = req.params.id;
//     //res.json({ message: id});
//     const remove = data.sources.filter((source) => source.id !== id);
//     res.json({ message: remove });
// };

// module.exports = {hello,getAllSources,addSource,deleteSource};