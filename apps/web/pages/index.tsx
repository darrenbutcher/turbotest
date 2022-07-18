import { Button } from "@darrenbutcher/ui";
// import { useFeature, IfFeatureEnabled } from "@growthbook/growthbook-react"
// import flagsmith from "flagsmith";
// import { useFlags, useFlagsmith } from 'flagsmith/react';
import { useVariableValue } from "@devcycle/devcycle-react-sdk"

// const IfFeatureEnabled = ({children, feature} :any) => {
//   const flagsmith = useFlagsmith() 
//   if (!flagsmith.hasFeature(feature)) {
//     return null
//   }
//   else {
//     return (
//       <>
//        {children}
//       </>
//     )
//   }
// }

const IfFeatureEnabled = ({children, feature} :any) => {
  if (!feature) {
    return null
  }
  else {
    return (
      <>
       {children}
      </>
    )
  }
}

export default function Web() {
  const uiButtonFeature = useVariableValue('ui-button', false)

  return (
    <div>
      <h2>Welcome to WEB 2</h2>
      {/* <IfFeatureEnabled feature='ui_btn'>
        <Button/>
      </IfFeatureEnabled>   */}
      {/* <IfFeatureEnabled feature="ui-btn">
        <Button/>
      </IfFeatureEnabled> */}
      {/* <div>
        {featureVariable ? <Button/> : null}
      </div> */}
      <IfFeatureEnabled feature={uiButtonFeature}>
        <Button />
      </IfFeatureEnabled>

      <p>Some text goes here</p>
      <p>New Text</p>
      <p>Thank you for using this app.</p>
    </div>
  );
}
