const Mock = require('mockjs')

const data = Mock.mock({
  'items|3000': [{
    'baseSalesNO': '@id',
    'statusName': '正常',
    'pushDownStatusName': '已下推',
    'companyId': 1,
    'factoryId': 27,
    'weightDate': 1629388800000,
    'carNum': '苏544654',
    'commodityName': '废纸',
    'factoryCommodityName': '废纸',
    'specifica': '2',
    'unitPriceWithTax': 10050.50,
    'factoryAmount': 20001.00,
    'settlementWeight': 2.0000,
    'unit': '吨',
    'grossWeight': 2.2000,
    'tareWeight': 0.1000,
    'factoryWeight': 2.1000,
    'deductWater': 0.1000,
    'deductForeign': 0.1000,
    'deductForeignSubstance': 0.1000,
    'deductWeight': 0.1000,
    'deductPoint': 0.1000,
    'claimPrice': 10.00,
    'claimAmount': 100.00,
    'remark': '1',
    'multiVehicle': '否',
    'totalAmountWithTax': 0,
    'totalAmountWithNotTax': 0,
    'commodityNO': 'QHSP202007150002',
    'status': 2,
    'syncStatus': 1,
    'pushDownStatus': 1,
    'createTime': 1629428336246,
    'updateTime': 1629428336246,
    'createUserId': 100069,
    'updateUserId': 100069,
    'shipmentStatus': 1,
    'shipmentStatusName': '未关联'
  }]
})

module.exports = [{
  url: '/vue-admin-template/table/list',
  type: 'get',
  response: config => {
    const items = data.items
    return {
      code: 20000,
      data: {
        total: items.length,
        items: items
      }
    }
  }
}]
