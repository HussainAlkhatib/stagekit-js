'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3181",
  name: "Replace \"L\" with \"W\"",
  description: "Replaces every L with W.",
  run: (value) => String(value).split("L").join("W"),
});
