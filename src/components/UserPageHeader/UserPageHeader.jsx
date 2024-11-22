

const UserPageHeader = ({ userheading }) => {
  return (
    <div className="divider text-red-600 text-3xl  my-6 mx-auto w-full md:w-2/3 mb-12">
      <h3 className="text-black text-2xl  md:text-4xl font-semibold ">{userheading}</h3>
    </div>
  );
};

export default UserPageHeader;
