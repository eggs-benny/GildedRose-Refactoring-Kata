const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  describe('Item: +5 Dexterity Vest', () => {
    beforeEach(() => {
     
    });

    it("should check ∆ quality when sellIn >0", () => {
      const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20), new Item("+5 Dexterity Vest", -1, 8)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe("+5 Dexterity Vest");
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
      expect(items[1].sellIn).toBe(-2);
      expect(items[1].quality).toBe(6);
    })
    it("should check quality can't be <0", function() {
      const gildedRose = new Shop([new Item("+5 Dexterity Vest", -10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-11);
      expect(items[0].quality).toBe(0);
    });
  });
});
