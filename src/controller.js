import { get } from 'axios';
import UserEntity from './entity.js';

const fetchDataAndCreateEntities = async () => {
  try {
    const response = await get('https://api.wazirx.com/api/v2/tickers');
    const apiData = response.data;

    for (let i = 0; i < apiData.length; i++) {
      const item = apiData[i];

      const entity = new UserEntity();
      entity.base_unit = item.base_unit;
      entity.quote_unit = item.quote_unit;
      entity.low = parseFloat(item.low);
      entity.high = parseFloat(item.high);
      entity.last = parseFloat(item.last);
      entity.type = item.type;
      entity.open = parseInt(item.open);
      entity.volume = parseFloat(item.volume);
      entity.sell = parseFloat(item.sell);
      entity.buy = parseFloat(item.buy);
      entity.at = parseInt(item.at);
      entity.name = item.name;

      // Save the entity to the database
      await entity.save();
    }

    console.log('Entities created successfully');
  } catch (error) {
    console.log('Error fetching data from API:', error);
  }
};

export default fetchDataAndCreateEntities;
