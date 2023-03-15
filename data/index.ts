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
    title: "CLAUDE",
    description:
      "Handgjord vas av keramik. Vasen är formad som två händer som bär upp något och den utstrålar omtanke. Den mörka har en blank, melerad glasyr, den ljusa har matt yta med struktur. Båda färgarna har glacerad insida. Vasen är handgjord vilket gör varje exemplar unikt. Tänk på att keramik kan släppa igenom fukt.",
    price: 300,
    id: "a1",
    height: "18 cm",
  },
  {
    image: "/public/product-images/p-4.svg",
    title: "GASTON",
    description:
      "Handgjord dekorationsvas av glaserad keramik med en livfull, vackert bubblig glasyr och oregelbunden form. Även insidan är glaserad. Viss avvikelse kan förekomma eftersom vasen är handgjord. Keramik kan släppa igenom fukt.",
    price: 500,
    id: "a2",
    height: "28 cm",
  },
  {
    image: "/public/product-images/p-2.svg",
    title: "RALPH",
    description:
      "Handgjord dekorationsvas av keramik. En stilren vas med spännande form och räfflad yta. Även insidan är glaserad. Viss avvikelse kan förekomma eftersom vasen är handgjord. Keramik kan släppa igenom fukt.",
    price: 500,
    id: "a3",
    height: "33 cm",
  },
  {
    image: "/public/product-images/p-11.svg",
    title: "BAUER",
    description:
      "Handgjord dekorationsvas i keramik som för tankarna till havets koraller. Viss avvikelse kan förekomma eftersom vasen är handgjord. Keramik kan släppa igenom fukt.",
    price: 300,
    id: "a4",
    height: "22 cm",
  },
  {
    image: "/public/product-images/p-7.svg",
    title: "JORDAN",
    description:
      "Handgjord vas av keramik med blank, glasyr som är vacker tillsammans med gröna växter. Även insidan är glaserad. Viss avvikelse kan förekomma eftersom vasen är handgjord. Keramik kan släppa igenom fukt.",
    price: 300,
    id: "a5",
    height: "20 cm",
  },
  {
    image: "/public/product-images/p-3.svg",
    title: "PEYTON",
    description:
      "Handgjord dekorationsvas av glaserad keramik. PEYTON är böljande i formen och tillsammans med den vackra glasyren påminner vasen om havets koraller. Även insidan är glaserad. Hantverket gör att varje vas är unik. Tänk på att keramik kan släppa igenom fukt.",
    price: 400,
    id: "a6",
    height: "26 cm",
  },
  {
    image: "/public/product-images/p-5.svg",
    title: "ATTICUS",
    description:
      "Handgjord dekorationsvas av glaserad keramik. ATTICUS är böljande i formen och tillsammans med den vackra glasyren påminner vasen om havets koraller. Även insidan är glaserad. Hantverket gör att varje vas är unik. Tänk på att keramik kan släppa igenom fukt.",
    price: 300,
    id: "a7",
    height: "21 cm",
  },
  {
    image: "/public/product-images/p-10.svg",
    title: "ELTON",
    description:
      "Handgjord vas av keramik med glaserad ut- och insida i ljusa toner. Associerar du med koraller i havet eller en vacker vulkan? Inspirationen till hantverket har hämtats från naturen och hantverket gör varje exemplar unikt. Tänk på att keramik kan släppa igenom fukt.",
    price: 600,
    id: "a8",
    height: "34 cm",
  },
  {
    image: "/public/product-images/p-8.svg",
    title: "LOU",
    description:
      "Stilren vas av keramik. LOU är en vas i unik form som blir en spännande detalj i ditt hem. Vasen är handgjord vilket gör varje exemplar unikt. Tänk på att keramik kan släppa igenom fukt.",
    price: 300,
    id: "a9",
    height: "20 cm",
  },
];
