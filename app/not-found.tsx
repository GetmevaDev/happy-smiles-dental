import Link from "next/link";

import { ROUTES } from "@/utils/constants";

const NotFound = () => (
  <div>
    <Link href={ROUTES.ROOT}>Go to Home </Link>
  </div>
);

export default NotFound;
