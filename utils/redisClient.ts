import Redis from 'ioredis';

export const client = new Redis({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    host: process.env.REDIS_HOST,  
    port: Number(process.env.REDIS_PORT) || 6379,tls: {
        rejectUnauthorized: false, 
      },
    
});

client.on('error', (err: any) => {
    console.error('Redis Client Error', err);
});


client.on('connect', () => {
    console.log('Connected to Redis!');
});





