import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 6rem 12rem;
  background-color: #2a2a2a;

  @media only screen and (max-width: 1140px) {
    padding: 12rem 1rem;
  }

  .contactSection__wrapper {
    display: flex;
    background-color: lightSteelBlue;
    gap: 4rem;
    padding: 2rem;
    margin-top: 2rem;
    justify-content: space-between;
    border-radius: 2px;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: #2d2d2d;
    left: 50%;
    top: 50%;
    border-radius: 2px;
    transform: translate(-50%, -50%);
  }
  .left {
    padding: 1.6rem;
    padding-top: 2rem;
    background-color: #2a2a2a;
    width: 100%;
    border-radius: 2px;
    max-width: 500px;
  }
  .right {
    padding: 2rem;
    max-width: 500px;
    width: 100%;
    border-radius: 2px;
    background-color: #adadad;
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      padding: 1.2rem;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      margin: 0rem;
      padding: 1rem;

    }
    .right {
      padding: 1rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="Get in touch" />
        <div className="contactSection__wrapper">
          <div 
            className="left"
            data-aos='fade-right'
            data-aos-duration='1200'
            data-aos-delay='300'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'>
            <ContactInfoItem icon={<MdLocalPhone />} text="" />
            <ContactInfoItem icon={<MdEmail />} text="stephroy411@gmail.com" />
            <ContactInfoItem text="Riverview, NB" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}