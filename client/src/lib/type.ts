export type TGoods = {
  code: string;
  name: string;
  statusCode: string;
  brandName: string;
  brandId: number;
  price: {
    tag: number;
    real: number;
    discountRate: number;
    maxDiscountPrice: number;
    maxDiscountRate: number;
  };
  url: string;
  isFavorite: boolean;
  isSoldOut: boolean;
  deliveryFeeCode: string;
  badges: null;
};

export enum GoodsTypeEnum {
  newest = "newest",
  low_price = "low_price",
  high_price = "high_price",
  high_discount_rate = "high_discount_rate",
  best = "best",
}
