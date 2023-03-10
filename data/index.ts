export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  height: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    image: "/public/product-images/p-1.svg",
    title: "Calude",
    description:
      "Handmade ceramic vase. The vase is shaped like two hands carrying something and it radiates care. The dark one has a shiny, marbled glaze, the light one has a matte surface with texture. Both colors have a glazed interior. The vase is handmade, making each piece unique. Please note that ceramics may allow moisture to pass through.",
    price: 300,
    id: "a1",
    height: "Height: 18 cm",
  },
  {
    image: "/public/product-images/p-2.svg",
    title: "Ralph",
    description:
      "Handmade decorative vase of ceramic. A sleek vase with an exciting shape and ribbed surface. The inside is also glazed. Some variation may occur as the vase is handmade. Ceramics may allow moisture to pass through.",
    price: 500,
    id: "b2",
    height: "Height: 33 cm",
  },
  {
    image: "/public/product-images/p-3.svg",
    title: "Peyton",
    description:
      "Handmade decorative vase of glazed ceramic. PEYTON has a flowing shape and, together with the beautiful glaze, resembles the corals of the sea. The inside is also glazed. The craftsmanship makes each vase unique. Please note that ceramics may allow moisture to pass through.",
    price: 400,
    id: "c3",
    height: "Height: 21 cm",
  },
  {
    image: "/public/product-images/p-4.svg",
    title: "Algot",
    description:
      "Handmade decorative vase of glazed ceramic with a lively, beautifully bubbly glaze and irregular shape. The inside is also glazed. Some variation may occur as the vase is handmade. Ceramics may allow moisture to pass through.",
    price: 500,
    id: "d4",
    height: "Height: 28,5 cm",
  },
  {
    image: "/public/product-images/p-5.svg",
    title: "Atticus",
    description:
      "Handmade decorative vase of glazed ceramic. ATTICUS has a flowing shape and, together with the beautiful glaze, resembles the corals of the sea. The inside is also glazed. The craftsmanship makes each vase unique. Please note that ceramics may allow moisture to pass through.",
    price: 300,
    id: "e5",
    height: "Height: 21 cm",
  },
  {
    image: "/public/product-images/p-6.svg",
    title: "Jordan",
    description:
      "Handmade ceramic vase that also becomes a decorative object wherever it is placed. The vase is handmade in a beautiful shape and then glazed with an impactful splatter pattern. The fine craftsmanship makes each piece unique. Please note that ceramics may allow moisture to pass through.",
    price: 600,
    id: "f6",
    height: "Height: 32 cm",
  },
];
