const bio = [
  {
    year: "2002",
    event: `"Hello World !" Born in Kolkata,West Bengal .`,
  },
  {
    year: "2019",
    event: "Graduated Middle School from Gems Akademia International School .",
  },
  {
    year: "2021",
    event: "Graduated High School from The Future Foundation School .",
  },
  {
    year: "2021",
    event: "University Life. Persuing BE in Computer Science from Chandigarh University .",
  },{
    year:"2025",
    event:"Uncharted Space. ",
  }
];

const Bio = () => {
  return (
    <div className="mt-8 mr-8 ml-8 flex flex-col">
      <div className="text-lg mb-6 underline underline-offset-4 font-semibold ">
        Bio
      </div>
      {/* <div> */}
      {bio.map((item, key) => {
        return (
          <div className='flex flex-row gap-8' key={item.year}>
            <h1 className="font-bold">{item.year}</h1>
            <h1>{item.event}</h1>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Bio;
