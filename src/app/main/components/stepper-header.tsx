// import { Step, Stepper } from "react-form-stepper";

// interface StepperHeaderProps {
//   steps: string[];
//   activeStep: number;
// }

// export default function StepperHeader({
//   steps,
//   activeStep,
// }: StepperHeaderProps) {
//   return (
//     <header className="min-h-[15vh] bg-darkpurple flex justify-center items-center font-secondary text-white mt-10 rounded-xl">
//       <div className="w-full px-10">
//         <Stepper
//           activeStep={activeStep}
//           styleConfig={{
//             activeBgColor: "#a100a1", // active circle background (purple)
//             activeTextColor: "#FFFFFF", // active text color (inside circle)
//             completedBgColor: "#540054", // completed step background
//             completedTextColor: "#FFF", // completed step text
//             inactiveBgColor: "#fff", // inactive circle background (gray)
//             inactiveTextColor: "#340034", // inactive text color (gray-300)
//             size: "2.2em", // circle size
//             circleFontSize: "1em", // number font size
//             labelFontSize: "1em", // label font size
//             borderRadius: "50%", // makes sure circles are round
//             fontWeight: "bold", // makes the font bold
//           }}
//           connectorStyleConfig={{
//             completedColor: "#8B5CF6", // line color between completed steps
//             activeColor: "#fff", // line color for the current step
//             disabledColor: "#fff", // line color for inactive steps
//             size: 2, // thickness of connecting line
//             stepSize: "2.5em", // keeps spacing balanced
//             style: "", // adds some space between the line and circles
//           }}
//         >
//           {steps.map((label, index) => (
//             <Step key={index} label={label} />
//           ))}
//         </Stepper>
//       </div>
//     </header>
//   );
// }

// stepper-header.tsx
import { Step, Stepper } from "react-form-stepper";

interface StepperHeaderProps {
  steps: string[];
  activeStep: number;
}

export default function StepperHeader({
  steps,
  activeStep,
}: StepperHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 mt-8 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <Stepper
          activeStep={activeStep}
          styleConfig={{
            activeBgColor: "#ffffff",
            activeTextColor: "#7c3aed",
            completedBgColor: "#ffffff",
            completedTextColor: "#7c3aed",
            inactiveBgColor: "#9ca3af",
            inactiveTextColor: "#ffffff",
            size: "2.5em",
            circleFontSize: "1rem",
            labelFontSize: "0.875rem",
            borderRadius: "50%",
            fontWeight: "600",
          }}
          connectorStyleConfig={{
            completedColor: "#ffffff",
            activeColor: "#ffffff",
            disabledColor: "#d1d5db",
            size: 3,
            stepSize: "2.5em",
            style: "solid",
          }}
        >
          {steps.map((label, index) => (
            <Step
              key={index}
              label={label}
              className="text-white font-medium"
            />
          ))}
        </Stepper>
      </div>
    </div>
  );
}
