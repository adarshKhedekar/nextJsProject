import { MongoClient } from "mongodb";
async function handler(req,res){
    if(req === "POST"){
        const data = req.body;
        console.log("hello ")
        const client = await MongoClient.connect('mongodb+srv://test:test123@cluster0.ioixyqg.mongodb.net/?retryWrites=true&w=majority');

        const db = client.db();
        const meetupCollections = db.collection('meetups');
        const result = await meetupCollections.insertOne(data)
        console.log(result);
        client.close();
        res.status(201).json({message: 'Meetup Inserted!'})
    }
}

export default handler