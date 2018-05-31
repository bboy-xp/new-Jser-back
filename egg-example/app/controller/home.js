'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
    const res = await axios.get('https://qXyfdUpjtcP0pEBFa2BAwQ:dshj86DGdpipjdvrTdIiAg@jinshuju.net/api/v1/forms/GF10CJ');
    const newdata = JSON.stringify(res.data);
    console.log(newdata);
  //   const log = {
  //     "name": "你的基本信息",
  //     "description": "",
  //     "fields": [{
  //         "field_4": {
  //             "label": "姓名",
  //             "type": "single_line_text",
  //             "notes": "",
  //             "private": false,
  //             "validation": {}
  //         }
  //     }, {
  //         "field_5": {
  //             "label": "你是",
  //             "type": "single_choice",
  //             "notes": "",
  //             "private": false,
  //             "validation": {},
  //             "choices": [{
  //                 "name": "男生",
  //                 "value": "cJqT",
  //                 "hidden": false
  //             }, {
  //                 "name": "女生",
  //                 "value": "fGO4",
  //                 "hidden": false
  //             }],
  //             "allow_other": false
  //         }
  //     }, {
  //         "field_6": {
  //             "label": "你所在的学校或单位",
  //             "type": "single_line_text",
  //             "notes": "",
  //             "private": false,
  //             "validation": {}
  //         }
  //     }, {
  //         "field_7": {
  //             "label": "你所在的年级",
  //             "type": "single_choice",
  //             "notes": "",
  //             "private": false,
  //             "validation": {},
  //             "choices": [{
  //                 "name": "大一",
  //                 "value": "0sb9",
  //                 "hidden": false
  //             }, {
  //                 "name": "大二",
  //                 "value": "FX1K",
  //                 "hidden": false
  //             }, {
  //                 "name": "大三",
  //                 "value": "qQ5p",
  //                 "hidden": false
  //             }, {
  //                 "name": "大四",
  //                 "value": "k5XG",
  //                 "hidden": false
  //             }, {
  //                 "name": "研究生",
  //                 "value": "j1zS",
  //                 "hidden": false
  //             }, {
  //                 "name": "已毕业",
  //                 "value": "nS2D",
  //                 "hidden": false
  //             }],
  //             "allow_other": false
  //         }
  //     }, {
  //         "field_8": {
  //             "label": "你所学的专业",
  //             "type": "single_line_text",
  //             "notes": "",
  //             "private": false,
  //             "validation": {}
  //         }
  //     }, {
  //         "field_9": {
  //             "label": "你正在使用的手机号",
  //             "type": "single_line_text",
  //             "notes": "",
  //             "private": false,
  //             "validation": {}
  //         }
  //     }, {
  //         "field_10": {
  //             "label": "你对计算机操作的熟练程度是?",
  //             "type": "single_choice",
  //             "notes": "",
  //             "private": false,
  //             "validation": {},
  //             "choices": [{
  //                 "name": "纯小白只会开机",
  //                 "value": "et4t",
  //                 "hidden": false
  //             }, {
  //                 "name": "会基本的文档，表格，PPT的编辑操作",
  //                 "value": "4rND",
  //                 "hidden": false
  //             }, {
  //                 "name": "熟练使用Office，Adobe等软件",
  //                 "value": "koIU",
  //                 "hidden": false
  //             }, {
  //                 "name": "上天下地，无所不能",
  //                 "value": "2g9q",
  //                 "hidden": false
  //             }],
  //             "allow_other": false
  //         }
  //     }, {
  //         "field_11": {
  //             "label": "你想参加Jser训练营的原因是?",
  //             "type": "multiple_choice",
  //             "notes": "",
  //             "private": false,
  //             "validation": {},
  //             "choices": [{
  //                 "name": "想提升自己的职业技能",
  //                 "value": "OZcp",
  //                 "hidden": false
  //             }, {
  //                 "name": "想从事互联网相关工作",
  //                 "value": "7X0R",
  //                 "hidden": false
  //             }, {
  //                 "name": "对互联网、电子产品有浓厚兴趣",
  //                 "value": "b6ia",
  //                 "hidden": false
  //             }, {
  //                 "name": "想认识更多兴趣相投的校友",
  //                 "value": "wLN9",
  //                 "hidden": false
  //             }, {
  //                 "name": "我还有其他的原因*",
  //                 "value": "BmjG",
  //                 "hidden": false
  //             }],
  //             "allow_other": false
  //         }
  //     }, {
  //         "field_12": {
  //             "label": "其他原因",
  //             "type": "single_line_text",
  //             "notes": "",
  //             "private": false,
  //             "validation": {}
  //         }
  //     }, {
  //         "field_13": {
  //             "label": "介绍一下你自己，说说你的兴趣爱好以及在大学的理想和成就（140字以上）",
  //             "type": "paragraph_text",
  //             "notes": "",
  //             "private": false,
  //             "validation": {}
  //         }
  //     }]
  // };

  
    // const data = { "name": "你的基本信息", "description": "", "fields": [{ "field_4": { "label": "姓名", "type": "single_line_text", "notes": "", "private": false, "validation": {} } }, { "field_5": { "label": "你是", "type": "single_choice", "notes": "", "private": false, "validation": {}, "choices": [{ "name": "男生", "value": "cJqT", "hidden": false }, { "name": "女生", "value": "fGO4", "hidden": false }], "allow_other": false } }, { "field_6": { "label": "你所在的学校或单位", "type": "single_line_text", "notes": "", "private": false, "validation": {} } }, { "field_7": { "label": "你所在的年级", "type": "single_choice", "notes": "", "private": false, "validation": {}, "choices": [{ "name": "大一", "value": "0sb9", "hidden": false }, { "name": "大二", "value": "FX1K", "hidden": false }, { "name": "大三", "value": "qQ5p", "hidden": false }, { "name": "大四", "value": "k5XG", "hidden": false }, { "name": "研究生", "value": "j1zS", "hidden": false }, { "name": "已毕业", "value": "nS2D", "hidden": false }], "allow_other": false } }, { "field_8": { "label": "你所学的专业", "type": "single_line_text", "notes": "", "private": false, "validation": {} } }, { "field_9": { "label": "你正在使用的手机号", "type": "single_line_text", "notes": "", "private": false, "validation": {} } }, { "field_10": { "label": "你对计算机操作的熟练程度是?", "type": "single_choice", "notes": "", "private": false, "validation": {}, "choices": [{ "name": "纯小白只会开机", "value": "et4t", "hidden": false }, { "name": "会基本的文档，表格，PPT的编辑操作", "value": "4rND", "hidden": false }, { "name": "熟练使用Office，Adobe等软件", "value": "koIU", "hidden": false }, { "name": "上天下地，无所不能", "value": "2g9q", "hidden": false }], "allow_other": false } }, { "field_11": { "label": "你想参加Jser训练营的原因是?", "type": "multiple_choice", "notes": "", "private": false, "validation": {}, "choices": [{ "name": "想提升自己的职业技能", "value": "OZcp", "hidden": false }, { "name": "想从事互联网相关工作", "value": "7X0R", "hidden": false }, { "name": "对互联网、电子产品有浓厚兴趣", "value": "b6ia", "hidden": false }, { "name": "想认识更多兴趣相投的校友", "value": "wLN9", "hidden": false }, { "name": "我还有其他的原因*", "value": "BmjG", "hidden": false }], "allow_other": false } }, { "field_12": { "label": "其他原因", "type": "single_line_text", "notes": "", "private": false, "validation": {} } }, { "field_13": { "label": "介绍一下你自己，说说你的兴趣爱好以及在大学的理想和成就（140字以上）", "type": "paragraph_text", "notes": "", "private": false, "validation": {} } }] };
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
  async postTableData() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    ctx.body = "ok";
  }
}

module.exports = HomeController;
