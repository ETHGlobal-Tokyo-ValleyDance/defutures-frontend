interface ProfileProps {
  img: string;
  role: string;
  name: string;
  link: string;
}

const Profile = ({ img, role, name, link }: ProfileProps) => {
  return (
    <a href={`${link}`} target="_blank">
      <div className="flex flex-row items-center">
        <img src={img} className="w-20 h-20 rounded-full object-fit " />
        <div>
          <h2 className="text-base ml-2 text-primary-400 font-semibold tracking-wide uppercase">
            {role}
          </h2>
          <p>{name}</p>
        </div>
      </div>
    </a>
  );
};

export default Profile;
