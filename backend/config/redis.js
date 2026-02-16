import { createClient } from "redis";

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  },
  password: process.env.REDIS_PASSWORD || undefined,
});

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err.message);
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (error) {
    console.error("Redis connection failed:", error.message);
  }
};

export { redisClient, connectRedis };
