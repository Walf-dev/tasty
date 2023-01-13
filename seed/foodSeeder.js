require("dotenv").config();
const Food = require("../models/Food");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

const foods = [
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673528167/food-order/n3wxwqlxz8imn5vc5sgb.png",
    name: "Clicked By Cine",
    price: 1000,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673528163/food-order/dc9omaejfwhytz7sm6bn.png",
    name: "Chicken Biryani",
    price: 1300,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673528161/food-order/y3qfzpd9gfrcggl17gdh.png",
    name: "Kung Pao Chicken",
    price: 2000,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673528147/food-order/mmarxyvzxhzkn4svl4ye.png",
    name: "Ayam Geprek",
    price: 800,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673441250/food-order/jj6zhdicnlqvcxguri7p.png",
    name: "Jollof Rice with Chicken",
    price: 3000,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673441526/food-order/ydeikh9jqncn4nw3dvop.png",
    name: "Fried Fish & Jollof Rice",
    price: 2000,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673441746/food-order/csvs6fezofmw3qpvh16p.png",
    name: "Salted Egg Chicken Rice",
    price: 2000,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673441880/food-order/ghfrzxyridfwhbr8oklq.png",
    name: "Chilli Mania",
    price: 2200,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673442083/food-order/ehndpgrvoltj9ict97hi.png",
    name: "Noodle Lia",
    price: 2500,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673442265/food-order/htc58lmfmui6z4mexnev.png",
    name: "Pan-fried Noodles & Veggies",
    price: 1500,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673442749/food-order/lxlzuwnpzewx3i0f82sj.png",
    name: "Fried Chicken",
    price: 2550,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/dqhflimqu/image/upload/v1673442866/food-order/comguckuynvhimomrpog.png",
    name: "Ramen Noodles & soft boiled Egg",
    price: 1550,
  }),
];

let done = 0;
for (let i = 0; i < foods.length; i++) {
  foods[i].save(function (err, result) {
    done++;
    if (done === foods.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
