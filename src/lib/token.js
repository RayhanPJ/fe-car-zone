export const getTokenExpiration = (token) => {
   try {
     const decodedToken = JSON.parse(atob(token.split(".")[1]));
     if (decodedToken.exp) {
       const expirationDate = new Date(decodedToken.exp * 1000);
       return expirationDate;
     } else {
       throw new Error("Token doesn't have an expiration date");
     }
   } catch (error) {
     console.error("Invalid token:", error);
     return null;
   }
 };
 

export const isTokenExpired = (token) => {
   const expirationDate = getTokenExpiration(token)
   if (expirationDate) {
     return expirationDate <= new Date()
   } else {
     return true
   }
 }