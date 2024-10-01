import DownArrow from "../assets/down-arrow.svg";
import UpArrow from "../assets/uparrow.svg";

const skills = [
  { name: "Sport Skills", value: 71, arrow: DownArrow },
  { name: "Blogging", value: 92, arrow: UpArrow },
  { name: "Leadership", value: 33, arrow: DownArrow },
  { name: "Meditation", value: 56, arrow: UpArrow },
  { name: "Philosophy", value: 79, arrow: UpArrow },
];

const DevelopedAreas = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div>
        <h3 className="text-lg font-semibold">Developed Areas</h3>
        <p className="pt-0">Most common areas of interest</p>
      </div>

      {skills.map((skill, index) => (
        <div key={index} className="mb-4 pt-5 flex items-center gap-2">
          <span className="block font-semibold w-1/5">{skill.name}</span>

          <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>

          <div className="pr-2 border-r-2 border-gray-300 w-auto">
            <p>{skill.value}%</p>
          </div>
          <img src={skill.arrow} alt="Arrow icon" className="w-5 h-5" />
        </div>
      ))}
    </div>
  );
};

export default DevelopedAreas;
