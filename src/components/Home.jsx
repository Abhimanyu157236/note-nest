import React, { useState } from "react";
import digitalNote from "../assets/person-learning-online.png";
import secured from "../assets/data-security-threat.png";
import books from "../assets/book.png";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div id="content1" className="flex min-w-[600px] min-h-[40vh] m-[6%]">
        <div className="min-w-[30%] mt-[10%]">
          <h1 className="font-serif font-bold text-2xl">
            Efficient Notes-Taking
          </h1>
          <br />
          <p className=" text-justify font-semibold text-lg">
            Our notes app makes digital note-taking effortless and efficient.
            With easy access across devices, you can quickly capture, organize,
            and search your ideas.
          </p>
        </div>
        <div className="min-w-[50%]">
          <img
            src={digitalNote}
            alt="digital notes"
            className="w-[90%] p-[5%]"
          />
        </div>
      </div>

      <div id="content2" className="flex min-w-[600px] m-[1%] min-h-[40vh]">
        <div className="min-w-[50%]">
          <img src={secured} alt="secured notes" className="w-[90%] py-[2%]" />
        </div>
        <div className="min-w-[30%] mt-[10%]">
          <h1 className="font-serif font-bold text-2xl">Lock Your Notes</h1>
          <br />
          <p className=" text-justify font-semibold text-lg">
            Safeguard your personal notes, tasks, and projects, ensuring only
            you have access to your valuable content anytime, anywhere.
          </p>
        </div>
      </div>

      <div id="content3" className="flex min-w-[600px] min-h-[40vh] m-[6%]">
        <div className="min-w-[30%] mt-[10%]">
          <h1 className="font-serif font-bold text-2xl">
            Say goodbye to the bulky notebooks!
          </h1>
          <br />
          <p className=" text-justify font-semibold text-lg">
            Say goodbye to the hassle of carrying bulky notebooks! digital
            note-taking eliminates the need for physical notebooks, making it
            more efficient and convenient.
          </p>
        </div>
        <div className="min-w-[50%]">
          <img src={books} alt="digital notes" className="w-[90%] p-[5%]" />
        </div>
      </div>

      <div id="content4" className=" min-w-[600px] my-[6%] pt-16 pb-3">
        <h1 className="font-semibold text-xl font-serif text-center">
          NoteNest, Where Your Ideas Take Flight.
        </h1>
      </div>
    </>
  );
};

export default Home;
