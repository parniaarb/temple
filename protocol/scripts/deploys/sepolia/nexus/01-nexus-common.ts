import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';
import { NexusCommon__factory } from '../../../../typechain';
import {
  deployAndMine,
  ensureExpectedEnvvars,
} from '../../helpers';

async function main() {
  ensureExpectedEnvvars();
  const [owner] = await ethers.getSigners();

  const nexusCommonFactory= new NexusCommon__factory(owner);
  await deployAndMine(
    'NEXUS.NEXUS_COMMON',
    nexusCommonFactory,
    nexusCommonFactory.deploy,
    await owner.getAddress() // initial executor
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });