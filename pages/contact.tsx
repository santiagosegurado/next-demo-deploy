import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

const ContactPage = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/contact.jsx</code>
        </p>
        <h1>
          Ir al <Link href="/">Home</Link>
        </h1>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="vercelLogo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
