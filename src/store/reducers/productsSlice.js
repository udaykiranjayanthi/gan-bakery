import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      productid: "1",
      img: "/photos/pastry.png",
      name: "Pastry",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "4.3",
      price: "169",
      isFavorite: true,
      category: ["toppick", "cake"],
    },
    {
      productid: "2",
      img: "/photos/fruit_cake.png",
      name: "Fruit Cake",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "3.5",
      price: "270",
      isFavorite: false,
      category: ["cake"],
    },
    {
      productid: "3",
      img: "/photos/strawberry_cake.png",
      name: "Strawberry Cake",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "2.8",
      price: "150",
      isFavorite: false,
      category: ["cake"],
    },
    {
      productid: "4",
      img: "/photos/chocolate_cake.png",
      name: "Chocolate Cake",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "4.0",
      price: "220",
      isFavorite: false,
      category: ["toppick", "cake"],
    },

    {
      productid: "5",
      img: "/photos/eggpuff.png",
      name: "Egg Puff",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "4.3",
      price: "169",
      isFavorite: true,
      category: ["toppick", "snack"],
    },
    {
      productid: "6",
      img: "/photos/vegpuff.png",
      name: "Veg Puff",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "3.5",
      price: "270",
      isFavorite: false,
      category: ["snack"],
    },
    {
      productid: "7",
      img: "/photos/cookies.png",
      name: "Cookies",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "2.8",
      price: "150",
      isFavorite: false,
      category: ["snack"],
    },
    {
      productid: "8",
      img: "/photos/biscuits.png",
      name: "Karachi Biscuits",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "4.0",
      price: "220",
      isFavorite: false,
      category: ["snack"],
    },
    {
      productid: "9",
      img: "/photos/baked_muffins.jpg",
      name: "Baked Muffins",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "4.0",
      price: "220",
      isFavorite: false,
      category: ["snack"],
    },
    {
      productid: "10",
      img: "/photos/hotdogs.png",
      name: "Hot dogs",
      caption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      rating: "4.0",
      price: "220",
      isFavorite: false,
      category: ["toppick", "snack"],
    },
  ],
  mycart: {
    products: [
      {
        productid: "1",
        count: "1",
        customisation: "",
      }
    ],
    name: "",
    phone: "",
    email: "",
    address: "",
    paymentmode: "cod",
  },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      state.products.find((product, i) => {
        if (product.productid === action.payload.productid) {
            state.products[i] = { ...product, isFavorite: !product.isFavorite };
            return true; // stop searching
        }
      });
    },
    addToCart: (state, action) => {
      state.mycart.products.find((product, i) => {
        if (product.productid === action.payload.productid) {
          return
        }
      })
      state.mycart.products = [
        ...state.mycart.products, 
        {
          productid: action.payload.productid,
          count: "1",
          customisation: "",
        }
      ];
    },
    removeFromCart: (state, action) => {
      state.mycart.products = state.mycart.products.filter((product) => {
        return product.productid !== action.payload.productid;
      })
    },

    incrementCount: (state, action) => {
      var currentIndex = 0;
      var currentProduct = state.mycart.products.find((product, i) => {
        if(product.productid === action.payload.productid){
          currentIndex = i;
          return true;
        }
      });
      state.mycart.products[currentIndex].count = parseInt(currentProduct.count) + 1 + '';
    },

    decrementCount: (state, action) => {
      var currentIndex = 0;
      var currentProduct = state.mycart.products.find((product, i) => {
        if(product.productid === action.payload.productid){
          currentIndex = i;
          return true;
        }
      });
      if(currentProduct.count > 1){
        state.mycart.products[currentIndex].count = parseInt(currentProduct.count) - 1 + '';
      }
    },

    checkout: (state, action) => {
      state.mycart.name = action.payload.name;
      state.mycart.phone = action.payload.phone;
      state.mycart.email = action.payload.email;
      state.mycart.address = action.payload.address;
      console.log(current(state.mycart));
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavorites, addToCart, removeFromCart, incrementCount, decrementCount, checkout } = productsSlice.actions

export default productsSlice.reducer