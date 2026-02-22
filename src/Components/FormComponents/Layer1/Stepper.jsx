import React from "react";
import { FaBaby, FaGraduationCap, FaPenNib, FaIdBadge } from "react-icons/fa";

const steps = [
  { label: "Children Details", icon: <FaBaby /> },
  { label: "School Details", icon: <FaGraduationCap /> },
  { label: "Waiver Acceptance", icon: <FaPenNib /> },
  { label: "Program Details", icon: <FaIdBadge /> },
];

const Stepper = ({ activeStep = 0 }) => {
  return (
    <div style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <div key={index} style={styles.row}>
            {/* Left text */}
            <div style={styles.label}>{step.label}</div>

            {/* Right icon + line */}
            <div style={styles.iconColumn}>
              <div
                style={{
                  ...styles.icon,
                  ...(isActive ? styles.activeIcon : {}),
                  ...(isCompleted ? styles.completedIcon : {}),
                }}
              >
                {step.icon}
              </div>

              {index !== steps.length - 1 && (
                <div
                  style={{
                    ...styles.line,
                    ...(isCompleted ? styles.completedLine : {}),
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    paddingTop: "20px",
    width: "203px",
    fontFamily: "Arial, sans-serif",
    paddingRight: "40px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  label: {
    fontFamily: "PT Sans",
    fontSize: "16px",
    fontWeight: "700",
    color: "#2B2B2B",
    paddingTop: "10px",
  },
  iconColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#eeeeee",
    color: "#777",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    zIndex: 1,
  },
  activeIcon: {
    backgroundColor: "#FFF0F0",
    color: "#FF5C5C",
  },
  completedIcon: {
    backgroundColor: "#FF5C5C",
    color: "#ffffff",
  },
  line: {
    width: "2px",
    height: "32px",
    backgroundColor: "#e5e5e5",
    marginTop: "4px",
  },
  completedLine: {
    backgroundColor: "#FF5C5C",
  },
};

export default Stepper;
//try