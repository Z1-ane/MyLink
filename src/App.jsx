import { useState } from "react";
import InputField from "./InputField";
import socialPlatform from "./socialPlatform";

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

function FormComponent({ profile, onChange }) {
  return (
    <>
      <InputField
        label={"Enter Name"}
        name="name"
        placeholder={"Please Enter Your Name"}
        value={profile.name}
        onChange={(e) => {
          onChange("name", e.target.value);
        }}
      />
      <InputField
        label={"Enter Bio"}
        name="bio"
        placeholder={"Please Enter Your Bio"}
        value={profile.bio}
        onChange={(e) => {
          onChange("bio", e.target.value);
        }}
      />
    </>
  );
}

function AddLinkBtn({ onAddLink, socialLink }) {
  const [showSocialPlatform, setShowSocialPlatform] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowSocialPlatform(!showSocialPlatform);
        }}
        className="block w-auto mx-auto mt- bg-teal-500 rounded p-4 text-xl cursor-pointer border-2 border-transparent
    hover:border-solid hover:border-teal-200 hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out "
      >
        {showSocialPlatform ? "Cancel" : "Add Link"}
      </button>

      {showSocialPlatform &&
        socialPlatform.map((platform) => (
          <div key={platform.id}>
            <button className="cursor-pointer border-2px border-solid border-pink-700 bg-teal-950 text-xl text-white rounded-2xl w-40 p-2 flex flex-row items-center gap-4 m-2">
              <span className="inline">{platform.icon}</span>
              <span className="inline">{platform.name}</span>
            </button>
            <InputField
              id={platform.id}
              name={platform.id}
              value={socialLink[platform.id] || ""}
              onChange={(e) => {
                onAddLink(platform.id, e.target.value);
              }}
              placeholder={`Enter your ${platform.name} link`}
            />
          </div>
        ))}
    </div>
  );
}

function GenerateLink() {
  return (
    <div className="flex justify-center mt-6">
      <button className="bg-gray-500 text-white text-xl px-6 py-3 border-2 border-pink-600 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 hover:border-transparent transition-all duration-300 cursor-pointer">
        Generate a Magical Link
      </button>
    </div>
  );
}
function App() {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
  });

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };
  const [socialLink, setSocialLink] = useState({});
  const handleSocialLinkChange = (platformId, url) => {
    setSocialLink((prev) => ({
      ...prev,
      [platformId]: url,
    }));
  };

  console.log(profile, socialLink);
  return (
    <>
      <ParentContainer>
        <ChildContainer>
          <NavBar />
          <Header />
          <FormComponent profile={profile} onChange={handleProfileChange} />
          <AddLinkBtn
            onAddLink={handleSocialLinkChange}
            socialLink={socialLink}
          />
          <GenerateLink />
        </ChildContainer>
      </ParentContainer>
    </>
  );
}

export default App;
