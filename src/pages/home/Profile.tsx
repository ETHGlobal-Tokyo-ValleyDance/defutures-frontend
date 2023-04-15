import { IoLogoGithub } from "react-icons/io";
interface ProfileProps {
  img: string;
  role: string;
  name: string;
  link: string;
}

const Profile = ({ img, role, name, link }: ProfileProps) => {
  return (
    <a href={`${link}`} target="_blank">
      <div className="flex items-center border-[0.5px] p-4 pr-8 rounded-lg hover:shadow-lg">
        <img src={img} className="w-32 h-32 rounded-full object-cover " />
        <div className="ml-4">
          <p className="text-primary-400 font-semibold">
            {role}
          </p>
          <p className="font-semibold">{name}</p>
        </div>
      </div>
    </a>
  );
};

export default Profile;
