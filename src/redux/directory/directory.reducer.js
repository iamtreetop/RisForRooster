const INITIAL_STATE = {
  sections: [
    {
      title: "Craft Kits",
      imageUrl:
          "https://i.etsystatic.com/25063274/r/il/abf30c/2760977283/il_794xN.2760977283_jzvs.jpg",
      size: "small",
      id: 1,
      linkUrl: "shop/craft_kits",
    },
    {
      title: "Wall Art",
      imageUrl:
          "https://i.etsystatic.com/25063274/r/il/3d11fe/2739217958/il_794xN.2739217958_ht69.jpg",
      size: "small",
      id: 2,
      linkUrl: "shop/wall_art",
    },
    {
      title: "Sheets",
      imageUrl:
          "https://i.etsystatic.com/25063274/r/il/fa4ef3/2739267804/il_794xN.2739267804_g39h.jpg",
      size: "small",
      id: 3,
      linkUrl: "shop/sheets",
    },
    {
      title: "Educational Prints",
      imageUrl:
          "https://i.etsystatic.com/25063274/r/il/e931d4/2710956098/il_794xN.2710956098_lvyb.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/educational_prints",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
