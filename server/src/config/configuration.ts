import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
  host: process.env.DB_HOSTNAME || 'junbit.cboubep7j1xj.ap-northeast-1.rds.amazonaws.com',
  port: parseInt(process.env.DB_PORT as string) || 3306,
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || 'password',
  db: process.env.DB_DATABASE || 'junbit'
}))