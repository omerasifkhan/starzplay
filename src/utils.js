// utils.js
export const getDataByKey = (key) => {
    const { titles } = require('./homepage.json');
    for(let category of titles) {
        if( category.title === key ) {
            return category.layoutTitles.titles
        }
    }
  };
  