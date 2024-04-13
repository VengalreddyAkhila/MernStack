
import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  //const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading } = useUpdateMyUser();

  // if (isGetLoading) {
  //   return <span>Loading...</span>;
  // }

  // if (!currentUser) {
  //   return <span>Unable to load user profile</span>;
  // }

  return (
    <UserProfileForm
      currentUser={updateUser}
      onSave={updateUser}
      isLoading={isLoading}
    />
  );
};

export default UserProfilePage;
