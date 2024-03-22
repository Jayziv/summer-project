// components/EyesInGlasses.js
import { useEffect, useRef } from "react";
import styles from "../styles/EyesInGlasses.module.css";

export default function EyesInGlasses() {
  const leftFrameRef = useRef(null);
  const rightFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      moveEye(event.clientX, event.clientY, leftFrameRef.current, 1);
      moveEye(event.clientX, event.clientY, rightFrameRef.current, 2);
    };

    // Attach the event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    moveEye(event.clientX, event.clientY, leftFrameRef.current, 1);
    moveEye(event.clientX, event.clientY, rightFrameRef.current, 2);
  };

  const moveEye = (cursorX, cursorY, frameRef, eyeNumber) => {
    const frame = frameRef;
    const eye = frame.firstChild;

    const rect = frame.getBoundingClientRect();
    const eyeMaxMoveX = rect.width / 2 - eye.offsetWidth / 2;
    const eyeMaxMoveY = rect.height / 2 - eye.offsetHeight / 2;

    // Get the position of the cursor relative to the frame center
    const frameCenterX = rect.left + rect.width / 2;
    const frameCenterY = rect.top + rect.height / 2;
    const offsetX = Math.min(
      rect.width / 2,
      Math.max(-rect.width / 2, cursorX - frameCenterX)
    );
    const offsetY = Math.min(
      rect.height / 2,
      Math.max(-rect.height / 2, cursorY - frameCenterY)
    );

    // Scale the movement to the size of the frame
    const moveX = (offsetX / (rect.width / 2)) * eyeMaxMoveX + 20;
    const moveY = (offsetY / (rect.height / 2)) * eyeMaxMoveY + 10;
    let moveXRevised;
    let moveYRevised;
    if (eyeNumber == 1) {
      moveXRevised = Math.max(`${moveY < 11 ? 8 : 11}`, Math.min(moveX, 36));
      moveYRevised = Math.max(1, Math.min(moveY, 18));
    } else {
      moveXRevised = Math.max(
        `${moveY < 11 ? -5 : -5}`,
        Math.min(moveX - 2, `${moveY < 11 ? 26 : 25}`)
      );
      moveYRevised = Math.max(1, Math.min(moveY, `${moveX <= 7 ? 13 : 16}`));
    }

    // Apply the movement
    eye.style.transform = `translate(${moveXRevised}px, ${moveYRevised}px)`;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="flex items-center justify-center"
    >
      <div ref={leftFrameRef} className={styles.frame}>
        <div className={styles.eye}></div>
      </div>
      <div ref={rightFrameRef} className={styles.frame}>
        <div className={styles.eye}></div>
      </div>
    </div>
  );
}
