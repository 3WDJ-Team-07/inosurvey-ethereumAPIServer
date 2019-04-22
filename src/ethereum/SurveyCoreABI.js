export default
{
  "contractName": "SurveyCore",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_surveyId",
          "type": "uint256"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "addSurveyMarket",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0c7ef926"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_maximumAmount",
          "type": "uint256"
        },
        {
          "name": "_closedAt",
          "type": "uint256"
        }
      ],
      "name": "createFoundation",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0ce38eb6"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_foundationId",
          "type": "uint256"
        }
      ],
      "name": "getFoundationDetail",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0fbafaf9"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSurveyRequestList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x13f082ba"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSurveyResponseReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1f6a0d25"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_surveyId",
          "type": "uint256"
        }
      ],
      "name": "buySurvey",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x22929dbc"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_maximumCount",
          "type": "uint256"
        },
        {
          "name": "_createdAt",
          "type": "uint256"
        },
        {
          "name": "_questionCount",
          "type": "uint8"
        }
      ],
      "name": "requestSurvey",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x282f162b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x313ce567"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_foundationId",
          "type": "uint256"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "donation",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x36d1e2dd"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFoundationDonateReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x385a44f8"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x39509351"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3f4ba83a"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_receiptId",
          "type": "uint256"
        }
      ],
      "name": "getReceiptDetail",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x54128fa1"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getProductBuyReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x57b2c03c"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5c975abb"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_surveyId",
          "type": "uint256"
        }
      ],
      "name": "getSurveyRequestDetail",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6b945e78"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSurveySellReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x834849d2"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_surveyId",
          "type": "uint256"
        }
      ],
      "name": "cancelSurveyMarket",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x83db29e8"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8456cb59"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "consumeBalanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x87a29c28"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSurveyResponseList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x965b0dcb"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa457c2d7"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getProductSellReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa6c16e6c"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa9059cbb"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSurveyRequestReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb84a540f"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSurveyBuyReceiptList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc7c700b7"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "developerAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xcaccd7f7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_surveyId",
          "type": "uint256"
        },
        {
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "isSurveyToBuyer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd4554193"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdd62ed3e"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "PRICE_PER_QUESTION",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xde906fed"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getFoundationList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe818c7cb"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSurveyBuyList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xef29b4ba"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSurveyMarketList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf029ef01"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_surveyId",
          "type": "uint256"
        }
      ],
      "name": "responseSurvey",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf03e8181"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newDeveloperAddress",
          "type": "address"
        }
      ],
      "name": "setDeveloper",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xff70fa49"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "foundationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "Donation",
      "type": "event",
      "signature": "0x965f7409cc0fd75aafcf803f57c201a8530900e4a4cbc0c622b1ea8f4cfbcf47"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "surveyId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "BuyerAdded",
      "type": "event",
      "signature": "0xd28f937e71e8a89ddbefb8937335b2ae03fb74ce63dd6a6f316724c5a7e6c3dc"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "surveyId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "BuyerRemoved",
      "type": "event",
      "signature": "0x5ff559907320fd461b84256d2c50f901d38f002cb014dc7547c4c07235069e7a"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "surveyId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CreateSurvey",
      "type": "event",
      "signature": "0xecc279af01ecc1616810552807a41a6dcbad8eb3a91a33626b2d35c9dfd5c2d5"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ReceiptId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CreateReceipt",
      "type": "event",
      "signature": "0x648ea8614c7f2c919bde3b01694291faae3d403522f45d971755f2ac0e2faa59"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "foundationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CreateFoundation",
      "type": "event",
      "signature": "0xdc79878c7751be2913fa8baed72a599dd9024b1f3e4e03f25cb24f783eb833fc"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CreateProduct",
      "type": "event",
      "signature": "0xf57b333a797ffff64ee52ce1b40778433999a1b7d7e26cbe72d61f35f29f290a"
    }
  ],
  "bytecode": "0x608060405260008060146101000a81548160ff0219169083151502179055506040805190810160405280600781526020017f494e4f434f494e00000000000000000000000000000000000000000000000000815250601690805190602001906200006b92919062000144565b506012601760006101000a81548160ff021916908360ff1602179055506040805190810160405280600381526020017f494e43000000000000000000000000000000000000000000000000000000000081525060189080519060200190620000d592919062000144565b50348015620000e357600080fd5b5060008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001f3565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018757805160ff1916838001178555620001b8565b82800160010185558215620001b8579182015b82811115620001b75782518255916020019190600101906200019a565b5b509050620001c79190620001cb565b5090565b620001f091905b80821115620001ec576000816000905550600101620001d2565b5090565b90565b6145ba80620002036000396000f3fe6080604052600436106101f9576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101fe578063095ea7b31461028e5780630c7ef926146103015780630ce38eb61461035e5780630fbafaf9146103bb57806313f082ba1461042a57806318160ddd146104965780631f6a0d25146104c157806322929dbc1461052d57806323b872dd14610580578063282f162b14610613578063313ce5671461067d57806336d1e2dd146106ae578063385a44f81461070b57806339509351146107775780633f4ba83a146107ea57806354128fa11461080157806357b2c03c146108ee5780635c975abb1461095a5780636b945e781461098957806370a0823114610a0c578063834849d214610a7157806383db29e814610add5780638456cb5914610b3057806387a29c2814610b4757806395d89b4114610bac578063965b0dcb14610c3c578063a457c2d714610ca8578063a6c16e6c14610d1b578063a9059cbb14610d87578063b84a540f14610dfa578063c7c700b714610e66578063caccd7f714610ed2578063d455419314610f29578063dd62ed3e14610f9c578063de906fed14611021578063e818c7cb1461104c578063ef29b4ba146110b8578063f029ef0114611124578063f03e818114611190578063ff70fa49146111e3575b600080fd5b34801561020a57600080fd5b50610213611234565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610253578082015181840152602081019050610238565b50505050905090810190601f1680156102805780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029a57600080fd5b506102e7600480360360408110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112d6565b604051808215151515815260200191505060405180910390f35b34801561030d57600080fd5b506103446004803603604081101561032457600080fd5b810190808035906020019092919080359060200190929190505050611403565b604051808215151515815260200191505060405180910390f35b34801561036a57600080fd5b506103a16004803603604081101561038157600080fd5b8101908080359060200190929190803590602001909291905050506114db565b604051808215151515815260200191505060405180910390f35b3480156103c757600080fd5b506103f4600480360360208110156103de57600080fd5b81019080803590602001909291905050506114f7565b60405180868152602001858152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b34801561043657600080fd5b5061043f6115c4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610482578082015181840152602081019050610467565b505050509050019250505060405180910390f35b3480156104a257600080fd5b506104ab6116c2565b6040518082815260200191505060405180910390f35b3480156104cd57600080fd5b506104d66116cc565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105195780820151818401526020810190506104fe565b505050509050019250505060405180910390f35b34801561053957600080fd5b506105666004803603602081101561055057600080fd5b8101908080359060200190929190505050611761565b604051808215151515815260200191505060405180910390f35b34801561058c57600080fd5b506105f9600480360360608110156105a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611879565b604051808215151515815260200191505060405180910390f35b34801561061f57600080fd5b506106636004803603606081101561063657600080fd5b810190808035906020019092919080359060200190929190803560ff169060200190929190505050611a81565b604051808215151515815260200191505060405180910390f35b34801561068957600080fd5b50610692611b16565b604051808260ff1660ff16815260200191505060405180910390f35b3480156106ba57600080fd5b506106f1600480360360408110156106d157600080fd5b810190808035906020019092919080359060200190929190505050611b2d565b604051808215151515815260200191505060405180910390f35b34801561071757600080fd5b50610720611cfd565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610763578082015181840152602081019050610748565b505050509050019250505060405180910390f35b34801561078357600080fd5b506107d06004803603604081101561079a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d92565b604051808215151515815260200191505060405180910390f35b3480156107f657600080fd5b506107ff611fc9565b005b34801561080d57600080fd5b5061083a6004803603602081101561082457600080fd5b810190808035906020019092919050505061212d565b6040518088600281111561084a57fe5b60ff16815260200187600581111561085e57fe5b60ff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200197505050505050505060405180910390f35b3480156108fa57600080fd5b50610903612301565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561094657808201518184015260208101905061092b565b505050509050019250505060405180910390f35b34801561096657600080fd5b5061096f612396565b604051808215151515815260200191505060405180910390f35b34801561099557600080fd5b506109c2600480360360208110156109ac57600080fd5b81019080803590602001909291905050506123a9565b604051808881526020018781526020018681526020018581526020018481526020018360ff1660ff1681526020018215151515815260200197505050505050505060405180910390f35b348015610a1857600080fd5b50610a5b60048036036020811015610a2f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124ce565b6040518082815260200191505060405180910390f35b348015610a7d57600080fd5b50610a86612517565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610ac9578082015181840152602081019050610aae565b505050509050019250505060405180910390f35b348015610ae957600080fd5b50610b1660048036036020811015610b0057600080fd5b81019080803590602001909291905050506125ac565b604051808215151515815260200191505060405180910390f35b348015610b3c57600080fd5b50610b45612615565b005b348015610b5357600080fd5b50610b9660048036036020811015610b6a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061277b565b6040518082815260200191505060405180910390f35b348015610bb857600080fd5b50610bc16127c4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c01578082015181840152602081019050610be6565b50505050905090810190601f168015610c2e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610c4857600080fd5b50610c51612866565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c94578082015181840152602081019050610c79565b505050509050019250505060405180910390f35b348015610cb457600080fd5b50610d0160048036036040811015610ccb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506129a5565b604051808215151515815260200191505060405180910390f35b348015610d2757600080fd5b50610d30612bdc565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d73578082015181840152602081019050610d58565b505050509050019250505060405180910390f35b348015610d9357600080fd5b50610de060048036036040811015610daa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612c71565b604051808215151515815260200191505060405180910390f35b348015610e0657600080fd5b50610e0f612c88565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610e52578082015181840152602081019050610e37565b505050509050019250505060405180910390f35b348015610e7257600080fd5b50610e7b612d1d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610ebe578082015181840152602081019050610ea3565b505050509050019250505060405180910390f35b348015610ede57600080fd5b50610ee7612db2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610f3557600080fd5b50610f8260048036036040811015610f4c57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612dd7565b604051808215151515815260200191505060405180910390f35b348015610fa857600080fd5b5061100b60048036036040811015610fbf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612e06565b6040518082815260200191505060405180910390f35b34801561102d57600080fd5b50611036612e8d565b6040518082815260200191505060405180910390f35b34801561105857600080fd5b50611061612e92565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156110a4578082015181840152602081019050611089565b505050509050019250505060405180910390f35b3480156110c457600080fd5b506110cd612fd1565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156111105780820151818401526020810190506110f5565b505050509050019250505060405180910390f35b34801561113057600080fd5b506111396130cf565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561117c578082015181840152602081019050611161565b505050509050019250505060405180910390f35b34801561119c57600080fd5b506111c9600480360360208110156111b357600080fd5b81019080803590602001909291905050506131c1565b604051808215151515815260200191505060405180910390f35b3480156111ef57600080fd5b506112326004803603602081101561120657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613292565b005b606060168054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112cc5780601f106112a1576101008083540402835291602001916112cc565b820191906000526020600020905b8154815290600101906020018083116112af57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561131357600080fd5b81601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000823373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561147357600080fd5b8260018581548110151561148357fe5b906000526020600020906006020160010181905550600180858154811015156114a857fe5b906000526020600020906006020160050160016101000a81548160ff021916908315150217905550600191505092915050565b60006114ec6000844285600161343e565b506001905092915050565b600080600080600060038681548110151561150e57fe5b90600052602060002090600502016000015460038781548110151561152f57fe5b90600052602060002090600502016001015460038881548110151561155057fe5b90600052602060002090600502016002015460038981548110151561157157fe5b90600052602060002090600502016003015460038a81548110151561159257fe5b906000526020600020906005020160040160009054906101000a900460ff169450945094509450945091939590929450565b60608060606115d1612c88565b905081601a90805190602001906115e9929190614427565b5060008090505b815181101561166957601a6002838381518110151561160b57fe5b9060200190602002015181548110151561162157fe5b906000526020600020906005020160020154908060018154018082558091505090600182039060005260206000200160009091929091909150555080806001019150506115f0565b50601a8054806020026020016040519081016040528092919081815260200182805480156116b657602002820191906000526020600020905b8154815260200190600101908083116116a2575b50505050509250505090565b6000601554905090565b6060600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561175757602002820191906000526020600020905b815481526020019060010190808311611743575b5050505050905090565b600061176b614474565b60018381548110151561177a57fe5b906000526020600020906006020160e0604051908101604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1660ff1660ff1681526020016005820160019054906101000a900460ff161515151581525050905060008160200151905060006118486005600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683612c71565b90508015611863576118616000600330338987426135be565b505b61186d8533613d2f565b60019350505050919050565b600061190a82601460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d3d90919063ffffffff16565b601460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611995848484613d5f565b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925601460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600190509392505050565b60008084600a8460ff160202905060006050606483811515611a9f57fe5b04029050600081830390506000611ab58461402d565b9050611ac082614043565b508015611b06576000611adb8460008b60008c8c600061407a565b9050611ae78133613d2f565b611af7600080303385898e6135be565b50600195505050505050611b0f565b60009450505050505b9392505050565b6000601760009054906101000a900460ff16905090565b6000806007600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600384815481101515611b7557fe5b906000526020600020906005020160040160009054906101000a900460ff1615611cf157600384815481101515611ba857fe5b906000526020600020906005020160030154421115611c04576000600385815481101515611bd257fe5b906000526020600020906005020160040160006101000a81548160ff0219169083151502179055506000915050611cf7565b6000611c108285612c71565b90508015611ce65783600386815481101515611c2857fe5b906000526020600020906005020160000160008282540192505081905550600385815481101515611c5557fe5b906000526020600020906005020160000154600386815481101515611c7657fe5b906000526020600020906005020160010154111515611cc9576000600386815481101515611ca057fe5b906000526020600020906005020160040160006101000a81548160ff0219169083151502179055505b611cda6001600284338989426135be565b50600192505050611cf7565b600092505050611cf7565b60009150505b92915050565b6060600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015611d8857602002820191906000526020600020905b815481526020019060010190808311611d74575b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611dcf57600080fd5b611e5e82601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461423590919063ffffffff16565b601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561208d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f74204f776e6572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060149054906101000a900460ff161515612111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f6e6f74207061757365642e00000000000000000000000000000000000000000081525060200191505060405180910390fd5b60008060146101000a81548160ff021916908315150217905550565b6000806000806000806000873373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156121a657600080fd5b6002898154811015156121b557fe5b906000526020600020906005020160000160009054906101000a900460ff1660028a8154811015156121e357fe5b906000526020600020906005020160000160019054906101000a900460ff1660028b81548110151561221157fe5b906000526020600020906005020160000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028c81548110151561225257fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028d81548110151561229357fe5b90600052602060002090600502016002015460028e8154811015156122b457fe5b90600052602060002090600502016003015460028f8154811015156122d557fe5b906000526020600020906005020160040154975097509750975097509750975050919395979092949650565b6060600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561238c57602002820191906000526020600020905b815481526020019060010190808311612378575b5050505050905090565b600060149054906101000a900460ff1681565b60008060008060008060006001888154811015156123c357fe5b9060005260206000209060060201600001546001898154811015156123e457fe5b90600052602060002090600602016001015460018a81548110151561240557fe5b90600052602060002090600602016002015460018b81548110151561242657fe5b90600052602060002090600602016003015460018c81548110151561244757fe5b90600052602060002090600602016004015460018d81548110151561246857fe5b906000526020600020906006020160050160009054906101000a900460ff1660018e81548110151561249657fe5b906000526020600020906006020160050160019054906101000a900460ff169650965096509650965096509650919395979092949650565b6000601360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156125a257602002820191906000526020600020905b81548152602001906001019080831161258e575b5050505050905090565b6000806001838154811015156125be57fe5b90600052602060002090600602016001018190555060006001838154811015156125e457fe5b906000526020600020906006020160050160016101000a81548160ff02191690831515021790555060019050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156126d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f74204f776e6572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060149054906101000a900460ff1615151561275e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f616c7265616479207061757365642e000000000000000000000000000000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff021916908315150217905550565b6000601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060188054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561285c5780601f106128315761010080835404028352916020019161285c565b820191906000526020600020905b81548152906001019060200180831161283f57829003601f168201915b5050505050905090565b60608060606128736116cc565b905081601a908051906020019061288b929190614427565b5060008090505b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561294c57601a600283838151811015156128ee57fe5b9060200190602002015181548110151561290457fe5b90600052602060002090600502016002015490806001815401808255809150509060018203906000526020600020016000909192909190915055508080600101915050612892565b50601a80548060200260200160405190810160405280929190818152602001828054801561299957602002820191906000526020600020905b815481526020019060010190808311612985575b50505050509250505090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156129e257600080fd5b612a7182601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d3d90919063ffffffff16565b601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6060601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612c6757602002820191906000526020600020905b815481526020019060010190808311612c53575b5050505050905090565b6000612c7e338484613d5f565b6001905092915050565b6060600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612d1357602002820191906000526020600020905b815481526020019060010190808311612cff575b5050505050905090565b6060600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612da857602002820191906000526020600020905b815481526020019060010190808311612d94575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000612dfe826011600086815260200190815260200160002061425690919063ffffffff16565b905092915050565b6000601460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600a81565b6060806060612e9f611cfd565b905081601c9080519060200190612eb7929190614427565b5060008090505b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015612f7857601c60028383815181101515612f1a57fe5b90602001906020020151815481101515612f3057fe5b90600052602060002090600502016002015490806001815401808255809150509060018203906000526020600020016000909192909190915055508080600101915050612ebe565b50601c805480602002602001604051908101604052809291908181526020018280548015612fc557602002820191906000526020600020905b815481526020019060010190808311612fb1575b50505050509250505090565b6060806060612fde612d1d565b905081601b9080519060200190612ff6929190614427565b5060008090505b815181101561307657601b6002838381518110151561301857fe5b9060200190602002015181548110151561302e57fe5b90600052602060002090600502016002015490806001815401808255809150509060018203906000526020600020016000909192909190915055508080600101915050612ffd565b50601b8054806020026020016040519081016040528092919081815260200182805480156130c357602002820191906000526020600020905b8154815260200190600101908083116130af575b50505050509250505090565b60608080601b90805190602001906130e8929190614427565b5060008090505b6001805490508110156131695760018181548110151561310b57fe5b906000526020600020906006020160050160019054906101000a900460ff161561315c57601b8190806001815401808255809150509060018203906000526020600020016000909192909190915055505b80806001019150506130ef565b50601b8054806020026020016040519081016040528092919081815260200182805480156131b657602002820191906000526020600020905b8154815260200190600101908083116131a2575b505050505091505090565b600080606460506001858154811015156131d757fe5b9060005260206000209060060201600201546001868154811015156131f857fe5b90600052602060002090600602016000015481151561321357fe5b040281151561321e57fe5b049050600061322c826142ea565b9050801561327b5760018481548110151561324357fe5b9060005260206000209060060201600301600081548092919060010191905055506132756000600133308887426135be565b50613286565b60009250505061328d565b6001925050505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613356576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f74204f776e6572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156133fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f5761726e696e670000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006134486144b7565b60a060405190810160405280888152602001878152602001868152602001858152602001841515815250905060006001600383908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff0219169083151502179055505050039050336007600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdc79878c7751be2913fa8baed72a599dd9024b1f3e4e03f25cb24f783eb833fc8133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1809250505095945050505050565b60006135c86144e9565b60e0604051908101604052808a60028111156135e057fe5b81526020018960058111156135f157fe5b81526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152509050600060016002839080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548160ff0219169083600281111561369657fe5b021790555060208201518160000160016101000a81548160ff021916908360058111156136bf57fe5b021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816002015560a0820151816003015560c082015181600401555050039050336006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060028111156137d457fe5b8a60028111156137e057fe5b1415613ab457600060058111156137f357fe5b8960058111156137ff57fe5b141561387357600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aaf565b6001600581111561388057fe5b89600581111561388c57fe5b141561390057600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aae565b6003600581111561390d57fe5b89600581111561391957fe5b141561398d57600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aad565b6004600581111561399a57fe5b8960058111156139a657fe5b1415613a1a57600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aac565b600580811115613a2657fe5b896005811115613a3257fe5b1415613aa657600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aab565b600080fd5b5b5b5b5b613cb4565b60016002811115613ac157fe5b8a6002811115613acd57fe5b1415613b6a5760026005811115613ae057fe5b896005811115613aec57fe5b1415613b6057600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613b65565b600080fd5b613cb3565b600280811115613b7657fe5b8a6002811115613b8257fe5b1415613cad5760036005811115613b9557fe5b896005811115613ba157fe5b1415613c1557600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613ca8565b60046005811115613c2257fe5b896005811115613c2e57fe5b1415613ca257601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613ca7565b600080fd5b5b613cb2565b600080fd5b5b5b7f648ea8614c7f2c919bde3b01694291faae3d403522f45d971755f2ac0e2faa598133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a18092505050979650505050505050565b613d398282614300565b5050565b6000828211151515613d4e57600080fd5b600082840390508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515613e04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f6275726e2061646472657373212121000000000000000000000000000000000081525060200191505060405180910390fd5b613e5681601360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d3d90919063ffffffff16565b601360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550613eeb81601360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461423590919063ffffffff16565b601360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550613f8081601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461423590919063ffffffff16565b601260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600061403a333084613d5f565b60019050919050565b6000614071306000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684613d5f565b60019050919050565b6000614084614474565b60e0604051908101604052808a81526020018981526020018881526020018781526020018681526020018560ff168152602001841515815250905060006001808390806001815401808255809150509060018203906000526020600020906006020160009091929091909150600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908360ff16021790555060c08201518160050160016101000a81548160ff0219169083151502179055505050039050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fecc279af01ecc1616810552807a41a6dcbad8eb3a91a33626b2d35c9dfd5c2d58133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a18092505050979650505050505050565b600080828401905083811015151561424c57600080fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561429357600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006142f7303384613d5f565b60019050919050565b614325816011600085815260200190815260200160002061437790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fd28f937e71e8a89ddbefb8937335b2ae03fb74ce63dd6a6f316724c5a7e6c3dc836040518082815260200191505060405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156143b357600080fd5b6143bd8282614256565b1515156143c957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b828054828255906000526020600020908101928215614463579160200282015b82811115614462578251825591602001919060010190614447565b5b5090506144709190614569565b5090565b60e0604051908101604052806000815260200160008152602001600081526020016000815260200160008152602001600060ff1681526020016000151581525090565b60a060405190810160405280600081526020016000815260200160008152602001600081526020016000151581525090565b60e0604051908101604052806000600281111561450257fe5b81526020016000600581111561451457fe5b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b61458b91905b8082111561458757600081600090555060010161456f565b5090565b9056fea165627a7a723058205f86b31ba194405af40f8740b77cdad244605ff101f17f47ad2d185c1e3b5f980029",
  "deployedBytecode": "0x6080604052600436106101f9576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101fe578063095ea7b31461028e5780630c7ef926146103015780630ce38eb61461035e5780630fbafaf9146103bb57806313f082ba1461042a57806318160ddd146104965780631f6a0d25146104c157806322929dbc1461052d57806323b872dd14610580578063282f162b14610613578063313ce5671461067d57806336d1e2dd146106ae578063385a44f81461070b57806339509351146107775780633f4ba83a146107ea57806354128fa11461080157806357b2c03c146108ee5780635c975abb1461095a5780636b945e781461098957806370a0823114610a0c578063834849d214610a7157806383db29e814610add5780638456cb5914610b3057806387a29c2814610b4757806395d89b4114610bac578063965b0dcb14610c3c578063a457c2d714610ca8578063a6c16e6c14610d1b578063a9059cbb14610d87578063b84a540f14610dfa578063c7c700b714610e66578063caccd7f714610ed2578063d455419314610f29578063dd62ed3e14610f9c578063de906fed14611021578063e818c7cb1461104c578063ef29b4ba146110b8578063f029ef0114611124578063f03e818114611190578063ff70fa49146111e3575b600080fd5b34801561020a57600080fd5b50610213611234565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610253578082015181840152602081019050610238565b50505050905090810190601f1680156102805780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029a57600080fd5b506102e7600480360360408110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112d6565b604051808215151515815260200191505060405180910390f35b34801561030d57600080fd5b506103446004803603604081101561032457600080fd5b810190808035906020019092919080359060200190929190505050611403565b604051808215151515815260200191505060405180910390f35b34801561036a57600080fd5b506103a16004803603604081101561038157600080fd5b8101908080359060200190929190803590602001909291905050506114db565b604051808215151515815260200191505060405180910390f35b3480156103c757600080fd5b506103f4600480360360208110156103de57600080fd5b81019080803590602001909291905050506114f7565b60405180868152602001858152602001848152602001838152602001821515151581526020019550505050505060405180910390f35b34801561043657600080fd5b5061043f6115c4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610482578082015181840152602081019050610467565b505050509050019250505060405180910390f35b3480156104a257600080fd5b506104ab6116c2565b6040518082815260200191505060405180910390f35b3480156104cd57600080fd5b506104d66116cc565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105195780820151818401526020810190506104fe565b505050509050019250505060405180910390f35b34801561053957600080fd5b506105666004803603602081101561055057600080fd5b8101908080359060200190929190505050611761565b604051808215151515815260200191505060405180910390f35b34801561058c57600080fd5b506105f9600480360360608110156105a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611879565b604051808215151515815260200191505060405180910390f35b34801561061f57600080fd5b506106636004803603606081101561063657600080fd5b810190808035906020019092919080359060200190929190803560ff169060200190929190505050611a81565b604051808215151515815260200191505060405180910390f35b34801561068957600080fd5b50610692611b16565b604051808260ff1660ff16815260200191505060405180910390f35b3480156106ba57600080fd5b506106f1600480360360408110156106d157600080fd5b810190808035906020019092919080359060200190929190505050611b2d565b604051808215151515815260200191505060405180910390f35b34801561071757600080fd5b50610720611cfd565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610763578082015181840152602081019050610748565b505050509050019250505060405180910390f35b34801561078357600080fd5b506107d06004803603604081101561079a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d92565b604051808215151515815260200191505060405180910390f35b3480156107f657600080fd5b506107ff611fc9565b005b34801561080d57600080fd5b5061083a6004803603602081101561082457600080fd5b810190808035906020019092919050505061212d565b6040518088600281111561084a57fe5b60ff16815260200187600581111561085e57fe5b60ff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200197505050505050505060405180910390f35b3480156108fa57600080fd5b50610903612301565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561094657808201518184015260208101905061092b565b505050509050019250505060405180910390f35b34801561096657600080fd5b5061096f612396565b604051808215151515815260200191505060405180910390f35b34801561099557600080fd5b506109c2600480360360208110156109ac57600080fd5b81019080803590602001909291905050506123a9565b604051808881526020018781526020018681526020018581526020018481526020018360ff1660ff1681526020018215151515815260200197505050505050505060405180910390f35b348015610a1857600080fd5b50610a5b60048036036020811015610a2f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124ce565b6040518082815260200191505060405180910390f35b348015610a7d57600080fd5b50610a86612517565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610ac9578082015181840152602081019050610aae565b505050509050019250505060405180910390f35b348015610ae957600080fd5b50610b1660048036036020811015610b0057600080fd5b81019080803590602001909291905050506125ac565b604051808215151515815260200191505060405180910390f35b348015610b3c57600080fd5b50610b45612615565b005b348015610b5357600080fd5b50610b9660048036036020811015610b6a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061277b565b6040518082815260200191505060405180910390f35b348015610bb857600080fd5b50610bc16127c4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c01578082015181840152602081019050610be6565b50505050905090810190601f168015610c2e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610c4857600080fd5b50610c51612866565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c94578082015181840152602081019050610c79565b505050509050019250505060405180910390f35b348015610cb457600080fd5b50610d0160048036036040811015610ccb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506129a5565b604051808215151515815260200191505060405180910390f35b348015610d2757600080fd5b50610d30612bdc565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d73578082015181840152602081019050610d58565b505050509050019250505060405180910390f35b348015610d9357600080fd5b50610de060048036036040811015610daa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612c71565b604051808215151515815260200191505060405180910390f35b348015610e0657600080fd5b50610e0f612c88565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610e52578082015181840152602081019050610e37565b505050509050019250505060405180910390f35b348015610e7257600080fd5b50610e7b612d1d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610ebe578082015181840152602081019050610ea3565b505050509050019250505060405180910390f35b348015610ede57600080fd5b50610ee7612db2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610f3557600080fd5b50610f8260048036036040811015610f4c57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612dd7565b604051808215151515815260200191505060405180910390f35b348015610fa857600080fd5b5061100b60048036036040811015610fbf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612e06565b6040518082815260200191505060405180910390f35b34801561102d57600080fd5b50611036612e8d565b6040518082815260200191505060405180910390f35b34801561105857600080fd5b50611061612e92565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156110a4578082015181840152602081019050611089565b505050509050019250505060405180910390f35b3480156110c457600080fd5b506110cd612fd1565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156111105780820151818401526020810190506110f5565b505050509050019250505060405180910390f35b34801561113057600080fd5b506111396130cf565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561117c578082015181840152602081019050611161565b505050509050019250505060405180910390f35b34801561119c57600080fd5b506111c9600480360360208110156111b357600080fd5b81019080803590602001909291905050506131c1565b604051808215151515815260200191505060405180910390f35b3480156111ef57600080fd5b506112326004803603602081101561120657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613292565b005b606060168054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112cc5780601f106112a1576101008083540402835291602001916112cc565b820191906000526020600020905b8154815290600101906020018083116112af57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561131357600080fd5b81601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000823373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561147357600080fd5b8260018581548110151561148357fe5b906000526020600020906006020160010181905550600180858154811015156114a857fe5b906000526020600020906006020160050160016101000a81548160ff021916908315150217905550600191505092915050565b60006114ec6000844285600161343e565b506001905092915050565b600080600080600060038681548110151561150e57fe5b90600052602060002090600502016000015460038781548110151561152f57fe5b90600052602060002090600502016001015460038881548110151561155057fe5b90600052602060002090600502016002015460038981548110151561157157fe5b90600052602060002090600502016003015460038a81548110151561159257fe5b906000526020600020906005020160040160009054906101000a900460ff169450945094509450945091939590929450565b60608060606115d1612c88565b905081601a90805190602001906115e9929190614427565b5060008090505b815181101561166957601a6002838381518110151561160b57fe5b9060200190602002015181548110151561162157fe5b906000526020600020906005020160020154908060018154018082558091505090600182039060005260206000200160009091929091909150555080806001019150506115f0565b50601a8054806020026020016040519081016040528092919081815260200182805480156116b657602002820191906000526020600020905b8154815260200190600101908083116116a2575b50505050509250505090565b6000601554905090565b6060600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561175757602002820191906000526020600020905b815481526020019060010190808311611743575b5050505050905090565b600061176b614474565b60018381548110151561177a57fe5b906000526020600020906006020160e0604051908101604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1660ff1660ff1681526020016005820160019054906101000a900460ff161515151581525050905060008160200151905060006118486005600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683612c71565b90508015611863576118616000600330338987426135be565b505b61186d8533613d2f565b60019350505050919050565b600061190a82601460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d3d90919063ffffffff16565b601460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611995848484613d5f565b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925601460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600190509392505050565b60008084600a8460ff160202905060006050606483811515611a9f57fe5b04029050600081830390506000611ab58461402d565b9050611ac082614043565b508015611b06576000611adb8460008b60008c8c600061407a565b9050611ae78133613d2f565b611af7600080303385898e6135be565b50600195505050505050611b0f565b60009450505050505b9392505050565b6000601760009054906101000a900460ff16905090565b6000806007600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600384815481101515611b7557fe5b906000526020600020906005020160040160009054906101000a900460ff1615611cf157600384815481101515611ba857fe5b906000526020600020906005020160030154421115611c04576000600385815481101515611bd257fe5b906000526020600020906005020160040160006101000a81548160ff0219169083151502179055506000915050611cf7565b6000611c108285612c71565b90508015611ce65783600386815481101515611c2857fe5b906000526020600020906005020160000160008282540192505081905550600385815481101515611c5557fe5b906000526020600020906005020160000154600386815481101515611c7657fe5b906000526020600020906005020160010154111515611cc9576000600386815481101515611ca057fe5b906000526020600020906005020160040160006101000a81548160ff0219169083151502179055505b611cda6001600284338989426135be565b50600192505050611cf7565b600092505050611cf7565b60009150505b92915050565b6060600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015611d8857602002820191906000526020600020905b815481526020019060010190808311611d74575b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611dcf57600080fd5b611e5e82601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461423590919063ffffffff16565b601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561208d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f74204f776e6572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060149054906101000a900460ff161515612111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f6e6f74207061757365642e00000000000000000000000000000000000000000081525060200191505060405180910390fd5b60008060146101000a81548160ff021916908315150217905550565b6000806000806000806000873373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156121a657600080fd5b6002898154811015156121b557fe5b906000526020600020906005020160000160009054906101000a900460ff1660028a8154811015156121e357fe5b906000526020600020906005020160000160019054906101000a900460ff1660028b81548110151561221157fe5b906000526020600020906005020160000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028c81548110151561225257fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028d81548110151561229357fe5b90600052602060002090600502016002015460028e8154811015156122b457fe5b90600052602060002090600502016003015460028f8154811015156122d557fe5b906000526020600020906005020160040154975097509750975097509750975050919395979092949650565b6060600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561238c57602002820191906000526020600020905b815481526020019060010190808311612378575b5050505050905090565b600060149054906101000a900460ff1681565b60008060008060008060006001888154811015156123c357fe5b9060005260206000209060060201600001546001898154811015156123e457fe5b90600052602060002090600602016001015460018a81548110151561240557fe5b90600052602060002090600602016002015460018b81548110151561242657fe5b90600052602060002090600602016003015460018c81548110151561244757fe5b90600052602060002090600602016004015460018d81548110151561246857fe5b906000526020600020906006020160050160009054906101000a900460ff1660018e81548110151561249657fe5b906000526020600020906006020160050160019054906101000a900460ff169650965096509650965096509650919395979092949650565b6000601360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156125a257602002820191906000526020600020905b81548152602001906001019080831161258e575b5050505050905090565b6000806001838154811015156125be57fe5b90600052602060002090600602016001018190555060006001838154811015156125e457fe5b906000526020600020906006020160050160016101000a81548160ff02191690831515021790555060019050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156126d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f74204f776e6572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060149054906101000a900460ff1615151561275e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f616c7265616479207061757365642e000000000000000000000000000000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff021916908315150217905550565b6000601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060188054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561285c5780601f106128315761010080835404028352916020019161285c565b820191906000526020600020905b81548152906001019060200180831161283f57829003601f168201915b5050505050905090565b60608060606128736116cc565b905081601a908051906020019061288b929190614427565b5060008090505b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561294c57601a600283838151811015156128ee57fe5b9060200190602002015181548110151561290457fe5b90600052602060002090600502016002015490806001815401808255809150509060018203906000526020600020016000909192909190915055508080600101915050612892565b50601a80548060200260200160405190810160405280929190818152602001828054801561299957602002820191906000526020600020905b815481526020019060010190808311612985575b50505050509250505090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156129e257600080fd5b612a7182601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d3d90919063ffffffff16565b601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6060601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612c6757602002820191906000526020600020905b815481526020019060010190808311612c53575b5050505050905090565b6000612c7e338484613d5f565b6001905092915050565b6060600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612d1357602002820191906000526020600020905b815481526020019060010190808311612cff575b5050505050905090565b6060600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612da857602002820191906000526020600020905b815481526020019060010190808311612d94575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000612dfe826011600086815260200190815260200160002061425690919063ffffffff16565b905092915050565b6000601460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600a81565b6060806060612e9f611cfd565b905081601c9080519060200190612eb7929190614427565b5060008090505b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015612f7857601c60028383815181101515612f1a57fe5b90602001906020020151815481101515612f3057fe5b90600052602060002090600502016002015490806001815401808255809150509060018203906000526020600020016000909192909190915055508080600101915050612ebe565b50601c805480602002602001604051908101604052809291908181526020018280548015612fc557602002820191906000526020600020905b815481526020019060010190808311612fb1575b50505050509250505090565b6060806060612fde612d1d565b905081601b9080519060200190612ff6929190614427565b5060008090505b815181101561307657601b6002838381518110151561301857fe5b9060200190602002015181548110151561302e57fe5b90600052602060002090600502016002015490806001815401808255809150509060018203906000526020600020016000909192909190915055508080600101915050612ffd565b50601b8054806020026020016040519081016040528092919081815260200182805480156130c357602002820191906000526020600020905b8154815260200190600101908083116130af575b50505050509250505090565b60608080601b90805190602001906130e8929190614427565b5060008090505b6001805490508110156131695760018181548110151561310b57fe5b906000526020600020906006020160050160019054906101000a900460ff161561315c57601b8190806001815401808255809150509060018203906000526020600020016000909192909190915055505b80806001019150506130ef565b50601b8054806020026020016040519081016040528092919081815260200182805480156131b657602002820191906000526020600020905b8154815260200190600101908083116131a2575b505050505091505090565b600080606460506001858154811015156131d757fe5b9060005260206000209060060201600201546001868154811015156131f857fe5b90600052602060002090600602016000015481151561321357fe5b040281151561321e57fe5b049050600061322c826142ea565b9050801561327b5760018481548110151561324357fe5b9060005260206000209060060201600301600081548092919060010191905055506132756000600133308887426135be565b50613286565b60009250505061328d565b6001925050505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613356576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f74204f776e6572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156133fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f5761726e696e670000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006134486144b7565b60a060405190810160405280888152602001878152602001868152602001858152602001841515815250905060006001600383908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff0219169083151502179055505050039050336007600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdc79878c7751be2913fa8baed72a599dd9024b1f3e4e03f25cb24f783eb833fc8133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1809250505095945050505050565b60006135c86144e9565b60e0604051908101604052808a60028111156135e057fe5b81526020018960058111156135f157fe5b81526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152509050600060016002839080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548160ff0219169083600281111561369657fe5b021790555060208201518160000160016101000a81548160ff021916908360058111156136bf57fe5b021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816002015560a0820151816003015560c082015181600401555050039050336006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060028111156137d457fe5b8a60028111156137e057fe5b1415613ab457600060058111156137f357fe5b8960058111156137ff57fe5b141561387357600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aaf565b6001600581111561388057fe5b89600581111561388c57fe5b141561390057600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aae565b6003600581111561390d57fe5b89600581111561391957fe5b141561398d57600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aad565b6004600581111561399a57fe5b8960058111156139a657fe5b1415613a1a57600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aac565b600580811115613a2657fe5b896005811115613a3257fe5b1415613aa657600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613aab565b600080fd5b5b5b5b5b613cb4565b60016002811115613ac157fe5b8a6002811115613acd57fe5b1415613b6a5760026005811115613ae057fe5b896005811115613aec57fe5b1415613b6057600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613b65565b600080fd5b613cb3565b600280811115613b7657fe5b8a6002811115613b8257fe5b1415613cad5760036005811115613b9557fe5b896005811115613ba157fe5b1415613c1557600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613ca8565b60046005811115613c2257fe5b896005811115613c2e57fe5b1415613ca257601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091505550613ca7565b600080fd5b5b613cb2565b600080fd5b5b5b7f648ea8614c7f2c919bde3b01694291faae3d403522f45d971755f2ac0e2faa598133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a18092505050979650505050505050565b613d398282614300565b5050565b6000828211151515613d4e57600080fd5b600082840390508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515613e04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f6275726e2061646472657373212121000000000000000000000000000000000081525060200191505060405180910390fd5b613e5681601360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d3d90919063ffffffff16565b601360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550613eeb81601360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461423590919063ffffffff16565b601360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550613f8081601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461423590919063ffffffff16565b601260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600061403a333084613d5f565b60019050919050565b6000614071306000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684613d5f565b60019050919050565b6000614084614474565b60e0604051908101604052808a81526020018981526020018881526020018781526020018681526020018560ff168152602001841515815250905060006001808390806001815401808255809150509060018203906000526020600020906006020160009091929091909150600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908360ff16021790555060c08201518160050160016101000a81548160ff0219169083151502179055505050039050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fecc279af01ecc1616810552807a41a6dcbad8eb3a91a33626b2d35c9dfd5c2d58133604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a18092505050979650505050505050565b600080828401905083811015151561424c57600080fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561429357600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006142f7303384613d5f565b60019050919050565b614325816011600085815260200190815260200160002061437790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fd28f937e71e8a89ddbefb8937335b2ae03fb74ce63dd6a6f316724c5a7e6c3dc836040518082815260200191505060405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156143b357600080fd5b6143bd8282614256565b1515156143c957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b828054828255906000526020600020908101928215614463579160200282015b82811115614462578251825591602001919060010190614447565b5b5090506144709190614569565b5090565b60e0604051908101604052806000815260200160008152602001600081526020016000815260200160008152602001600060ff1681526020016000151581525090565b60a060405190810160405280600081526020016000815260200160008152602001600081526020016000151581525090565b60e0604051908101604052806000600281111561450257fe5b81526020016000600581111561451457fe5b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b61458b91905b8082111561458757600081600090555060010161456f565b5090565b9056fea165627a7a723058205f86b31ba194405af40f8740b77cdad244605ff101f17f47ad2d185c1e3b5f980029",
  "sourceMap": "63:171:4:-;;;183:5:2;162:26;;;;;;;;;;;;;;;;;;;;562:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;635:2;605:32;;;;;;;;;;;;;;;;;;;;644:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;116:115:4;8:9:-1;5:2;;;30:1;27;20:12;5:2;116:115:4;158:5;149:6;;:14;;;;;;;;;;;;;;;;;;203:10;184:16;;:29;;;;;;;;;;;;;;;;;;63:171;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "63:171:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3928:87:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3928:87:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3928:87:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1714:244;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1714:244:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1714:244:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;164:266:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;164:266:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;164:266:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;221:318:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;221:318:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;221:318:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2444:523;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2444:523:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2444:523:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2163:388:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2163:388:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2163:388:8;;;;;;;;;;;;;;;;;717:91:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;717:91:1;;;;;;;;;;;;;;;;;;;;;;;1846:142:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1846:142:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1846:142:10;;;;;;;;;;;;;;;;;691:728:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;691:728:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;691:728:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2113:299:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2113:299:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2113:299:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;580:1430:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;580:1430:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;580:1430:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4122:87:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4122:87:1;;;;;;;;;;;;;;;;;;;;;;;;;;;569:1402:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;569:1402:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;569:1402:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2488:146:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2488:146:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2488:146:10;;;;;;;;;;;;;;;;;2490:323:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2490:323:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2490:323:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;922:86:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;922:86:2;;;;;;698:852:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;698:852:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;698:852:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2719:134;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2719:134:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2719:134:10;;;;;;;;;;;;;;;;;162:26:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;162:26:2;;;;;;;;;;;;;;;;;;;;;;;;;;;2780:613:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2780:613:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2780:613:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;846:106:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;846:106:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;846:106:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2276:134:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2276:134:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2276:134:10;;;;;;;;;;;;;;;;;474:187:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;474:187:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;474:187:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;828:86:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;828:86:2;;;;;;990:120:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;990:120:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;990:120:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4023:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4023:91:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4023:91:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1118:411:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1118:411:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1118:411:9;;;;;;;;;;;;;;;;;2887:333:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2887:333:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2887:333:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2931:136:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2931:136:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2931:136:10;;;;;;;;;;;;;;;;;1435:140:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1435:140:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1435:140:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1628::10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1628:140:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1628:140:10;;;;;;;;;;;;;;;;;2066:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2066:132:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2066:132:10;;;;;;;;;;;;;;;;;88:31:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;88:31:2;;;;;;;;;;;;;;;;;;;;;;;;;;;1267:155:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1267:155:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1267:155:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1227:131:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1227:131:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1227:131:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1971:47:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1971:47:3;;;;;;;;;;;;;;;;;;;;;;;2012:424:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2012:424:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2012:424:5;;;;;;;;;;;;;;;;;1822:380:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1822:380:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1822:380:6;;;;;;;;;;;;;;;;;1459:323;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1459:323:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1459:323:6;;;;;;;;;;;;;;;;;108:963:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;108:963:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;108:963:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;346:280:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;346:280:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;346:280:2;;;;;;;;;;;;;;;;;;;;;;3928:87:1;3965:13;3998:9;3991:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3928:87;:::o;1714:244::-;1779:4;1823:1;1804:21;;:7;:21;;;;1796:30;;;;;;;;1871:5;1839:8;:20;1848:10;1839:20;;;;;;;;;;;;;;;:29;1860:7;1839:29;;;;;;;;;;;;;;;:37;;;;1913:7;1892:36;;1901:10;1892:36;;;1922:5;1892:36;;;;;;;;;;;;;;;;;;1946:4;1939:11;;1714:244;;;;:::o;164:266:6:-;297:4;267:9;568:10:7;535:43;;:18;:29;554:9;535:29;;;;;;;;;;;;;;;;;;;;;:43;;;527:52;;;;;;;;351:6:6;320:7;328:9;320:18;;;;;;;;;;;;;;;;;;;;:28;;:37;;;;396:4;368:7;376:9;368:18;;;;;;;;;;;;;;;;;;;;:25;;;:32;;;;;;;;;;;;;;;;;;418:4;411:11;;164:266;;;;;:::o;221:318:5:-;351:4;374:135;406:1;422:14;452:3;470:9;494:4;374:17;:135::i;:::-;;527:4;520:11;;221:318;;;;:::o;2444:523::-;2558:7;2580;2602;2624;2646:4;2700:11;2712:13;2700:26;;;;;;;;;;;;;;;;;;;;:40;;;2755:11;2767:13;2755:26;;;;;;;;;;;;;;;;;;;;:40;;;2810:11;2822:13;2810:26;;;;;;;;;;;;;;;;;;;;:36;;;2861:11;2873:13;2861:26;;;;;;;;;;;;;;;;;;;;:35;;;2911:11;2923:13;2911:26;;;;;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;2678:281;;;;;;;;;;2444:523;;;;;;;:::o;2163:388:8:-;2211:16;2240:27;2278:33;2314:29;:27;:29::i;:::-;2278:65;;2365:10;2354:8;:21;;;;;;;;;;;;:::i;:::-;;2390:6;2399:1;2390:10;;2386:132;2407:16;:23;2403:1;:27;2386:132;;;2453:8;2467;2476:16;2493:1;2476:19;;;;;;;;;;;;;;;;;;2467:29;;;;;;;;;;;;;;;;;;;;:38;;;2453:53;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2453:53:8;;;;;;;;;;;;;;;;;;;;;;2433:3;;;;;;;2386:132;;;;2535:8;2528:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2163:388;:::o;717:91:1:-;761:7;788:12;;781:19;;717:91;:::o;1846:142:10:-;1907:16;1943:25;:37;1969:10;1943:37;;;;;;;;;;;;;;;1936:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1846:142;:::o;691:728:6:-;745:4;762:26;;:::i;:::-;791:7;799:9;791:18;;;;;;;;;;;;;;;;;;;;762:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;820:13;836:12;:22;;;820:38;;902:19;924:46;933:18;:29;952:9;933:29;;;;;;;;;;;;;;;;;;;;;964:5;924:8;:46::i;:::-;902:68;;994:14;991:292;;;1025:246;1058:20;1098:18;1144:4;1169:10;1199:9;1228:5;1253:3;1025:14;:246::i;:::-;;991:292;1319:36;1333:9;1344:10;1319:13;:36::i;:::-;1407:4;1400:11;;;;;691:728;;;:::o;2113:299:1:-;2192:4;2238:37;2269:5;2238:8;:14;2247:4;2238:14;;;;;;;;;;;;;;;:26;2253:10;2238:26;;;;;;;;;;;;;;;;:30;;:37;;;;:::i;:::-;2209:8;:14;2218:4;2209:14;;;;;;;;;;;;;;;:26;2224:10;2209:26;;;;;;;;;;;;;;;:66;;;;2286:26;2296:4;2302:2;2306:5;2286:9;:26::i;:::-;2343:10;2328:54;;2337:4;2328:54;;;2355:8;:14;2364:4;2355:14;;;;;;;;;;;;;;;:26;2370:10;2355:26;;;;;;;;;;;;;;;;2328:54;;;;;;;;;;;;;;;;;;2400:4;2393:11;;2113:299;;;;;:::o;580:1430:8:-;769:4;827:16;910:13;2016:2:3;854:14:8;846:23;;:53;:78;827:97;;935:20;975:2;969:3;958:8;:14;;;;;;;;:19;935:42;;988:19;1021:12;1010:8;:23;988:45;;1080:14;1097:37;1125:8;1097:27;:37::i;:::-;1080:54;;1145:46;1179:11;1145:33;:46::i;:::-;;1207:9;1204:797;;;1266:19;1288:220;1320:12;1352:1;1373:13;1405:1;1425:10;1454:14;1488:5;1288:13;:220::i;:::-;1266:242;;1567:38;1581:11;1594:10;1567:13;:38::i;:::-;1656:263;1689:20;1729:22;1779:4;1804:10;1833:11;1863:12;1894:10;1656:14;:263::i;:::-;;1941:4;1934:11;;;;;;;;;1204:797;1984:5;1977:12;;;;;;580:1430;;;;;;:::o;4122:87:1:-;4163:5;4188:13;;;;;;;;;;;4181:20;;4122:87;:::o;569:1402:5:-;642:4;659:22;684;:37;707:13;684:37;;;;;;;;;;;;;;;;;;;;;659:62;;778:11;790:13;778:26;;;;;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;775:1189;;;881:11;893:13;881:26;;;;;;;;;;;;;;;;;;;;:35;;;875:3;:41;872:157;;;977:5;937:11;949:13;937:26;;;;;;;;;;;;;;;;;;;;:37;;;:45;;;;;;;;;;;;;;;;;;1008:5;1001:12;;;;;872:157;1080:14;1097:32;1106:14;1122:6;1097:8;:32::i;:::-;1080:49;;1147:9;1144:764;;;1268:6;1224:11;1236:13;1224:26;;;;;;;;;;;;;;;;;;;;:40;;;:50;;;;;;;;;;;1340:11;1352:13;1340:26;;;;;;;;;;;;;;;;;;;;:40;;;1296:11;1308:13;1296:26;;;;;;;;;;;;;;;;;;;;:40;;;:84;;1293:177;;;1445:5;1405:11;1417:13;1405:26;;;;;;;;;;;;;;;;;;;;:37;;;:45;;;;;;;;;;;;;;;;;;1293:177;1525:285;1562:24;1609:21;1653:14;1690:10;1723:13;1759:6;1788:3;1525:14;:285::i;:::-;;1836:4;1829:11;;;;;;1144:764;1887:5;1880:12;;;;;;775:1189;1947:5;1940:12;;;569:1402;;;;;:::o;2488:146:10:-;2551:16;2587:27;:39;2615:10;2587:39;;;;;;;;;;;;;;;2580:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2488:146;:::o;2490:323:1:-;2570:4;2614:1;2595:21;;:7;:21;;;;2587:30;;;;;;;;2662:45;2696:10;2662:8;:20;2671:10;2662:20;;;;;;;;;;;;;;;:29;2683:7;2662:29;;;;;;;;;;;;;;;;:33;;:45;;;;:::i;:::-;2630:8;:20;2639:10;2630:20;;;;;;;;;;;;;;;:29;2651:7;2630:29;;;;;;;;;;;;;;;:77;;;;2744:7;2723:60;;2732:10;2723:60;;;2753:8;:20;2762:10;2753:20;;;;;;;;;;;;;;;:29;2774:7;2753:29;;;;;;;;;;;;;;;;2723:60;;;;;;;;;;;;;;;;;;2801:4;2794:11;;2490:323;;;;:::o;922:86:2:-;255:16;;;;;;;;;;;241:30;;:10;:30;;;233:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;778:6;;;;;;;;;;;770:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;995:5;986:6;;:14;;;;;;;;;;;;;;;;;;922:86::o;698:852:10:-;846:13;909:14;966:7;1015;1067;1126;1172;802:10;1076::7;1041:45;;:19;:31;1061:10;1041:31;;;;;;;;;;;;;;;;;;;;;:45;;;1033:54;;;;;;;;1251:8:10;1260:10;1251:20;;;;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;1293:8;1302:10;1293:20;;;;;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;1336:8;1345:10;1336:20;;;;;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;1375:8;1384:10;1375:20;;;;;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;1415:8;1424:10;1415:20;;;;;;;;;;;;;;;;;;;;:29;;;1459:8;1468:10;1459:20;;;;;;;;;;;;;;;;;;;;:26;;;1501:8;1510:10;1501:20;;;;;;;;;;;;;;;;;;;;:30;;;1229:313;;;;;;;;;;;;;;698:852;;;;;;;;;;:::o;2719:134::-;2776:16;2812:21;:33;2834:10;2812:33;;;;;;;;;;;;;;;2805:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2719:134;:::o;162:26:2:-;;;;;;;;;;;;;:::o;2780:613:8:-;2894:7;2916;2938;2960;2982;3004:5;3024:4;3078:7;3086:9;3078:18;;;;;;;;;;;;;;;;;;;;:31;;;3124:7;3132:9;3124:18;;;;;;;;;;;;;;;;;;;;:28;;;3167:7;3175:9;3167:18;;;;;;;;;;;;;;;;;;;;:31;;;3213:7;3221:9;3213:18;;;;;;;;;;;;;;;;;;;;:31;;;3259:7;3267:9;3259:18;;;;;;;;;;;;;;;;;;;;:28;;;3302:7;3310:9;3302:18;;;;;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;3349:7;3357:9;3349:18;;;;;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;3056:329;;;;;;;;;;;;;;2780:613;;;;;;;;;:::o;846:106:1:-;901:7;928:9;:16;938:5;928:16;;;;;;;;;;;;;;;;921:23;;846:106;;;:::o;2276:134:10:-;2333:16;2369:21;:33;2391:10;2369:33;;;;;;;;;;;;;;;2362:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2276:134;:::o;474:187:6:-;537:4;585:1;554:7;562:9;554:18;;;;;;;;;;;;;;;;;;;;:28;;:32;;;;625:5;597:7;605:9;597:18;;;;;;;;;;;;;;;;;;;;:25;;;:33;;;;;;;;;;;;;;;;;;648:4;641:11;;474:187;;;:::o;828:86:2:-;255:16;;;;;;;;;;;241:30;;:10;:30;;;233:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;683:6;;;;;;;;;;;682:7;674:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;902:4;893:6;;:13;;;;;;;;;;;;;;;;;;828:86::o;990:120:1:-;1052:7;1079:16;:23;1096:5;1079:23;;;;;;;;;;;;;;;;1072:30;;990:120;;;:::o;4023:91::-;4062:13;4095:11;4088:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4023:91;:::o;1118:411:9:-;1167:16;1196:27;1234:33;1270:30;:28;:30::i;:::-;1234:66;;1322:10;1311:8;:21;;;;;;;;;;;;:::i;:::-;;1347:6;1356:1;1347:10;;1343:153;1364:25;:37;1390:10;1364:37;;;;;;;;;;;;;;;:44;;;;1360:1;:48;1343:153;;;1431:8;1445;1454:16;1471:1;1454:19;;;;;;;;;;;;;;;;;;1445:29;;;;;;;;;;;;;;;;;;;;:38;;;1431:53;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1431:53:9;;;;;;;;;;;;;;;;;;;;;;1411:3;;;;;;;1343:153;;;;1513:8;1506:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1118:411;:::o;2887:333:1:-;2972:4;3016:1;2997:21;;:7;:21;;;;2989:30;;;;;;;;3064:50;3098:15;3064:8;:20;3073:10;3064:20;;;;;;;;;;;;;;;:29;3085:7;3064:29;;;;;;;;;;;;;;;;:33;;:50;;;;:::i;:::-;3032:8;:20;3041:10;3032:20;;;;;;;;;;;;;;;:29;3053:7;3032:29;;;;;;;;;;;;;;;:82;;;;3151:7;3130:60;;3139:10;3130:60;;;3160:8;:20;3169:10;3160:20;;;;;;;;;;;;;;;:29;3181:7;3160:29;;;;;;;;;;;;;;;;3130:60;;;;;;;;;;;;;;;;;;3208:4;3201:11;;2887:333;;;;:::o;2931:136:10:-;2989:16;3025:22;:34;3048:10;3025:34;;;;;;;;;;;;;;;3018:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2931:136;:::o;1435:140:1:-;1496:4;1513:32;1523:10;1535:2;1539:5;1513:9;:32::i;:::-;1563:4;1556:11;;1435:140;;;;:::o;1628::10:-;1688:16;1724:24;:36;1749:10;1724:36;;;;;;;;;;;;;;;1717:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1628:140;:::o;2066:132::-;2122:16;2158:20;:32;2179:10;2158:32;;;;;;;;;;;;;;;2151:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2066:132;:::o;88:31:2:-;;;;;;;;;;;;;:::o;1267:155:7:-;1350:4;1374:40;1405:8;1374:15;:26;1390:9;1374:26;;;;;;;;;;;:30;;:40;;;;:::i;:::-;1367:47;;1267:155;;;;:::o;1227:131:1:-;1299:7;1326:8;:15;1335:5;1326:15;;;;;;;;;;;;;;;:24;1342:7;1326:24;;;;;;;;;;;;;;;;1319:31;;1227:131;;;;:::o;1971:47:3:-;2016:2;1971:47;:::o;2012:424:5:-;2057:16;2099:27;2137:33;2173:32;:30;:32::i;:::-;2137:68;;2227:10;2216:8;:21;;;;;;;;;;;;:::i;:::-;;2252:6;2261:1;2252:10;;2248:155;2269:27;:39;2297:10;2269:39;;;;;;;;;;;;;;;:46;;;;2265:1;:50;2248:155;;;2338:8;2352;2361:16;2378:1;2361:19;;;;;;;;;;;;;;;;;;2352:29;;;;;;;;;;;;;;;;;;;;:38;;;2338:53;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2338:53:5;;;;;;;;;;;;;;;;;;;;;;2318:3;;;;;;;2248:155;;;;2420:8;2413:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2012:424;:::o;1822:380:6:-;1866:16;1895:27;1933:33;1969:25;:23;:25::i;:::-;1933:61;;2016:10;2005:8;:21;;;;;;;;;;;;:::i;:::-;;2041:6;2050:1;2041:10;;2037:132;2058:16;:23;2054:1;:27;2037:132;;;2104:8;2118;2127:16;2144:1;2127:19;;;;;;;;;;;;;;;;;;2118:29;;;;;;;;;;;;;;;;;;;;:38;;;2104:53;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2104:53:6;;;;;;;;;;;;;;;;;;;;;;2084:3;;;;;;;2037:132;;;;2186:8;2179:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1822:380;:::o;1459:323::-;1506:16;1535:27;1584:10;1573:8;:21;;;;;;;;;;;;:::i;:::-;;1611:6;1620:1;1611:10;;1607:142;1628:7;:14;;;;1624:1;:18;1607:142;;;1668:7;1676:1;1668:10;;;;;;;;;;;;;;;;;;;;:17;;;;;;;;;;;;1665:73;;;1706:8;1720:1;1706:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1706:16:6;;;;;;;;;;;;;;;;;;;;;;1665:73;1645:3;;;;;;;1607:142;;;;1766:8;1759:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1459:323;:::o;108:963:9:-;167:4;184:14;274:3;269:2;235:7;243:9;235:18;;;;;;;;;;;;;;;;;;;;:31;;;201:7;209:9;201:18;;;;;;;;;;;;;;;;;;;;:31;;;:65;;;;;;;;:70;:76;;;;;;;;184:93;;421:14;438:36;467:6;438:28;:36::i;:::-;421:53;;597:9;594:448;;;659:7;667:9;659:18;;;;;;;;;;;;;;;;;;;;:31;;;:33;;;;;;;;;;;;;740:246;773:20;812:23;854:10;891:4;915:9;943:6;968:3;740:14;:246::i;:::-;;594:448;;;1025:5;1018:12;;;;;;594:448;1059:4;1052:11;;;;108:963;;;;:::o;346:280:2:-;255:16;;;;;;;;;;;241:30;;:10;:30;;;233:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;554:1;522:34;;:20;:34;;;;514:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;598:20;579:16;;:39;;;;;;;;;;;;;;;;;;346:280;:::o;8478:759:3:-;8701:7;8726:29;;:::i;:::-;8758:236;;;;;;;;;8800:14;8758:236;;;;8845:14;8758:236;;;;8890:10;8758:236;;;;8931:9;8758:236;;;;8971:11;8758:236;;;;;8726:268;;9007:23;9065:1;9033:11;9050;9033:29;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;9033:29:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;9007:59;;9121:10;9079:22;:39;9102:15;9079:39;;;;;;;;;;;;:52;;;;;;;;;;;;;;;;;;9149:45;9166:15;9183:10;9149:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;9214:15;9207:22;;;;8478:759;;;;;;;:::o;5884:2331::-;6186:7;6211:23;;:::i;:::-;6237:255;;;;;;;;;6272:6;6237:255;;;;;;;;;;;;6305:7;6237:255;;;;;;;;;;;;6339:3;6237:255;;;;;;6369:5;6237:255;;;;;;6401:9;6237:255;;;;6437:6;6237:255;;;;6470:10;6237:255;;;6211:281;;6503:20;6552:1;6526:8;6540;6526:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;6526:23:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:27;6503:50;;6600:10;6564:19;:33;6584:12;6564:33;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;6663:20;6653:30;;;;;;;;:6;:30;;;;;;;;;6650:1471;;;6714:22;6703:33;;;;;;;;:7;:33;;;;;;;;;6700:694;;;6757:24;:36;6782:10;6757:36;;;;;;;;;;;;;;;6799:12;6757:55;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;6757:55:3;;;;;;;;;;;;;;;;;;;;;;6700:694;;;6847:23;6836:34;;;;;;;;:7;:34;;;;;;;;;6833:561;;;6891:25;:37;6917:10;6891:37;;;;;;;;;;;;;;;6934:12;6891:56;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;6891:56:3;;;;;;;;;;;;;;;;;;;;;;6833:561;;;6982:18;6971:29;;;;;;;;:7;:29;;;;;;;;;6968:426;;;7021:20;:32;7042:10;7021:32;;;;;;;;;;;;;;;7059:12;7021:51;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7021:51:3;;;;;;;;;;;;;;;;;;;;;;6968:426;;;7107:19;7096:30;;;;;;;;:7;:30;;;;;;;;;7093:301;;;7147:21;:33;7169:10;7147:33;;;;;;;;;;;;;;;7186:12;7147:52;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7147:52:3;;;;;;;;;;;;;;;;;;;;;;7093:301;;;7234:21;7223:32;;;;;;;;:7;:32;;;;;;;;;7220:174;;;7276:23;:35;7300:10;7276:35;;;;;;;;;;;;;;;7317:12;7276:54;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7276:54:3;;;;;;;;;;;;;;;;;;;;;;7220:174;;;7370:8;;;7220:174;7093:301;6968:426;6833:561;6700:694;6650:1471;;;7459:24;7449:34;;;;;;;;:6;:34;;;;;;;;;7446:675;;;7513:21;7502:32;;;;;;;;:7;:32;;;;;;;;;7499:178;;;7555:27;:39;7583:10;7555:39;;;;;;;;;;;;;;;7600:12;7555:58;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7555:58:3;;;;;;;;;;;;;;;;;;;;;;7499:178;;;7653:8;;;7499:178;7446:675;;;7735:21;7725:31;;;;;;;;:6;:31;;;;;;;;;7722:399;;;7787:18;7776:29;;;;;;;;:7;:29;;;;;;;;;7773:297;;;7826:21;:33;7848:10;7826:33;;;;;;;;;;;;;;;7865:12;7826:52;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7826:52:3;;;;;;;;;;;;;;;;;;;;;;7773:297;;;7913:19;7902:30;;;;;;;;:7;:30;;;;;;;;;7899:171;;;7953:22;:34;7976:10;7953:34;;;;;;;;;;;;;;;7993:12;7953:53;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;7953:53:3;;;;;;;;;;;;;;;;;;;;;;7899:171;;;8046:8;;;7899:171;7773:297;7722:399;;;8101:8;;;7722:399;7446:675;6650:1471;8138:39;8152:12;8166:10;8138:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;8195:12;8188:19;;;;5884:2331;;;;;;;;;:::o;1430:123:7:-;1510:35;1525:9;1536:8;1510:14;:35::i;:::-;1430:123;;:::o;1205:145:12:-;1263:7;1295:1;1290;:6;;1282:15;;;;;;;;1307:9;1323:1;1319;:5;1307:17;;1342:1;1335:8;;;1205:145;;;;:::o;3570:348:1:-;3672:1;3658:16;;:2;:16;;;;3650:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3723:26;3743:5;3723:9;:15;3733:4;3723:15;;;;;;;;;;;;;;;;:19;;:26;;;;:::i;:::-;3705:9;:15;3715:4;3705:15;;;;;;;;;;;;;;;:44;;;;3776:24;3794:5;3776:9;:13;3786:2;3776:13;;;;;;;;;;;;;;;;:17;;:24;;;;:::i;:::-;3760:9;:13;3770:2;3760:13;;;;;;;;;;;;;;;:40;;;;3836:33;3863:5;3836:16;:22;3853:4;3836:22;;;;;;;;;;;;;;;;:26;;:33;;;;:::i;:::-;3811:16;:22;3828:4;3811:22;;;;;;;;;;;;;;;:58;;;;3900:2;3885:25;;3894:4;3885:25;;;3904:5;3885:25;;;;;;;;;;;;;;;;;;3570:348;;;:::o;3151:162:10:-;3222:4;3239:44;3249:10;3269:4;3276:6;3239:9;:44::i;:::-;3301:4;3294:11;;3151:162;;;:::o;3351:174::-;3428:4;3445:50;3463:4;3470:16;;;;;;;;;;;3488:6;3445:9;:50::i;:::-;3513:4;3506:11;;3351:174;;;:::o;4326:920:3:-;4635:7;4660:21;;:::i;:::-;4684:351;;;;;;;;;4722:13;4684:351;;;;4766:10;4684:351;;;;4807:13;4684:351;;;;4851:13;4684:351;;;;4895:10;4684:351;;;;4936:14;4684:351;;;;;;4981:7;4684:351;;;;;4660:375;;5048:19;5094:1;5070:7;5083;5070:21;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5070:21:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:25;5048:47;;5142:10;5108:18;:31;5127:11;5108:31;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;5170:37;5183:11;5196:10;5170:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;5227:11;5220:18;;;;4326:920;;;;;;;;;:::o;1431:145:12:-;1489:7;1508:9;1524:1;1520;:5;1508:17;;1548:1;1543;:6;;1535:15;;;;;;;;1568:1;1561:8;;;1431:145;;;;:::o;786:162:11:-;858:4;901:1;882:21;;:7;:21;;;;874:30;;;;;;;;921:4;:11;;:20;933:7;921:20;;;;;;;;;;;;;;;;;;;;;;;;;914:27;;786:162;;;;:::o;3559:163:10:-;3631:4;3648:44;3666:4;3673:10;3685:6;3648:9;:44::i;:::-;3710:4;3703:11;;3559:163;;;:::o;1700:176:7:-;1781:40;1812:8;1781:15;:26;1797:9;1781:26;;;;;;;;;;;:30;;:40;;;;:::i;:::-;1859:8;1837:31;;;1848:9;1837:31;;;;;;;;;;;;;;;;;;1700:176;;:::o;259:181:11:-;354:1;335:21;;:7;:21;;;;327:30;;;;;;;;376:18;380:4;386:7;376:3;:18::i;:::-;375:19;367:28;;;;;;;;429:4;406;:11;;:20;418:7;406:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;259:181;;:::o;63:171:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\r\n\r\nimport \"./SurveyFoundation.sol\";\r\n\r\ncontract SurveyCore is SurveyFoundation {\r\n    \r\n    constructor () public {\r\n        paused = false;\r\n        \r\n        developerAddress = msg.sender;\r\n        \r\n    }\r\n}",
  "sourcePath": "/mnt/c/workspace/inosurvey-ethereum/contracts/SurveyCore.sol",
  "ast": {
    "absolutePath": "/mnt/c/workspace/inosurvey-ethereum/contracts/SurveyCore.sol",
    "exportedSymbols": {
      "SurveyCore": [
        1070
      ]
    },
    "id": 1071,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1053,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:4"
      },
      {
        "absolutePath": "/mnt/c/workspace/inosurvey-ethereum/contracts/SurveyFoundation.sol",
        "file": "./SurveyFoundation.sol",
        "id": 1054,
        "nodeType": "ImportDirective",
        "scope": 1071,
        "sourceUnit": 1291,
        "src": "27:32:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1055,
              "name": "SurveyFoundation",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1290,
              "src": "86:16:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SurveyFoundation_$1290",
                "typeString": "contract SurveyFoundation"
              }
            },
            "id": 1056,
            "nodeType": "InheritanceSpecifier",
            "src": "86:16:4"
          }
        ],
        "contractDependencies": [
          465,
          549,
          1051,
          1290,
          1498,
          1681,
          1880,
          1997,
          2222,
          2513
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1070,
        "linearizedBaseContracts": [
          1070,
          1290,
          1498,
          1997,
          1880,
          2222,
          465,
          2513,
          1681,
          1051,
          549
        ],
        "name": "SurveyCore",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1068,
              "nodeType": "Block",
              "src": "138:93:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1061,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1059,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 472,
                      "src": "149:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 1060,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "158:5:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "149:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1062,
                  "nodeType": "ExpressionStatement",
                  "src": "149:14:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1063,
                      "name": "developerAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 469,
                      "src": "184:16:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1064,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2528,
                        "src": "203:3:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "203:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "184:29:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1067,
                  "nodeType": "ExpressionStatement",
                  "src": "184:29:4"
                }
              ]
            },
            "documentation": null,
            "id": 1069,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "128:2:4"
            },
            "returnParameters": {
              "id": 1058,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "138:0:4"
            },
            "scope": 1070,
            "src": "116:115:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1071,
        "src": "63:171:4"
      }
    ],
    "src": "0:234:4"
  },
  "legacyAST": {
    "absolutePath": "/mnt/c/workspace/inosurvey-ethereum/contracts/SurveyCore.sol",
    "exportedSymbols": {
      "SurveyCore": [
        1070
      ]
    },
    "id": 1071,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1053,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:4"
      },
      {
        "absolutePath": "/mnt/c/workspace/inosurvey-ethereum/contracts/SurveyFoundation.sol",
        "file": "./SurveyFoundation.sol",
        "id": 1054,
        "nodeType": "ImportDirective",
        "scope": 1071,
        "sourceUnit": 1291,
        "src": "27:32:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1055,
              "name": "SurveyFoundation",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1290,
              "src": "86:16:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SurveyFoundation_$1290",
                "typeString": "contract SurveyFoundation"
              }
            },
            "id": 1056,
            "nodeType": "InheritanceSpecifier",
            "src": "86:16:4"
          }
        ],
        "contractDependencies": [
          465,
          549,
          1051,
          1290,
          1498,
          1681,
          1880,
          1997,
          2222,
          2513
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1070,
        "linearizedBaseContracts": [
          1070,
          1290,
          1498,
          1997,
          1880,
          2222,
          465,
          2513,
          1681,
          1051,
          549
        ],
        "name": "SurveyCore",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1068,
              "nodeType": "Block",
              "src": "138:93:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1061,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1059,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 472,
                      "src": "149:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 1060,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "158:5:4",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "149:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1062,
                  "nodeType": "ExpressionStatement",
                  "src": "149:14:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1063,
                      "name": "developerAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 469,
                      "src": "184:16:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1064,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2528,
                        "src": "203:3:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "203:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "184:29:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1067,
                  "nodeType": "ExpressionStatement",
                  "src": "184:29:4"
                }
              ]
            },
            "documentation": null,
            "id": 1069,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "128:2:4"
            },
            "returnParameters": {
              "id": 1058,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "138:0:4"
            },
            "scope": 1070,
            "src": "116:115:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1071,
        "src": "63:171:4"
      }
    ],
    "src": "0:234:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x3Ebf1B14A27E5b00941d0A1fc2adA38E201cFCfa",
      "transactionHash": "0xa1d6369877b87447a06f4744a9f868efa10e3537ddadc97bb3e4eeee668cb27f"
    }
  },
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-04-12T02:23:27.597Z",
  "devdoc": {
    "methods": {
      "getFoundationDonateReceiptList()": {
        "details": "내가 기부한 기부 영수증의 Index List 반환 "
      },
      "getProductBuyReceiptList()": {
        "details": "내가 구매한 상품 영수증의 상품 Index List 반환 "
      },
      "getProductSellReceiptList()": {
        "details": "내가 판매한 상품 영수증의 Index List 반환 "
      },
      "getReceiptDetail(uint256)": {
        "details": "Index에 해당하는 영수증 상세정보 반환\r",
        "params": {
          "_receiptId": "영수증 IndexId\r"
        },
        "return": "ReceiptTitle uint256 enum 인덱스 반환. 설문인지, 상품인지\rReceiptMethod uint256 enum 인덱스 반환, 요청, 구매 등..\rto address 누구에게\rfrom address 누구로부터\robjectId uint256 어떤 오브젝트를?\rtotal uint256 총 금액\rdate uint256 생성 날짜\r"
      },
      "getSurveyBuyReceiptList()": {
        "details": "내가 구매한 설문 영수증의 Index List 반환 "
      },
      "getSurveyRequestDetail(uint256)": {
        "details": "설문 조사 상세 정보 반환\r",
        "params": {
          "_surveyId": "블록체인 Sotrage에 저장된 설문 조사 인덱스\r"
        },
        "return": "A uint256 등록 설문 리스트의 DB primary key 반환 \r"
      },
      "getSurveyRequestList()": {
        "details": "내가 등록한 설문 리스트 반환\r",
        "return": "A uint256[] 등록 설문 리스트의 DB primary key 반환 \r"
      },
      "getSurveyRequestReceiptList()": {
        "details": "내가 요청한 설문 영수증의 Index List 반환 "
      },
      "getSurveyResponseReceiptList()": {
        "details": "내가 응답한 설문 영수증의 Index List 반환 "
      },
      "getSurveySellReceiptList()": {
        "details": "내가 판매한 설문 영수증의 Index List 반환 "
      },
      "requestSurvey(uint256,uint256,uint8)": {
        "details": "create Survey(public)\r _CreateProduct() 실행함\r 설문 가격 계산 후 해당 금액 만큼의 토큰 전송을 시도\r 성공 시 스토리지에 등록\r 실패 시 false 리턴 \r",
        "params": {
          "_createdAt": "설문 질문 개수.\r",
          "_maximumCount": "설문 최대 응답 가능 인원 수.\r",
          "_questionCount": "설문 질문 개수.\r"
        },
        "return": "A bool 성공 여부 반환 \r"
      }
    }
  },
  "userdoc": {
    "methods": {
      "allowance(address,address)": {
        "notice": "토큰 소유자가 토큰 수신자에게 인출을 허락한 토큰이 얼마인지를 반환"
      },
      "approve(address,uint256)": {
        "notice": "송신자가 보유한 토큰에서 일정 금액 만큼의 토큰을 인출할 수 있는 권한을 수신자에게 부여"
      },
      "balanceOf(address)": {
        "notice": "토큰 소유 갯수"
      },
      "consumeBalanceOf(address)": {
        "notice": "토큰 소유 갯수"
      },
      "decreaseAllowance(address,uint256)": {
        "notice": "허가된 송신 금액중 원하는 금액만큼 감소"
      },
      "increaseAllowance(address,uint256)": {
        "notice": "허가된 송신 금액중 원하는 금액만큼 추가"
      },
      "isSurveyToBuyer(uint256,address)": {
        "notice": "*  SURVEY ROLE **"
      },
      "totalSupply()": {
        "notice": "토큰 총 발행량"
      },
      "transfer(address,uint256)": {
        "notice": "송신자 계정에서 수신자 계정에게 토큰 송신"
      },
      "transferFrom(address,address,uint256)": {
        "notice": "송신자 account에서 해당 금액 만큼의 토큰을 인출해서 수신자 어카운트로 해당 금액 만큼의 토큰을 송신"
      }
    }
  }
}