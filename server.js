import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("books.json");
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());
server.use(middlewares);

server.use((req, res, next) => {
  // Convert _start and _end to numbers if they exist
  if (req.query._start) {
    req.query._start = parseInt(req.query._start, 10);
  }
  if (req.query._end) {
    req.query._end = parseInt(req.query._end, 10);
  }
  next();
});

// Add headers after routes are defined
server.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "Content-Range, X-Total-Count");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Add X-Total-Count header only for list requests (not for single item GETs)
server.use((req, res, next) => {
  // Only process GET requests that look like list requests (no ID in path)
  if (req.method === "GET" && !req.path.match(/\/\d+$/)) {
    const resource = req.path.split("/").filter(Boolean)[0];
    if (resource) {
      try {
        const db = router.db;
        const data = db.get(resource).value();
        if (Array.isArray(data)) {
          res.header("X-Total-Count", data.length);
        }
      } catch (error) {
        console.error("Error setting X-Total-Count:", error);
      }
    }
  }
  next();
});

// Use default router
server.use(router);

// Start server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
