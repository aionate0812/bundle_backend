# Bundle-Backend
![Bundle The Trip Readiness](https://lh3.googleusercontent.com/1KVsbCJ0Z6z7bUxsN6YgSwKtxI5adDgww0q2nP2Lf2i2Jc3Bzcz6mZ8Brpnf0x9yaH9eUPzX2vBD4CjNyZywyFeAssyvyahFW-elfycirHGFxAYVrWNbJAhrcqS9LYiglxg7c4kYJw=w1135-h709-no "Bundle Logo")
# [**Bundle**](http://bundle.tips)
### _A **mobile-first**, trip-readiness app_

 Bundle relieves packing worries by showing travel goers what to pack from one place. Given the destination and duration of a trip, Bundle will create a customizable packing list. Once items are confirmed for a trip, travel goers can start tracking their packing progress. Bundle also has handy features like creating last-minute todo lists and storing booking information so that travel goers never have to feel like they’ve forgotten something important.


| | Table of Contents 🗂|
|:-:|:--:|
|1|**[Getting Started](#getting-started)**|
|2|**[Prerequisites](#prerequisites)**|
|3|**[Usage and Installation](#usage-and-installation)**|
|4|**[Built With](#built-with-)**|
|5|**[Contributing](#contributing-)**|
|6|**[Authors](#authors-)**|
|7|**[Acknowledgments](#acknowledgments--)**|


### **Getting Started** 📄
___
#### Prerequisites
1. This project was created with Node.js and Express.

2. [Bundle Front-End](https://github.com/aionate0812/bundle_frontend) 

*  _**Minimum requirement**_**:**
    - `git clone https://github.com/aionate0812/bundle_frontend`
    - **MapQuest API Key**: `https://developer.mapquest.com/documentation/` 
    - **DarkSky API Key**: `https://darksky.net/dev`
    - **Postgres Database**: `https://postgresapp.com/` _we recommend Postgres.app_
    - **Firebase Authentication Config**: 
      * *Docs*: `https://firebase.google.com/docs/auth?authuser=0` 
      * *Console*: `https://console.firebase.google.com/project/_/authentication/users`

#### Usage and Installation
1. Clone this repo
2. In the root file create a file config.js and pase the following code
``` 
module.exports = {dba:"[DATABASE ADDRESS]",
DARKSKY_API_KEY:"[DARKSKY API KEY]"}

```
4. `npm install`

5. `npm start`

### **Deployment** ⛓
---
1. **We recommend Heroku:** Docs: `https://devcenter.heroku.com/articles/deploying-nodejs`


### **Built With** 🛠
___
|Libraries||||
|:--|:---:|:---:|---:| 
|**Node.js**|[Github](https://github.com/nodejs/node)| | [Web](https://nodejs.org/en/)|
|**Express**|[Github](https://github.com/expressjs/express)| [npm](https://www.npmjs.com/package/express)|[Web](https://expressjs.com/)|
|**axios**|[GitHub](https://github.com/axios/axios)| [npm](https://www.npmjs.com/package/axios)| |

### **Authors** 📚
---
| | | |
|:---| :---: | :---:| 
|🧙**Pam** | [GitHub](https://github.com/pamelaabreu) | [LinkedIn](https://www.linkedin.com/in/pamela-abreu/) |
|👩‍🚀**Rupa**| [GitHub](https://github.com/Rupa1216) | [LinkedIn](https://www.linkedin.com/in/sdatta87/)|
|👨‍🎤**Alex**| [GitHub](https://github.com/aionate0812) | [LinkedIn](https://www.linkedin.com/in/alexander-onate/)| 
|👨‍🚀**Robert**| [GitHub](https://github.com/FiveEightyEight) | [LinkedIn](https://www.linkedin.com/in/robert-abreu/)

### **Acknowledgments**  🤜🤛
---
 Special thanks to our tech mentor Josh & our instructors Mo & Taq.
* **Josh Goldberg**: [GitHub](https://github.com/JoshuaKGoldberg) 🐐
* **Mo Mosayed**: [GitHub](https://github.com/mmosayed)
* **Taq Karim**: [GitHub](https://github.com/mottaquikarim)


