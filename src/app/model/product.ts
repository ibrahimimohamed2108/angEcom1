export class Product {

  public id: number;
  public title!: string;
  public url: string;
  public price: number;
  public category: string;
  public description: string;
  public rating: number;
  public stock: number;
  public availabilityStatus: string;
  public reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
  }[];
  public returnPolicy: string;
  public minimumOrderQuantity: number;
  public meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
  };
  
  public thumbnail: string;
  public images: string[];

  constructor(
      id: number,
      title: string,
      url: string,
      prix: number,
      category: string,
      description: string,
      discountPercentage: number,
      rating: number,
      stock: number,
      tags: string[],
      brand: string,
      sku: string,
      weight: number,
      dimensions: { width: number, height: number, depth: number },
      warrantyInformation: string,
      shippingInformation: string,
      availabilityStatus: string,
      reviews: { rating: number, comment: string, date: string, reviewerName: string, reviewerEmail: string }[],
      returnPolicy: string,
      minimumOrderQuantity: number,
      meta: { createdAt: string, updatedAt: string, barcode: string, qrCode: string },
      thumbnail: string,
      images: string[]
  ) {
      this.id = id;
      this.title = title;
      this.url = url;
      this.price = prix;
      this.category = category;
      this.description = description;
      this.rating = rating;
      this.stock = stock;
      this.availabilityStatus = availabilityStatus;
      this.reviews = reviews;
      this.returnPolicy = returnPolicy;
      this.minimumOrderQuantity = minimumOrderQuantity;
      this.meta = meta;
      this.thumbnail = thumbnail;
      this.images = images;
  }
}
