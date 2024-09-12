import logo from "./logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import bin_icon from "./bin_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
// import about_img from "./about_img.png"
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import membership from "./membership.png";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  //   about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
  membership,
};

export const models = [
  {
    _id: "1111",
    name: "Sofia",
    portfolio:
      "https://img.freepik.com/fotos-premium/modelos-femeninas-hacen-pose-impresionante-portada-revista-alta-costura_563241-7214.jpg",
    booking_info: "Available",
    achievements: ["Magazine and TV model"],
  },
  {
    _id: "2222",
    name: "Elena",
    portfolio:
      "https://i.pinimg.com/236x/db/01/32/db013266994925fe9f7770cf93e5782d.jpg",
    booking_info: "Not Available",
    achievements: ["Miss Universe 2020 winner"],
  },
  {
    _id: "3333",
    name: "Maria",
    portfolio:
      "https://media.istockphoto.com/id/1294339577/es/foto/joven-mujer-hermosa.jpg?s=612x612&w=0&k=20&c=s1iAD-GWUujsH6IbLj280CS7c1RLhaKVIXDVh0EG3kw=",
    booking_info: "Available",
    achievements: ["Most beautiful woman in town 2021"],
  },
  {
    _id: "4444",
    name: "Luisa",
    portfolio:
      "https://i.pinimg.com/564x/a0/77/70/a077702ce59215b8b5555fcbfa9604e4.jpg",
    booking_info: "Available",
    achievements: ["N/A"],
  },
  {
    _id: "5555",
    name: "Martina",
    portfolio:
      "https://expertosenmarca.com/wp-content/uploads/2023/08/0_0-14-1.png",
    booking_info: "Not Available",
    achievements: ["Miss Antioquia 2021"],
  },
];

export const memberships = [
  {
    _id: "0001",
    name: "Basic Membership",
    price: 150,
    image: "https://cdn-icons-png.flaticon.com/128/9720/9720867.png",
    duration: "1 Month subscription",
  },
  {
    _id: "0002",
    name: "Standard Membership",
    price: 425,
    image: "https://cdn-icons-png.flaticon.com/128/9823/9823143.png",
    duration: "3 Month subscription",
  },
  {
    _id: "0003",
    name: "Premium Membership with full product access",
    price: 1000,
    image: "https://cdn-icons-png.flaticon.com/128/6941/6941697.png",
    duration: "6 Month subscription",
  },
];

export const events = [
  {
    _id: "111aa",
    name: "Medallo Fashion Week",
    image:
      "https://www.clubcampestre.co/wp-content/uploads/2019/04/Gran_Salon_Llano-800x500_c.jpg",
    date: "2024-09-24",
    location: "Club Social Medellin",
    participating_models: ["1271"],
    products_showcased: ["aaaa", "baaa"],
  },
  {
    _id: "222bb",
    name: "En Cali ve!",
    image:
      "https://campestrecali.com/wp-content/uploads/2017/06/salon-muelle-club-campestre-cali-2.jpg",
    date: "2024-08-11",
    location: "Club Social Cali",
    participating_models: ["1271", "1293", "1201"],
    products_showcased: ["aaaa", "caaa", "eaaa"],
  },
  {
    _id: "333cc",
    name: "Beach event Cartagena",
    image:
      "https://image-tc.galaxy.tf/wijpeg-3lfo024rzcgwgtmvar9s2dlk/isladelencantoredes-copy15.jpg?width=1920",
    date: "2024-07-21",
    location: "Club social Cartagena",
    participating_models: ["1211"],
    products_showcased: ["aaab", "caaa", "daaa"],
  },
  {
    _id: "444dd",
    name: "Bogota Fashion Week",
    image:
      "https://cdn0.matrimonio.com.co/vendor/6958/3_2/960/jpg/img-7811_10_106958-1563549032.jpeg",
    date: "2024-11-19",
    location: "Club social Bogota",
    participating_models: ["1271", "1266"],
    products_showcased: ["baaa", "daaa"],
  },
];

