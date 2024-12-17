import Link from "next/link";
const Custom404 = () => (
    <div className="container mx-auto py-16 px-4 bg-black text-white text-center">
      <h1 className="text-5xl font-bold mb-8">404 - Page Not Found</h1>
      <p>How did you make it here? This Page went on the Walk and Never Came Back.</p>
      <Link href="/" className="bg-blue-500 py-2 px-6 mt-8 rounded-md hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
  
  export default Custom404;