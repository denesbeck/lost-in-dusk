import profile from "@/assets/ghibli_avatar.png";

const Avatar = () => {
  return (
    <div className="hidden overflow-hidden mx-3 w-40 h-40 rounded-full ring-2 sm:block ring-primary">
      <img
        src={profile}
        alt="profile"
        className="w-40 h-40 rounded-full transition-all duration-200 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default Avatar;