export const photos = [
  {
    _id: "1122",
    title: "Robot kiss",
    image:
      "https://static01.nyt.com/images/2023/03/09/multimedia/09MISSED-MOMENTS-coperni-khtl/09MISSED-MOMENTS-coperni-khtl-threeByTwoMediumAt2X.jpg?quality=75&auto=webp",
    price: 90,
    category: "Model",
    format: ["Digital dowload", "Physical print"],
  },
  {
    _id: "1817",
    title: "Giant Handbag",
    image:
      "https://graziamagazine.com/me/wp-content/uploads/sites/16/2023/09/Fendi-SS24.png",
    price: 500,
    category: "Event",
    format: ["Digital dowload", "Physical print"],
  },
  {
    _id: "1877",
    title: "Starting the event!",
    image:
      "https://media.gq.com/photos/566782dd7f7e7d481d90beca/16:9/w_2560%2Cc_limit/DrielyS-7478.jpg",
    price: 35,
    category: "Event",
    format: ["Digital dowload", "Physical print"],
  },
  {
    _id: "1890",
    title: "Giant broom as a dress",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/01/27153016/Viktor-and-Rolf-1600x900.jpg",
    price: 250,
    category: "Model",
    format: ["Digital dowload", "Physical print"],
  },
  {
    _id: "1838",
    title: "Weirdest dress ever",
    image:
      "https://pagesix.com/wp-content/uploads/sites/3/2023/12/2023-show-part-paris-fashion-23470906.jpg",
    price: 300,
    category: "Model",
    format: ["Digital dowload", "Physical print"],
  },
];

export const products = [
  {
    _id: "aaaa",
    name: "Brown Eyelash",
    description: "A time-limited purple EyeLash from DIOR",
    price: 300,
    image: "https://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    category: "Eyelashes",
    color: "Brown",
    date: 147492371832,
    featured: true,
  },
  {
    _id: "baaa",
    name: "Blush",
    description: "Blush box with different colors from Loreal",
    price: 100,
    image:
      "https://es.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/slideshows/makeup-product-essentials/loreal-paris-bmag-slideshow-20-makeup-product-essentials-every-woman-should-own-slide5.jpg?rev=cabee387bfe84baba63b0d5d96029a93&cx=0.49&cy=0.54&cw=1510&ch=815&hash=0B603E3CFC9E39E26FBA6ACC9F899B57C6C45FEC",
    category: "Blushes",
    color: "Light",
    date: 147492371832,
    featured: false,
  },
  {
    _id: "aaab",
    name: "Red lipstick",
    description: "Elegant Red Lipstick from MAC",
    price: 115,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RkZEWMqS0Brs-2KZGWj3UaA-f4g0JRMLGg&s",
    category: "Lipsticks",
    color: "Red",
    date: 147492371832,
    featured: true,
  },
  {
    _id: "caaa",
    name: "Black eyelash",
    description: "Long time duration eyelash from sesderma",
    price: 128,
    image:
      "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//s/e/sesderma-seslash-black-eyelash-regenerating-mascara-5ml_1.jpg",
    category: "Eyelashes",
    color: "Black",
    date: 147492371832,
    featured: true,
  },
  {
    _id: "daaa",
    name: "Dark highlighter",
    description: "Dark highlighter special for the watermelon ethusiasts",
    price: 10,
    image:
      "https://m.media-amazon.com/images/I/61YZRwbyMwL._AC_UF1000,1000_QL80_.jpg",
    category: "Highlighters",
    color: "Dark",
    date: 147492371832,
    featured: false,
  },
  {
    _id: "eaaa",
    name: "Red nail polish",
    description: "Red nail polish from OPI, intense Red!",
    price: 75,
    image:
      "https://cdn.shopify.com/s/files/1/0656/5547/2343/files/big-apple-red-nln25-nail-lacquer-22001014069_5d248308-fefd-4aef-a1c2-abaedcd41a56.jpg?v=1704978590",
    category: "Nail polishes",
    color: "Red",
    date: 147492371832,
    featured: true,
  },
];
