const express = require('express');
let Router = express.Router();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongodb.MongoClient;
let urlencodedParser = bodyParser.urlencoded({ extended: false });

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});

// function datatime() {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let time = year + '-' + month + '-' + day;
//     return time;
// }

Router.get('/', (req, res) => {
    let { check } = req.query;
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, database) => {
        if (err) throw err;
        let db = database.db('VueProject');
        let { curr, nums } = req.query;
        let goodslist = db.collection('goodslist');
        if (check == 1) {
            goodslist.find().count((err, result) => {
                let count = result;
                goodslist.find().sort({ "ID": 1 }).skip((curr - 1) * nums).limit(nums * 1).toArray((err, result) => {
                    // result：数据查询结果
                    if (err) {
                        res.send({
                            code: 0,
                            msg: err,
                            data: []
                        })
                        return
                    }
                    res.send({
                        count: count,
                        code: 1,
                        msg: 'success',
                        data: result
                    });
                });

                database.close();
            });
        }


        if (check == 2) {
            let { proId } = req.query;
            // console.log(actId)
            goodslist.findOne({ proId: proId * 1 }, (err, result) => {
                // result：数据查询结果
                if (result) {
                    res.send({
                        code: 1,
                        data: result,
                        msg: 'ok'
                    })
                } else {
                    res.send({
                        code: 0,
                        data: [],
                        msg: 'fail'
                    })
                }
            });

            database.close();

        }

        //模糊查询
        if (check == 3) {
            let { val } = req.query;
            goodslist.find({
                $or: [
                    { proName: { $regex: val } },
                ]
            }).toArray((err, result) => {
                // let count = result.length;
                // let arr = result.slice((curr - 1) * nums, curr * nums);
                // console.log(count)
                // result： 数据查询结果
                if (err) {
                    res.send({
                        code: 0,
                        msg: err,
                        data: []
                    })
                    return
                }
                res.send({
                    code: 1,
                    msg: 'success',
                    data: result
                });

                database.close();

            })
        }





    })
});





module.exports = Router;