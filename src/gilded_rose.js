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
      this.moveToNextDay(i);
      this.updateItems(i);
    }
    return this.items;
  }

  moveToNextDay(i) {
    this.items[i].sellIn--;
  }

  updateItems(i) {
    switch (this.items[i].name) {
      case 'Aged Brie':
        this.agedBrieQualityRules(i);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.backstagePassQualityRules(i);
        break;
      case 'Conjured Mana Cake':
        this.defaultQualityRules(i);
        this.defaultQualityRules(i);
        break;
      default:
        this.defaultQualityRules(i);
        break;
    }
    this.setMinMaxQuality(i);
    this.sulfurasQualityRules(i);
  }

  agedBrieQualityRules(i) {
    this.items[i].quality++;
    if (this.items[i].sellIn < 0) {
      this.items[i].quality++;
    }
  }

  backstagePassQualityRules(i) {
    this.items[i].quality++;
    if (this.items[i].sellIn < 10) {
      this.items[i].quality++;
    }
    if (this.items[i].sellIn < 5) {
      this.items[i].quality++;
    }
    if (this.items[i].sellIn < 0) {
      this.items[i].quality = 0;
    }
  }

  defaultQualityRules(i) {
    this.items[i].quality--;
    if (this.items[i].sellIn < 0) {
      this.items[i].quality--;
    }
  }

  setMinMaxQuality(i) {
    if (this.items[i].quality > 50) {
      this.items[i].quality = 50;
    }
    if (this.items[i].quality < 0) {
      this.items[i].quality = 0;
    }
  }

  sulfurasQualityRules(i) {
    if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality = 80;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
