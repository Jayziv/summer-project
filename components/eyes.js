import styles from "../styles/eyes.module.css";

export default function Eyes() {
  const handleMouseMove = (event) => {
    const eye1 = document.getElementById("eye1");
    const eye2 = document.getElementById("eye2");
    const bounds = event.currentTarget.getBoundingClientRect();

    const posX = event.clientX - bounds.left;
    const posY = event.clientY - bounds.top;

    eye1.style.left = `${posX - eye1.offsetWidth / 2}px`;
    eye1.style.top = `${posY - eye1.offsetHeight / 2}px`;
    eye2.style.left = `${posX + eye2.offsetWidth / 2}px`;
    eye2.style.top = `${posY - eye2.offsetHeight / 2}px`;
  };

  return (
    <div
      id="circle-container"
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full"
    >
      <div id="eye1" className={styles.eye}></div>
      <div id="eye2" className={styles.eye}></div>
    </div>
  );
}
