import { GridItem, Grid, Container } from "@chakra-ui/react";
import React from "react";

import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Hobbies from "./components/Hobbies";
import EverydaySkills from "./components/EverydaySkills";
import ITSkills from "./components/ITSkills";
import About from "./components/About";
import SocialMedia from "./components/social_media";
import Certificates from "./components/certificates";
import Reference from "./components/refrence";

const skillsData = [
  { name: "JavaScript"},
  { name: "TypeScript"},
  { name: "React"},
  { name: "Python"},
  { name: "Rust"},
  { name: "Ruby"},
  { name: "Vue"},
  { name: "Linux"},
  { name: "Windows"},
  { name: "MacOS"}
];

const Home = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
        gap={6}
      >
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          p={5}
          bg="gray.700"
          borderRadius="lg"
        >
          <PersonalInfo
            name="Micheal Downard"
            email="contact@michealdev.com"
            phone=""
            location="Scotland, United Kingdom"
          />
          <EverydaySkills
            skills={[
              "Customer Service",
              "Time Management",
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
          colSpan={{ base: 6, md: 4 }}
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
            description="Washing dishes, cleaning the kitchen and helping the chefs with food prep."
          />
          <WorkExperience
            company="Smoking Lobster"
            role="Apprentice Chef"
            date="May 2023 - May 2023"
            description="Learning how to be a chef and helping the chefs with food prep."
          />
          <WorkExperience
            company="Dominos Pizza"
            role="E-bike Delivery Driver"
            date="July 2024 - Dec 2023"
            description="Delivering pizza on an e-bike to customers in the local area."
          />
          <WorkExperience
            company="Amazon"
            role="Warehouse Operative"
            date="Dec 2023 - March 2024"
            description="Picking orders for customers or vendor returns."
          />
        </GridItem>

        <GridItem
          colSpan={{ base: 6, md: 2 }}
          bg="gray.700"
          p={5}
          borderRadius="lg"
        >
          <Hobbies
            hobbies={[
              "Mountain Biking: Skilled in navigating challenging terrains, demonstrating endurance and technical prowess while enjoying the thrill of off-road cycling.",
              "Outdoor Pursuits: Skilled in navigating challenging terrains with endurance and technical prowess. Strong navigational abilities using maps for exploring new hiking trails and planning outdoor adventures.",
              "Coding: Skilled in IT, enjoy coding apps to make life easier and for fun. Capable of fixing issues within computers and getting them back up and running faster.",
            ]}
          />
          <Reference reference={["Available on request"]} />
        </GridItem>

        <GridItem
          colSpan={{ base: 6, md: 4 }}
          bg="gray.700"
          p={5}
          borderRadius="lg"
        >
          <Education
            school="Carisbrooke College"
            degree={["GCSE English 3", "GCSE Maths 1"]}
            date="2014 - 2021"
          />
          <Education
            school="HTP Apprenticeship College"
            degree={[
              "Level 1 Certificate in Skills for Employment, Training and Personal Development (Outdoor Pursuits) Isle of Wight",
              "Level 2 Functional Skills in English and Maths",
            ]}
            date="2021 - 2023"
          />
          <Education
            school="Fife College"
            degree={["Computing with Software Development and Cyber Security SCQF Level 5"]}
            date="2024 - 2025"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
