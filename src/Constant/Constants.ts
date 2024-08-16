import { IDropdownItem } from "../Components/main";

export interface IQuestion {
  id: number;
  question: string;
  img?: string;
  options: IOption[];
  answer: number;
  attemptQuestion?: boolean;
}

export interface IOption {
  id: number;
  text: string;
}

export const Questions: IQuestion[] = [
  {
    id: 1,
    question: "What is the main purpose of Ethereum?",
    options: [
      { id: 1, text: "To create a decentralized internet" },
      { id: 2, text: "To provide a platform for smart contracts" },
      { id: 3, text: "To facilitate cross-border payments" },
      { id: 4, text: "To create digital collectibles" },
    ],
    answer: 2,
  },
  {
    id: 2,
    question: "Who is the founder of Ethereum?",
    options: [
      { id: 1, text: "Vitalik Buterin" },
      { id: 2, text: "Gavin Wood" },
      { id: 3, text: "Charles Hoskinson" },
      { id: 4, text: "Joseph Lubin" },
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "What is Ethereum's native cryptocurrency called?",
    options: [
      { id: 1, text: "Ether" },
      { id: 2, text: "Ethereum Coin" },
      { id: 3, text: "ETH" },
      { id: 4, text: "E-Currency" },
    ],
    answer: 1,
  },
  {
    id: 4,
    question:
      "What programming language is primarily used for writing Ethereum smart contracts?",
    options: [
      { id: 1, text: "JavaScript" },
      { id: 2, text: "Python" },
      { id: 3, text: "Solidity" },
      { id: 4, text: "Rust" },
    ],
    answer: 3,
  },
  {
    id: 5,
    question: "What is the purpose of Ethereum's virtual machine (EVM)?",
    options: [
      { id: 1, text: "To execute smart contracts" },
      { id: 2, text: "To mine Ether" },
      { id: 3, text: "To validate transactions" },
      { id: 4, text: "To secure the blockchain" },
    ],
    answer: 1,
  },
  {
    id: 6,
    question: "What is the Ethereum consensus algorithm called?",
    options: [
      { id: 1, text: "Proof of Work" },
      { id: 2, text: "Proof of Stake" },
      { id: 3, text: "Proof of Authority" },
      { id: 4, text: "Delegated Proof of Stake" },
    ],
    answer: 2,
  },
  {
    id: 7,
    question: "Which Ethereum upgrade introduced smart contract functionality?",
    options: [
      { id: 1, text: "Frontier" },
      { id: 2, text: "Homestead" },
      { id: 3, text: "Metropolis" },
      { id: 4, text: "Constantinople" },
    ],
    answer: 2,
  },
  {
    id: 8,
    question: "What does ERC stand for in ERC-20 tokens?",
    options: [
      { id: 1, text: "Ethereum Request for Comments" },
      { id: 2, text: "Ethereum Resource Contract" },
      { id: 3, text: "Ether Request Contract" },
      { id: 4, text: "External Request Contract" },
    ],
    answer: 1,
  },
  {
    id: 9,
    question: "What is a gas fee in the context of Ethereum transactions?",
    options: [
      { id: 1, text: "A fee paid for transaction verification" },
      { id: 2, text: "A fee for minting tokens" },
      { id: 3, text: "A fee for using decentralized apps" },
      { id: 4, text: "A fee for deploying smart contracts" },
    ],
    answer: 1,
  },
  {
    id: 10,
    question: "Which of the following is an Ethereum scaling solution?",
    options: [
      { id: 1, text: "Layer 1" },
      { id: 2, text: "Layer 2" },
      { id: 3, text: "Layer 3" },
      { id: 4, text: "Layer 4" },
    ],
    answer: 2,
  },
  {
    id: 11,
    question: "What does the term 'decentralized application' (dApp) mean?",
    options: [
      { id: 1, text: "A centralized app built on Ethereum" },
      { id: 2, text: "A peer-to-peer application on Ethereum" },
      { id: 3, text: "A traditional app with a blockchain backend" },
      { id: 4, text: "An application that uses cloud computing" },
    ],
    answer: 2,
  },
  {
    id: 12,
    question: "What is the function of a smart contract in Ethereum?",
    options: [
      { id: 1, text: "To facilitate automatic execution of contract terms" },
      { id: 2, text: "To manage Ether transactions" },
      { id: 3, text: "To store private keys securely" },
      { id: 4, text: "To provide a decentralized database" },
    ],
    answer: 1,
  },
  {
    id: 13,
    question:
      "What was the main reason for the Ethereum Classic split from Ethereum?",
    options: [
      { id: 1, text: "Disagreement over network upgrades" },
      { id: 2, text: "Dispute over the DAO hack and its resolution" },
      { id: 3, text: "Difference in mining algorithms" },
      { id: 4, text: "Concerns about gas fees" },
    ],
    answer: 2,
  },
  {
    id: 14,
    question: "What does 'staking' mean in the context of Ethereum 2.0?",
    options: [
      { id: 1, text: "Providing liquidity to decentralized exchanges" },
      { id: 2, text: "Locking up ETH to help secure the network" },
      { id: 3, text: "Participating in Ethereum mining" },
      { id: 4, text: "Trading ETH for other cryptocurrencies" },
    ],
    answer: 2,
  },
  {
    id: 15,
    question: "Which upgrade is Ethereum currently transitioning to?",
    options: [
      { id: 1, text: "Ethereum 1.0" },
      { id: 2, text: "Ethereum 2.0" },
      { id: 3, text: "Ethereum Classic" },
      { id: 4, text: "Ethereum Metropolis" },
    ],
    answer: 2,
  },
  {
    id: 16,
    question: "What does the term 'smart contract' refer to in Ethereum?",
    options: [
      { id: 1, text: "A contract that is executed manually" },
      { id: 2, text: "A contract executed by a digital signature" },
      { id: 3, text: "A contract written in code and executed by the EVM" },
      { id: 4, text: "A legal agreement stored on the blockchain" },
    ],
    answer: 3,
  },
  {
    id: 17,
    question: "What is a DAO in the context of Ethereum?",
    options: [
      { id: 1, text: "A decentralized autonomous organization" },
      { id: 2, text: "A decentralized application" },
      { id: 3, text: "A decentralized asset offering" },
      { id: 4, text: "A decentralized authentication system" },
    ],
    answer: 1,
  },
  {
    id: 18,
    question: "Which Ethereum upgrade is focused on improving scalability?",
    options: [
      { id: 1, text: "Frontier" },
      { id: 2, text: "Homestead" },
      { id: 3, text: "Metropolis" },
      { id: 4, text: "Serenity" },
    ],
    answer: 4,
  },
  {
    id: 19,
    question: "What is the primary purpose of 'gas' in Ethereum transactions?",
    options: [
      { id: 1, text: "To pay for transaction fees" },
      { id: 2, text: "To reward miners" },
      { id: 3, text: "To facilitate smart contract execution" },
      { id: 4, text: "To manage network congestion" },
    ],
    answer: 3,
  },
  {
    id: 20,
    question: "Which cryptographic algorithm is used in Ethereum for hashing?",
    options: [
      { id: 1, text: "SHA-256" },
      { id: 2, text: "Keccak-256" },
      { id: 3, text: "RIPEMD-160" },
      { id: 4, text: "Blake2b" },
    ],
    answer: 2,
  },
  {
    id: 21,
    question: "What is the main purpose of Ethereum's ‘gas’?",
    options: [
      { id: 1, text: "To reward miners" },
      { id: 2, text: "To pay for computational operations" },
      { id: 3, text: "To secure the network" },
      { id: 4, text: "To manage transactions" },
    ],
    answer: 2,
  },
  {
    id: 22,
    question: "What is an ERC-20 token?",
    options: [
      {
        id: 1,
        text: "A token standard for creating fungible tokens on Ethereum",
      },
      { id: 2, text: "A token used for gas payments" },
      { id: 3, text: "A token for decentralized storage" },
      { id: 4, text: "A token for non-fungible assets" },
    ],
    answer: 1,
  },
  {
    id: 23,
    question:
      "What is Ethereum’s scaling solution involving off-chain transactions?",
    options: [
      { id: 1, text: "Plasma" },
      { id: 2, text: "Sharding" },
      { id: 3, text: "Rollups" },
      { id: 4, text: "Sidechains" },
    ],
    answer: 1,
  },
  {
    id: 24,
    question:
      "Which Ethereum upgrade aims to introduce Proof of Stake and sharding?",
    options: [
      { id: 1, text: "Constantinople" },
      { id: 2, text: "Istanbul" },
      { id: 3, text: "Serenity" },
      { id: 4, text: "Metropolis" },
    ],
    answer: 3,
  },
  {
    id: 25,
    question: "What is the main function of an Ethereum wallet?",
    options: [
      { id: 1, text: "To store Ether and manage private keys" },
      { id: 2, text: "To mine Ether" },
      { id: 3, text: "To execute smart contracts" },
      { id: 4, text: "To validate transactions" },
    ],
    answer: 1,
  },
  {
    id: 26,
    question: "What is the role of a miner in Ethereum?",
    options: [
      { id: 1, text: "To validate transactions and create new blocks" },
      { id: 2, text: "To create smart contracts" },
      { id: 3, text: "To maintain the Ethereum virtual machine" },
      { id: 4, text: "To provide liquidity to decentralized exchanges" },
    ],
    answer: 1,
  },
  {
    id: 27,
    question: "Which Ethereum update is known for introducing EIP-1559?",
    options: [
      { id: 1, text: "Istanbul" },
      { id: 2, text: "London" },
      { id: 3, text: "Constantinople" },
      { id: 4, text: "Serenity" },
    ],
    answer: 2,
  },
  {
    id: 28,
    question: "What does EIP-1559 introduce to the Ethereum fee market?",
    options: [
      { id: 1, text: "A fixed gas fee" },
      { id: 2, text: "A base fee that is burned" },
      { id: 3, text: "A reward for validators" },
      { id: 4, text: "A transaction fee cap" },
    ],
    answer: 2,
  },
  {
    id: 29,
    question: "What does BIP39 refer to in the context of cryptocurrency?",
    options: [
      { id: 1, text: "A standard for mnemonic phrases for wallet recovery" },
      { id: 2, text: "A protocol for decentralized exchanges" },
      { id: 3, text: "A method for scaling blockchain networks" },
      { id: 4, text: "A type of smart contract" },
    ],
    answer: 1,
  },
  {
    id: 30,
    question: "What does a public key in public-key cryptography represent?",
    options: [
      { id: 1, text: "A key used to xcrypt data" },
      { id: 2, text: "A key used to decrypt data" },
      { id: 3, text: "A key that is kept private" },
      { id: 4, text: "A key that can be shared publicly" },
    ],
    answer: 4,
  },
  {
    id: 31,
    question: "What is the function of the Ethereum Name Service (ENS)?",
    options: [
      { id: 1, text: "To provide human-readable names for Ethereum addresses" },
      { id: 2, text: "To manage smart contract deployments" },
      { id: 3, text: "To track Ether transactions" },
      { id: 4, text: "To facilitate token swaps" },
    ],
    answer: 1,
  },
  {
    id: 32,
    question: "What is a nonce in the context of Ethereum transactions?",
    options: [
      { id: 1, text: "A random number used to prevent replay attacks" },
      { id: 2, text: "A value used to calculate gas fees" },
      { id: 3, text: "A unique identifier for each transaction" },
      { id: 4, text: "A type of smart contract" },
    ],
    answer: 1,
  },
  {
    id: 33,
    question: "What does the term 'sharding' refer to in Ethereum?",
    options: [
      {
        id: 1,
        text: "Dividing the blockchain into smaller parts to improve scalability",
      },
      { id: 2, text: "A method for securing private keys" },
      { id: 3, text: "A technique for smart contract optimization" },
      { id: 4, text: "A type of consensus mechanism" },
    ],
    answer: 1,
  },
  {
    id: 34,
    question: "What does the term 'metamask' refer to?",
    options: [
      { id: 1, text: "A popular Ethereum wallet and browser extension" },
      { id: 2, text: "A type of Ethereum mining software" },
      { id: 3, text: "A protocol for decentralized exchanges" },
      { id: 4, text: "A type of smart contract framework" },
    ],
    answer: 1,
  },
  {
    id: 35,
    question: "What is a 'gas limit' in Ethereum transactions?",
    options: [
      { id: 1, text: "The maximum amount of gas a transaction can consume" },
      { id: 2, text: "The minimum gas required for a transaction" },
      { id: 3, text: "The maximum number of transactions per block" },
      { id: 4, text: "The limit on the number of smart contracts per block" },
    ],
    answer: 1,
  },
  {
    id: 36,
    question:
      "What is the purpose of the Ethereum smart contract function 'fallback()'?",
    options: [
      {
        id: 1,
        text: "To handle Ether transfers and calls to non-existent functions",
      },
      { id: 2, text: "To execute complex logic on contract initialization" },
      { id: 3, text: "To provide a default value for contract variables" },
      { id: 4, text: "To handle errors and exceptions in smart contracts" },
    ],
    answer: 1,
  },
  {
    id: 37,
    question: "What does EIP stand for in the Ethereum ecosystem?",
    options: [
      { id: 1, text: "Ethereum Improvement Proposal" },
      { id: 2, text: "Ethereum Implementation Protocol" },
      { id: 3, text: "Ethereum Initial Proposal" },
      { id: 4, text: "Ethereum Integration Plan" },
    ],
    answer: 1,
  },
  {
    id: 38,
    question: "What is the Ethereum Virtual Machine (EVM)?",
    options: [
      { id: 1, text: "A decentralized computer that runs smart contracts" },
      { id: 2, text: "A software for managing Ethereum nodes" },
      { id: 3, text: "A type of Ethereum blockchain explorer" },
      { id: 4, text: "A platform for issuing tokens" },
    ],
    answer: 1,
  },
  {
    id: 39,
    question: "What is a 'token swap'?",
    options: [
      { id: 1, text: "Exchanging one type of token for another" },
      { id: 2, text: "The process of minting new tokens" },
      { id: 3, text: "The transfer of tokens between different blockchains" },
      { id: 4, text: "The act of burning tokens to reduce supply" },
    ],
    answer: 1,
  },
  {
    id: 40,
    question: "What is the primary purpose of a smart contract on Ethereum?",
    options: [
      { id: 1, text: "To automatically execute and enforce contract terms" },
      {
        id: 2,
        text: "To provide a graphical user interface for blockchain applications",
      },
      { id: 3, text: "To manage network consensus" },
      { id: 4, text: "To store and track digital assets" },
    ],
    answer: 1,
  },
  {
    id: 41,
    question:
      "Which consensus mechanism is Ethereum transitioning to from Proof of Work?",
    options: [
      { id: 1, text: "Proof of Stake" },
      { id: 2, text: "Delegated Proof of Stake" },
      { id: 3, text: "Proof of Authority" },
      { id: 4, text: "Proof of Space" },
    ],
    answer: 1,
  },
  {
    id: 42,
    question: "What does a smart contract's 'modifier' do in Solidity?",
    options: [
      {
        id: 1,
        text: "It modifies the behavior of functions in a smart contract",
      },
      { id: 2, text: "It manages the gas cost of function execution" },
      { id: 3, text: "It handles external contract calls" },
      { id: 4, text: "It provides security for contract storage" },
    ],
    answer: 1,
  },
  {
    id: 43,
    question: "What does the term 'DAO' stand for in the context of Ethereum?",
    options: [
      { id: 1, text: "Decentralized Autonomous Organization" },
      { id: 2, text: "Distributed Application Operator" },
      { id: 3, text: "Dynamic Asset Operator" },
      { id: 4, text: "Digital Asset Organizer" },
    ],
    answer: 1,
  },
  {
    id: 44,
    question: "What is the role of a validator in Ethereum 2.0?",
    options: [
      {
        id: 1,
        text: "To propose and validate new blocks in a Proof of Stake network",
      },
      { id: 2, text: "To mine new Ether coins" },
      { id: 3, text: "To manage Ethereum smart contracts" },
      { id: 4, text: "To track and manage network transactions" },
    ],
    answer: 1,
  },
  {
    id: 45,
    question: "What does the term 'DeFi' stand for?",
    options: [
      { id: 1, text: "Decentralized Finance" },
      { id: 2, text: "Decentralized Futures" },
      { id: 3, text: "Distributed Finance" },
      { id: 4, text: "Digital Finance" },
    ],
    answer: 1,
  },
  {
    id: 46,
    question: "What is the purpose of the 'solidity' programming language?",
    options: [
      { id: 1, text: "To write smart contracts for the Ethereum blockchain" },
      { id: 2, text: "To develop decentralized applications" },
      { id: 3, text: "To manage Ethereum nodes" },
      { id: 4, text: "To analyze blockchain data" },
    ],
    answer: 1,
  },
  {
    id: 47,
    question:
      "What is the Ethereum improvement proposal (EIP) that introduced the concept of 'gas'? ",
    options: [
      { id: 1, text: "EIP-1" },
      { id: 2, text: "EIP-2" },
      { id: 3, text: "EIP-3" },
      { id: 4, text: "EIP-4" },
    ],
    answer: 1,
  },
  {
    id: 48,
    question: "What is the function of Ethereum's 'event' keyword in Solidity?",
    options: [
      { id: 1, text: "To log and emit data from smart contracts" },
      { id: 2, text: "To handle exceptions in smart contracts" },
      { id: 3, text: "To manage the storage of smart contracts" },
      { id: 4, text: "To optimize gas costs in contract execution" },
    ],
    answer: 1,
  },
  {
    id: 49,
    question: "What is an Ethereum ‘smart contract’?",
    options: [
      {
        id: 1,
        text: "A self-executing contract with the terms of the agreement directly written into code",
      },
      { id: 2, text: "A digital agreement stored on a centralized server" },
      { id: 3, text: "A traditional legal contract in digital form" },
      { id: 4, text: "A type of Ethereum token" },
    ],
    answer: 1,
  },
  {
    id: 50,
    question: "What does the term 'burning' refer to in Ethereum?",
    options: [
      {
        id: 1,
        text: "The process of permanently removing tokens from circulation",
      },
      { id: 2, text: "The act of creating new tokens" },
      { id: 3, text: "The method of increasing token supply" },
      { id: 4, text: "The transfer of tokens to a non-existent address" },
    ],
    answer: 1,
  },
];

export const DropdownList: IDropdownItem[] = [
  { value: 10, $isSelected: true, id: 1 },
  { value: 20, $isSelected: false, id: 2 },
  { value: 30, $isSelected: false, id: 3 },
  { value: 40, $isSelected: false, id: 4 },
];

export interface IEmoji {
  id: number;
  isSelected: boolean;
  color: string;
  supcolor: string;
}
// "#8B0000"
export const EmojiList: IEmoji[] = [
  {
    id: 0,
    isSelected: true,
    color: "#575a89",
    supcolor: "rgba(96, 102, 208, 0.7)",
  },
  {
    id: 1,
    isSelected: false,
    color: "#8B0000",
    supcolor: "hsla(0, 90%, 35%,0.7)",
  },
  {
    id: 2,
    isSelected: false,
    color: "#4B0082",
    supcolor: "hsla(275, 90%, 35%, 0.7)",
  },
  {
    id: 3,
    isSelected: false,
    color: "#00008b",
    supcolor: "hsla(240, 100%, 50%,0.7)",
  },
];

// export const AudioSounds
