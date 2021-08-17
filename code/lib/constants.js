module.exports = {
  TokenType: {
    0: 'ERC20',
    1: 'ERC721',
    2: 'ERC1155',
    3: 'NONE',
    'ERC20': 0,
    'ERC721': 1,
    'ERC1155': 2,
    'NONE': 3,
  },
  OperationType: {
    TRACK: 0,
    UNTRACK: 1,
    TRANSFER_TOKEN: 2,
    OVERRIDE_TRACK: 3,
    TRANSFER: 4,
    SET_RECOVERY_ADDRESS: 5,
    RECOVER: 6,
    REPLACE: 7,
    UPGRADE: 8,
    BULK_TRANSFER_TOKENS: 9,
    BUY_DOMAIN: 10,
    0: 'TRACK',
    1: 'UNTRACK',
    2: 'TRANSFER_TOKEN',
    3: 'OVERRIDE_TRACK',
    4: 'TRANSFER',
    5: 'SET_RECOVERY_ADDRESS',
    6: 'RECOVER',
    7: 'REPLACE',
    8: 'UPGRADE',
    9: 'BULK_TRANSFER_TOKENS',
    10: 'BUY_DOMAIN'
  },
  EmptyAddress: '0x0000000000000000000000000000000000000000',
  EmptyBech32Address: 'one1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqquzw7vz',
  MajorVersion: 9,
  MinorVersion: 0,
  Domain: {
    DEFAULT_DOMAIN: 'crazy.one',
    DEFAULT_SUFFIX: '.crazy.one',
    DEFAULT_NODE: '0x8ada342410322a1cc38cc04ac516581740996bacbf88d2a55e0064133ecca850',
    DEFAULT_RESOLVER: '0x48D421c223E32B68a8973ef05e1314C97BBbc4bE',
    DEFAULT_REVERSE_RESOLVER: '0x7e1c6695D2563c27E49C4F0adA5F20AA7d978aD8',
    DEFAULT_REVERSE_REGISTRAR: '0xF791552B1B634b2b2ad7C235AF93AEba150F7FFb',
    DEFAULT_SUBDOMAIN_REGISTRAR: '0x43B2b112ef03725B5FD42e3ad9b7f2d857ed4642',
    ADDR_REVERSE_NODE: '0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2'
  }
}
