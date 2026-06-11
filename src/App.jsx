import { useState } from "react";
import InputField from "./InputField";
function ParentContainer({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start">
      {children}
    </div>
  );
}

function ChildContainer({ children }) {
  return (
    <div className="w-full max-w-3xl h-4/5 bg-white m-4 p-4 rounded-2xl">
      {children}
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex justify-between text-2xl text-blue-800">
      <div>
        <h1>Logo</h1>
      </div>

      <div className="">
        <ul className="flex gap-4">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <h1 className="mt-6 text-3xl text-center text-pink-700">
      Create Your Link Tree
    </h1>
  );
}

function FormComponent() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  return (
    <>
      <InputField
        label={"Enter Name"}
        name="name"
        placeholder={"Please Enter Your Name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <InputField
        label={"Enter Bio"}
        name="bio"
        placeholder={"Please Enter Your Bio"}
        value={bio}
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
    </>
  );
}
function App() {
  return (
    <>
      <ParentContainer>
        <ChildContainer>
          <NavBar />
          <Header />
          <FormComponent />
        </ChildContainer>
      </ParentContainer>
    </>
  );
}

export default App;
