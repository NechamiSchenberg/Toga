import express from 'express';

const app = express()

const port = 3000;
const singleNumber = (nums) => {
    var result=0
    nums.forEach(element => {
        result^=element
    });
    return result

}

app.get('/', (req, res) => {
    const nums = JSON.parse(process.env.NUMS || '[]');
    const result = singleNumber(nums)
    console.log(result);
    res.json({ result: result });
})

app.listen(port, function () {
    console.log(`app listening http://localhost:${port}`);
})
