import { artifacts, ethers } from 'hardhat';
import { abi as TokenERC20 } from '../artifacts/contracts/Token ERC20 Drop/TokenERC20.sol/TokenERC20.json';

describe('Test DropBatch contract', () => {
  let wallets: ethers.Signer[];
  let tokensERC20: ethers.Contract[];


  // Здесь можно добавить остальные тесты для вашего контракта
  it('Add token to drop', async () => {
     // Получение списка кошельков-подписчиков
     wallets = await ethers.getSigners();

     // Создание фабрики контрактов на основе ABI токена ERC20
     const contractFactory = new ethers.ContractFactory(TokenERC20, [], wallets[0]);
 
     // Деплой контракта
     const contract = await contractFactory.deploy();
     await contract.deployed();
 
     // Вывод адреса контракта в консоль
     console.log('TokenERC20 deployed to:', contract.address);
  });
});