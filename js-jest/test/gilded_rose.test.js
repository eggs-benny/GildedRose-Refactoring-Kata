const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose', () => {
  describe('Std Items(inc +5 Dexterity vest)', () => {
    // beforeEach(() => {});
    it('checks that ∆sellIn >0 === 1 x ∆quality', () => {
      const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('+5 Dexterity Vest');
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });
    it('checks that ∆sellIn <0 === 2 x ∆quality', () => {
      const gildedRose = new Shop([new Item('+5 Dexterity Vest', -1, 8)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(6);
    });
    it('checks quality !<0', () => {
      const gildedRose = new Shop([new Item('+5 Dexterity Vest', -10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-11);
      expect(items[0].quality).toBe(0);
    });
    it('checks elixir of the mongoose acts the same as +5DV', () => {
      const gildedRose = new Shop([
        new Item('Elixir of the Mongoose', 10, 20),
        new Item('Elixir of the Mongoose', -1, 8),
        new Item('Elixir of the Mongoose', -10, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
      expect(items[1].sellIn).toBe(-2);
      expect(items[1].quality).toBe(6);
      expect(items[2].sellIn).toBe(-11);
      expect(items[2].quality).toBe(0);
    });
  });

  describe('Item: Aged Brie', () => {
    it('checks that ∆sellIn >0 === -1 x ∆quality', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Aged Brie');
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    });
    it('checks that ∆sellIn <0 === -2 x ∆quality', () => {
      const gildedRose = new Shop([new Item('Aged Brie', -1, 4)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(6);
    });
    it('checks that quality !>50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', -24, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-25);
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Item: Sulfuras, Hand of Ragnaros', () => {
    it('checks that regardless of n sellIn, quality = 80', () => {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });
  });

  describe('Item: Backstage passes to a TAFKAL80ETC concert', () => {
    it('checks that ∆sellIn > 10 === ∆quality', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });

    it('checks that 10 > ∆sellIn > 5 === 2x∆quality', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 9, 27),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(8);
      expect(items[0].quality).toBe(29);
    });

    it('checks that 5 > ∆sellIn > 0 === 3x∆quality', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 38),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(3);
      expect(items[0].quality).toBe(41);
    });

    it('checks that ∆sellIn < 0 === 0 quality', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('checks that quality !>50', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Item: Conjured Mana Cake', () => {
    xit('checks (∆sellIn > 0 === 2x∆ quality)', () => {
      const gildedRose = new Shop([new Item('Conjured Mana Cake', 3, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Conjured Mana Cake');
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(4);
    });
    xit('checks (∆sellIn < 0 === 2x∆ quality)', () => {
      const gildedRose = new Shop([new Item('Conjured Mana Cake', -1, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Conjured Mana Cake');
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(2);
    });

    it('checks that quality !<0', () => {
      const gildedRose = new Shop([new Item('Conjured Mana Cake', -1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Conjured Mana Cake');
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(0);
    });
  });
});
