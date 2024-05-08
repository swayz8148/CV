import { GridItem, Grid, Container } from "@chakra-ui/react";
import React from "react";

import PersonalInfo from "./api/PersonalInfo";
import Education from "./api/Education";
import WorkExperience from "./api/WorkExperience";
import Hobbies from "./api/Hobbies";
import EverydaySkills from "./api/EverydaySkills";
import ITSkills from "./api/ITSkills";
import About from "./api/About";
import SocialMedia from "./api/social_media";
import Certificates from "./api/certificates";
import Reference from "./api/refrence";

const skillsData = [
  { name: "React", progress: 40 },
  { name: "Vue.js", progress: 40 },
  { name: "Chakra UI", progress: 40 },
  { name: "Typescript", progress: 40 },
  { name: "Flask", progress: 20 },
  { name: "Next.js", progress: 70 },
  { name: "Node.js", progress: 70 },
  { name: "Git", progress: 50 },
  { name: "Linux", progress: 30 },
  { name: "Windows", progress: 80 },
  { name: "Python", progress: 90 },
];

const Home = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        gap={6}
      >
        <GridItem
          colSpan={{ sm: 1, md: 2 }}
          p={5}
          bg="gray.700"
          borderRadius="lg"
        >
          <PersonalInfo
            name="Micheal Downard"
            email="micheal.downard@icloud.com"
            phone=""
            location="Scotland, United Kingdom"
          />
          <EverydaySkills
            skills={[
              "Customer Service",
              "Time Managment",
              "Problem Solving",
              "Teamwork",
              "Communication",
              "Adaptability",
              "Critical Thinking",
            ]}
          />
          <ITSkills skills={skillsData} />

          <SocialMedia />
        </GridItem>

        <GridItem
          colSpan={{ sm: 1, md: 3 }}
          bg="gray.700"
          p={5}
          borderRadius="lg"
        >
          <About
            title="Personal Statement"
            about="I am a dedicated and dependable individual, actively pursuing full-time or temp-contract employment within the IT industry. With a strong work ethic, I know I can build amazing things with a team of developers. I am a quick learner and I am always looking to improve my skills. I am a very outdoors person and I love to mountain bike and explore new trails. I am also very skilled in customer service and skilled in IT, I have 4 years of experience building websites for my projects."
          />
          <WorkExperience
            company="Mountain Bike Centre"
            role="Customer Service / Trail Maintenance"
            date="Sep 2022 - Sep 2022"
            description="Provided customer service and trail maintenance at a local mountain bike centre."
          />

          <WorkExperience
            company="GGS Bar & Restaurant"
            role="Kitchen Porter / Kitchen Assistant"
            date="Aug 2022 - Dec 2022"
            description="Wasking dishes, cleaning the kitchen and helping the chefs with food prep."
          />

          <WorkExperience
            company="Smoking Lobster"
            role="Apprentice Chef"
            date="May 2023 - May 2023"
            description="Learning how to be a chef and helping the chefs with food prep."
          />

          <WorkExperience
            company="Dominos Pizza"
            role="E-bike Delivery Drive"
            date="July 2024 - Dec 2023"
            description="Delivering pizza on an e-bike to customers in the loacl area."
          />

          <WorkExperience
            company="Amazon"
            role="Warehouse Operative"
            date="Dec 2023 - March 2024"
            description="Picking orders for customers or venter returns."
          />
        </GridItem>
        <GridItem
          colSpan={{ sm: 1, md: 2 }}
          bg="gray.700"
          p={5}
          borderRadius="lg"
        >
          <Hobbies
            hobbies={[
              "Mountain Biking: Skilled in navigating challenging terrains, demonstrating endurance and technical prowess while enjoying the thrill of off-read cycling ",
              "Outdoor Pursuits: In addition to being skilled in mountain biking and navigating challenging terrains with endurance and technical prowess, I also possess strong navigational abilities using maps. Whether it's exploring new hiking trails, planning outdoor adventures, or orienteering in unfamiliar territories, I have a knack for reading and interpreting maps to find my way confidently. This skill enables me to navigate through diverse outdoor environments, ensuring a safe and fulfilling experience while embracing the wonders of nature. ",
              "Coding: while being an outdoors person I am very skilled within IT. In my free time I like to code different apps for my pc to make life easier and for fun I also know how to fix issues within computers and get them back up and running faster.",
            ]}
          />

          <Reference reference={["Available on request"]} />
        </GridItem>
        <GridItem
          colSpan={{ sm: 1, md: 3 }}
          bg="gray.700"
          p={5}
          borderRadius="lg"
        >
          <Education
            school="HTP Apprenticeship College"
            degree={[
              "Level 1 Certificate in Skills for Employment, Training and Personal Development (Outdoor Pursuits) Isle of Wight",
              "Level 2 Functional Skills in English and Maths",
            ]}
            date="2021 - 2023"
          />
          <Education
            school="Carisbrooke College"
            degree={["GCSE English 3", "GCSE Maths 1"]}
            date="2014 - 2021"
          />

          <Certificates
            title="Certificates"
            img={[
              "https://api2.sololearn.com/v2/certificates/CC-HJMY5G9E/image/jpg",
              "https://api2.sololearn.com/v2/certificates/CT-MJ9NNGEQ/image/jpg",
              "https://api2.sololearn.com/v2/certificates/CT-RLTB9BER/image/jpg",
            ]}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
