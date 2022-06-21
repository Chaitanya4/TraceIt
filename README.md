# TraceIt

___

## Abstract
**TraceIt** aims to revolutionize **Supply Chain to provide better traceability and assurances of authenticity** using  Ethereum blockchain which provide transparent, secure data storage and transfer technology with no intermediary, which means each member can check the validity of the chain . Producers will post data online using forms, then that data will get stored inside QR code using web3 and metamask.  Producer will stick that Qr code to products ,consumers will be able to scan the Qr code and get all the details about product.


# How To Setup Our Application

## 1. Install Metamask

MetaMask
: An Ethereum Wallet in your Browser

**To connect your web3 js to the locally hosted truffle development we need metmask.**
You can download its Chrome Extension At [MetaMask Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).

Other Browser Users can find MetaMask Extension/AddOn On their respective browser stores.

After installing click on add new network and set  your new network to localhost:3000
And also Add the account key to the first account that is account[0] with the respective secret key.

>**Note:** Every time you start from fresh always remember to reset your metmask acount as your localhost starts from zero but the metmask always stores some cached data therefore it will thow error as the nonce would not match.


## 2. Running Blockchain
### Steps (in Terminal)
1. Go to the blockchain folder by entering `cd blockchain`
2. Enter `truffle complile` to compile the contracts
3. Enter `truffle develop`. It will start the development server.
4. Enter `migrate --reset` to migrate the contracts.
5. After you have entered the `truffle compile` command in 2nd step, a **build/contracts** folder will be generated inside the blockchain folder. Go to the project.json in the build folder and copy the `abis` array.
6. Now Go to client/Abis.js and paste the array in `Projectabis` variable and save it.

## 3. Running the Frontend

To run the frontend go to the client folder cd client , run `npm install` and type `npm start`
This will start a new development server at localhost:3000

## 4. To setup NODE.JS server
1. To run the backend go to the backend/src folder cd backend/src
2. Enter npm install in cmd to download all dependencies
3. `node index.js` to start the server


**Ping in case of any doubt**

### Project Screenshots
![Screenshot from 2022-06-21 18-17-21](https://user-images.githubusercontent.com/31300719/174810947-a48296cf-a9aa-4668-a115-ba9da76f3b29.png)

![Screenshot from 2022-06-21 18-29-34](https://user-images.githubusercontent.com/31300719/174810680-381fbae3-1d86-44c8-a28e-8a462ce7cda5.png)
![Screenshot from 2022-06-21 18-29-44](https://user-images.githubusercontent.com/31300719/174810734-34ad01f7-ec9b-4262-aa06-59a795b00e1e.png)
![Screenshot from 2022-06-21 18-16-18](https://user-images.githubusercontent.com/31300719/174810794-340eb0de-d2b4-4154-8cd7-e370a0f42289.png)
![Screenshot from 2022-06-21 18-16-33](https://user-images.githubusercontent.com/31300719/174810825-67b52b9c-84ae-4690-9d89-957f3d2879d9.png)
![Screenshot from 2022-06-21 18-16-39](https://user-images.githubusercontent.com/31300719/174810869-55b02b99-d60a-47bf-84d8-4eeaf8655427.png)
![Screenshot from 2022-06-21 18-17-12](https://user-images.githubusercontent.com/31300719/174810893-34054702-1141-4eef-8b01-996fd7c81182.png)


---

	This concept can further be applied to the whole consumer-producer market supply chain.

