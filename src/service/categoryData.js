const Categorys = [
  {
    id: 1,
    title: "Italian",
    image:
      "https://www.receiteria.com.br/wp-content/uploads/receitas-de-comidas-italianas-0.jpg",
    meals: [
      {
        id: 'dasfskdfjbk',
        title: "Massa de pizza italiana deliciosa",
        image:
          "http://s2.glbimg.com/k29Fz1GvH1bxCC3YTFY5-8Zt_1I=/640x413/smart/e.glbimg.com/og/ed/f/original/2017/06/30/pizza-de-camarao.jpg",
        ing: "Ingredients",
        Ingredients: [
          "3 colheres de azeite",
          "1 colher de sopa de açúcar",
          "15 g de sal",
          "25 g de fermento fresco",
          "500 g de farinha de trigo de boa qualidade",
          "500 g de farinha de trigo de boa qualidade",
        ],
        time: "30 min",
        Preparation: [
          "01 - Misture o fermento com o açúcar, coloque um pouco de água e misture até desmanchar o fermento.",
          "02 - Deixe descansar até formar uma espuma.",
          "03 - Reserve.",
          "04 - Em outra vasilha coloque o sal com mais um pouco de água.",
          "05 - Em uma vasilha coloque o trigo, jogue a mistura do fermento e açúcar, a água com o sal, o azeite e o resto da água devagar.",
          "06 - Misture tudo e sove a massa até ela ficar elástica e lisa.",
          "07 - Deixe descansar no minimo 2 horas.",
        ],
        informationAdd:
          "coloque a água aos poucos, talvez não seja necessário colocar toda, sove a massa no minimo por dez minutos.",
      },
      {
        id: 'diosfjadsoifpaosd',
        title: "Thick Italian Hot Chocolate",
        image:
          "https://anitalianinmykitchen.com/wp-content/uploads/2016/11/hot-chocolate-photo-.jpg",
        ing: "Ingredients",
        Ingredients: [
          "1 - 3.5 ounces Dark Chocolate (good quality)",
          "2 - 2 tablespoons sugar",
          "3 - 2 1/2 tablespoons cocoa unsweetened",
          "4 - 1 cup + 1 tablespoon milk",
          "5 - 1 teaspoon corn starch",
        ],
        Preparation: [
          "1 - In a small bowl whisk until smooth, 1/4 cup milk and cornstarch set aside.",
          "2 - Sift the cocoa into a medium bowl then add the sugar and whisk together, set aside.",
          "3 - In a small/medium pot heat 3/4 cups + 1 tablespoon milk until boiling reduce heat to low, start whisking and add the milk/cornstarch mixture then add the cocoa mixture slowly while continually whisking until smooth add the chopped chocolate and whisk for approximately 3 minutes. Serve immediately. Enjoy!",
        ],
        time: "25 min",
      },
      {
        id: 'rtrlgvvfbgf',
        title: "Calzone",
        image: "https://i.ytimg.com/vi/bWi2BDQKysY/maxresdefault.jpg",
        ing: "Ingredients",
        Ingredients: [
          "1 - 1 pound pizza dough",
          "2 - 1/2 cup pizza sauce",
          "3 - 1/2 cup yellow onion",
          "4 - 1/2 cup green bell pepper",
          "5 - 1/2 cup sliced pepperoni",
          "6 - 1 cup mozzarella cheese",
          "7 - 1 tablespoon olive oil",
        ],
        Preparation: [
          "Preheat oven to 425°F and line a large sheet pan with parchment paper.",
          "Divide pizza dough into 4 equal parts and roll each dough ball into a 1/4 inch thick circle.",
          "On half of each dough circle, add equal parts sauce, yellow onion, green bell pepper, and sliced pepperoni. Make sure to leave a little room around the edges so you can crimp the calzone shut.",
          "Sprinkle the toppings with equal parts shredded cheese. Then fold the other half of the dough over the toppings and crimp the edges.",
          "Cut 2-3 air vents into the top of the calzone and place it on to the prepared baking sheet.",
          "Brush with olive oil and bake for about 15 minutes or until the dough is fully cooked and the calzone is golden brown.",
          "Serve with warmed pizza sauce for dipping.",
        ],
        time: "35 min",
      },
    ],
  },

  {
    id: 2,
    title: "Quick & Easy",
    image:
      "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_400/hellofresh_website/us/top-recipes/quick-meals/Chicken-and-orzo.jpg",
    meals: {
      meals1: [
        {
          title: "Bolo de brigadeiro",
          image:
            "https://www.receitasdemae.com.br/wp-content/uploads/2019/01/Bolo-brigadeiro.jpg",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Hamburgers",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ground-beef-recipes-1588694592.jpg?crop=0.426xw:0.639xh;0.0609xw,0.252xh&resize=640:*",
    meals: {
      meals1: [
        {
          title: "Pastel",
          image:
            "https://img.itdg.com.br/images/recipes/000/020/617/354276/354276_original.jpg",
        },
      ],
    },
  },
  {
    id: 4,
    title: "German",
    image:
      "https://i2.wp.com/photos.smugmug.com/photos/i-sqM3DmG/0/aaef2b7e/L/i-sqM3DmG-L.jpg",
    meals: {
      meals1: [
        {
          title: "Brigadeiro",
          image:
            "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2016/11/brigadeiro-1024x576.jpg",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Light & Lovely",
    image: "https://mediacdn.grabone.co.nz/asset/IdS3eAUjeC/box=615x0",
    meals: {
      meals1: [
        {
          title: "Panqueca",
          image:
            "https://s2.glbimg.com/yxeAQ759vmuSnE-5Mp6kVWGZRxs=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/e/p/ggK73dQdWTU78clATT1Q/panqueca-de-liquidificador.jpg",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Exotic",
    image:
      "https://img.huffingtonpost.com/asset/5969e2832100001b00fc7030.jpg?ops=scalefit_720_noupscale&format=webp",
    meals: {
      meals1: [
        {
          title: "Tapioca",
          image:
            "https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Breakfast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/american-style-pancakes-34d56dc.jpg?quality=90&resize=440,400",
    meals: {
      meals1: [
        {
          title: "Tapioca",
          image:
            "https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Asian",
    image:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
    meals: {
      meals1: [
        {
          title: "Tapioca",
          image:
            "https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg",
        },
      ],
    },
  },
  {
    id: 9,
    title: "French",
    image:
      "https://img.taste.com.au/FlOxn9yP/taste/2016/11/15-french-meals-you-have-to-try-67786-1.jpg",
    meals: {
      meals1: [
        {
          title: "Tapioca",
          image:
            "https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg",
        },
      ],
    },
  },
  {
    id: 10,
    title: "Summer",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-dinner-1625574765.jpg?crop=0.566xw:1.00xh;0.306xw,0&resize=640:*",
    meals: {
      meals1: [
        {
          title: "Tapioca",
          image:
            "https://www.sabornamesa.com.br/media/k2/items/cache/d95ac1e7d6d78552526cbaae66d68531_XL.jpg",
        },
      ],
    },
  },
];

export default Categorys;
