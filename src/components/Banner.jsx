import Button from "./Button";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src="./assets/images/user.png" className="" />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            One Step <br /> Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="py-6 max-w-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
