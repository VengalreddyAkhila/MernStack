const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useAuth0 } from '@auth0/auth0-react';

import React from 'react'
import { useMutation } from 'react-query';
import { toast } from 'sonner';

type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };

export const useUpdateMyUser = () => {
const {getAccessTokenSilently} =useAuth0();

    const updateMyUserRequest = async (user: UpdateMyUserRequest) => {
      const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization:`Bearer${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    };

    const {
        mutateAsync: updateUser,
        isLoading,
       // isError,
        isSuccess,
        error,
        reset
    } = useMutation(updateMyUserRequest);
    if(isSuccess){
        toast.success("User Profile Updated")
    }
    if(error){
        toast.error(error.toString());
        reset();
    }

    return {
        updateUser,
        isLoading,
       // isError,
        isSuccess
    }
}




const MyUserApi = () => {
    return (
        <div>MyUserApi</div>
    )
}

export default MyUserApi