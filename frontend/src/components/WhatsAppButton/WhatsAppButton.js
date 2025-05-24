// src/components/WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919220604695" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp">
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
