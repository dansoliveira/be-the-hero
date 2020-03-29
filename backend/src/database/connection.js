import knex from 'knex';
import configutarion from '../../knexfile';

const connection = knex(configutarion.development);

export default connection;
