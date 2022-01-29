import { Item } from "./item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < Item.length; i++) {
            this.controlQuality(i);
            this.updateSellIn(i);
        }
        return Item;
    }

    private controlQuality(i: number) {
        if (Item[i].name != 'Aged Brie' && Item[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (Item[i].quality > 0) {
                if (Item[i].name != 'Sulfuras, Hand of Ragnaros') {
                    Item[i].quality = Item[i].quality - 1;
                }
            }
        } else {
            if (Item[i].quality < 50) {
                Item[i].quality = Item[i].quality + 1;
                if (Item[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (Item[i].sellIn < 11) {
                        if (Item[i].quality < 50) {
                            Item[i].quality = Item[i].quality + 1;
                        }
                    }
                    if (Item[i].sellIn < 6) {
                        if (Item[i].quality < 50) {
                            Item[i].quality = Item[i].quality + 1;
                        }
                    }
                }
            }
        }
    }

    private updateSellIn(i: number) {
        if (Item[i].name != 'Sulfuras, Hand of Ragnaros') {
            Item[i].sellIn = Item[i].sellIn - 1;
        }
        this.lessZero(i);
    }

    private lessZero(i: number) {
        if (Item[i].sellIn < 0) {
            this.differenceString(i);
        }
    }

    private differenceString(i: number) {
        if (Item[i].name != 'Aged Brie') {
            if (Item[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (Item[i].quality > 0) {
                    if (Item[i].name != 'Sulfuras, Hand of Ragnaros') {
                        Item[i].quality = Item[i].quality - 1;
                    }
                }
            } else {
                Item[i].quality = Item[i].quality - Item[i].quality;
            }
        } else {
            if (Item[i].quality < 50) {
                Item[i].quality = Item[i].quality + 1;
            }
        }
    }
}