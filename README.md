# Etherwave

## Basic Idea

An app to book concert tickets via ethereum and also allow users to trade their tickets if they want
Link to demo: <a>https://docs.google.com/presentation/d/e/2PACX-1vT0gtjLemxmaykeEv3nIXJjBN0PB8wuFJ-AbzqdbuEhUxrJlp4CKo4MT5fJUhSfJUh2QClkOaPnUxBB/pub?start=false&loop=false&delayms=3000#slide=id.g3aebf1166c_0_64</a>

## Setup
Open repo in terminal
To install all npm dependencies:
Enter command: `npm install`

For creation of contracts:
Enter Command: `truffle migrate`

To run the app locally:
Enter Command: `npm start`

Main Packages used are: 
<br>express - for serving the app
<br>openzeppelin-solidity - to add blockchain functionality
<br>truffle - framework to interact with blockchain 
<br>web3 - integrate blockchain with UI

# ERC721 

ERC721, also known as NFTs (Non-fungible token) are tokens where each one is unique. These individual tokens often come with metadata(in our case location,date and price of event). They're indivisible unlike fungible tokens

# Usage

The Tickets for every event stored in a blockchain are all ERC721(Non-Fungible) tokens
The user can buy them for an event and in case the user is not able to attend the event
he/she can sell it to other users for price equal or more than original 

OpenZeppelin Module has been utililsed for operations in Blockchain like: 
<br>-Creation of Events
<br>-Listing of Events
<br>-Creation of Tickets
<br>-Purchasing of Tickets
<br>-Selling of Tickets
<br>-Listing the Tickets owned by a particular User address
