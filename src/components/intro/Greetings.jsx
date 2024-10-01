import background from "../../assets/greetings-bg.jpg";

const Greetings = () => {
  return (
    <div
      className="h-96 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.456),rgba(0,0,0,0.789)),url("${background}")`
      }}
    >
      <h1 className="text-white font-black text-4xl pt-12 px-4">
        We Build Your Dream Place Come True
      </h1>
      <p className="font-black font-mono text-white pt-1 px-4">
        Crafting your idea into stunning architectural master plan
      </p>

      <button
        href="#"
        className="font-black text-white rounded-2xl p-2 ml-4 mt-4 border border-amber-50 backdrop-blur-2xl"
      >
        Contact Us <i className="bx bx-phone"></i>
      </button>
    </div>
  );
};
export default Greetings;
