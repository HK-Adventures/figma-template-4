'use client';
import Image from 'next/image';
import Link from "next/link";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      img: "/images/sofa4.jpg",
      author: "Amber William",
      date: "13 September, 2022",
      title: "TOPTrends in 2022",
      description: "There were many Top Trends in 2022 but I have complied some of the TOP Trends.",
      titleColor: "#151875", 
    },
    {
      id: 2,
      img: "/images/sofa5.jpg",
      author: "Surfauxion",
      date: "21 August, 2023",
      title: "Essential Tools",
      description: "There are many Tools ranging from a tool for a screw to cut a Tree, these are the Essential Tools you'll ever need.",
      titleColor: "#FB2E86",
    },
    {
      id: 3,
      img: "/images/sofa6.jpg",
      author: "Saber Ali",
      date: "28 Febuary, 2021",
      title: "Top Houses in the World",
      description: "There are many Famous Houses around the World , I have made a List of Top 10 Houses from around the World.",
      titleColor: "#151875", 
    },
  ];

  return (
    <div className="w-full bg-white py-20">

      <h2 className="text-center text-[#151875] text-3xl font-bold mb-12">Latest Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col items-start">

            <div className="w-full h-[300px] relative rounded-lg shadow-md bg-white p-2">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <div className="flex items-center space-x-2 mt-4">

              <Image src="/images/vector2.png" alt="Pen" width={20} height={20} />
              <span className="text-[#151875] font-medium">{blog.author}</span>

              <Image src="/images/vector1.png" alt="Calendar" width={20} height={20} />
              <span className="text-[#151875] font-medium">{blog.date}</span>
            </div>

            <h3 className="font-bold text-lg mt-4" style={{ color: blog.titleColor }}>
              {blog.title}
            </h3>

            <p className="text-gray-600 mt-2">{blog.description}</p>

            <Link href="/blog">
            <button
              className="underline text-sm font-medium mt-4"
              style={{ color: blog.titleColor }}
            >
              Read More
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;