function tabbar() {
  return [
    {
      "id": 0,
      "selectedIconPath": "../../images/index1.png",
      "iconPath": "../../images/index.png",
      "pagePath": "/pages/pw_index/pw_index",
      "text": "赛事"
    },
    {
      "id": 0,
      "selectedIconPath": "../../images/geren1.png",
      "iconPath": "../../images/geren.png",
      "pagePath": "/pages/score_record/score_record",
      "text": "打分纪录"
    }
  ]
}
function tabbarindex() {
  return [
    {
      "indexid": 0,
      "pagePath": "/pages/xs_index/xs_index",
      "selectedIconPath": "../../images/index1.png",
      "iconPath": "../../images/index.png",
      "text": "赛事"
    },
    {
      "indexid": 0,
      "pagePath": "/pages/xs_score/xs_score",
      "iconPath": "../../images/sheet.png",
      "selectedIconPath": "../../images/sheet2.png",
      "text": "成绩"
    },
    {
      "indexid": 0,
      "pagePath": "/pages/xs_info/xs_info",
      "selectedIconPath": "../../images/geren1.png",
      "iconPath": "../../images/geren.png",
      "text": "我的"
    }
  ]
}
function tabbarmainindex(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarindex();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['indexid'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbar();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['id'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain,
  index: tabbarmainindex
}