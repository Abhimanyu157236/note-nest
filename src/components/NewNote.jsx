import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteArray, SetNoteArray] = useState([]);

  const createNote = () => {
    SetNoteArray([...noteArray, { id: uuidv4(), title, content }]);
    setContent("");
    setTitle("");
  };
  const updateNote = (num) => {
    let key = num;
    let filterElem = noteArray.filter((item) => {
      return item.id === key;
    });

    setTitle(filterElem[0].title);
    setContent(filterElem[0].content);

    let Elem = noteArray.filter((item) => {
      return item.id !== key;
    });
    SetNoteArray(Elem);
  };
  const deleteNote = (num) => {
    let key = num;
    let filterElem = noteArray.filter((item) => {
      return item.id !== key;
    });
    confirm("Are you sure u want to delete this note");
    SetNoteArray(filterElem);
  };

  return (
    <>
      <div className="min-w-[600px] flex flex-wrap">
        <div className="min-w-[100%]">
          <div className="min-w-[100%] flex justify-center p-6 mt-14 mb-3">
            <input
              type="text"
              placeholder="Title"
              className="min-w-[400px] bg-slate-200 rounded-xl outline-none p-5 mx-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="min-w-[300] bg-green-700
         text-white font-serif text-lg font-bold rounded-xl outline-none py-2 px-10"
              onClick={createNote}
            >
              Save
            </button>
          </div>
          <div className="min-w-[600px] flex justify-center">
            <textarea
              name="content"
              rows={20}
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-w-[70%]  bg-slate-200 rounded-xl outline-none p-16 my-4"
            ></textarea>
          </div>
        </div>

        <div className="min-w-[100%] flex flex-col mt-[4%]">
          {noteArray.length == 0 ? (
            <h1 className="text-red-600 font-serif font-bold text-2xl text-center mb-4">
              No Notes To Display
            </h1>
          ) : (
            <h1 className=" font-serif font-bold text-2xl text-blue-600 text-center">
              Your Notes
            </h1>
          )}

          {noteArray.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="h-[20vh] w-[70%] rounded-xl bg- mx-[15%] bg-indigo-300 my-[2%] overflow-scroll"
                >
                  <div className="w-[100%] flex">
                    <button className="min-w-[7%] mx-1 my-3 border-2 border-black p-2 rounded-md bg-red-700 text-white">
                      <h1 onClick={(id) => deleteNote(item.id)}>Delete</h1>
                    </button>
                    <button
                      className="min-w-[7%] mx-1 my-3 p-2 border-2 border-black rounded-md bg-green-900 text-white"
                      onClick={(id) => updateNote(item.id)}
                    >
                      <h1>Edit</h1>
                    </button>
                  </div>
                  <h1 className="p-3 font-bold text-2xl">{item.title}</h1>
                  <p className="p-3">{item.content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewNote;
