import React from "react";
import foodOne from "../assets/food/food.png";
import foodTwo from "../assets/food/food1.png";
import foodThree from "../assets/food/food2.png";
import foodFour from "../assets/food/food3.png";
import foodFive from "../assets/food/food4.png";
import foodSix from "../assets/food/food5.png";

const Gallery = () => {
  const recipes = [
    {
      img: foodOne,
      recipeName: "Sushi Rolls",
      chefName: "Yuki Tanaka",
      description: "Artful rolls of fresh fish and rice, a Japanese delicacy.",
    },
    {
      img: foodTwo,
      recipeName: "Tonkotsu Ramen",
      chefName: "Hiroshi Nakamura",
      description:
        "Rich pork broth, tender noodles, a hearty Japanese comfort.",
    },
    {
      img: foodThree,
      recipeName: "Tempura Assortment",
      chefName: "Aiko Suzuki",
      description:
        "Crispy battered veggies and shrimp, a delightful Japanese treat.",
    },
    {
      img: foodFour,
      recipeName: "Chicken Teriyaki",
      chefName: "Kenji Yamamoto",
      description:
        "Grilled chicken glazed with sweet and savory teriyaki sauce.",
    },
    {
      img: foodFive,
      recipeName: "Assorted Sashimi",
      chefName: "Miyuki Mori",
      description:
        "Fresh, raw fish slices, elegantly presented for a true Japanese delight.",
    },
    {
      img: foodSix,
      recipeName: "Matcha Green Tea Latte",
      chefName: "Haruki Tanaka",
      description:
        "Creamy matcha-infused latte, a soothing blend of culture and taste.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Culinary Delights in Every Dish
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Indulge in the symphony of flavors that dance within each Japanese
            creation.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {recipes.map((recipe, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={recipe.img}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 hover:transition-opacity">
                  <h2 className="tracking-widest text-lg title-font font-bold text-indigo-500 mb-1">
                    {recipe.recipeName}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Chef: {recipe.chefName}
                  </h1>
                  <p className="leading-relaxed">{recipe.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
