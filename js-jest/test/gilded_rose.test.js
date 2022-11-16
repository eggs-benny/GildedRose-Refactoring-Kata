const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should test +5 Dexterity Vest quality reduction for >0 sellIn", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });
});
