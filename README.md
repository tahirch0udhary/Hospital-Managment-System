<a name="readme-top"></a>
## Hospital amangement system | Introduction

Hospital Management System is a web application for the hospital which manages doctors and patients. The project Hospital Management system includes registration of patients, storing their details into the system. The software has the facility to give a unique id for every patient and stores the details of every patient.

The Hospital Management System can be entered using a username and password. It is accessible either by an administrator .Only they can add data into the database. The data can be retrieved easily. The interface is very user-friendly. The data are well protected for personal use and make the data processing very fast.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hospital Managament System | Tools & Technology

* <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
* <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
* <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
* <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
* <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"/>
* <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## hospital Managment System | Prerequisites

These are the softwares you need to install before getting started.
- NodeJS
- NPM
- MySQL

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hospital Managment System | Modules

There are three modules.
- Admin
- Doctor
- Patient/User

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hospital Managment System | Admin Modules 

There are fooloing functionalities come under admin. Admin can view,update, delete, retrieve and search following
- Doctor details
- patient details
- appointment details
- Drug details
- Billing details
- Dashboard (can view patient ,doctor and appointments and their quries)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hospital Managment System | Doctor Modules 

There are fooloing functionalities come under Doctor.
- Doctor can see other Doctor details
- Doctor can see patient details
- Doctor can see appointment details
- Doctor can see Dashboard (own profile, appointment and book appointment)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hospital Managment System | User/Patient Modules 

There are fooloing functionalities come under User.
- User can see Doctor details
- User can book Appointment
- User can view Drugs
- User can see Dashboard (own profile , appointment detail)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## hospital Managment System | Installation
  
1. Clone This Repository

   ```sh
   https://github.com/tahirch0udhary/Hospital-Management-System

2. Install NPM Packages
   ```sh
   npm install 

3. Enter Your DataBase Credentials in `config/sequelize.js`
   ```js
   const sequelize = new Sequelize(
    'DataBase_Name',
    'UserName',
    'Password',
    {
        host: 'HostName',
        dialect: 'mysql'
    });
    

4. Get Started With The Command
   ```sh
   node index.js 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hospital Management System | Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/AmazingFeature`
3. Commit your Changes `git commit -m 'Add some AmazingFeature'`
4. Push to the Branch `git push origin feature/AmazingFeature`
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<p align="center"> © 2023 Tahir naveed, All Rights Reserved. </p>
<p align="center">
https://github.com/tahirch0udhary
</p>