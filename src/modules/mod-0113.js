'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0113",
  name: "Mask all but last 7",
  description: "Masks all but the last 7 characters.",
  run: (value) => { const s = String(value); const keep = 7; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
