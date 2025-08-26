// // import statusCodes along with GoogleSignin
// import {
//   GoogleSignin,
//   isErrorWithCode,
//   isSuccessResponse,
//   statusCodes,
//   User,
// } from '@react-native-google-signin/google-signin';

// // Somewhere in your code
// const signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const response = await GoogleSignin.signIn();
//     if (isSuccessResponse(response)) {
//       setState({ userInfo: response.data });
//     } else {
//       console.log("Something went wrong during sign in");
//     }
//   } catch (error) {
//     if (isErrorWithCode(error)) {
//       switch (error.code) {
//         case statusCodes.IN_PROGRESS:
//           // operation (eg. sign in) already in progress
//           console.log("Something went wrong during sign in");
//           break;
//         case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
//           // Android only, play services not available or outdated
//           console.log("Something went wrong during sign in");
//           break;
//         default:
//         // some other error happened
//         console.log("Something went wrong during sign in");
//       }
//     } else {
//       // an error that's not related to google sign in occurred
//       console.log("Something went wrong during sign in");
//     }
//   }
// };

// function setState(arg0: { userInfo: User; }) {
//     throw new Error('Function not implemented.');
// }
