# Etherwave ![logo](https://lh3.googleusercontent.com/6vBh-jeSCmoxbcL9Ntgc6zkwoE2qieU7dT8DIfMWs4jgQ6TecCujMGdrY8HIZ-gztc1jeovPSQp6YHA2lVSe=w1920-h908)

Project built for **Smackathon - _Decentralize the music industry_**

## Idea

An app to book concert tickets via ethereum and also allow users to trade their tickets among themselves.

>Etherwave is an authentic adaptation of Lev Termen's original design for the Theremin and also a cool project name for a hackathon adding _music_ on _ethereum blockchain_. 

### The user own the ticket

* The users have easy access to their tokens through Etherwave app
* They are free to transfer in any ERC721 exchange
* They can be easily verified by anyone through the QR Code and comparing to the information registered in the blockchain

### No more endless lines!
* No paperwork needed
* Just needs one time verification
* Any trade can be done in a safe way
* No more **gatecrasher**

## Watch the Demo:
[Google presentation - with video](https://docs.google.com/presentation/d/e/2PACX-1vT0gtjLemxmaykeEv3nIXJjBN0PB8wuFJ-AbzqdbuEhUxrJlp4CKo4MT5fJUhSfJUh2QClkOaPnUxBB/pub?start=false&loop=false&delayms=3000#slide=id.g3aebf1166c_0_64</a>)

## Setup
1) Git clone and cd repo:
```
git clone https://github.com/ItachiUchiha1998/etherwave.git
cd etherwave
```
2) Install all npm dependencies:
```
npm install
```
3) Deploy contracts with ganache-cli:
```
ganache-cli
```
4) Open a new terminal. Migrate contracts with truffle
```
truffle migrate
```
5) Run the app locally:
```
npm start
```

## Main Packages
* **express** - for serving the app
* **openzeppelin-solidity** - to add blockchain functionality
* **truffle** - framework to interact with blockchain 
* **web3** - integrate blockchain with UI

# ERC721 

ERC721, also known as NFTs (Non-fungible token) are tokens where each one is unique. These individual tokens can come with metadata, which would be a link for their IPFS json file. In this project we have added events' info to the blockchain such as location, date and price of event. They're indivisible unlike fungible tokens.

## Usage

The Tickets for every event stored in a blockchain are all ERC721(Non-Fungible) tokens
The user can buy them for an event and in case the user is not able to attend the event, he/she can sell it to other users for price equal or more than original.

# OpenZeppelin 
OpenZeppelin Module was utilized for operations in the Ethereum Blockchain:
* Creation of Events
* Listing of Events
* Creation of Tickets
* Purchasing of Tickets
* Selling of Tickets
* Listing the Tickets owned by a particular User address
* _future feat:_ Transfering tokens through a waiting list

# Team

Reach us out if you liked it!
* [Paula Mannes - Github](https://github.com/paulamannes)
* [Vinayak Shrivastava - Github](https://github.com/ItachiUchiha1998)
