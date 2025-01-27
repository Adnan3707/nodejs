// CallBack
async  function execute(name,cb){
    setTimeout(()=>{
        console.log(`Hello ${name}`)
    },2000)
    cb('Function Executed')
}
function test(name){
    console.log(name)
}
execute('Rahul',test);

// Database Function

function dbConnect(){
 let connnection = mysql.connect({
        host:'localhost',
        user:'root',
        password:'root',
        database:'test'
 })
 return connnection    
};

async function queryDb(query) {
    let connection = await dbConnect();
    try{
        let result = await connection.query(query);
        return result;
    }catch(err){
        console.log(err)
    }
}