module.exports = function override(config, env) {
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.include) {
      const devPack = rule.include.replace('src', 'node_modules/libraryforfsf');
      rule.include = [rule.include, devPack];
    }

    if (rule.oneOf !== undefined) {
      rule.oneOf.map((one) => {
        if (one.include) {
          const devPack = one.include.replace('src', 'node_modules/libraryforfsf');
          one.include = [one.include, devPack];
        }
        return one;
      });
      rule.oneOf = [...rule.oneOf];
    }

    return rule;
  });

  return config;
};