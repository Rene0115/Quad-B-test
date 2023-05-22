import axios from "axios";
import dataSource from "./db.config.js";
import UserEntity from "./entity.js";

const fetchDataAndCreateEntities = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const apiData = response.data;

    const userRepository =  dataSource.getRepository(UserEntity);

    const updatedObject = {};

    let count = 0;
    for (const key in apiData) {
      if (count >= 10) {
        break;
      }
      updatedObject[key] = apiData[key];
     userRepository.create(updatedObject);
      count++;
    }
const users = await userRepository.find();

return res.status(200).send({
  success: true,
  data: users
})

  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export default fetchDataAndCreateEntities;
