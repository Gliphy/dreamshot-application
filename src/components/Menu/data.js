const MenuItemsData = [
      {
        id: 1,
        "name": "Butter Pancakes",
        "caption": "With honey",
        "price": 14.5,
        "image": "images/Asset17.png"
      },
      {
        id: 2,
        "name": "Avocado Toast",
        "caption": "2 pieces",
        "price": 16.5,
        "image": "images/Asset12.png"
      },
      {
        id: 3,
        "name": "Sweet Yogurt",
        "caption": "With strawberries",
        "price": 5.0,
        "image": "images/Asset15.png"
      },
      {
        id: 4,
        "name": "Peanut Toast",
        "caption": "With butter",
        "price": 9.5,
        "image": "images/Asset5.png"
      },
      {
        id: 5,
        "name": "French Toast",
        "caption": "With butter and jam",
        "price": 9.5,
        "image": "images/Asset10.png"
      },
      {
        id: 6,
        "name": "Banana Bread",
        "caption": "With blueberries",
        "price": 5.5,
        "image": "images/Asset11.png"
      },
      {
        id: 7,
        "name": "Classic Waffle",
        "caption": "With ice cream",
        "price": 7.5,
        "image": "images/Asset14.png"
      }
    ]

    function getMenuItemsData(id){
      let productData = MenuItemsData.find(item => item.id === id );

      

      return productData;

    }

export { MenuItemsData, getMenuItemsData };

  
  