import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className=" h-screen container m-auto bg-m" >
      <div style={{paddingTop:350,paddingLeft:130}}>
      <h1 className="text-white text-[40px]">Narintorn Sittiyakorn</h1>
      <h2 className="text-white text-[30px]">Web Developer</h2>
      </div>
      
    </div>
     <div className=" container m-auto bg-white" >
     <div style={{paddingTop:40,paddingLeft:100}}>
     <h1 className="text-black text-[40px]">about me</h1>
     <p className="text-black">Graduated with a Bachelor’s degree in Business Computer, with strong expertise in information technology, system analysis, and software development. Possesses a solid foundation in computing, business management, digital marketing, and data analysis. Skilled in leveraging technology to drive business solutions and enhance operational efficiency. Strong ability to work collaboratively in a team environment while being sociable, approachable, and trusted by colleagues. Passionate about exploring new technologies and innovative opportunities to contribute to organizational growth.</p>
     </div>
     
   </div>
    </div>
  );
}
