// shared/js/models.js

export class FurnitureEntity {
    constructor({
      id,
      name,
      price,
      discount,
      discountPercent = null,
      images = []
    }) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.discount = discount;
      this.discountPercent = discountPercent; 
      this.images = images;
    }
  }
  export class DetailFurnitureEntity {
  constructor({
      id,
      name,
      price,
      description,
      weight,
      height,
      width,
      material,
      discount = false,
      discountStart = null,
      discountEnd = null,
      discountPercentage = 0,
      images = []
  }) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.weight = weight;
      this.height = height;
      this.width = width;
      this.material = material;
      this.discount = discount;
      this.discountStart = discountStart;
      this.discountEnd = discountEnd;
      this.discountPercentage = discountPercentage;
      this.images = images;
  }
}
  
  export class CategoryEntity {
    constructor({ id, name }) {
      this.id = id;
      this.name = name;
    }
  }
  