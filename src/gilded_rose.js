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
    this.items.forEach((item) => {
      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrie(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePasses(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          // Sulfuras does not change in quality or sellIn
          break;
        default:
          this.updateRegularItem(item);
          break;
      }
      this.updateSellIn(item);
    });
    return this.items;
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
    if (item.sellIn <= 0 && item.quality < 50) {
      item.quality += 1;
    }
  }

  updateBackstagePasses(item) {
    let toAdd = 1;
    if (item.sellIn <= 5) toAdd = 3;
    else if (item.sellIn <= 10) toAdd = 2;
    if (item.sellIn == 0) item.quality = 0;
    else {
      item.quality = Math.min(item.quality + toAdd, 50);
    }
  }

  updateRegularItem(item) {
    if (item.name.includes('Conjured')) {
      item.quality = Math.max(0, item.quality - 2);
    } else {
      item.quality = Math.max(0, item.quality - 1);
    }
    if (item.sellIn <= 0) {
      if (item.name.includes('Conjured')) {
        item.quality = Math.max(0, item.quality - 2);
      } else {
        item.quality = Math.max(0, item.quality - 1);
      }
    }
  }

  updateSellIn(item) {
    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      item.sellIn -= 1;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
