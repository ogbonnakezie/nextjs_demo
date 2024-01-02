import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://val:X3ORuTfks7SqlxGm@cluster0.bzsjv1f.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetup');

    const result = await meetupsCollection.insertOne(data);

    // console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup Inserted !' });
  }
}

export default handler;
