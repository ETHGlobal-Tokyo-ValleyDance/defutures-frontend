interface ProfileProps {
  img: string;
  role: string;
  name: string;
}

const Profile = ({ img, role, name }: ProfileProps) => {
  return (
    <div className="flex flex-row items-center">
      <img src={img} className="w-20 h-20 rounded-full" />
      <div>
        <h2 className="text-base ml-2 text-primary-400 font-semibold tracking-wide uppercase">
          {role}
        </h2>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Profile;
