'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
    // const data = 
    //  { serial_number: 1,
    //    field_4: '施心平',
    //    field_5: '男生',
    //    field_6: '东北农业大学',
    //    field_7: '大二',
    //    field_8: '风景园林',
    //    field_9: '18846084097',
    //    field_10: '熟练使用Office，Adobe等软件',
    //    field_11:
    //     [ '想提升自己的职业技能',
    //       '想从事互联网相关工作',
    //       '对互联网、电子产品有浓厚兴趣',
    //       '想认识更多兴趣相投的校友',
    //       '我还有其他的原因*' ],
    //    field_12: 'hacker',
    //    field_13: 'cool',
    //    creator_name: 'du28777224',
    //    created_at: '2018-05-22 13:22:33 UTC',
    //    updated_at: '2018-05-22 13:22:33 UTC',
    //    info_remote_ip: '1.190.209.38' 
    //   };
   
    // const res = await axios({
    //   method: 'POST',
    //   url: 'https://qXyfdUpjtcP0pEBFa2BAwQ:dshj86DGdpipjdvrTdIiAg@jinshuju.net/api/v1/forms/GF10CJ',
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    //   data: data
    // });
    // console.log(res.data);
  }
  postData() {
    const ctx = this.ctx;
    // console.log('走到这里了');
    const Kingdata = ctx.model.Kingdata;
    const data = ctx.request.body;
    const kingdata = new Kingdata({
      form: data.form,
      form_name: data.form_name,
      entry: data.entry
    });
    kingdata.save();
    // console.log(ctx.request.body);

    ctx.body = 'ok';
  }
  async postUsermsg() {
    const ctx = this.ctx;
    // console.log(ctx.request.body);
    const data = ctx.request.body;
    let postData = {};
    postData["field_4"] = data.name;
    postData["field_5"] = data.sex;
    postData["field_6"] = data.college;
    postData["field_7"] = data.grade;
    postData["field_8"] = data.major;
    postData["field_9"] = data.phoneNum;
    postData["field_10"] = data.reason;
    postData["field_11"] = data.level;
    postData["field_12"] = data.otherReason;
    postData["field_13"] = data.introduce;
    // console.log(postData);
    const res = await axios({
      method: 'POST',
      url: 'https://qXyfdUpjtcP0pEBFa2BAwQ:dshj86DGdpipjdvrTdIiAg@jinshuju.net/api/v1/forms/GF10CJ',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      data: postData
    });
    console.log(res.data);
    ctx.body = "ok";
  }
}

module.exports = HomeController;
