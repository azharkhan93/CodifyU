// import Redis from "ioredis";

// let redisClient: Redis | null = null;

// export const getRedisClient = (): Redis => {
//   if (!redisClient) {
//     const redisUrl = process.env.HOST_URL_REDIS_URL; 
//     if (!redisUrl) {
//       throw new Error("REDIS_URL is not defined in the environment variables.");
//     }

//     redisClient = new Redis(redisUrl)
//   }
//   return redisClient;
// };
// import Redis from "ioredis";

// let redisClient: Redis | null = null;

// export const getRedisClient = (): Redis => {
//   if (!redisClient) {
//     const redisUrl = process.env.REDIS_URL; 

//     if (!redisUrl) {
//       throw new Error("REDIS_URL is not defined in the environment variables.");
//     }

//     redisClient = new Redis(redisUrl, {
//       tls: {
//         rejectUnauthorized: true, 
//       },
//     });
//   }
//   return redisClient;
// };


// import Redis from 'ioredis';



// export const client = new Redis({
//     username: process.env.REDIS_USERNAME || undefined,
//     password: process.env.REDIS_PASSWORD,
//     host: process.env.REDIS_URL,  
//     port: Number(process.env.REDIS_PORT) || 6379,
//     maxRetriesPerRequest: 5, 
//     enableOfflineQueue: true,    
    
// });

// client.on('error', (err: any) => {
//     console.error('Redis Client Error', err);
// });


// client.on('connect', () => {
//     console.log('Connected to Redis!');
// });





