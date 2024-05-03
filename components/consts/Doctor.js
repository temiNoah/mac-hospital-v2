const doctors = [
  {
    id: "1",
    firstname: "Claire",
    lastname: "Baker",
    professional: "General Practioner",
    title: "GP",
    image: require("../../assets/General_Practioner_Female.png"),
    avatar: require("../../assets/General_Practioner_Female_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "31 years",
    greeting:
      "Hi, my name is Claire Backer and my professional is General Practioner. I have 31 years experience in this area that I promise I can help you with your health problems",
  },
  {
    id: "2",
    firstname: "John",
    lastname: "Johnson",
    professional: "General Practioner",
    title: "GP",
    image: require("../../assets/General_Practioner_Male.png"),
    //avatar: require("../assets/General_Practioner_Male_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "25 years",
    greeting:
      "Hi, my name is John Johnson and my professional is General Practioner. I have 25 years experience in this area that I promise I can help you with your health problems",
  },
  {
    id: "3",
    firstname: "Mary",
    lastname: "Philips",
    professional: "Dermatologist",
    title: "Dermatologist",
    image: require("../../assets/Dermatologist_Female.png"),
    avatar: require("../../assets/Dermatologist_Female_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "30 years",
    greeting:
      "Hi, my name is Mary Philips and my professional is Dermatologist. I have 30 years experience in this area that I promise I can help you to improve your current skin",
  },
  {
    id: "4",
    firstname: "Dan",
    lastname: "Davidson",
    professional: "Internale Medicine",
    title: "Internale",
    image: require("../../assets/Internale_Medicine_Male.png"),
    avatar: require("../../assets/Internale_Medicine_Male_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "20 years",
    greeting:
      "Hi, my name is Dan Davidson and my professional is Internale Medicine. I have 20 years experience in this area that I promise I can help you with your health problems",
  },
  // {
  //   id: "5",
  //   firstname: "Emma",
  //   lastname: "Baker",
  //   professional: "Internale Medicine",
  //   title: "Internale",
  //   image: require("../assets/Internale_Medicine_Female.png"),
  //   avatar: require("../assets/Internale_Medicine_Female_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "28 years",
  //   greeting:
  //     "Hi, my name is Emma Backer and my professional is Internale Medicine. I have 28 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "6",
  //   firstname: "Shi",
  //   lastname: "Zhuang",
  //   professional: "Herbal Medicine",
  //   title: "Herbal",
  //   image: require("../assets/Herbal_Medicine_Female.png"),
  //   avatar: require("../assets/Herbal_Medicine_Female_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "11 years",
  //   greeting:
  //     "Hi, my name is Shi Zhuang and my professional is Herbal Medicine. I have 11 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "7",
  //   firstname: "Long",
  //   lastname: "Lee",
  //   professional: "Herbal Medicine",
  //   title: "Herbal",
  //   image: require("../assets/Herbal_Medicine_Male.png"),
  //   avatar: require("../assets/Herbal_Medicine_Male_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "16 years",
  //   greeting:
  //     "Hi, my name is Long Lee and my professional is Herbal Medicine. I have 16 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "8",
  //   firstname: "Erick",
  //   lastname: "Wilfrid",
  //   professional: "Infectious Disease",
  //   title: "Infectious Disease",
  //   image: require("../assets/Infectious_Disease_Male_2.png"),
  //   avatar: require("../assets/Infectious_Disease_Male_2_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "22 years",
  //   greeting:
  //     "Hi, my name is Erick Wilfrid and my professional is Infectious Disease. I have 22 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "9",
  //   firstname: "Bale",
  //   lastname: "Orrell",
  //   professional: "Infectious Disease",
  //   title: "Infectious Disease",
  //   image: require("../assets/Infectious_Disease_Male.png"),
  //   avatar: require("../assets/Infectious_Disease_Male_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "31 years",
  //   greeting:
  //     "Hi, my name is Bale Orrell and my professional is Infectious Disease. I have 31 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "10",
  //   firstname: "Tylar",
  //   lastname: "Gareth",
  //   professional: "Surgeon",
  //   title: "Surgeon",
  //   image: require("../assets/Surgeon_Male.png"),
  //   avatar: require("../assets/Surgeon_Male_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "35 years",
  //   greeting:
  //     "Hi, my name is Tylar Gareth and my professional is Surgeon. I have 35 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "11",
  //   firstname: "Taylor",
  //   lastname: "Baker",
  //   professional: "Surgeon",
  //   title: "Surgeon",
  //   image: require("../assets/Surgeon_Female.png"),
  //   avatar: require("../assets/Surgeon_Female_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "29 years",
  //   greeting:
  //     "Hi, my name is Taylor Backer and my professional is Surgeon. I have 29 years experience in this area that I promise I can help you with your health problems",
  // },
  // {
  //   id: "12",
  //   firstname: "Leyla",
  //   lastname: "Elsi",
  //   professional: "Veterinarian",
  //   title: "Veterinarian",
  //   image: require("../assets/Veterinarian_Female.png"),
  //   avatar: require("../assets/Veterinarian_Female_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "5 years",
  //   greeting:
  //     "Hi, my name is Leyla Elsi and my professional is Veterinarian. I have 5 years experience in this area that I promise I can help you with your sweties",
  // },
  // {
  //   id: "13",
  //   firstname: "Kelvin",
  //   lastname: "Dublin",
  //   professional: "Veterinarian",
  //   title: "Veterinarian",
  //   image: require("../assets/Veterinarian_Male.png"),
  //   avatar: require("../assets/Veterinarian_Male_Avatar.png"),
  //   description: "Doctor of the highest qualification category",
  //   experiences: "11 years",
  //   greeting:
  //     "Hi, my name is Kelvin Dublin and my professional is Veterinarian. I have 11 years experience in this area that I promise I can help you with your pets",
  // },
];

export default doctors;

export const departs = [
  {
    "department": "GOPD",
    "image": require("../../assets/gopd.jpg"),
    "description": "General OutPatient Department"
  },
  {
    "department": "Infertility",
    "image": require("../../assets/infertility2.jpg"),
    "description": "Get your infertility problem resolved"
  },
  {
    "department": "Pediatics",
    "image": require("../../assets/Pediatrics.jpg"),
    "description": "Visit, for children related issues"
  },
  {
    "department": "Opthalmology",
    "image": require("../../assets/ophthalmology.jpg"),
    "description": "Are you having eyes related issues? "
  },
  {
    "department": "Gynecology",
    "image": require("../../assets/gynecology.jpg"),
    "description": "Are you having women related issues?"
  },
  {
    "department": "Physiotherapy",
    "image": require("../../assets/Physiotherapy23.png"),
    "description": "Are you having joints, bone or muscles pain?"
  },
  {
    "department": "Dental",
    "image": require("../../assets/Dental.png"),
    "description": "Do you have tooth problem?"
  },
  {
    "department": "Cardiology",
    "image": require("../../assets/Cardiology.png"),
    "description": "Heart related issues?"
  },
  {
    "department": "Pharmacy",
    "image": require("../../assets/Pharmacy.jpg"),
    "description": "Get all your prescribed drugs here."
  },
  {
    "department": "Laboratory",
    "image": require("../../assets/Laboratory.jpg"),
    "description": "Make appointment for laboratory checkup"
  },
];


export const categories = [
  {
    "department": "GOPD",
    "image": require("../../assets/gopd.jpg"),
    "description": "General OutPatient Department"
  },
  {
    "department": "Infertility",
    "image": require("../../assets/infertility2.jpg"),
    "description": "Get your infertility problem resolved"
  },
  {
    "department": "Pedeatics",
    "image": require("../../assets/Pediatrics.jpg"),
    "description": "Giving birth to children"
  },
  {
    "department": "Oncology",
    "image": require("../../assets/Diet.png"),
    "description": "Solution to cancer problems"
  },


];

export const approvedAppointment = [
  {
    "firstname": "Mac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Eac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Tac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Bac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Zac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Yac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Qac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  },
  {
    "firstname": "Rac",
    "title": "Dr",
    "date": "2023-3-17",
    "time": "9:30am",
    "subject": "Diabetes checkup"
  }
]

export const pendingAppointment = [
  {
    // "firstname" : "Mac",
    //"ttle" : "Dr",
    "date": "2023-3-17",
    //"time":"9:30am",
    "subject": "Diabetes checkup"
  },
  {
    // "firstname" : "Mac",
    // "ttle" : "Dr",
    "date": "2023-3-17",
    // "time":"9:30am",
    "subject": "Diabetes checkup"
  },
  {
    // "firstname" : "Mac",
    // "ttle" : "Dr",
    "date": "2023-3-17",
    // "time":"9:30am",
    "subject": "Diabetes checkup"
  },
  {
    // "firstname" : "Mac",
    // "ttle" : "Dr",
    "date": "2023-3-17",
    //  "time":"9:30am",
    "subject": "Diabetes checkup"
  }
]

export const messages = [
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  },
  {
    "sender": "Mr Mac",
    "date": "2023-7-13",
    "body": "This is what we have"
  }
]


export const hospitals = [
  {
    "name": "The general hospital Oshodi",
    "status": "free",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "upgrade",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "free",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "upgrade",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "free",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "upgrade",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "free",
  },
  {
    "name": "The general hospital Oshodi",
    "status": "upgrade",
  }
]