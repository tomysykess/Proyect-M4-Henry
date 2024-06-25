"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userSession");
    if (token) {
      setIsLoggin(!isLoggin);
    } else {
      router.push("/home");
    }
  }, []);

  return <div className="text-white">hola mundo</div>;
};

export default page;
/* asdasd aasasasasas*/
