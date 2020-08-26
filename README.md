<h1 align = "center">
   <img src="./logo.png" alt="Proffy" width="280"/>
</h1>

<h3 align = "center">
    👩‍🎓 Your platform to connect teachers and students! 🧑‍🎓
</h3>

<p align = "center">
  <img alt = "Yarn version" src = "https://img.shields.io/badge/yarn-v1.22.4-blue">
   
  <img alt = "Typescript version" src = "https://img.shields.io/badge/typescript-v3.9.5-blue">

  <img alt = "Versão" src = "https://img.shields.io/badge/version-1.0.0-red">
    
   <img alt = "License" src = "https://img.shields.io/badge/license-MIT-brightgreen">

  <a href="https://www.linkedin.com/in/ives-moreira-8871b318a/">
    <img alt = "feito por Ives Moreira" src = "https://img.shields.io/badge/made by-Ives Moreira-blueviolet">
  </a>
</p>

## About

📖 Proffy - it is a way to connect teachers who want to teach and students who need teachers.
Project developed during **NLW - Next Level Week #2** offered by [Rocketseat](https://rocketseat.com.br/). NLW is an online experience with lots of practical content, challenges and hacks where the content is available for a week.

---

## Features

- [x] Teachers can register on the web platform by sending:

  - [x] your name
  - [x] your profile picture
  - [x] whatsapp for contact
  - [x] A biography, telling you a little about yourself and your classes
  - [x] class that will teach
  - [x] cost of your hour per class
  - [x] your available days and times for classes

- [x] Students have access to the mobile application, where they can:
  - [x] filter teachers by:
    - subjects
    - days of the week
    - times
  - [x] save your favorite teachers

---

## How it works

This project is divided into three parts:

1. [Backend](https://github.com/Ives-Gomes/Proffy-API)
2. [Frontend](https://github.com/Ives-Gomes/Proffy-React)
3. Mobile

Both Frontend and Mobile need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). Download the [Expo](https://expo.io/) application on your phone. In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### Start Frontend (mobile)

```bash

# Clone this repository
$ git clone https://github.com/Ives-Gomes/Proffy-Mobile.git

# Access the project folder cmd/terminal
$ cd Proffy-Mobile

# install the dependencies
$ yarn

# Run the application in development mode
$ yarn start

# Open your Expo application and scan the QRCode

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Mobile** ([React Native](http://www.reactnative.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**
- **[React Navigation](https://reactnavigation.org/)**
- **[Axios](https://github.com/axios/axios)**
- **[React Native Community](https://github.com/react-native-community)** → **[Async Storage](https://github.com/react-native-community/async-storage)**, **[Masked View](https://github.com/react-native-community/react-native-masked-view)**, **[Picker](https://github.com/react-native-community/react-native-picker)**

> See the file [package.json](https://github.com/Ives-Gomes/Proffy-Mobile/blob/master/package.json)

#### **Utils**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fonts: **[Archivo](https://fonts.google.com/specimen/Archivo?query=archivo)**, **[Poppins](https://fonts.google.com/specimen/Poppins?query=poppins)**

---

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`

---

## Author

<a href="https://www.linkedin.com/in/ives-moreira-8871b318a/">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4" width="100px;" alt="Ives Moreira"/>
 <br />
 <sub><b>Ives Moreira</b></sub></a> <a href="https://www.linkedin.com/in/ives-moreira-8871b318a/" title="Linkedin"></a>
 <br />

---

## License

This project is under the license [MIT](./LICENSE).

Made with 💜 by Ives Moreira.
