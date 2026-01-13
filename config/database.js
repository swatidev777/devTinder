const mongoose = require('mongoose');

const connectDB = async () => {
  
    await mongoose.connect(
    //  'mongodb+srv://DEVTINDER:Swati28@clusterdb.6pswmv8.mongodb.net/?appName=ClusterDB'
    'mongodb+srv://swatimupparathy1_db_user:sVrE3YREWpAztkY1@cluster0.x9es62u.mongodb.net/swatimupparathy1_db_user'
    );
  

};



module.exports=connectDB;