/**
 * Description:
 *   Smart contract wallet with 2-step authentication based on OTPs generated by CSPRNG and aggregated by Merkle tree.
 *
 */
pragma solidity ^0.5.8;

import "./WalletHandle.sol";

contract WalletHandleFactory {

    event WalletContractCreated(address newAddress);

    address[] allWallets;

    function createWalletHandle(bytes16 parent_rootHash, uint8 parent_height,
                uint8 child_heightOfMT, uint8 child_depthOfCachedLayer, bytes16[] memory child_cachedLayerOfMT,
                bytes16[] memory authPath_childTree, bytes16 sides_childTree,
                uint16 _hashChainLen,
                uint64 _dailyLimit, address payable _lastResortAddr, uint64 _maxInactiveDays
    ) public returns (WalletHandle)  {
        WalletHandle wallet = new WalletHandle(parent_rootHash, parent_height, child_heightOfMT, child_depthOfCachedLayer,
            child_cachedLayerOfMT, authPath_childTree, sides_childTree, _hashChainLen, _dailyLimit, _lastResortAddr, _maxInactiveDays
        );
        allWallets.push(address(wallet));
        emit WalletContractCreated(address(wallet));
        return wallet;
    }

    function destruct() public {
        selfdestruct(msg.sender);
    }

}