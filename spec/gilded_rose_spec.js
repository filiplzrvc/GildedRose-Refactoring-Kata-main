describe('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
  });

  it('should update quality and sellIn for +5 Dexterity Vest', function () {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it('should update quality and sellIn for Aged Brie', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

    it('should update quality and sellIn for Elixir of the Mongoose', function () {
      const gildedRose = new Shop([new Item('Elixir of the Mongoose', 5, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(6);
    });
  
    it('should not change quality or sellIn for Sulfuras, Hand of Ragnaros', function () {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(80);
    });
});
