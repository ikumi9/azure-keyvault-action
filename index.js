const core = require('@actions/core');
const exec = require('@actions/exec')


async function run() {
  try {
    const keyvault = core.getInput('keyvault',{required:true});
    const secret = core.getInput('secret',{required:true});

   const secret_val = exec.exec(`az keyvault secret show --name ${secret} --vault-name ${keyvault} --query "value"`)
    core.setOutput('secret', secret_val);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
