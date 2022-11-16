const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose', () => {
  describe('Item: +5 Dexterity Vest', () => {
    // beforeEach(() => {});
    it('checks qualities of +5 Dexterity Vest', () => {
      const gildedRose = new Shop([
        new Item('+5 Dexterity Vest', 10, 20),
        new Item('+5 Dexterity Vest', -1, 8),
        new Item('+5 Dexterity Vest', -10, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('+5 Dexterity Vest');
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
      expect(items[1].sellIn).toBe(-2);
      expect(items[1].quality).toBe(6);
      expect(items[2].sellIn).toBe(-11);
      expect(items[2].quality).toBe(0);
    });
  });

  describe('Item: Aged Brie', () => {
    // beforeEach(() => {});
    it('checks ∆sellIn is inverse to ∆quality when >0', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Aged Brie');
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    });
    it('checks ∆sellIn is inverse to 2x∆quality when <0', () => {
      const gildedRose = new Shop([new Item('Aged Brie', -1, 4)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(6);
    });
  });
});
