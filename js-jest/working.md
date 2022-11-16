Name                                           sellIn          quality
"+5 Dexterity Vest",                           10,              20),
Behaviour:
When sellIn +ve, d sellIn = d quality
            -ve, d sellIn = 2d quality
            Min qual = 0
Max qual = 50 (except sulfuras)

"Aged Brie",                                   2,               0),
When sellIn +ve d sellIn = -d quality
When sellIn -ve d sellIn = -2d quality

"Elixir of the Mongoose",                      5,               7),
Behaviour:
When sellIn +ve, d sellIn = d quality
            -ve, d sellIn = 2d quality
            Min qual = 0
Max qual = 50 (except sulfuras)

"Sulfuras, Hand of Ragnaros",                  0,               80),
sellIn no effect on quality


"Sulfuras, Hand of Ragnaros",                  -1,              80),
sellIn no effect on quality

"Backstage passes to a TAFKAL80ETC concert",   15,              20),
 When sellIn > 10 d sellIn = -d quality
 When 10 > sellIn > 5 d sellIn = -2d quality
 When 5 > sellIn > 0 d sellIn = -3d quality
 When sellIn < 0 = quality = 0 
"Backstage passes to a TAFKAL80ETC concert",   10,              49),
 When sellIn > 10 d sellIn = -d quality
 When 10 > sellIn > 5 d sellIn = -2d quality
 When 5 > sellIn > 0 d sellIn = -3d quality
 When sellIn < 0 = quality = 0 

"Backstage passes to a TAFKAL80ETC concert",    5,              49),
 When sellIn > 10 d sellIn = -d quality
 When 10 > sellIn > 5 d sellIn = -2d quality
 When 5 > sellIn > 0 d sellIn = -3d quality
 When sellIn < 0 = quality = 0 

Conjured Mana Cake,                            3,               6
Behaviour:
When sellIn +ve, d sellIn = 2d quality
            -ve, d sellIn = 4d quality
            Min qual = 0

            AKA 2d std



Min qual = 0
Max qual = 50 (except sulfuras)