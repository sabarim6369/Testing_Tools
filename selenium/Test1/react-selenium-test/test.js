const Logintesting= require('./Test_Components/Logintesting');
const Signuptesting = require('./Test_Components/Signuptesting');
(
    async ()=>{
        await Logintesting();
        await Signuptesting();
    }
)()