# Exam-Copy-Package-Management-System (EPMS)

This contains the source code for the **Exam Copy Package Management System** . This is an academic project assigned to our group by the **Department of Electronics and Computer Engineering, Pulchowk Campus** under the subject _Software Engineering_.

## Technologies Used

- [NodeJS](https://nodejs.org/en/) for the backend system.
- [SQLite](https://www.sqlitetutorial.net/sqlite-nodejs/) for the database server.
- [ReactJS](https://reactjs.org/) and CSS for the webpage.

## Usage

## Requirements

- Install the [npm software](https://nodejs.org/en/download/) as per your platform (Linux, Windows, MacOs, etc.)

## Installation

- ### Install Dependencies

  All commands to be executed from the root directory
  
  #### Frontend

  ```sh
  cd frontend
  npm install --force
  ```

  #### Backend

  ```sh
  cd server
  npm install
  ```

- ### Database Configuration

  - The default admin username and password in database.
    - Default username: `admin`
    - Default password: `admin`

- ### Applicaiton Building

  - Open a prefered shell inside `build_scripts` folder.
  - Run `build_frontend.bat` in `cmd` or `build_frontend.ps1` in `powershell` or `build_frontend.sh` in `bash` and likewise.

## Usage

From any shell in root folder:

```sh
npm start
```

Default application port: `4000`

You can change it by setting environment variable `PORT`.

## Note
- The main working db file is **EPMS.sqlite3**
- The password hashing used is MD5.
- We have to change admin credentials by directly writing in the db file.
- The college names also have to changed by directly writing in the db file.
