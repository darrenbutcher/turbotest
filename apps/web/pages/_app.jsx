// import flagsmith from "flagsmith/isomorphic";
// import { FlagsmithProvider } from 'flagsmith/react';
// import { GrowthBook, GrowthBookProvider, useFeature } from "@growthbook/growthbook-react";
import { withDVCProvider, useIsDVCInitialized } from '@devcycle/devcycle-react-sdk'
import dynamic from 'next/dynamic'

// import { useEffect } from "react";

// // Create a GrowthBook instance
// const growthbook = new GrowthBook({
//   trackingCallback: (experiment, result) => {
//     console.log({
//       experimentId: experiment.key, 
//       variationId: result.variationId
//     })
//   }
// });


//  export default function App({ Component, pageProps }) {
//   useEffect(() => {
//     // Load feature definitions from API
//     fetch("https://cdn.growthbook.io/api/features/key_prod_b1b02e47eaa6236b")
//       .then((res) => res.json())
//       .then((json) => {
//         growthbook.setFeatures(json.features);
//       });
    
//     // TODO: replace with real targeting attributes
//     growthbook.setAttributes({
//       "id": "foo",
//       "deviceId": "foo",
//       "company": "foo",
//       "loggedIn": true,import { asyncWithDVCProvider } from '@devcycle/devcycle-react-sdk'
//       "employee": true,
//       "country": "foo",
//       "browser": "foo",
//       "url": "foo"
//     })
//   }, [])

//   return (
//     <GrowthBookProvider growthbook={growthbook}>
//       <Component {...pageProps}/>
//     </GrowthBookProvider>
//   )
//  }




// ///
// export default function App({ Component , pageProps, flagsmithState }) {
//   // return (
//   //   <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
//   //     <Component {...pageProps} />
//   //  </FlagsmithProvider>
//   // )
//   return (
//     <FlagsmithProvider flagsmith={flagsmith} options={{
//       environmentID: 'S6xocECAu2NAv3bH6yhG2f',
//     }}>
//       <Component {...pageProps} />
//    </FlagsmithProvider>
//   )
// }

// // App.getInitialProps = async () => {
// //   await flagsmith.init({ // fetches flags on the server and passes them to the App 
// //       environmentID: 'S6xocECAu2NAv3bH6yhG2f',
// //   });
// //   return { flagsmithState: flagsmith.getState() }
// // }

function MyApp({ Component, pageProps }) {
  const dvcReady = useIsDVCInitialized()
    
  if (!dvcReady) return <div>Loading ...</div>
  return <Component {...pageProps} />
}

export default dynamic(() => Promise.resolve(withDVCProvider({ envKey: 'client-2139fbd4-7128-4639-9c74-52be66a7db68'})(MyApp)), {
  ssr: false,
})







