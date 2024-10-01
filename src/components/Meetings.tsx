import { FaAngleRight } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import GoogleMeetIcon from "../assets/google-meet.svg";
import ZoomIcon from "../assets/zoom.svg";

const meetings = [
  {
    date: "Tue, 11, Jul",
    time: "08:15 am",
    title: "Quick Daily Meeting",
    platform: "Zoom",
    image: ZoomIcon,
  },
  {
    date: "Tue, 11, Jul",
    time: "09:30 pm",
    title: "John Onboarding",
    platform: "Google Meet",
    image: GoogleMeetIcon,
  },
  {
    date: "Tue, 12, Jul",
    time: "02:30 pm",
    title: "Call With New Team",
    platform: "Google Meet",
    image: GoogleMeetIcon,
  },
  {
    date: "Tue, 15, Jul",
    time: "04:00 pm",
    title: "Lead Designers Event",
    platform: "Zoom",
    image: ZoomIcon,
  },
];

const Meetings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold mb-4">My Meetings</h3>
        <CiCalendar className="relative mr-2 cursor-pointer" />
      </div>
      <ul className="divide-y divide-gray-200">
        {meetings.map((meeting, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 gap-12"
          >
            <div className="text-left p-0 w-1/3">
              <span className="block text-gray-500 p-0">{meeting.date}</span>
              <span className="block font-bold p-0">{meeting.time}</span>
            </div>

            <div className="text-left p-0 w-2/3">
              <span className="block font-semibold text-black p-0">
                {meeting.title}
              </span>
              <div className="flex justify-start gap-2 cursor-pointer">
                <img src={meeting.image} alt={`${meeting.platform} icon`} />
                <span className="block text-sm text-blue-500 p-0">
                  {meeting.platform}
                </span>
              </div>
            </div>
            <MdArrowOutward className="cursor-pointer" />
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-3 relative mt-3">
        <p>sell all meeting</p>
        <FaAngleRight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Meetings;
