import { Sequelize } from 'sequelize';
import configs from '../../config/environment';
const {
  env: { nodeEnv, testUrl, productionUrl, developmentUrl },
} = configs;
let connectionString: string;

if (!testUrl || !productionUrl || !developmentUrl) {
  throw new Error('invalid');
}

if (nodeEnv === 'development') {
  connectionString = developmentUrl as string;
} else if (nodeEnv === 'production') {
  connectionString = productionUrl as string;
} else if (nodeEnv === 'testing') {
  connectionString = testUrl as string;
} else {
  connectionString = developmentUrl as string;
}

const sequelize = new Sequelize(connectionString, {
  logging: true,
  dialectOptions: {
    charset: 'utf8',
  },
});

export default sequelize;
