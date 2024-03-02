import React, { createContext, useContext, useEffect, useState } from "react";

// Define the shape of user details
type UserDetails = {
  username: string;
  id: string;
  playlists: string[];
  // Add more details as needed
};

// Define the shape of the context value
type UserContextType = {
  user: UserDetails | null;
  updateUser: (token: string) => void;
};

// Create the context with initial values
const UserContext = createContext<UserContextType>({
  user: null,
  updateUser: () => {},
});

// Custom hook to access user details
export const useUser = () => {
  return useContext(UserContext);
};

// Custom hook to update user details
export const useUpdateDetails = (token: string) => {
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    // Get the token from localStorage
    // const token = localStorage.getItem("token");
    if (token) {
      // Call the updateUser function with the token
      updateUser(token);
    }
  }, [updateUser]);

  return;
};

// UserProvider component to wrap the application and provide the context
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  // Function to update user details using the token
  const updateUser = async (token: string) => {
    try {
      // Make API call to fetch user details using the token
      //   const response = await fetch("API_ENDPOINT", {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       // Add more headers as needed
      //     },
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to fetch user details");
      //   }

      //   // Parse the response and set the user details
      //   const userData = await response.json();
      setUser({
        id: "1234",
        playlists: ["Playlist"],
        username: "BHanu",
      });
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  // Store the token in localStorage and update user details
  const storeTokenAndUpdateUser = (token: string) => {
    localStorage.setItem("token", token);
    updateUser(token);
  };

  return (
    <UserContext.Provider value={{ user, updateUser: storeTokenAndUpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};
