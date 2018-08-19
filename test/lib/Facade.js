import test from "ava";
import browserEnv from "browser-env";

browserEnv();

test.serial("Get object", (t) => {
  const facade = require("../../src/lib/Facade");

  t.true(!!facade.Link);
  t.true(!!facade.Request);
  t.true(!!facade.URL);
  t.true(!!facade.historyManager);
  t.true(!!facade.routeMatcher);
});
