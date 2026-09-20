'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0167",
  name: "Mask all but last 11",
  description: "Masks all but the last 11 characters.",
  run: (value) => { const s = String(value); const keep = 11; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
