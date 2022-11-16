class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].quality > 50) {this.items[i].quality = 50}
      if (this.items[i].quality < 0) {this.items[i].quality = 0}
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {this.items[i].quality = 80; this.items[i].sellIn}
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
