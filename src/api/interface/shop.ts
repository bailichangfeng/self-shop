export interface Carousel {
  carouselUrl: string;
  redirectUrl: string;
}

export interface HotGoods {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCoverImg: string;
  sellingPrice: number;
  tag: string;
}

export interface NewGoods {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCoverImg: string;
  sellingPrice: number;
  tag: string;
}

export interface RecommendGoods {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCoverImg: string;
  sellingPrice: number;
  tag: string;
}

export interface ResponseData {
  resultCode: number;
  message: string;
  data: {
    carousels: Carousel[];
    hotGoodses: HotGoods[];
    newGoodses: NewGoods[];
    recommendGoodses: RecommendGoods[];
  };
}

export interface ShopUserInfo {
  introduceSign: string;
  loginName: string;
  nickName: string;
}

export interface LoginInfo {
  loginName: string;
  passwordMd5: string;
}

export interface RegisterInfo {
  loginName: string;
  password: string;
}
