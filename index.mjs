import jsonServer from "json-server";
import resources from "./resources.mjs";

const server = jsonServer.create();
const router = jsonServer.router(resources());
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/api/v1/*": "/$1",
  })
);

// Add metadata on the lists endpoints
router.render = (_, res) => {
  if (res.statusCode === 404) {
    res.json({
      error: "Not found",
    });
  }

  if (!Array.isArray(res.locals.data)) {
    res.json(res.locals.data);
  }

  // check if the request is a list
  res.json({
    data: res.locals.data,
    meta: {
      total: res.locals.data.length,
    },
  });
};

// Use default router
server.use(router);

server.listen(4000, () => {
  console.log("JSON Server is running");
});
