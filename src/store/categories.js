
let data = {
  count: 20,
  results: [
    {
      _id: "5f1a51f01910080017657ed2",
      name: "1TB USB",
      category: "electronics",
      inStock: 928,
      price: 100.99,
      __v: 0,
    },
    {
      _id: "5f1a51f71910080017657ed3",
      name: "Monitor",
      category: "electronics",
      inStock: 833,
      price: 100.99,
      __v: 0,
     
    },
    {
      _id: "5f1a51ff1910080017657ed4",
      name: "Mouse",
      category: "electronics",
      inStock: 931,
      price: 100.99,
      __v: 0,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41L--23iVqL._AC_SY780_.jpg'
    },
    {
      _id: "5f1a52031910080017657ed5",
      name: "Keyboard",
      category: "electronics",
      inStock: 957,
      price: 100.99,
      __v: 0,
      image: 'https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/'
    },
    {
      _id: "5f1a5f761910080017657ed6",
      name: "Apples",
      category: "food",
      inStock: 921,
      price: 100.1,
      __v: 0,
      image: 'https://cdn.shopify.com/s/files/1/0206/9470/products/4021-done_1024x1024.jpg?v=1616454632'
    },
    {
      _id: "5f1a5f861910080017657ed7",
      name: "TV",
      category: "electronics",
      inStock: 1836,
      price: 698,
      __v: 0,
    
    },
    {
      _id: "5f1a5faf1910080017657ed8",
      name: "Calzones",
      category: "food",
      inStock: 852,
      price: 100.1,
      __v: 0,
     
    },
    {
      _id: "60ae2bfc546f7d00177a1b29",
      name: "PS4 Pro",
      category: "console",
      inStock: 126,
      price: 380.99,
      __v: 0,
      description:
        "https://microless.com/cdn/products/15da77679cb8cbf161b1a0247c763d39-hi.jpg!The PS4 Pro is Sony's newer, more premium console. It plays games in a higher resolution (4K) and often in High Dynamic Range (HDR). It's a little more expensive than the regular PS4 was, but that's because it uses slightly different hardware to get better results in terms of performance.",
    },
    {
      _id: "60ae2c1a546f7d00177a1b2a",
      name: "PS5",
      category: "console",
      inStock: 70,
      price: 1000,
      __v: 0,
      description:
        "https://todayinbermuda.com/wp-content/uploads/2021/02/Sony-PS5.jpg!The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, Singapore and South Korea, with worldwide release following a week later. The PS5, along with Microsoft's Xbox Series X and Series S consoles, released the same month, are part of the ninth generation of video game consoles.",
    },
    {
      _id: "60ae2c2e546f7d00177a1b2b",
      name: "Xbox one x",
      category: "console",
      inStock: 88,
      price: 590,
      __v: 0,
      description:
        "https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2017/10/xboxonex.jpg!The Xbox One X does what no console has done before: native 4K HDR gaming. However, while games look stunning – with a fantastic level of detail accentuated by the console's HDR support – their larger file sizes will mean that the 1TB hard drive fills up fast. Memory issues aside, the Xbox One X fulfills the promise of 4K HDR gaming and offers the most premium gaming experience on a console, bar none.",
    },
    {
      _id: "60ae2c6a546f7d00177a1b2c",
      name: "Galaxy Fold 2",
      category: "mobile",
      inStock: 150,
      price: 950.99,
      __v: 0,
      description:
        "https://fdn.gsmarena.com/imgroot/news/20/09/samsung-galaxy-z-fold2-official/-727w2/gsmarena_009.jpg!With the new Galaxy Z Flip release, Samsung showed its strong commitment to the foldable smartphone market and according to rumors, the Galaxy Fold 2 will be another device where engineers will spare no effort. Two separate sources claim that the upcoming successor of the original Fold will offer under-screen module for its selfie snapper.",
    },
    {
      _id: "60ae2c88546f7d00177a1b2d",
      name: "Huawei Mate X2",
      category: "mobile",
      inStock: 200,
      price: 850.99,
      __v: 0,
      description:
        "https://www.mobihall.com/data/news/2021/02/9d9c69d13f-img.jpg! Mate X2 is not the foldable for the masses that many of us desire. Instead, it is still very much a halo device, meant to impress and showcase more than anything else. In fact, it might just be even more unattainable than its predecessors, seeing how it is currently only sold in China, with no official intention of expanding availability and that the still ongoing US sanctions mean no Google Play Services and severely handcapped chipset manufacturing capabilities. And this is all before we even start to consider the Mate X2's eye-watering price tag of around EUR 2300.",
    },
    {
      _id: "60ae2cbf546f7d00177a1b2e",
      name: "iPhone 12 Pro Max",
      category: "mobile",
      inStock: 300,
      price: 750.99,
      __v: 0,
      description:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202103272121!iPhone 12 Pro Max smartphone was launched on 13th October 2020. The phone comes with a 6.70-inch touchscreen display with a resolution of 1284x2778 pixels at a pixel density of 458 pixels per inch (ppi). The iPhone 12 Pro Max supports wireless charging, as well as proprietary fast charging.",
    },
    {
      _id: "60ae3793546f7d00177a1b30",
      name: "Iphone 12",
      category: "phones",
      inStock: 394,
      price: 999.99,
      __v: 0,
      description:
        "The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design.$https://eshop.orange.jo:250/app-images/thumbs/0001404_apple-iphone-12-pro-max128gb6gbgraphite.jpeg",
    },
    {
      _id: "60ae37eb546f7d00177a1b31",
      name: "Samsung Note 10",
      category: "phones",
      inStock: 329,
      price: 1199.99,
      __v: 0,
      description:
        "Samsung Galaxy Note 10 is powered by a 1.9GHz octa-core Samsung Exynos 9825 processor that features 4 cores clocked at 1.9GHz, 2 cores clocked at 2.4GHz and 2 cores clocked at 2.7GHz. It comes with 8GB of RAM. The Samsung Galaxy Note 10 runs Android 9 Pie and is powered by a 3500mAh battery.$https://www.mytrendyphone.eu/images/Samsung-Galaxy-Note10-Duos-256GB-Pre-owned-Good-condition-Aura-Black-14042020-01-t.jpg",
    },
    {
      _id: "60ae3816546f7d00177a1b32",
      name: "Huawei P",
      category: "phones",
      inStock: 294,
      price: 799.99,
      __v: 0,
      description:
        "Huawei P Smart (2019) smartphone was launched in December 2018. The phone comes with a 6.21-inch touchscreen display with a resolution of 1080x2340 pixels. It comes with 3GB of RAM. The Huawei P Smart (2019) runs Android 9 Pie and is powered by a 3400mAh battery.$https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y7a/list-img/green-list.png",
    },
    {
      _id: "60ae3844546f7d00177a1b33",
      name: "React",
      category: "shirts",
      inStock: 498,
      price: 29.99,
      __v: 0,
      description:
        "Cool React T-Shirt$https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX425_.png",
    },
    {
      _id: "60ae385b546f7d00177a1b34",
      name: "JavaScript",
      category: "shirts",
      inStock: 143,
      price: 34.99,
      __v: 0,
      description:
        "The most wanted Shirt in our store$https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7CA1U08nTxXML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425._SX._UX._SY._UY_.png",
    },
    {
      _id: "60ae386f546f7d00177a1b35",
      name: "Java",
      category: "shirts",
      inStock: 430,
      price: 24.99,
      __v: 0,
      description:
        "This Shirt is only for the Java lovers$https://images.lookhuman.com/render/standard/Qe7zCXWNatsTXXuTN7zExIXcHMKImMbu/3600-red-z1-t-coders-run-on-java.jpg",
    },
    {
      _id: "60cab58d2c92630017dd06b1",
      name: "paper",
      description: "white",
      price: 1,
      category: "paper stuff",
      inStock: 12,
      __v: 0,
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
 
  let { type, payload } = action;
  switch (type) {
    case "electronics":
      let data = payload.filter((val) => val.category === type);
      return { type:"electronics", data: data };
    case "food":
      let data2 = payload.filter((val) => val.category === type);
      return { type:'food', data: data2 };
    default:
      return null;
  }
};

export const electronics = (type) => {
    return {
        type: type,
        payload:  data.results
      };
};

export const food = (type) => {
  return {
    type: type,
    payload: data.results
  };
};
