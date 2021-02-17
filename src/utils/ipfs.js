
import IPFS from 'ipfs-api';
import bs58 from 'bs58';

export const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export const getBytes32FromIpfsHash = (ipfsListing) => {
  const decoded = bs58.decode(ipfsListing)
  return `0x${decoded.slice(2).toString('hex')}`
}

export const getIpfsHashFromBytes32 = (bytes32Hex) => {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"
  const hashHex = '1220' + bytes32Hex.slice(2)
  const hashBytes = Buffer.from(hashHex, 'hex')
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}


