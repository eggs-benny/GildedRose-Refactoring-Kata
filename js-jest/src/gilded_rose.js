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
      switch (this.items[i].name) {
        case 'Aged Brie':
          this.items[i].sellIn --
          this.items[i].quality ++
          if (this.items[i].sellIn < 0) {this.items[i].quality ++}
          break
        case 'Conjured Mana Cake':
          this.items[i].sellIn --
          this.items[i].quality -= 2
          if (this.items[i].sellIn < 0) {this.items[i].quality -= 2}
          break
        default:
          this.items[i].sellIn --
          this.items[i].quality --
          if (this.items[i].sellIn < 0) {this.items[i].quality -- }
          break
      }
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
