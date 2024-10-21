const { app } = require("@azure/functions");
const { sum } = require("../kalkulator");

app.http("sumFunction", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const queryA = request.query.get("a");
    const queryB = request.query.get("b");
    const a = Number(queryA);
    const b = Number(queryB);
    if (!queryA || !queryB || Number.isNaN(a) || Number.isNaN(b)) {
      return { body: `Oppgi et tall for "a" og "b"` };
    }

    return { body: `Summen av ${a} og ${b} er ${sum(a, b)}` };
  },
});
