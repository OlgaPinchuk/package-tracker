// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Link from "./Link";

export default function SocialIcon({ item }) {
  const { name, href } = item;

  return (
    <Link href={href}>
      <FontAwesomeIcon icon={["fab", `${name}`]} size="lg" />
    </Link>
  );
}