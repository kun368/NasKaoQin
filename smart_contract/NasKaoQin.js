'use strict';


class KaoQinDay {

  from = '';
  time = '';
  txHash = '';
  organization = '';
  title = '';
  forDay = '';

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.time = o.time;
    this.txHash = o.txHash;
    this.organization = o.organization;
    this.title = o.title;
    this.forDay = o.forDay;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class KaoQinCard {

  from = '';
  time = '';
  txHash = '';
  kqDayId = '';
  userId = '';

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.time = o.time;
    this.txHash = o.txHash;
    this.kqDayId = o.kqDayId;
    this.userId = o.userId;
  }

  toString() {
    return JSON.stringify(this);
  }
}

const NasKaoQin = function () {

  // 考勤ID -> KaoQinDay
  LocalContractStorage.defineMapProperty(this, 'kqDayMap', {
    parse: function (text) {
      return new KaoQinDay(text);
    },
    stringify: function (o) {
      return o.toString();
    }
  });
  // 考勤ID -> List<KaoQinCard>
  LocalContractStorage.defineMapProperty(this, 'kqDayCards');
  // 用户地址 -> List<KaoQinDay>
  LocalContractStorage.defineMapProperty(this, 'userKqDays');
  // 用户地址 -> List<KaoQinCard>
  LocalContractStorage.defineMapProperty(this, 'userKqCards');
};

NasKaoQin.prototype = {
  init: function () {
  },

  _push: function (collectionName, key, value) {
    let item = this[collectionName].get(key);
    if (!item) {
      item = [];
    }
    item.push(value);
    this[collectionName].put(key, item);
  },

  _get: function (collectionName, key) {
    let item = this[collectionName].get(key);
    if (!item) {
      item = [];
    }
    return item;
  },

  createKaoQinDay(organization, title, forDay) {
    const item = new KaoQinDay();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.organization = organization;
    item.title = title;
    item.forDay = forDay;
    this.kqDayMap.put(item.txHash, item);
    this._push("userKqDays", item.from, item);
    return item;
  },

  createPunchCard(kqDayId, userId) {
    const item = new KaoQinCard();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.kqDayId = kqDayId;
    item.userId = userId;
    this._push("kqDayCards", item.kqDayId, item);
    this._push("userKqCards", item.from, item);
    return item;
  },

  queryKqDayInfo(kqDayHash) {
    return this.kqDayMap.get(kqDayHash);
  },

  queryKqCards(kqDayHash) {
    return this._get("kqDayCards", kqDayHash);
  },

  queryUserAll(from) {
    return {
      days: this._get("userKqDays", from),
      cards: this._get("userKqCards", from),
    }
  }
};
module.exports = NasKaoQin;
