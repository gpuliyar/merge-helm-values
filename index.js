const fs = require('fs');
const clc = require("cli-color");
const yaml = require('js-yaml');
const core = require('@actions/core');

const main = async() => {
  try {
    const repository = core.getInput('repository', { required: true });
    const chartTag = core.getInput('chart-tag', { required: true });
    const valuesYaml = yaml.safeLoad(fs.readFileSync("infra-helm/Chart.yaml", 'utf8'));
    const indentedJson = JSON.stringify(config, null, 4);
    console.log(clc.green(indentedJson));
  } catch(error) {
    console.log(clc.red(error));
  }
}

main();
