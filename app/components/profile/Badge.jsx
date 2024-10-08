import Image from "next/image";
export default function Badge({ isAcquired, img, label }) {
  return (
    <li>
      <Image
        src={img}
        alt="Placeholder"
        width={50}
        height={50}
        className={isAcquired ? "" : "grayscale"}
      />
    </li>
  );
}
