const data = [
  {
    title: "Design and Calibration of SDR Based Vector Network Analyzer for 70MHz to 6GHz",
    subtitle: "Subtitle",
    link: "/projects",
    image: "vna-final.jpg",
    date: "2019-10-30",
    desc:
      "One of the most important parameters of every network is scattering parameters and measuring these parameters is a vital part of every RF design. " +
      "According to the high cost and lack of commercial VNAs in Iran, the final goal of this project is to design and introduce a low-cost VNA which is going to have a lot of applications in education and low-level designs. " +
      "This project includes running Adalm-Pluto SDR as a power transceiver for VNA and a wideband directional coupler to measure reflected power. Also for measuring amplitude and phase of S-parameters, this VNA uses Zadoff-Chu coding for every frequency point. " + 
      "One of the important issues that are especially related to the Vector Network Analyzer is the calibration process. In this thesis, 4 term model standard is used as error correction. " +
      "A thesis submitted in partial fulfillment of the requirements for the degree of Bachelor in Electrical Engineering - University of Tehran"
  },
  {
    title: "Persian Plate Detection Base on MATLAB Image Processing and OCR Trainer",
    subtitle: "Subtitle",
    link: "/projects",
    image: "persian-plate-detection-final.png",
    date: "2019-6-30",
    desc:
      "There isn't any developed OCR tool for Persian alphabets and numbers which causes problem in recognize and extract the content of persian license plate. " +
      "Therefore, in this project, first step was extracting region of interest which is plate from traffic cameras and second was train OCRTrainer tool of MATLAB with persion samples to produce a model for Persian language. " +
      "Digital Image Processing Course - University of Tehran"
  },
  {
    title: "Implementation of VGA Controller with FPGA",
    subtitle: "Subtitle",
    link: "/projects",
    image: "vga-controller.png",
    date: "2017-12-30",
    desc:
      "As a standard display interface, VGA (Video Graphics Array) has been widely used. " +
      "This Controller was developed using Verilog HDL. A well-known standard interface" +
      " VGA is used in many embedded systems. This system provides a simple method to connect" +
      " a system with a monitor for showing images or information. " +
      "Digital Logic Design Lab - University of Tehran"
  },
  {
    title: "MyTracker, Positioning with Using GSM Signals Instead of GPS",
    subtitle: "Subtitle",
    link: "/projects",
    //needed revising for picture
    image: "vga-controller.png",
    date: "2018-2-30",
    desc:
      "There are two major drawbacks to using GPS positioning, power consumption and lack of GPS signal coverage indoor. " +
      "Therefore, this prototype was developed using Arduino microcontroller and SIM800 module which are supported by a web server and android application. " +
      "Makeathon competition - Sharif University of Technology"
  },
  {
    title: "Temperature and Humidity meter with Arduino Controlling by Bluetooth and SMS",
    subtitle: "Subtitle",
    link: "/projects",
    //needed revising for picture
    image: "vga-controller.png",
    date: "2017-12-30",
    desc:
      "This prototype was developed using Arduino microcontroller beside ???? as a digital temperature sensor and ??? as an analog humidity meter based on changing capacitance and resonance frequency. " +
      "Also, Bluetooth and SMS connections were used beside an android application to control the device remotely. " +
      "ICEPER competition"
  }
];

export default data;
